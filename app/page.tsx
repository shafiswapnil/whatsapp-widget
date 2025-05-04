import WhatsAppWidget from "@/components/whatsapp-widget"

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Your Website Content</h1>
      <p className="mb-4">This is your website content. The WhatsApp widget will appear in the bottom right corner.</p>

      {/* Add the WhatsApp Widget to your page */}
      <WhatsAppWidget
        phoneNumber="1234567890" // Replace with your actual WhatsApp number
        name="Support Team"
        position="Online | Replies instantly"
        welcomeMessage="Hello! 👋 How can I help you today?"
      />
    </main>
  )
}
