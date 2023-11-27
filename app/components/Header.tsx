'use client'

import useScroll from "../hooks/use-scroll"

export default function Header() {
  const hasScroll = useScroll()

  return (
    <header className={`h-14 w-full items-center flex justify-between px-4 fixed z-10 ${hasScroll ? `bg-[#002198]` : `bg-zinc-50`}`}>
      <a className={`text-lg font-semibold ${hasScroll ? `text-zinc-50` : `text-[#002198]`}`} href="#">Home</a>
      <nav className="flex items-center h-full space-x-4">
        <a className={`text-lg font-semibold ${hasScroll ? `text-zinc-50` : `text-[#002198]`}`} href="#portfolio">Portfólio</a>
        <a className={`text-lg font-semibold ${hasScroll ? `text-zinc-50` : `text-[#002198]`}`} href={`whatsapp://send?phone=5548999093271&text=Olá Wilson, gostaria de fazer um orçamento`}>Contato</a>
      </nav>
    </header>
  )
}