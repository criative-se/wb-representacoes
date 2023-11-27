import Image from "next/image";
import { Fragment } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import companies from "../db.json"

export default function Home() {
  return (
    <Fragment>
      <Header />
      <main>
        <section className="h-screen py-20 sm:py-0">
          <div className="w-full md:w-screen lg:w-full">
            {/* <Image src='/logo.png' width={400} height={400} alt='WB Representações' className="mx-auto" /> */}
            <blockquote className="py-6 font-semibold text-center text-[#002198] sm:hidden">
              <span className="text-8xl md:text-6xl lg:text-8xl">WB</span><br />
              <span className="px-4 py-2 before:block before:absolute before:-inset-1 before:bg-red-600 before:rounded-2xl relative inline-block">
                <span className="relative text-white text-4xl md:text-3xl lg:text-4xl">Representações</span>
              </span>
            </blockquote>
            <div className="flex justify-around items-center h-[540px] bg-[#002198] sm:h-[640px] sm:justify-start sm:px-4">
              <div className="space-y-6 md:px-4">
                <h1 className="text-6xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold text-zinc-50">Wilson Bittencourt</h1>
                <h2 className="text-5xl sm:text-3xl md:text-3xl lg:text-5xl font-semibold text-zinc-50 leading-[4rem]">Representante <br />Comercial</h2>
                <h3 className="text-4xl sm:text-3xl md:text-3xl lg:text-4xl font-semibold text-zinc-50">Vendas técnicas de máquinas e equipamentos<br />para o setor de construção civil</h3>
              </div>
              <div className="relative w-[45rem] h-full sm:hidden">
                <Image src='/hero-2.png' alt='Wilson Bittencourt' fill style={{ objectFit: 'cover', objectPosition: 'left' }} />
              </div>
            </div>

            <section className="flex justify-evenly space-x-4 py-4 sm:flex-col sm:space-y-8 sm:items-start sm:space-x-0 sm:px-4">
              <div className="flex flex-col items-center sm:items-start">
                <p className="text-6xl sm:text-5xl font-bold text-[#002198]">+5</p>
                <p className="text-lg sm:text-base font-bold text-[#002198]">Empresas parceiras</p>
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <p className="text-6xl sm:text-5xl font-bold text-[#002198]">+12</p>
                <p className="text-lg sm:text-base font-bold text-[#002198]">Anos de experiência</p>
              </div>
            </section>

          </div>
        </section>

        <section className="mt-8">
          <div id='portfolio' className="container mx-auto">
            <h1 className="text-center font-semibold py-4 text-7xl text-[#002198] sm:text-5xl md:text-5xl lg:text-7xl">Portfólio</h1>
            <div className="grid grid-cols-[1fr_1fr_1fr] gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr]">
              {companies.map((company) => (
                <div key={company.company} className="w-full h-full flex items-center justify-center bg-white rounded-2xl">
                  <div className="h-[300px] w-[300px] relative">
                    <Image src={company.image} alt={company.description || company.company} fill style={{ objectFit: 'contain' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </Fragment>
  )
}
