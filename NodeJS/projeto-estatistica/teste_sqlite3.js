const axios = require("axios");
const cheerio = require("cheerio");
const sqlite3 = require("sqlite3").verbose();

// Criar ou conectar ao banco
const db = new sqlite3.Database("dados.db");

// Criar tabela
db.serialize(() => {
    db.run(`
    CREATE TABLE IF NOT EXISTS estatisticas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      url TEXT,
      total_links INTEGER,
      data_coleta DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
});

async function coletarDados() {
    try {
        const url = "https://shopee.com.br/";

        const response = await axios.get(url);
        const $ = cheerio.load(response.data);

        const totalLinks = $("a").length;

        console.log("Links encontrados:", totalLinks);

        // Inserir no banco
        db.run(
            `INSERT INTO estatisticas (url, total_links) VALUES (?, ?)`,
            [url, totalLinks],
            function (err) {
                if (err) {
                    console.error("Erro ao salvar:", err.message);
                } else {
                    console.log("Dados salvos com sucesso!");
                }
            }
        );

    } catch (error) {
        console.error("Erro ao acessar site:", error.message);
    }
}

function consultarDados() {
    db.all("SELECT * FROM estatisticas", [], (err, rows) => {
        if (err) {
            throw err;
        }
        console.log("Dados armazenados:");
        console.table(rows);
    });
}

coletarDados();

// Aguarda 2 segundos e consulta
setTimeout(() => {
    consultarDados();
}, 2000);