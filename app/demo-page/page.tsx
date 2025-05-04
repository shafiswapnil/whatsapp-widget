import WhatsAppWidget from "@/components/whatsapp-widget"

export default function DemoPage() {
  return (
    <main className="min-h-screen p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">WhatsApp Widget Demo</h1>

      <div className="space-y-8">
        <section>
          <p className="text-gray-600 leading-relaxed">
            This is a demonstration of the WhatsApp Chat Widget. The widget appears as a floating button in the
            bottom-right corner of your website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Features</h2>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center">
              <span className="mr-2 text-green-500">✓</span> Authentic WhatsApp-like interface
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-500">✓</span> Fully responsive design
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-500">✓</span> Customizable appearance and messages
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-500">✓</span> Direct connection to WhatsApp
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Implementation</h2>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <pre className="text-sm text-gray-800 overflow-x-auto"><code>{`<WhatsAppWidget
  phoneNumber="1234567890"
  name="Support Team"
  position="Online | Replies instantly"
  welcomeMessage="Hello! 👋 How can I help you today?"
/>`}</code></pre>
          </div>
        </section>

        <p className="text-sm text-gray-500 mt-8">
          Try it now by clicking the WhatsApp button in the corner!
        </p>
      </div>

      <WhatsAppWidget
        phoneNumber="1234567890" // Replace with your actual WhatsApp number
        name="Support Team"
        position="Online | Replies instantly"
        welcomeMessage="Hello! 👋 How can I help you today?"
      />
    </main>
  )
}
