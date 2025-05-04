# WhatsApp Chat Widget

A lightweight, customizable WhatsApp chat widget for React applications. Add a floating WhatsApp button to your website that opens a chat-like interface and redirects to WhatsApp with pre-filled messages.

## Installation

```bash
npm install whatsapp-chat-widget
# or
yarn add whatsapp-chat-widget
```

## Usage

```jsx
import { WhatsAppWidget } from "whatsapp-chat-widget";

function App() {
  return (
    <WhatsAppWidget
      phoneNumber="1234567890"
      name="Support Team"
      position="Online | Replies instantly"
      welcomeMessage="Hello! 👋 How can I help you today?"
    />
  );
}
```

## Props

| Prop           | Type              | Required | Default                                | Description                            |
| -------------- | ----------------- | -------- | -------------------------------------- | -------------------------------------- |
| phoneNumber    | string            | Yes      | -                                      | WhatsApp number including country code |
| name           | string            | No       | "Customer Support"                     | Name displayed in the widget header    |
| position       | string            | No       | "Typically replies within an hour"     | Status text shown under the name       |
| welcomeMessage | string            | No       | "Hello! 👋 How can we help you today?" | Initial message shown in the chat      |
| placeholder    | string            | No       | "Type a message..."                    | Placeholder text for the input field   |
| buttonColor    | string            | No       | "#25D366"                              | Color of the WhatsApp floating button  |
| widgetPosition | 'left' \| 'right' | No       | "right"                                | Position of the widget on the screen   |
| avatar         | string            | No       | "https://via.placeholder.com/60"       | URL of the avatar image                |

## Features

- 📱 Responsive design
- 🎨 Customizable colors and positioning
- 💬 Pre-filled messages
- ⌨️ Input field for custom messages
- 🔄 Seamless WhatsApp redirection
- 🎯 Minimal bundle size
- 🖼️ Custom avatar support

## License

AGPLv3.0
