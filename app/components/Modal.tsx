'use client'

import { X } from "@phosphor-icons/react"

interface ModalProps {
  visible: boolean
  onClose: () => void
  menus: {
    label: string
    value: string
  }[]
  company: string
}

export function Modal({ visible, onClose, menus, company }: ModalProps) {

  if (!visible) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="sm:w-[18rem] bg-zinc-50 py-4 px-2 rounded w-96 relative">
        <X size={32} onClick={onClose} className="absolute right-2 top-2 cursor-pointer" />
        <div className="flex flex-col items-center justify-center gap-4">
          {menus.map((menu) => (
            <a key={menu.value} href={menu.value} target="_blank"
              className="bg-zinc-50 p-4 text-center w-[18rem] text-lg font-medium rounded-lg text-blue-900 hover:bg-blue-900 hover:text-zinc-50">
              {menu.label}
            </a>
          ))}
          {company === 'Fortequip' && (
            <a href="whatsapp://send?phone=5548999093271&text=Olá Wilson" className="bg-zinc-50 p-4 text-center w-[18rem] text-lg font-medium rounded-lg text-blue-900 hover:bg-blue-900 hover:text-zinc-50">
              Catálogos e ART (Anotação de responsibilidade técnica) somente via Whatsapp com Wilson Bittencourt <br />(48) 9 9909-3271
            </a>
          )}
        </div>
      </div>
    </div>
  )
}