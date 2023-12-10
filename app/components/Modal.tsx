'use client'

import { X } from "@phosphor-icons/react"

interface ModalProps {
  visible: boolean
  onClose: () => void
  menus: {
    label: string
    value: string
  }[]
}

export function Modal({ visible, onClose, menus }: ModalProps) {

  if (!visible) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50 overscroll-contain">
      <div className="bg-zinc-50 py-4 px-2 rounded w-96 relative">
        <X size={32} onClick={onClose} className="absolute right-2 top-2 cursor-pointer" />
        <div className="flex flex-col items-center justify-center gap-4">
          {menus.map((menu) => (
            <a key={menu.value} href={menu.value} target="_blank" className="bg-zinc-50 p-4 text-center w-[18rem] text-lg font-medium text-blue-900">
              {menu.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}