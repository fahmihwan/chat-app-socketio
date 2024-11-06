import moment from 'moment';

export const ChatBuble = ({ content, createdAt, isRight }) => {
    // contoh format "Mon, 30 Sep  2024"
    return (
        <div className={`chat ${isRight ? 'chat-end' : 'chat-start'}`}>
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

            </div>
            <div className="chat-header">
            </div>
            <div className={`chat-bubble ${isRight ? 'chat-bubble-info' : 'chat-bubble-light'}`}>
                {content}
            </div>
            <div className="chat-footer opacity-50">Seen at {moment(createdAt).format('ddd, DD MMM YYYY')}</div>
        </div>
    );
};
