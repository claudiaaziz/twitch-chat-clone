import MessageInput from "./MessageInput";

const Chat = () => {
    return (
        <div className="w-full max-w-[550px] px-4 py-3 rounded-lg bg-slate-900 opacity-80">
            <MessageBox />
            <MessageInput />
        </div>
    );
};

const MessageBox = () => {
    return <div className="h-[70vh] overflow-auto">MessageBox</div>;
};

export default Chat;
