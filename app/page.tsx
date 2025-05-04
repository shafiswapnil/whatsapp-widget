import Link from "next/link"
import WhatsAppWidget from "@/components/whatsapp-widget"

export default function Home() {
  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">WhatsApp Chat Widget</h1>
        <p className="text-xl text-gray-600">
          A customizable WhatsApp chat widget for websites that connects visitors directly to your WhatsApp.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="mr-2 text-green-500">✓</span> Authentic WhatsApp-like interface
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-500">✓</span> Fully responsive design
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-500">✓</span> Customizable appearance
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-500">✓</span> Direct connection to WhatsApp
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-500">✓</span> Support for custom messages
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Installation</h2>
          <div className="bg-gray-100 p-3 rounded font-mono text-sm mb-4">npm install whatsapp-chat-widget</div>
          <p className="mb-4">Or simply copy the component to your project:</p>
          <div className="bg-gray-100 p-3 rounded font-mono text-sm">components/whatsapp-widget.tsx</div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Try it out</h2>
        <p className="mb-4">Click the WhatsApp icon in the bottom-right corner to see the widget in action.</p>
        <div className="mt-6">
          <Link
            href="/demo-page"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-medium"
          >
            View Demo Page
          </Link>
        </div>
      </div>

      <WhatsAppWidget
        phoneNumber="1234567890"
        name="Support Team"
        position="Online | Replies instantly"
        welcomeMessage="Hello! 👋 Welcome to the WhatsApp Chat Widget demo. How can I help you today?"
      />
    </main>
  )
}
