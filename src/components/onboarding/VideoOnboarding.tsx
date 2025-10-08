import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';
import { ArrowLeftIcon, VideoIcon, PersonIcon } from '@radix-ui/react-icons';
import { useThemeContext } from '../ThemeProvider';

interface VideoOnboardingProps {
  onComplete: () => void;
  onBack: () => void;
}

export const VideoOnboarding: React.FC<VideoOnboardingProps> = ({ onComplete, onBack }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [responses, setResponses] = useState<string[]>([]);
  const [showAIResponse, setShowAIResponse] = useState(false);
  const { isDark } = useThemeContext();
  const videoRef = useRef<HTMLVideoElement>(null);

  const questions = [
    "Hello! I'm your AI interviewer. Could you please introduce yourself and tell me your name?",
    "What's your educational background? What field of study interests you most?",
    "What motivated you to join our learning platform? What are your goals?",
    "How do you prefer to learn? Do you like visual, hands-on, or theoretical approaches?",
    "Finally, what would you like to achieve in the next 6 months with our platform?"
  ];

  const aiResponses = [
    "Nice to meet you! That's a great introduction.",
    "Interesting background! That will definitely help with your learning journey.",
    "Those are excellent goals. We can definitely help you achieve them.",
    "Understanding your learning style will help us personalize your experience.",
    "Perfect! Let's create a learning path tailored to your objectives."
  ];

  // Start camera
  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ 
          video: { width: 640, height: 480 }, 
          audio: false 
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.log('Camera access denied or not available');
      }
    };

    startCamera();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const handleStartRecording = () => {
    setIsRecording(true);
    setShowAIResponse(false);
  };

  const handleStopRecording = () => {
    setIsRecording(false);
    
    // Simulate AI processing and response
    setTimeout(() => {
      setResponses(prev => [...prev, `Response to question ${currentQuestion + 1}`]);
      setShowAIResponse(true);
      
      setTimeout(() => {
        setShowAIResponse(false);
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(prev => prev + 1);
        }
      }, 3000);
    }, 1500);
  };

  const handleComplete = () => {
    onComplete();
  };

  const isLastQuestion = currentQuestion === questions.length - 1;
  const hasAnsweredCurrent = responses.length > currentQuestion;
  const progress = ((currentQuestion + (hasAnsweredCurrent ? 1 : 0)) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-primary p-6">
      {/* Header */}
      <motion.div
        className="text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold text-primary mb-2">
          Video-based Onboarding
        </h1>
        <p className="text-secondary">
          Question {currentQuestion + 1} of {questions.length}
        </p>
        
        {/* Progress Bar */}
        <div className="w-full max-w-md mx-auto bg-muted rounded-full h-2 mt-4">
          <motion.div
            className="bg-gradient-to-r from-accent-blue to-accent-neon h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </motion.div>

      {/* Video Interface */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* AI Interviewer Section */}
        <motion.div
          className="lg:col-span-1 space-y-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* AI Avatar */}
          <div className="bg-card border border-primary rounded-2xl p-6 glow-effect">
            <div className="text-center mb-4">
              <h3 className="text-lg font-semibold text-primary mb-2">AI Interviewer</h3>
              <div className="relative w-32 h-32 mx-auto mb-4">
                <motion.div
                  className={`w-full h-full rounded-full flex items-center justify-center ${
                    isDark 
                      ? 'bg-gradient-to-br from-slate-800 to-slate-900' 
                      : 'bg-gradient-to-br from-slate-100 to-slate-200'
                  } border-4 border-accent-blue relative overflow-hidden`}
                  animate={{ 
                    borderColor: showAIResponse 
                      ? ['#3b82f6', '#06b6d4', '#3b82f6'] 
                      : '#3b82f6' 
                  }}
                  transition={{ duration: 2, repeat: showAIResponse ? Infinity : 0 }}
                >
                  <PersonIcon className="w-16 h-16 text-accent-blue" />
                  
                  {/* AI Speaking Animation */}
                  <AnimatePresence>
                    {showAIResponse && (
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        initial={{ opacity: 0 }}
                        animate={{ 
                          opacity: [0, 0.3, 0],
                          scale: [1, 1.1, 1]
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ 
                          duration: 1, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <div className="w-full h-full bg-accent-blue rounded-full" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </div>

            {/* Current Question */}
            <motion.div
              key={currentQuestion}
              className="bg-secondary rounded-xl p-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-sm text-primary leading-relaxed">
                {questions[currentQuestion]}
              </p>
            </motion.div>

            {/* AI Response */}
            <AnimatePresence>
              {showAIResponse && (
                <motion.div
                  className="bg-gradient-to-r from-accent-blue/10 to-accent-neon/10 rounded-xl p-4 mt-4 border border-accent-blue/20"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-sm text-accent-blue font-medium">
                    {aiResponses[currentQuestion]}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Recording Status */}
          <div className="bg-card border border-primary rounded-2xl p-4">
            <div className="text-center">
              {isRecording ? (
                <div className="flex items-center justify-center space-x-2 text-red-500">
                  <motion.div
                    className="w-3 h-3 bg-red-500 rounded-full"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                  <span className="font-medium">Recording...</span>
                </div>
              ) : hasAnsweredCurrent && !showAIResponse ? (
                <div className="flex items-center justify-center space-x-2 text-green-400">
                  <div className="w-3 h-3 bg-green-400 rounded-full" />
                  <span className="font-medium">Response Recorded</span>
                </div>
              ) : (
                <span className="text-secondary">Ready to record</span>
              )}
            </div>
          </div>
        </motion.div>

        {/* User Video Section */}
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="bg-card border border-primary rounded-2xl p-6 glow-effect h-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-primary flex items-center space-x-2">
                <VideoIcon className="w-5 h-5" />
                <span>Your Video</span>
              </h3>
              
              {/* Recording Controls */}
              <motion.button
                onClick={isRecording ? handleStopRecording : handleStartRecording}
                disabled={showAIResponse}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  showAIResponse
                    ? 'bg-muted text-muted cursor-not-allowed'
                    : isRecording
                      ? 'bg-red-500 hover:bg-red-600 text-white'
                      : 'bg-gradient-to-r from-accent-blue to-accent-neon hover:scale-105 text-white'
                }`}
                whileHover={!showAIResponse ? { scale: 1.05 } : {}}
                whileTap={!showAIResponse ? { scale: 0.95 } : {}}
              >
                {showAIResponse ? 'Processing...' : isRecording ? 'Stop Recording' : 'Start Recording'}
              </motion.button>
            </div>

            {/* Video Display */}
            <div className="relative bg-black rounded-xl overflow-hidden aspect-video">
              <video
                ref={videoRef}
                autoPlay
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              
              {/* Recording Indicator */}
              {isRecording && (
                <motion.div
                  className="absolute top-4 right-4 flex items-center space-x-2 bg-red-500/80 text-white px-3 py-1 rounded-full"
                  animate={{ opacity: [1, 0.7, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span className="text-sm font-medium">REC</span>
                </motion.div>
              )}

              {/* No Camera Fallback */}
              {!videoRef.current && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <VideoIcon className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p className="text-sm opacity-75">Camera not available</p>
                  </div>
                </div>
              )}
            </div>

            {/* Instructions */}
            <div className="mt-4 text-center">
              <p className="text-sm text-secondary">
                {isRecording 
                  ? "Please answer the question clearly. Look at the camera and speak naturally." 
                  : "Click 'Start Recording' when you're ready to answer the current question."
                }
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Navigation */}
      <motion.div
        className="max-w-7xl mx-auto flex justify-between items-center mt-6 pt-6 border-t border-primary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <Button
          variant="secondary"
          onClick={onBack}
          className="flex items-center space-x-2"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          <span>Back to Selection</span>
        </Button>

        <div className="flex space-x-2">
          {questions.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                responses.length > index
                  ? 'bg-gradient-to-r from-accent-blue to-accent-neon'
                  : index === currentQuestion && hasAnsweredCurrent
                    ? 'bg-accent-blue'
                    : 'bg-muted'
              }`}
            />
          ))}
        </div>

        <Button
          variant="primary"
          onClick={handleComplete}
          disabled={!hasAnsweredCurrent || !isLastQuestion}
          glow={hasAnsweredCurrent && isLastQuestion}
        >
          Complete Onboarding
        </Button>
      </motion.div>
    </div>
  );
};