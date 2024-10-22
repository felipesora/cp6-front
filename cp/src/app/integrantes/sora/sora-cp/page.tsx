"use client";
import { TipoTrabalhos } from "@/types";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from 'next/link';

import iconeCheck from "@/Images/icone-check.png";
import iconeEditar from "@/Images/icone-editar.png";
import iconeApagar from "@/Images/icone-apagar.png";
import iconeAdicionar from "@/Images/icone-adicionar.png";

export default function Sora() {

    const [lista, setLista] = useState<TipoTrabalhos[]>([]);

    useEffect(() => {
        const chamadaApi = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/felipe-sora");
                const data = await response.json();
                console.log(data);

                // Filtrando apenas os dados de 'checkpoints'
                if (data && data.checkpoints) {
                    setLista(data.checkpoints);
                } else {
                    console.error("Dados de checkpoints não encontrados.");
                }
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        };
        chamadaApi();
    }, []);


    return (
        <div className="container_trabalhos">
            <h1>CheckPoints - Felipe Sora</h1>
            {Array.isArray(lista) && lista.map((trabalho) => (
                <div key={trabalho.id} className="caixa_trabalhos">
                    <Image src={iconeCheck} alt="Icone de Check" className="icone_check"/>
                    <div>
                        <p className="texto_caixa">Nome do Projeto: {trabalho.nome}</p>
                        <p className="texto_caixa">Descrição: {trabalho.descricao}</p>
                        <p className="texto_caixa">Matéria: {trabalho.materia}</p>
                        <div className="texto_icones_caixa">
                            <p className="texto_caixa">Nota: {trabalho.nota}</p>
                            <div>
                                <button className="botoes_trabalhos"><Image src={iconeEditar} alt="Icone de Editar" className="icones"/></button>
                                <button className="botoes_trabalhos"><Image src={iconeApagar} alt="Icone de Apagar" className="icones"/></button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <div className="caixa_adicionar">
                <Link href="/integrantes/sora/sora-cp/cad-cp-sora" className="links_adiconar"><Image src={iconeAdicionar} alt="Icone de Adicionar" className="icone_adicionar"/></Link>
            </div>
        </div>
    );
}
