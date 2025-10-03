"use client"

import { useState } from "react"
import { Input, Button, Card, CardHeader, CardBody } from "@heroui/react"

type ProdutosForm = {
    nome: string;
    categoria: string;
    quantidade: number;
    preco: number;
}


export function NovoProdutoPage() {
    const [form, setForm] = useState<ProdutosForm>({
        nome: "",
        categoria: "",
        quantidade: 0,
        preco: 0,
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        setForm((prev) => ({
            ...prev,
            [name]: name === "quantidade" || name === "preco" ? Number(value) : value,
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if(!form.nome || !form.categoria) {
            alert("Preencha todos os campos!")
            return
        }

        alert(`Produto ${form.nome} cadastrado com sucesso`)

        setForm({
            nome: "",
            categoria: "",
            quantidade: 0,
            preco: 0,
        })
    }

    return (
        <div className="flex justify-center items-center">
            <Card className="w-full max-w-lg bg-white shadow-lg">
                <CardHeader>
                    <h1 className="text-xl font-bold">Cadastrar Novo Produto</h1>
                </CardHeader>
                <CardBody>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <Input 
                            isRequired
                            label="Nome do Produto"
                            name="nome"
                            value={form.nome}
                            onChange={handleChange}
                        />

                        <Input 
                            isRequired
                            label="Categoria"
                            name="categoria"
                            value={form.categoria}
                            onChange={handleChange}
                        />

                        <Input 
                            isRequired
                            type="number"
                            label="Quantidade"
                            name="quantidade"
                            value={form.quantidade.toString()}
                            onChange={handleChange}
                        />

                        <Input 
                            isRequired
                            type="number"
                            label="Preço"
                            name="preco"
                            value={form.preco.toString()}
                            onChange={handleChange}
                        />

                        <div className="flex justify-end gap-2 pt-4">
                            <Button type="submit" color="primary">
                                Salvar
                            </Button>
                            <Button type="reset" variant="flat" onClick={() => setForm({ nome: "", categoria: "", quantidade: 0, preco: 0})}>
                                Limpar
                            </Button>
                        </div>
                    </form>
                </CardBody>
            </Card>
        </div>
    )
}