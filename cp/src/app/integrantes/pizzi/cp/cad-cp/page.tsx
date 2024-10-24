"use client";

import { TipoTrabalhos } from "@/types";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CadCpPizzinato() {

    const navigate = useRouter();

    const [trabalho, setTrabalho] = useState<TipoTrabalhos>({
        id:0,
        nome: "",
        descricao: "",
        materia: "",
        nota: 0,
      });

      const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=> {

        e.preventDefault();

        try {
            const response = await fetch("http://localhost:3000/api/felipe-pizzinato/checkpoint",{
                method: "POST",
                headers:{
                  "Content-Type": "application/json",
                  },
                  body: JSON.stringify(trabalho),
              });

            if(response.ok) {
                setTrabalho({id:0,nome:"",descricao:"",materia:"", nota: 0});
                alert("Trabalho cadastrado com sucesso!");
                navigate.push("/integrantes/pizzi/cp");
            } else{
                alert("Erro ao cadastrar produto!");
            }


        } catch (error) {
            console.error("Erro ao cadastrar trabalho: " , error);
        }
      }

    return(
        <div className="container_cadastro">
            <h1>Cadastro de CheckPoint</h1>
                <form onSubmit={handleSubmit} className="container_formulario">
                    <div className="label_input">
                        <label htmlFor="idNome">Nome do Checkpoint:</label>
                        <input type="text" name="nome" id="idNome" className="text-black"  value={trabalho.nome} onChange={(e)=> setTrabalho({...trabalho,nome:e.target.value})} placeholder="Nome do CheckPoint"/>
                    </div>

                    <div className="label_input">
                        <label htmlFor="idDescricao">Descrição do Checkpoint:</label>
                        <input type="text" name="descricao" id="idDescricao" className="text-black" value={trabalho.descricao} onChange={(e)=> setTrabalho({...trabalho,descricao:e.target.value})} placeholder="Descrição do CheckPoint"/>
                    </div>

                    <div className="label_input">
                        <label htmlFor="idMateria">Matéria do CheckPoint:</label>
                        <input type="text" name="materia" id="idMateria" className="text-black" value={trabalho.materia} onChange={(e)=> setTrabalho({...trabalho,materia:e.target.value})} placeholder="Matéria do CheckPoint"/>
                    </div>

                    <div className="label_input">
                        <label htmlFor="idNota">Nota do CheckPoint:</label>
                        <input type="number" name="nota" id="idNota" className="text-black" value={trabalho.nota} onChange={(e)=> setTrabalho({...trabalho,nota: parseInt(e.target.value) })}/>
                    </div>

                    <div>
                        <button type="submit" className="botao_cadastrar">Cadastrar</button>
                    </div>
                </form>
        </div>
    );
}