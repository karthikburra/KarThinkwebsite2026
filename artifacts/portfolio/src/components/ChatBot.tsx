import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, User, ChevronRight, RotateCcw } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const qaData = [
  {
    key: 'different',
    keywords: ['different', 'other designers', 'stand out'],
    question: "What makes you different from other designers?",
    answer: "I combine systems thinking, UX strategy, AI-assisted workflows, and execution capability.\n\nMy background in architecture shaped how I think about scale, structure, and human behavior, while my product design experience helped me simplify complex systems into usable digital experiences.\n\nI also actively build and ship products instead of stopping at screens or prototypes."
  },
  {
    key: 'dr_reddys',
    keywords: ['dr. reddy', 'dr reddy', 'role at'],
    question: "What was your role at Dr. Reddy’s?",
    answer: "I worked as a Digital Design Specialist in the Digital Design CoE team at Dr. Reddy’s Laboratories.\n\nI worked across 7+ business units on enterprise platforms, workflow systems, internal tools, dashboards, AI-assisted workflows, and scalable design systems.\n\nMy work focused heavily on simplifying complexity and improving usability for cross-functional teams."
  },
  {
    key: 'products',
    keywords: ['products have you worked', 'worked on', 'portfolio'],
    question: "What kind of products have you worked on?",
    answer: "I’ve worked on:\n- SaaS products,\n- enterprise workflow platforms,\n- market intelligence tools,\n- risk prediction systems,\n- design systems,\n- dashboards,\n- AI-assisted workflows,\n- internal enterprise tools,\n- and customer-facing applications.\n\nWeYou (Google Play Store):\nA live, production-ready laundry service app that I designed, shipped, and deployed using advanced AI-assisted development workflows."
  },
  {
    key: 'ai_workflow',
    keywords: ['ai in your workflow', 'use ai', 'workflow'],
    question: "How do you use AI in your workflow?",
    answer: "I use AI as both a thinking partner and execution accelerator.\n\nMy workflow combines Figma, Cursor, Claude, Replit, and AI-assisted prototyping to move quickly from ideas to functional MVPs.\n\nThis helps reduce friction between design and engineering while accelerating iteration cycles."
  },
  {
    key: 'build',
    keywords: ['build products', 'actually build', 'code', 'develop'],
    question: "Can you actually build products?",
    answer: "Yes.\n\nI’ve designed, developed, and deployed production-ready applications using AI-assisted workflows and modern frontend tools.\n\nI’m comfortable moving between UX thinking, prototyping, implementation, and deployment."
  },
  {
    key: 'architecture',
    keywords: ['architecture', 'move from', 'transition'],
    question: "Why did you move from architecture to product design?",
    answer: "Architecture taught me systems thinking and human-centered problem solving.\n\nBut product design gave me a faster feedback loop and the ability to create scalable digital experiences used by thousands of users.\n\nThe transition felt natural because both disciplines are fundamentally about designing experiences for people."
  },
  {
    key: 'ux_engineer',
    keywords: ['ux engineer'],
    question: "What is a UX Engineer to you?",
    answer: "To me, a UX Engineer bridges design thinking and technical execution.\n\nIt’s about understanding user experience deeply while also being able to prototype, build, test, and ship products.\n\nThat’s the direction I’m gradually moving toward by combining UX strategy, AI workflows, frontend implementation, and deployment capabilities."
  },
  {
    key: 'superpower',
    keywords: ['superpower', 'strength'],
    question: "What is your superpower?",
    answer: "Turning ambiguity into structured, usable systems while moving fast.\n\nI enjoy simplifying complexity and connecting strategy, workflows, design, and execution together."
  },
  {
    key: 'speed',
    keywords: ['how fast', 'idea to mvp', 'speed', 'fast'],
    question: "How fast can you go from idea to MVP?",
    answer: "Depending on complexity, I can move from concept to prototype or deployable MVP within hours or days using AI-assisted workflows and rapid iteration methods."
  },
  {
    key: 'hire',
    keywords: ['hire you', 'why should a company', 'hire'],
    question: "Why should a company hire you?",
    answer: "Because I bring a combination of:\n- systems thinking,\n- UX strategy,\n- AI-assisted execution,\n- product thinking,\n- and shipping capability.\n\nI can contribute beyond visuals and help teams move faster with clarity, usability, and execution ownership."
  }
];

const introMessage = "Hi there,\nI’m Karthik Burra, Product Designer\nI don’t just design products-I ship them.\n\nI take complex, chaotic ideas and turn them into scalable, intuitive digital products. With a background rooted in architectural design, systems thinking is second nature to me.\n\nI recently put this to work at Dr. Reddy’s Laboratories, designing enterprise products and workflows across multiple business units. By combining UX strategy with AI-assisted workflows and rapid deployment, I build digital systems that don't just look good, but drive real operational impact.";

export default function ChatBot({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (open: boolean) => void }) {
  const [askedKeys, setAskedKeys] = useState<string[]>([]);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: introMessage,
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [suggestedPool, setSuggestedPool] = useState<typeof qaData>([]);
  const [hasScrolled, setHasScrolled] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Shuffle suggestions on mount
    setSuggestedPool([...qaData].sort(() => 0.5 - Math.random()));
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      if (messages.length > 1 || isTyping) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }

      // If the content is short and doesn't require scrolling, show suggestions immediately
      setTimeout(() => {
        if (scrollRef.current && scrollRef.current.scrollHeight <= scrollRef.current.clientHeight + 20) {
          setHasScrolled(true);
        }
      }, 100);
    }
  }, [messages, isTyping, isOpen]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (!hasScrolled && e.currentTarget.scrollTop > 20) {
      setHasScrolled(true);
    }
  };

  const handleReset = () => {
    setAskedKeys([]);
    setMessages([
      {
        id: Date.now().toString(),
        text: introMessage,
        sender: 'bot',
        timestamp: new Date()
      }
    ]);
    setSuggestedPool([...qaData].sort(() => 0.5 - Math.random()));
    setInputValue('');
    setHasScrolled(false);
  };

  const handleSend = (text: string, key?: string) => {
    if (!text.trim()) return;
    setHasScrolled(true);

    if (key) {
      setAskedKeys(prev => [...prev, key]);
    } else {
      // If user typed it manually, check if it matches a key
      const lowerText = text.toLowerCase().trim();
      const matched = qaData.find(q => q.keywords.some(k => lowerText.includes(k)) || lowerText === q.question.toLowerCase());
      if (matched && !askedKeys.includes(matched.key)) {
        setAskedKeys(prev => [...prev, matched.key]);
      }
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
      
      // Check for exact key match (from button click)
      const matchedByKey = key ? qaData.find(q => q.key === key) : null;
      
      // Check for keyword match
      const matchedByKeyword = !matchedByKey ? qaData.find(q => 
        q.keywords.some(k => lowerText.includes(k)) || 
        lowerText === q.question.toLowerCase()
      ) : null;

      const match = matchedByKey || matchedByKeyword;

      if (match) {
        botResponse = match.answer;
      } else if (lowerText.match(/^(hi|hello|hey|hii|hey there)$/)) {
        botResponse = "Hello! Great to meet you. Feel free to explore the suggestions below, or reach out to me directly on WhatsApp at +91 8971690163.";
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

  const availableSuggestions = suggestedPool
    .filter(q => !askedKeys.includes(q.key))
    .slice(0, 3); // Show 3 at a time

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[200]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 right-0 w-[calc(100vw-2rem)] sm:w-[440px] md:w-[540px] h-[75vh] md:h-[750px] max-h-[85vh] bg-white rounded-[2.5rem] shadow-2xl border border-border overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-6 bg-primary text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center backdrop-blur-sm overflow-hidden p-1">
                  <img src="/favicon.png" alt="Profile" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Karthik</h3>
                  <p className="text-[10px] opacity-80 uppercase tracking-widest">Product Designer</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button 
                  onClick={handleReset}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                  title="Reset Chat"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Chat Content */}
            <div 
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50/50"
            >
              {messages.map((msg) => (
                <div 
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-4 rounded-3xl text-sm whitespace-pre-wrap ${
                    msg.sender === 'user' 
                      ? 'bg-primary text-white rounded-br-none' 
                      : 'bg-white text-foreground border border-border shadow-sm rounded-bl-none leading-relaxed'
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
              <AnimatePresence>
                {hasScrolled && !isTyping && availableSuggestions.length > 0 && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="sticky bottom-0 -mx-6 -mb-6 z-10"
                  >
                    <div className="h-8 bg-gradient-to-t from-slate-50/95 to-transparent pointer-events-none"></div>
                    <div className="px-6 pb-6 bg-slate-50/95 backdrop-blur-md">
                      <p className="text-[10px] text-muted-foreground uppercase tracking-widest px-2 mb-3">Ask me anything:</p>
                      <div className="flex flex-col gap-2">
                        {availableSuggestions.map((q) => (
                          <button
                            key={q.key}
                            onClick={() => handleSend(q.question, q.key)}
                            className="text-xs text-left bg-white border border-border hover:border-primary hover:text-primary px-4 py-3 rounded-2xl transition-all shadow-sm w-full leading-relaxed"
                          >
                            {q.question}
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
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

