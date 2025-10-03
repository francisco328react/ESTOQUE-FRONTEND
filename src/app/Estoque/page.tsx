"use client"

import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button } from "@heroui/react"

type Produto = {
    id: number;
    nome: string;
    categoria: string;
    quantidade: number;
    preco: number;
}

// Lista de Produtos mocados
const produtosMock: Produto[] = [
  { id: 1, nome: "Notebook Dell", categoria: "Eletrônicos", quantidade: 10, preco: 3500 },
  { id: 2, nome: "Mouse Gamer", categoria: "Periféricos", quantidade: 25, preco: 150 },
  { id: 3, nome: "Teclado Mecânico", categoria: "Periféricos", quantidade: 15, preco: 400 },
  { id: 4, nome: "Monitor LG", categoria: "Eletrônicos", quantidade: 8, preco: 1200 },
];

export function EstoquePage() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold">Estoque de Produtos</h1>
            <Table aria-label="Tabela de Produtos em Estoque" className="bg-white shadow-md rounded-lg">
                <TableHeader>
                    <TableColumn>Nome</TableColumn>
                    <TableColumn>Categoria</TableColumn>
                    <TableColumn>Quantidade</TableColumn>
                    <TableColumn>Preço (R$)</TableColumn>
                    <TableColumn>Ações</TableColumn>
                </TableHeader>

                <TableBody>
                    {produtosMock.map((produto) => (
                        <TableRow key={produto.id}>
                            <TableCell>{produto.nome}</TableCell>
                            <TableCell>{produto.categoria}</TableCell>
                            <TableCell>{produto.quantidade}</TableCell>
                            <TableCell>{produto.preco.toFixed(2)}</TableCell>
                            <TableCell className="flex gap-2">
                                <Button size="sm" color="primary" variant="flat">
                                    Editar
                                </Button>
                                <Button size="sm" color="danger" variant="flat">
                                    Excluir
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}