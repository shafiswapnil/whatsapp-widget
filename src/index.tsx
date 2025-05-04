"use client"

import type React from "react"

import { useState } from "react"
import { Send, X } from "lucide-react"
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
  const [inputText, setInputText] = useState("")

  const handleSendMessage = () => {
    // Format phone number (remove any non-digit characters)
    const formattedPhone = phoneNumber.replace(/\D/g, "")

    // Determine message based on input
    const messageToSend = inputText.trim() ? `I want to know: ${inputText}` : welcomeMessage

    // Create WhatsApp URL with phone number and message
    const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(messageToSend)}`

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank")

    // Clear the input after sending
    setInputText("")
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-[330px] max-w-[calc(100vw-32px)] rounded-lg shadow-lg bg-white overflow-hidden">
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
          <div className="bg-[#e4e1de] p-4 md:h-[250px] h-[200px] flex flex-col">
            <div className="bg-white rounded-lg p-3 max-w-[80%] shadow-sm ml-auto mr-0 mb-auto">
              <p className="text-sm">{welcomeMessage}</p>
              <span className="text-[10px] text-gray-500 flex justify-end mt-1">
                {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </span>
            </div>
          </div>

          {/* Footer */}
          <div className="p-2 sm:p-3 bg-[#f0f0f0] flex items-center gap-2">
            <input
              type="text"
              placeholder={placeholder}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 py-2 px-3 text-sm rounded-full border border-gray-300 focus:outline-none focus:border-[#25d366]"
            />
            <button
              onClick={handleSendMessage}
              className="bg-[#25d366] text-white p-2 rounded-full hover:bg-[#1da851] flex-shrink-0"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#25d366] text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-[#1da851] transition-all"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-6 w-6 fill-white">
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
          </svg>
        )}
      </button>
    </div>
  )
}
