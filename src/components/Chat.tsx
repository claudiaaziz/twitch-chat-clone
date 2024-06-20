import useFakeMessages from '../hooks/useFakeMessages';
import { MessageModel } from '../utils/models';
import Message from './Message';
import MessageInput from './MessageInput';

const Chat = () => {
    const { messages } = useFakeMessages();
    return (
        <div className="w-full max-w-[550px] px-4 py-3 rounded-lg bg-slate-900 opacity-80">
            <MessageBox messages={messages} />
            <MessageInput />
        </div>
    );
};

const MessageBox = ({ messages }: { messages: MessageModel[] }) => {
    const MessageList = messages.map((message) => (
        <Message message={message} />
    ));

    return <div className="h-[70vh] overflow-auto">{MessageList}</div>;
};

export default Chat;
