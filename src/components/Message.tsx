import { MessageModel } from '../utils/models';

type MessageProps = {
    message: MessageModel;
} & React.ComponentPropsWithRef<'div'>;

const Message = ({ message: { author, content }, className }: MessageProps) => {
    const Badges = author.badges.map((badge, i) => (
        <img
            key={i}
            src={`/badges/${badge}.png`}
            alt={`${badge} badge`}
            className="w-4 h-4 self-center mr-2"
        />
    ));

    const Author = (
        <span className="font-semibold" style={{ color: author.rgbColor }}>
            {author.username}
        </span>
    );

    return (
        <div
            className={`text-[15px] py-1 px-2 rounded hover:bg-gray-500/30 leading-6 ${className}`}
        >
            <div className="inline-flex items-baseline">
                {Badges}
                {Author}
            </div>
            <span className="ml-3 break-words">{content}</span>
        </div>
    );
};

export default Message;
