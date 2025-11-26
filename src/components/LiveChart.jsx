import { useEffect, useRef, useState } from 'react';
import { FaPaperPlane, FaTimes, FaComments } from 'react-icons/fa';

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messageEndRef = useRef(null);

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages(prev => [...prev, { text: input, sender: 'user' }]);
    setInput('');

    // Auto reply from "Mhudumu"
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { text: 'Mhudumu atakujibu hivi punde...', sender: 'admin' }
      ]);
    }, 800);
  };

  // Auto scroll
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="fixed bottom-4 right-4 z-50">

      {/* Chat Window */}
      {isOpen && (
        <div
          className="w-72 md:w-80 h-96 bg-orange-50 dark:bg-gray-900 rounded-xl shadow-xl border border-orange-300/50 dark:border-orange-600/50 flex flex-col animate-fadeIn"
        >
          {/* Header */}
          <div className="flex justify-between items-center px-4 py-3 bg-orange-500 dark:bg-orange-600 rounded-t-xl text-white font-semibold">
            <span>Live Chat</span>
            <button
              className="p-1 hover:bg-orange-600 rounded-full transition"
              onClick={() => setIsOpen(false)}
            >
              <FaTimes />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-grow p-3 overflow-y-auto space-y-2">
            {messages.map((msg, idx) => (
              <div key={idx} className="flex flex-col">
                {msg.sender === "admin" && (
                  <span className="text-xs text-orange-600 dark:text-orange-400 mb-1 flex items-center gap-1">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span> Mhudumu
                  </span>
                )}

                <div
                  className={`p-2 rounded-lg max-w-[85%] ${
                    msg.sender === 'user'
                      ? 'ml-auto bg-orange-100 dark:bg-orange-900 text-gray-900 dark:text-white rounded-br-none'
                      : 'bg-orange-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messageEndRef}></div>
          </div>

          {/* Input */}
          <div className="flex p-2 border-t border-orange-300 dark:border-orange-600">
            <input
              type="text"
              className="flex-grow px-3 py-2 rounded-l-lg border border-orange-300 dark:border-orange-600 focus:ring-2 focus:ring-orange-500 focus:outline-none dark:bg-gray-800 dark:text-white"
              placeholder="Andika ujumbe..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-orange-500 dark:bg-orange-600 text-white px-4 rounded-r-lg hover:bg-orange-600 transition"
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}

      {/* Floating Chat Button (When Closed) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-orange-500 dark:bg-orange-600 text-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center hover:bg-orange-600 active:scale-95 transition animate-bounce"
        >
          <FaComments className="text-2xl" />
        </button>
      )}
    </div>
  );
};

export default LiveChat;
