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
        <section className="min-h-screen">
          <div className="sm:h-[40rem] sm:justify-start flex justify-around items-center h-[45rem] bg-blue-900 overflow-hidden px-4">
            <div className="sm:w-full sm:gap-0 sm:justify-evenly sm:h-[calc(100%-3.5rem)] w-[45rem] flex flex-col gap-4">
              <Image src='/logo.png' alt="Logotipo WB Representações" width={320} height={320} className="sm:mx-auto"/>
              <h1 className="sm:text-2xl md:text-4xl xl:text-5xl font-semibold text-zinc-50">Wilson Bittencourt</h1>
              <h2 className="sm:text-2xl md:text-3xl xl:text-4xl font-semibold text-zinc-50">Representante Comercial na região sul de Santa Catarina. Especializado em máquinas para construção civil</h2>
              <div className="sm:flex-col sm:gap-2 flex gap-60 items-center ">
                <div className="flex gap-2">
                  <a href="https://www.facebook.com/wilsonbitt" target="_blank">
                    <FacebookLogo size={64} color="rgb(250,250,250)" alt="Facebook de Wilson Bittencourt" />
                  </a>
                  <a href="https://www.instagram.com/wilsonbitt/" target="_blank">
                    <InstagramLogo size={64} color="rgb(250,250,250)" alt='Instagram de Wilson Bittencourt' />
                  </a>
                  <a href="whatsapp://send?phone=5548999093271&text=Olá Wilson, gostaria de fazer um orçamento" target="_blank">
                    <WhatsappLogo size={64} color="rgb(250,250,250)" alt='Whatsapp de Wilson Bittencourt' />
                  </a>
                </div>
              </div>
            </div>
            <div className="sm:hidden md:hidden lg:block relative w-[60rem] h-full mt-4">
              <Image src='/hero.png' alt='Wilson Bittencourt' fill style={{ objectFit: 'cover', objectPosition: 'left' }} />
              <Image src='/selo.png' alt="+12 anos de experiência" width={320} height={320} style={{ position: 'absolute', right: 0, top: 32 }} />
            </div>
          </div>
          <div className="container mx-auto mt-20">
            <div className="flex flex-col items-center justify-center gap-2 px-4">
              <h1 className="sm:text-4xl w-full text-center text-6xl font-medium text-blue-900">Quem somos</h1>
              <hr className="h-2 w-40 bg-blue-900" />
            </div>
          </div>
        </section>

        <section className="container mx-auto">
          <div className="md:mt-20 flex gap-10 flex-col justify-center items-center px-4">
            <div className="sm:flex-col-reverse sm:gap-4 md:gap-4 w-full justify-evenly flex">
              <div className="sm:w-full relative h-60 w-96">
                <Image src='/hero2.png' alt='Wilson Bittencourt' fill className="sm:object-cover border-solid border-2 border-blue-900 rounded-lg rounded-br-[4rem] object-contain" />
              </div>
              <div className="sm:w-full w-96 flex flex-col gap-4">
                <h6 className="text-2xl text-blue-900 font-medium">Somos a WB Representações</h6>
                <p className="font-medium text-blue-900 text-xl">Trabalhamos com produtos de qualidade! Vendas técnicas de máquinas e equipamentos para o setor de construção civil.</p>
              </div>
            </div>

            <div className="sm:flex-col sm:gap-4 md:gap-4 w-full justify-evenly flex">
              <div className="sm:w-full w-96 flex flex-col gap-4">
                <h6 className="text-2xl text-blue-900 font-medium">Representação e consultoria comercial</h6>
                <p className="font-medium text-blue-900 text-xl">Atendemos: lojas de Materiais de construção, construtoras, artefatos de cimento e locadoras de máquinas e equipamentos.</p>
              </div>
              <div className="sm:w-full relative h-60 w-96">
                <Image src='/gallery-2.png' alt='Wilson Bittencourt' fill className="sm:object-cover border-solid border-2 border-blue-900 rounded-lg rounded-br-[4rem] object-contain" />
              </div>
            </div>
          </div>
        </section>

        <section id='portfolio' className="container mx-auto py-10">
          <h1 className="sm:text-4xl text-center w-full font-medium text-6xl text-blue-900 pb-10">Portfólio</h1>
          <div className="sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid grid-cols-3 gap-4">
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
