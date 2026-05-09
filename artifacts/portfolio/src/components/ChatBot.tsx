import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, User, ChevronRight } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const aboutData = {
  background: "With a foundation in Architecture and a passion for digital experiences, I've spent the last 5 years bridging the gap between physical spaces and digital interfaces.",
  philosophy: "I believe that good design is invisible—it solves problems quietly and elegantly.",
  approach: "My approach is simple: understand the human, define the constraints, and craft the solution.",
  expertise: "I specialize in enterprise dashboards, brand identity, and conceptualizing spatial flows."
};

const suggestedQuestions = [
  { text: "What is your background?", key: 'background' },
  { text: "What is your design philosophy?", key: 'philosophy' },
  { text: "What do you specialize in?", key: 'expertise' },
  { text: "How do you approach projects?", key: 'approach' }
];

export default function ChatBot({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (open: boolean) => void }) {
  const [askedKeys, setAskedKeys] = useState<string[]>([]);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi there! I'm Karthik. Want to learn a little more about my journey from architecture to digital design?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = (text: string, key?: string) => {
    if (!text.trim()) return;

    // Track asked questions to remove them from suggestions
    if (key) {
      setAskedKeys(prev => [...prev, key]);
    }

    // Add user message
    const userMsg: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');

    // Simulate bot response
    setIsTyping(true);
    setTimeout(() => {
      let botResponse = "";
      
      const lowerText = text.toLowerCase().trim();
      if (lowerText.match(/^(hi|hello|hey|hii|hey there)$/)) {
        botResponse = "Hello! Great to meet you. Feel free to explore the suggestions below, or reach out to me directly on WhatsApp at +91 8971690163.";
      } else if (lowerText.includes('background') || lowerText.includes('architecture')) {
        botResponse = aboutData.background;
      } else if (lowerText.includes('philosophy') || lowerText.includes('believe')) {
        botResponse = aboutData.philosophy;
      } else if (lowerText.includes('approach') || lowerText.includes('how')) {
        botResponse = aboutData.approach;
      } else if (lowerText.includes('specialize') || lowerText.includes('expert')) {
        botResponse = aboutData.expertise;
      } else {
        botResponse = "I'd love to chat more about that! For a detailed conversation or specific project inquiries, please feel free to reach out directly on WhatsApp at +91 8971690163.";
      }

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[200]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[500px] bg-white rounded-[2.5rem] shadow-2xl border border-border overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-6 bg-primary text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center backdrop-blur-sm overflow-hidden p-1">
                  <img src="/favicon.png" alt="Profile" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Karthik</h3>
                  <p className="text-[10px] opacity-80 uppercase tracking-widest">Designer & Architect</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Content */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50/50"
            >
              {messages.map((msg) => (
                <div 
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] p-4 rounded-3xl text-sm ${
                    msg.sender === 'user' 
                      ? 'bg-primary text-white rounded-br-none' 
                      : 'bg-white text-foreground border border-border shadow-sm rounded-bl-none'
                  }`}>
                    {msg.text.includes('+91 8971690163') ? (
                      <>
                        {msg.text.split('+91 8971690163')[0]}
                        <a 
                          href="https://wa.me/918971690163" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary font-bold underline"
                        >
                          +91 8971690163
                        </a>
                        {msg.text.split('+91 8971690163')[1]}
                      </>
                    ) : msg.text}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-border p-4 rounded-3xl rounded-bl-none shadow-sm">
                    <div className="flex gap-1">
                      <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 0.6 }} className="w-1 h-1 bg-primary rounded-full" />
                      <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1 h-1 bg-primary rounded-full" />
                      <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1 h-1 bg-primary rounded-full" />
                    </div>
                  </div>
                </div>
              )}

              {/* Suggestions */}
              {!isTyping && suggestedQuestions.filter(q => !askedKeys.includes(q.key)).length > 0 && (
                <div className="pt-4 space-y-2">
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest px-2 mb-3">Ask me anything:</p>
                  <div className="flex flex-wrap gap-2">
                    {suggestedQuestions
                      .filter(q => !askedKeys.includes(q.key))
                      .map((q) => (
                        <button
                          key={q.key}
                          onClick={() => handleSend(q.text, q.key)}
                          className="text-xs bg-white border border-border hover:border-primary hover:text-primary px-4 py-2 rounded-full transition-all shadow-sm"
                        >
                          {q.text}
                        </button>
                      ))}
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-border flex items-center gap-2">
              <input 
                type="text" 
                placeholder="Type a question..."
                className="flex-1 bg-slate-50 border border-border rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend(inputValue)}
              />
              <button 
                onClick={() => handleSend(inputValue)}
                className="p-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-all disabled:opacity-50"
                disabled={!inputValue.trim()}
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 ${
          isOpen ? 'bg-white text-primary' : 'bg-primary text-white'
        }`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>
    </div>
  );
}
