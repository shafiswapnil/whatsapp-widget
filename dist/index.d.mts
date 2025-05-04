import React from 'react';

interface WhatsAppWidgetProps {
    phoneNumber: string;
    avatar?: string;
    name?: string;
    position?: string;
    welcomeMessage?: string;
    placeholder?: string;
    buttonColor?: string;
    widgetPosition?: 'left' | 'right';
}
declare const WhatsAppWidget: React.FC<WhatsAppWidgetProps>;

export { type WhatsAppWidgetProps, WhatsAppWidget as default };
