import Image from "next/image";
import { Fragment } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import companies from "../db.json"
import { FacebookLogo, InstagramLogo, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { GridItem } from "./components/GridItem";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <main>
        <section className="h-screen sm:py-0 ">
          <div className="w-full md:w-screen lg:w-full my-auto">
            <div className="flex justify-around items-center h-[720px] bg-blue-900 sm:h-[640px] sm:justify-start sm:px-4 overflow-hidden">
              <div className="space-y-10 md:px-4">
                <h1 className="sm:text-3xl md:text-4xl xl:text-7xl font-semibold text-zinc-50">Wilson Bittencourt</h1>
                <h2 className="sm:text-3xl md:text-3xl xl:text-5xl font-semibold text-zinc-50">Representante Comercial</h2>
                <h3 className="sm:text-3xl md:text-3xl xl:text-5xl font-semibold text-zinc-50">Na região sul de Santa Catarina</h3>
                <div className="flex gap-2">
                  <a href="https://www.instagram.com/wilsonbitt/" target="_blank">
                    <FacebookLogo size={64} color="rgb(250,250,250)" alt="Facebook de Wilson Bittencourt" />
                  </a>
                  <a href="https://www.facebook.com/wilsonbitt" target="_blank">
                    <InstagramLogo size={64} color="rgb(250,250,250)" alt='Instagram de Wilson Bittencourt' />
                  </a>
                  <a href="whatsapp://send?phone=5548999093271&text=Olá Wilson, gostaria de fazer um orçamento" target="_blank">
                    <WhatsappLogo size={64} color="rgb(250,250,250)" alt='Whatsapp de Wilson Bittencourt' />
                  </a>
                </div>
              </div>
              <div className="relative w-[60rem] h-full sm:hidden mt-4">
                <Image src='/hero.png' alt='Wilson Bittencourt' fill style={{ objectFit: 'cover', objectPosition: 'left' }} />
              </div>
            </div>
            <div className="container mx-auto mt-10">
              <div className="flex justify-evenly  sm:flex-col sm:space-y-8 sm:items-start sm:space-x-0 sm:px-4">
                <div className="flex flex-col items-center sm:items-start">
                  <p className="text-7xl font-extrabold sm:text-5xl text-[#002198]">+5</p>
                  <p className="text-xl sm:text-base font-extrabold text-[#002198]">Empresas parceiras</p>
                </div>
                <div className="flex flex-col items-center sm:items-start">
                  <p className="text-7xl sm:text-5xl font-extrabold text-[#002198]">+12</p>
                  <p className="text-xl sm:text-base font-extrabold text-[#002198]">Anos de experiência</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto pt-10">
          <div className="flex gap-10 flex-col justify-center items-center px-4">
            <div className="w-full justify-evenly flex sm:flex-col sm:gap-4 md:gap-4">
              <div className="relative h-60 w-96 sm:w-full">
                <Image src='/hero2.png' alt='Wilson Bittencourt' fill className="border-solid border-2 border-blue-900 rounded-lg rounded-br-[64px] object-contain sm:object-cover" />
              </div>
              <div className="w-96 flex flex-col gap-4 sm:w-full">
                <h6 className="text-2xl text-blue-900 font-medium">Somos a WB Representações</h6>
                <p className="font-medium text-blue-900 text-xl">trabalhamos com produtos de qualidade! Vendas técnicas de máquinas e equipamentos para o setor de construção civil.</p>
              </div>
            </div>

            <div className="w-full justify-evenly flex sm:flex-col sm:gap-4 md:gap-4">
              <div className="w-96 flex flex-col gap-4 sm:w-full">
                <h6 className="text-2xl text-blue-900 font-medium">Representação e consultoria comercial</h6>
                <p className="font-medium text-blue-900 text-xl">Atendemos: lojas de Materiais de construção, construtoras, artefatos de cimento e locadoras de máquinas e equipamentos.</p>
              </div>
              <div className="relative h-60 w-96 sm:w-full">
                <Image src='/gallery-2.png' alt='Wilson Bittencourt' fill className="border-solid border-2 border-blue-900 rounded-lg rounded-br-[64px] object-contain sm:object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section id='portfolio' className="container mx-auto pt-10 px-4 pb-12">
          <h1 className="text-center w-full font-medium text-6xl text-blue-900 my-10">Portfólio</h1>
          <div className="grid grid-cols-3 sm:grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {companies.map((company) => (
              <GridItem key={company.name} company={company} />
            ))}
          </div>
        </section>
      </main>

      <div className="fixed right-5 bottom-10 z-50 cursor-pointer">
        <div className="relative w-14 h-14">
          <a target="_blank" href="whatsapp://send?phone=5548999093271&text=Olá Wilson, gostaria de fazer um orçamento`">
            <Image src='/whatsapp-logo.svg' alt='Ícone do WhatsApp' fill />
          </a>
        </div>
      </div>

      <Footer />
    </Fragment>
  )
}
