import React from 'react';

interface WhatsAppWidgetProps {
    phoneNumber: string;
    avatar?: string;
    name?: string;
    position?: string;
    welcomeMessage?: string;
    placeholder?: string;
}
declare function WhatsAppWidget({ phoneNumber, avatar, name, position, welcomeMessage, placeholder, }: WhatsAppWidgetProps): React.JSX.Element;

export { WhatsAppWidget };
