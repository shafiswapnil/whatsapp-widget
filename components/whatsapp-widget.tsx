"use client"

import { useState } from "react"
import { MessageCircle, Send, X } from "lucide-react"
import Image from "next/image"

interface WhatsAppWidgetProps {
  phoneNumber: string
  avatar?: string
  name?: string
  position?: string
  welcomeMessage?: string
  placeholder?: string
}

export default function WhatsAppWidget({
  phoneNumber = "1234567890",
  avatar = "/placeholder.svg?height=60&width=60",
  name = "Customer Support",
  position = "Typically replies within an hour",
  welcomeMessage = "Hello! 👋 How can we help you today?",
  placeholder = "Type a message...",
}: WhatsAppWidgetProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleSendMessage = () => {
    // Format phone number (remove any non-digit characters)
    const formattedPhone = phoneNumber.replace(/\D/g, "")

    // Create WhatsApp URL with phone number and pre-filled message
    const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(welcomeMessage)}`

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-[330px] rounded-lg shadow-lg bg-white overflow-hidden">
          {/* Header */}
          <div className="bg-[#075e54] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image src={avatar || "/placeholder.svg"} alt={name} fill className="object-cover" />
              </div>
              <div>
                <h3 className="font-semibold">{name}</h3>
                <p className="text-xs opacity-80">{position}</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:opacity-80">
              <X size={20} />
            </button>
          </div>

          {/* Chat area */}
          <div className="bg-[#e4e1de] p-4 h-[250px] flex flex-col">
            <div className="bg-white rounded-lg p-3 max-w-[80%] shadow-sm ml-auto mr-0 mb-auto">
              <p className="text-sm">{welcomeMessage}</p>
              <span className="text-[10px] text-gray-500 flex justify-end mt-1">
                {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </span>
            </div>
          </div>

          {/* Footer */}
          <div className="p-3 bg-[#f0f0f0] flex items-center gap-2">
            <input
              type="text"
              placeholder={placeholder}
              className="flex-1 py-2 px-3 rounded-full text-sm border border-gray-300 focus:outline-none focus:border-[#25d366]"
            />
            <button onClick={handleSendMessage} className="bg-[#25d366] text-white p-2 rounded-full hover:bg-[#1da851]">
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#25d366] text-white p-4 rounded-full shadow-lg hover:bg-[#1da851] transition-all"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  )
}
