import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import { TipoTrabalhos } from "@/types";


// Métodos GET

export async function GET() {
    try {
        const file = await fs.readFile(process.cwd() + '/src/data/felipe-pizzinato.json', 'utf-8');
        const trabalhos = JSON.parse(file);

        return NextResponse.json(trabalhos);

    } catch (error) {
        return NextResponse.json({ error: "Erro ao recuperar os dados!: " + error });
    }
}


// Método POST challenge FELIPE pizzinato
export async function POST(request: Request) {
    try {
        const file = await fs.readFile(process.cwd() + '/src/data/felipe-pizzinato.json', 'utf-8');
        const trabalhos = JSON.parse(file);

        const trabalho: TipoTrabalhos = await request.json();

        // Verifica se o campo challenge existe
        if (!Array.isArray(trabalhos.challenge)) {
            return NextResponse.json({ error: "A lista de challenge não foi encontrada." }, { status: 404 });
        }

        // Incrementa o id
        trabalho.id = (trabalhos.challenge[trabalhos.challenge.length - 1].id + 1);

        // Adiciona o novo trabalho à lista de challenge
        trabalhos.challenge.push(trabalho);

        // Converte a lista de volta para string
        const fileUpdate = JSON.stringify(trabalhos, null, 2); // Adiciona formatação para melhor legibilidade
        await fs.writeFile(process.cwd() + '/src/data/felipe-pizzinato.json', fileUpdate);

        return NextResponse.json(trabalho);

    } catch (error) {
        return NextResponse.json({ error: "Erro ao cadastrar Trabalho!: " + error });
    }
}
