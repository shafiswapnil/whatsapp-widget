import WhatsAppWidget from "@/components/whatsapp-widget"

export default function DemoPage() {
  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">WhatsApp Widget Demo</h1>

      <div className="prose">
        <p className="mb-4">
          This is a demonstration of the WhatsApp Chat Widget. The widget appears as a floating button in the
          bottom-right corner of your website. Click on it to open the chat interface.
        </p>

        <h2>Features</h2>
        <ul>
          <li>Authentic WhatsApp-like interface</li>
          <li>Fully responsive design</li>
          <li>Customizable appearance and messages</li>
          <li>Direct connection to WhatsApp</li>
        </ul>

        <h2>How to Use</h2>
        <p>
          Simply click on the WhatsApp icon in the bottom-right corner. You can type a message or click send with an
          empty field to start a conversation.
        </p>

        <div className="bg-gray-100 p-4 rounded-lg my-6">
          <p className="font-mono text-sm">
            {`<WhatsAppWidget
  phoneNumber="1234567890"
  name="Support Team"
  position="Online | Replies instantly"
  welcomeMessage="Hello! 👋 How can I help you today?"
/>`}
          </p>
        </div>

        <p>Try it now by clicking the WhatsApp button in the corner!</p>
      </div>

      {/* Add the WhatsApp Widget */}
      <WhatsAppWidget
        phoneNumber="1234567890" // Replace with your actual WhatsApp number
        name="Support Team"
        position="Online | Replies instantly"
        welcomeMessage="Hello! 👋 How can I help you today?"
      />
    </main>
  )
}
