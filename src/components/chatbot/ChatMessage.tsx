
interface ChatMessageProps {
  text: string;
  isUser: boolean;
  language: 'fr' | 'en';
}

const ChatMessage = ({ text, isUser }: ChatMessageProps) => {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[85%] p-2 md:p-3 rounded-xl md:rounded-2xl text-sm md:text-base ${
          isUser
            ? 'copper-gradient text-white'
            : 'bg-pearl-100 text-clay-800'
        }`}
      >
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
