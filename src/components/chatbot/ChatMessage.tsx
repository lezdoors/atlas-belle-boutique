
interface ChatMessageProps {
  text: string;
  isUser: boolean;
  language: 'fr' | 'en';
}

const ChatMessage = ({ text, isUser }: ChatMessageProps) => {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[80%] p-3 rounded-2xl ${
          isUser
            ? 'copper-gradient text-white'
            : 'bg-pearl-100 text-clay-800'
        }`}
      >
        <p className="text-sm">{text}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
