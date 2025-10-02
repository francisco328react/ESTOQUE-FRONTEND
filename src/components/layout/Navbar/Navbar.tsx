"use client"

import { Navbar as HeroNavBar } from "@heroui/react";

export function Navbar() {
    return (
        <HeroNavBar className="px-6 py-3 bg-white shadow-sm">
            <h1 className="text-xl font-bold text-zinc-700">
                Sistema de Estoque
            </h1>
        </HeroNavBar>
    )
}