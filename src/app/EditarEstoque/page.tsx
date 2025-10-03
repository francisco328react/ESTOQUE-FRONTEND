"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Input, Button, Card, CardHeader, CardBody } from "@heroui/react";

type Produto = {
  id: number;
  nome: string;
  categoria: string;
  quantidade: number;
  preco: number;
};

const produtosMock: Produto[] = [
  { id: 1, nome: "Notebook Dell", categoria: "Eletrônicos", quantidade: 10, preco: 3500 },
  { id: 2, nome: "Mouse Gamer", categoria: "Periféricos", quantidade: 25, preco: 150 },
  { id: 3, nome: "Teclado Mecânico", categoria: "Periféricos", quantidade: 15, preco: 400 },
  { id: 4, nome: "Monitor LG", categoria: "Eletrônicos", quantidade: 8, preco: 1200 },
];

export default function EditarProdutoPage() {
  const params = useParams();
  const id = Number(params?.id);

  const [produto, setProduto] = useState<Produto | null>(null);

  useEffect(() => {
    const encontrado = produtosMock.find((p) => p.id === id);
    if (encontrado) setProduto(encontrado);
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!produto) return;
    const { name, value } = e.target;

    setProduto((prev) =>
      prev
        ? {
            ...prev,
            [name]: name === "quantidade" || name === "preco" ? Number(value) : value,
          }
        : null
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!produto) return;

    console.log("Produto atualizado:", produto);
    alert(`✅ Produto "${produto.nome}" atualizado com sucesso!`);
  };

  if (!produto) {
    return <p className="text-center text-gray-600">Produto não encontrado ❌</p>;
  }

  return (
    <div className="flex justify-center items-center">
      <Card className="w-full max-w-lg bg-white shadow-lg">
        <CardHeader>
          <h1 className="text-xl font-bold">Editar Produto</h1>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              isRequired
              label="Nome do Produto"
              name="nome"
              value={produto.nome}
              onChange={handleChange}
            />

            <Input
              isRequired
              label="Categoria"
              name="categoria"
              value={produto.categoria}
              onChange={handleChange}
            />

            <Input
              type="number"
              label="Quantidade"
              name="quantidade"
              value={produto.quantidade.toString()}
              onChange={handleChange}
            />

            <Input
              type="number"
              label="Preço (R$)"
              name="preco"
              value={produto.preco.toString()}
              onChange={handleChange}
            />

            <div className="flex justify-end gap-2 pt-4">
              <Button type="submit" color="primary">
                Salvar Alterações
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
