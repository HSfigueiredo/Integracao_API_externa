const express = require('express');
const instanciaAxios = require('./axios');
require('dotenv').config();
const fs = require('fs/promises')

const rotas = express.Router();


rotas.get('/empresas', async (req, res) => {
    const { dominioEmpresa } = req.query;

    try {
        const { data: empresa } = await instanciaAxios.get(`/?domain=${dominioEmpresa}`);

        if (empresa && empresa.name) {
            const dadosEmpresas = JSON.parse(await fs.readFile('./src/empresas.json'));

            dadosEmpresas.push(empresa);

            await fs.writeFile('./src/empresas.json', JSON.stringify(dadosEmpresas), null, 2);

            return res.json(empresa);
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensagem: 'erro Interno' })
    }
});


module.exports = rotas;