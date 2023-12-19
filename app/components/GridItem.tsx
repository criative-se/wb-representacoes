"use client"

import Image from "next/image"
import { Fragment, useState } from "react"
import { Modal } from "./Modal"

interface GridItemProps {
  company: {
    name: string
    description: string
    heroImage: string
    contentImage: string
    menus: {
      label: string
      value: string
    }[]
  }
}

export function GridItem({ company }: GridItemProps) {
  const [showModal, setShowModal] = useState(false)

  const handleToggleShowModal = () => {
    setShowModal((prevState) => !prevState)
  }

  return (
    <Fragment>
      <div className="h-96 flex flex-col items-center justify-between px-4">
        <div className="sm:w-full bg-white rounded-md px-6 h-full flex flex-col items-center justify-around">
          <div className="w-full h-20 relative">
            <Image src={company.heroImage} alt={company.name} fill style={{ objectFit: 'contain' }} />
          </div>
          <p className="sm:w-[18rem] text-blue-900 text-xl font-medium text-center w-[18.5rem]">{company.description}</p>
          <div className="w-full h-20 relative">
            <Image src={company.contentImage} alt={company.name} fill style={{ objectFit: 'contain' }} />
          </div>
          <button onClick={handleToggleShowModal} className="w-full text-xl p-4 rounded-md text-zinc-50 bg-green-400 hover:bg-green-500 transition-colors duration-300">
            Acessar
          </button>
        </div>
      </div>

      <Modal
        onClose={handleToggleShowModal}
        visible={showModal}
        menus={company.menus}
        company={company.name}
      />
    </Fragment>
  )
}
