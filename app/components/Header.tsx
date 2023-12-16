export default function Header() {
  return (
    <header className="sm:px-4 h-14 w-full items-center flex justify-between px-16 fixed z-10 bg-blue-900">
      <a className={`text-lg font-semibold text-zinc-50`} href="#">Home</a>
      <nav className="flex items-center h-full space-x-4">
        <a className={`text-lg font-semibold text-zinc-50 `} href="#portfolio">Portfólio</a>
        <a className={`text-lg font-semibold text-zinc-50`} href={`whatsapp://send?phone=5548999093271&text=Olá Wilson, gostaria de fazer um orçamento`}>Contato</a>
      </nav>
    </header>
  )
}