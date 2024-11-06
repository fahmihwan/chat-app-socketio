import moment from 'moment';
export const ChatBubleLeft = () => {
    return (
        <div className="chat chat-start mb-5">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img
                        alt="Tailwind CSS chat bubble component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    />
                </div>
            </div>
            <div className="chat-header">
                Obi-Wan Kenobi
                <time className="text-xs opacity-50">12:45</time>
            </div>
            <div className="chat-bubble">You were the Chosen One!</div>
            <div className="chat-footer opacity-50">Delivered</div>
        </div>
    );
};

export const ChatBubleRight = ({ content, createdAt }) => {
    // contoh format "Mon, 30 Sep  2024"
    return (
        <div className="chat chat-end">
            <div className="chat-image avatar">
                <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    <svg
                        className="absolute w-12 h-12 text-gray-400 -left-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                {/* <div className="w-10 rounded-full">
                    <img
                        alt="Tailwind CSS chat bubble component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    />
                </div> */}
            </div>
            <div className="chat-header">
                {/* Anakin */}
                {/* <time className="text-xs opacity-50">12:46</time> */}
            </div>
            <div className="chat-bubble">
                {content}
            </div>
            <div className="chat-footer opacity-50">Seen at {moment(createdAt).format('ddd, DD MMM YYYY')}</div>
        </div>
    );
};
