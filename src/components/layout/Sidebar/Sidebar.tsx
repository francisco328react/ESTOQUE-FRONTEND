"use client"

import Link from "next/link"

export function Sidebar() {
    return (
        <aside className="w-64 bg-white shadow-md h-screen p-6 flex flex-col">
            <h2 className="text-lg font-semibold mb-6 text-blue-600">
                Menu
            </h2>
            <nav className="flex flex-col gap-4">
                <Link href="/" className="text-blue-600 font-bold hover:text-blue-700 cursor-pointer">
                    Dashboard
                </Link>
                <Link href="/estoque" className="text-blue-600 font-bold hover:text-blue-700 cursor-pointer">
                    Estoque
                </Link>
                <Link href="/estoque/novo" className="text-blue-600 font-bold hover:text-blue-700 cursor-pointer">
                    Novo Produto
                </Link>
            </nav>
        </aside>
    )
}