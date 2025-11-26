import { useState } from 'react';
import { FaPaperPlane, FaTimes } from 'react-icons/fa';

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages(prev => [...prev, { text: input, sender: 'user' }]);
    setInput('');

    // Simulate auto-reply from "mhudumu"
    setTimeout(() => {
      setMessages(prev => [...prev, { text: 'Mhudumu atakujibu hivi punde.', sender: 'admin' }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 w-72 md:w-80 z-50">
      {isOpen && (
        <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg flex flex-col h-96 overflow-hidden">
          <div className="flex justify-between items-center p-3 bg-green-500 dark:bg-green-600 text-white">
            <span>Live Chat</span>
            <button onClick={() => setIsOpen(false)}>
              <FaTimes />
            </button>
          </div>
          <div className="flex-grow p-3 overflow-y-auto space-y-2">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`p-2 rounded-md ${msg.sender === 'user' ? 'bg-green-100 dark:bg-green-900 self-end' : 'bg-gray-200 dark:bg-gray-700 self-start'}`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="flex p-2 border-t border-gray-200 dark:border-gray-700">
            <input 
              type="text"
              className="flex-grow px-3 py-2 rounded-l-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Type your message..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
            />
            <button 
              onClick={handleSend}
              className="bg-green-500 dark:bg-green-600 text-white px-4 rounded-r-md hover:bg-green-600 transition"
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}

      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-green-500 dark:bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition"
        >
          Chat
        </button>
      )}
    </div>
  );
};

export default LiveChat;
