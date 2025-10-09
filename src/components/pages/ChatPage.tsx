import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Send, Bot, User, Sparkles, Lightbulb, HelpCircle } from 'lucide-react';

interface ChatPageProps {
  mentorId: number;
  mentorType: string;
  onBack: () => void;
}

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'mentor';
  timestamp: Date;
  type?: 'suggestion';
}

const ChatPage: React.FC<ChatPageProps> = ({ mentorId, mentorType, onBack }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Mock mentor data
  const mentorData = {
    1: { name: 'Commander Sarah Chen', avatar: '👩‍💼' },
    2: { name: 'Dr. Alex Kumar', avatar: '👨‍🔬' },
    3: { name: 'Maya Rodriguez', avatar: '👩‍🎓' },
    4: { name: 'AI Assistant Nova', avatar: '🤖' }
  };

  const currentMentor = mentorData[mentorId as keyof typeof mentorData];

  // AI suggested questions based on current quest (mock data)
  const suggestedQuestions = mentorType === 'ai' ? [
    "How do I implement useState in React?",
    "What's the difference between props and state?",
    "Help me debug this component error",
    "Explain React component lifecycle",
    "How to handle form inputs in React?",
    "What are React hooks and when to use them?"
  ] : [
    "How can I improve my learning strategy?",
    "What should I focus on next in my journey?",
    "How do I stay motivated during challenging topics?",
    "Can you review my progress so far?"
  ];

  useEffect(() => {
    // Initial greeting message
    const initialMessage: Message = {
      id: 1,
      text: mentorType === 'ai' 
        ? "Hello! I'm your AI learning assistant. I can help you with questions about your current quest on JSX and React fundamentals. What would you like to know?"
        : `Hi! I'm ${currentMentor.name}. I'm here to help you with your learning journey. How can I assist you today?`,
      sender: 'mentor',
      timestamp: new Date()
    };
    setMessages([initialMessage]);
  }, [mentorId, mentorType, currentMentor.name]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async (messageText?: string) => {
    const text = messageText || inputMessage.trim();
    if (!text) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      text,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate mentor response
    setTimeout(() => {
      const mentorResponse = generateMentorResponse(text, mentorType);
      const mentorMessage: Message = {
        id: Date.now() + 1,
        text: mentorResponse,
        sender: 'mentor',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, mentorMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const generateMentorResponse = (userMessage: string, type: string): string => {
    const message = userMessage.toLowerCase();
    
    if (type === 'ai') {
      // AI responses for learning content
      if (message.includes('usestate') || message.includes('state')) {
        return "useState is a React Hook that lets you add state to functional components. Here's how to use it:\n\n```jsx\nimport { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  \n  return (\n    <button onClick={() => setCount(count + 1)}>\n      Count: {count}\n    </button>\n  );\n}\n```\n\nThe useState hook returns an array with two elements: the current state value and a function to update it. Would you like me to explain more about state management?";
      }
      
      if (message.includes('props') || message.includes('difference')) {
        return "Great question! Here's the key difference:\n\n**Props:**\n- Data passed FROM parent TO child components\n- Read-only (immutable)\n- Used for communication between components\n\n**State:**\n- Data managed WITHIN a component\n- Can be updated using setState or useState\n- Triggers re-renders when changed\n\nExample:\n```jsx\n// Parent passes props\n<ChildComponent name=\"John\" age={25} />\n\n// Child receives props\nfunction ChildComponent({ name, age }) {\n  const [isVisible, setIsVisible] = useState(true); // This is state\n  return <div>{name} is {age} years old</div>;\n}\n```\n\nNeed help with a specific props or state scenario?";
      }
      
      if (message.includes('jsx')) {
        return "JSX is a syntax extension for JavaScript that lets you write HTML-like code in your React components. Here are the key points:\n\n✅ **JSX Rules:**\n- Must return a single parent element\n- Use className instead of class\n- Close all tags (including self-closing ones)\n- Use camelCase for attributes\n\n```jsx\n// Good JSX\nreturn (\n  <div className=\"container\">\n    <h1>Welcome!</h1>\n    <img src=\"photo.jpg\" alt=\"Photo\" />\n  </div>\n);\n```\n\nJSX gets compiled to JavaScript function calls. Want to practice with some JSX examples?";
      }
      
      return "I'd be happy to help you with that! Could you provide more specific details about what you're working on? I can assist with React concepts, debugging code, explaining syntax, or walking through examples step by step.";
    } else {
      // Human mentor responses
      if (message.includes('learning') || message.includes('strategy')) {
        return "Excellent question! Based on your progress in the React Fundamentals course, I recommend:\n\n1. **Practice Regularly**: Set aside 30-45 minutes daily for hands-on coding\n2. **Build Projects**: Apply what you learn in small projects\n3. **Review and Reflect**: Revisit concepts that challenge you\n4. **Ask Questions**: Don't hesitate to seek help when stuck\n\nI see you're currently working on JSX - how are you finding the transition from regular HTML to JSX syntax?";
      }
      
      if (message.includes('progress') || message.includes('review')) {
        return "Looking at your learning journey so far, you've made great progress! You've completed:\n\n✅ JSX Fundamentals\n✅ Component Basics  \n🔄 Currently: Props and Data Flow\n\nYour XP earnings show consistent engagement. I suggest focusing on:\n- Practice more with prop passing\n- Try building a small component library\n- Review event handling concepts\n\nWhat specific area would you like to dive deeper into?";
      }
      
      return "Thank you for reaching out! I'm here to support your learning journey. Whether you need help with course content, career guidance, or motivation, I'm here to help. What's on your mind today?";
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black flex flex-col">
      {/* Header */}
      <div className="bg-black/50 backdrop-blur-md border-b border-white/10 px-6 py-4">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all"
          >
            <ArrowLeft size={20} />
          </button>
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl border-2 border-white/20">
              {currentMentor.avatar}
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">{currentMentor.name}</h1>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm text-gray-400">Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-xs lg:max-w-md xl:max-w-lg ${
                message.sender === 'user' 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600' 
                  : 'bg-white/10 backdrop-blur-md border border-white/20'
              } rounded-2xl p-4`}>
                <div className="flex items-start gap-3">
                  {message.sender === 'mentor' && (
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-sm border border-white/20 flex-shrink-0">
                      {mentorType === 'ai' ? <Bot size={16} /> : currentMentor.avatar}
                    </div>
                  )}
                  <div className="flex-1">
                    <p className="text-white text-sm leading-relaxed whitespace-pre-line">{message.text}</p>
                    <p className="text-xs text-gray-300 mt-2">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                  {message.sender === 'user' && (
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm flex-shrink-0">
                      <User size={16} className="text-white" />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Typing Indicator */}
        {isTyping && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-start"
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-sm border border-white/20">
                  {mentorType === 'ai' ? <Bot size={16} /> : currentMentor.avatar}
                </div>
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Questions (AI only) */}
      {mentorType === 'ai' && messages.length <= 2 && (
        <div className="px-6 pb-4">
          <div className="flex items-center gap-2 mb-3">
            <Lightbulb className="text-yellow-400" size={16} />
            <span className="text-sm text-gray-400">Suggested questions about your current quest:</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {suggestedQuestions.slice(0, 4).map((question, index) => (
              <button
                key={index}
                onClick={() => handleSendMessage(question)}
                className="text-left p-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg text-sm text-gray-300 transition-all"
              >
                <HelpCircle size={14} className="inline mr-2 text-blue-400" />
                {question}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="bg-black/50 backdrop-blur-md border-t border-white/10 p-6">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <textarea
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              rows={1}
              className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 resize-none focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50"
            />
            {mentorType === 'ai' && (
              <div className="absolute right-3 top-3">
                <Sparkles className="text-yellow-400" size={16} />
              </div>
            )}
          </div>
          <button
            onClick={() => handleSendMessage()}
            disabled={!inputMessage.trim()}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white font-medium rounded-xl flex items-center justify-center transition-all duration-300"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;