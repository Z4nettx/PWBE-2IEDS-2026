const cheerio = require('cheerio');
const axios = require('axios');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('capturenews.db');

async function captureNews() {
    try {
        const url = 'https://g1.globo.com';
        const resp = await axios.get(url);
        const html = resp.data;
        const searchDom = cheerio.load(html);

        const totalNews = searchDom('.feed-post');

        db.serialize(() => {
            db.run(`CREATE TABLE IF NOT EXISTS news (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT,
                url TEXT UNIQUE, 
                access_date TEXT
            )`);
        });

        totalNews.each((i, notice) => {
            let noticeElement = searchDom(notice);

            let linkElement = noticeElement.find('.feed-post-link');
            let titleNotice = linkElement.text().trim();
            let relativeUrlNotice = linkElement.attr('href');

            if (titleNotice && relativeUrlNotice) {
                let urlNotice = new URL(relativeUrlNotice, url).href;
                let accessDate = new Date().toISOString();

                db.run(`
                    INSERT OR IGNORE INTO news (title, url, access_date) 
                    VALUES (?, ?, ?)`,
                    [titleNotice, urlNotice, accessDate],
                    (err) => {
                        if (err && err.code !== 'SQLITE_CONSTRAINT') {
                            console.error("Erro na inserção:", err.message);
                        }
                    }
                );
            }
        });

        setTimeout(() => {
            db.all('SELECT id, title, access_date FROM news ORDER BY id DESC LIMIT 10', [], (err, rows) => {
                if (!err) {
                    console.log('\n--- Notícias Armazenadas (Sucesso!) ---');
                    console.table(rows);
                }
                db.close();
            });
        }, 2000);

    } catch (e) {
        console.error(`Erro ao acessar o site: ${e.message}`);
    }
}

captureNews();