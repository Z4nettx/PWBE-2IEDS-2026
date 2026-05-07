// importando as bibliotecas
const axios = require("axios");
const cheerio = require("cheerio");

async function analisarSite() {
    try {
        const url = "http://google.com.br";

        const response = await axios.get(url);

        const html = response.data;

        const $ = cheerio.load(html);

        const totalLinks = $("a").length;

        console.log("Total de links encontrados: ", totalLinks);
    } catch (e) {
        console.error("Erro ao acessar o site: ", e.message);
    }
}
analisarSite();