const request = require("supertest");
const express = require("express");
const cepRoutes = require("./cep");
const axios = require("axios");

jest.mock("axios");

const app = express();
app.use(express.json());
app.use("/cep", cepRoutes);

describe("CEP Routes", () => {
    it("should return 200 and address data for a valid CEP", async () => {
        axios.get.mockResolvedValue({
            data: {
                cep: "01001-000",
                logradouro: "Praça da Sé",
                complemento: "lado ímpar",
                bairro: "Sé",
                localidade: "São Paulo",
                uf: "SP",
                ibge: "3550308",
                gia: "1004",
                ddd: "11",
                siafi: "6117",
            },
        });

        const response = await request(app).get("/cep/01001-000");
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
            cep: "01001-000",
            logradouro: "Praça da Sé",
            complemento: "lado ímpar",
            bairro: "Sé",
            localidade: "São Paulo",
            uf: "SP",
            ibge: "3550308",
            gia: "1004",
            ddd: "11",
            siafi: "6117",
        });
    });

    it('should return 404 with "CEP não encontrado" for an invalid CEP', async () => {
        axios.get.mockResolvedValue({ data: { erro: true } });

        const response = await request(app).get("/cep/99999-999");
        expect(response.statusCode).toBe(404);
        expect(response.body).toEqual({ error: "CEP não encontrado" });
    });

    it('should return 500 with "Erro ao buscar o CEP" for an internal error', async () => {
        axios.get.mockRejectedValue(new Error("Erro na API"));

        const response = await request(app).get("/cep/00000-000");
        expect(response.statusCode).toBe(500);
        expect(response.body).toEqual({ error: "Erro ao buscar o CEP" });
    });
});
