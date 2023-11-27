export default function Footer() {
  return (
    <footer className="h-14 pt-24">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <p className="text-lg text-[#002198] sm:text-sm sm:px-4">© {new Date().getFullYear()} Critive-se. Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  )
}