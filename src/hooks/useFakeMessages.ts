import { useState } from 'react';
import { MessageModel } from '../utils/models';
import { generateFakeMessage } from '../utils/helpers';

const WelcomeMessage: MessageModel = {
    id: 'welcome-message',
    author: {
        rgbColor: 'darkorchid',
        badges: ['moderator'],
        username: 'ChatBot',
    },
    content: 'Welcome to Twitch Chat Clone!',
};

// generate 5 fake msgs
const FakeMessages: MessageModel[] = Array(5)
    .fill(null)
    .map(() => generateFakeMessage());

export default function useFakeMessages() {
    const [messages, setMessages] = useState<MessageModel[]>([
        WelcomeMessage,
        ...FakeMessages,
    ]);

    return {
        messages,
    };
}
