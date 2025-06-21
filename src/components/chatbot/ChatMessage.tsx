
interface ChatMessageProps {
  text: string;
  isUser: boolean;
  language: 'fr' | 'en';
  image?: string;
}

const ChatMessage = ({ text, isUser, image }: ChatMessageProps) => {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[85%] p-2 md:p-3 rounded-xl md:rounded-2xl text-sm md:text-base ${
          isUser
            ? 'copper-gradient text-white'
            : 'bg-pearl-100 text-clay-800'
        }`}
      >
        {image && !isUser && (
          <div className="mb-2">
            <img 
              src={image} 
              alt="Product visual" 
              className="w-full max-w-[200px] h-auto rounded-lg shadow-sm"
              loading="lazy"
            />
          </div>
        )}
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
