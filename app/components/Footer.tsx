import { InstagramLogo, Phone, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { Fragment } from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-900 py-10 px-4">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-1 sm:gap-12 grid-cols-[3fr_2fr_1fr]">
          <div className="flex flex-col">
            <div className="sm:w-full sm:ml-0 w-96 h-20 relative mb-5 -ml-4">
              <Image src='/test.png' alt='logo' fill style={{ objectFit: 'cover' }} />
            </div>
            <p className="max-w-[17rem] text-zinc-50 font-medium">Desenvolvendo soluções digitais | Marketing Digital</p>
            <div className="flex items-center gap-2 mt-5">
              <Phone size={24} color="rgb(250,250,250)" />
              <a href="whatsapp://send?phone=5548999093271&text=Olá Wilson, gostaria de fazer um orçamento" target="_blank" className="text-zinc-50 hover:text-blue-600 transition-colors duration-300">
                +55 (48) 99196-5786
              </a>
            </div>
            <hr className="bg-zinc-50 w-20 mt-5" />
            <div className="flex gap-2 mt-5">
              <a href="https://www.instagram.com/criativeseagencia/" target="_blank">
                <InstagramLogo size={28} color="rgb(250,250,250)" alt="Instagram de Criative-se" />
              </a>
              <a href="whatsapp://send?phone=5548991965786&text=Olá, gostaria de fazer um orçamento" target="_blank">
                <WhatsappLogo size={28} color="rgb(250,250,250)" alt="Whatsapp de Criative-se" />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-zinc-50 font-medium">Canais de atendimento</p>
            <p className="text-zinc-50 font-medium">(Informações, dúvidas)</p>
            <div className="flex items-center gap-2">
              <Phone size={24} color="rgb(250,250,250)" />
              <a href="whatsapp://send?phone=5548999093271&text=Olá Wilson, gostaria de fazer um orçamento" target="_blank" className="text-zinc-50 hover:text-blue-600 transition-colors duration-300">
                +55 (48) 998038-4747
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-zinc-50 font-medium">Menu rápido</p>
            <a href="#portfolio" className="text-zinc-50 font-medium hover:text-blue-600 transition-colors duration-300">Portfólio</a>
            <a href="#" className="text-zinc-50 font-medium hover:text-blue-600 transition-colors duration-300">Home</a>
          </div>
        </div>
      </div>
    </footer>
  )
}