import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { ArrowLeftIcon, SpeakerLoudIcon } from '@radix-ui/react-icons';
import { useThemeContext } from '../ThemeProvider';

interface AudioOnboardingProps {
  onComplete: () => void;
  onBack: () => void;
}

export const AudioOnboarding: React.FC<AudioOnboardingProps> = ({ onComplete, onBack }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState<string[]>([]);
  const { isDark } = useThemeContext();

  const questions = [
    "Hello! I'm your AI assistant. Please tell me your name and a bit about yourself.",
    "What's your educational background and what subjects interest you the most?",
    "What are your main learning goals? What do you hope to achieve with our platform?",
    "Do you have any previous experience with online learning? What works best for you?",
    "Finally, is there anything specific you'd like our AI to know to personalize your experience?"
  ];

  const [audioWaveform, setAudioWaveform] = useState<number[]>(
    Array.from({ length: 12 }, () => Math.random() * 100)
  );

  // Simulate audio waveform animation
  useEffect(() => {
    let interval: number;
    if (isRecording) {
      interval = setInterval(() => {
        setAudioWaveform(prev => 
          prev.map(() => Math.random() * (isRecording ? 100 : 20))
        );
      }, 100);
    } else {
      setAudioWaveform(Array.from({ length: 12 }, () => Math.random() * 20));
    }
    
    return () => clearInterval(interval);
  }, [isRecording]);

  const handleStartRecording = () => {
    setIsRecording(true);
  };

  const handleStopRecording = () => {
    setIsRecording(false);
    setIsProcessing(true);
    
    // Simulate AI processing
    setTimeout(() => {
      setIsProcessing(false);
      setResponses(prev => [...prev, `Response to question ${currentQuestion + 1}`]);
      
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
      }
    }, 2000);
  };

  const handleComplete = () => {
    onComplete();
  };

  const isLastQuestion = currentQuestion === questions.length - 1;
  const hasAnsweredCurrent = responses.length > currentQuestion;
  const progress = ((currentQuestion + (hasAnsweredCurrent ? 1 : 0)) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-primary mb-2">
            Audio-based Onboarding
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

        {/* Main Interface */}
        <motion.div
          className="bg-card border border-primary rounded-3xl p-8 glow-effect"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* AI Assistant Section */}
          <div className="flex items-center justify-center mb-8">
            <motion.div
              className="relative"
              animate={{ scale: isProcessing ? [1, 1.05, 1] : 1 }}
              transition={{ duration: 2, repeat: isProcessing ? Infinity : 0 }}
            >
              {/* AI Avatar Circle */}
              <motion.div
                className={`w-32 h-32 rounded-full flex items-center justify-center ${
                  isDark 
                    ? 'bg-gradient-to-br from-slate-800 to-slate-900' 
                    : 'bg-gradient-to-br from-slate-100 to-slate-200'
                } border-4 border-accent-blue relative overflow-hidden`}
                animate={{ 
                  borderColor: isRecording 
                    ? ['#3b82f6', '#06b6d4', '#3b82f6'] 
                    : '#3b82f6' 
                }}
                transition={{ duration: 2, repeat: isRecording ? Infinity : 0 }}
              >
                <SpeakerLoudIcon className="w-12 h-12 text-accent-blue" />
                
                {/* Pulsing effect when AI is speaking */}
                {!isRecording && !isProcessing && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-accent-blue"
                    animate={{ 
                      opacity: [0, 0.2, 0],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                )}
              </motion.div>

              {/* Processing indicator */}
              {isProcessing && (
                <motion.div
                  className="absolute -inset-4 rounded-full border-4 border-accent-neon border-t-transparent"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
              )}
            </motion.div>
          </div>

          {/* Current Question */}
          <motion.div
            className="text-center mb-8"
            key={currentQuestion}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-secondary rounded-2xl p-6 max-w-2xl mx-auto">
              <p className="text-lg text-primary leading-relaxed">
                {questions[currentQuestion]}
              </p>
            </div>
          </motion.div>

          {/* Audio Visualizer */}
          <div className="flex items-center justify-center mb-8 h-24">
            <div className="flex items-end space-x-2 h-full">
              {audioWaveform.map((height, index) => (
                <motion.div
                  key={index}
                  className={`w-3 rounded-full ${
                    isRecording 
                      ? 'bg-gradient-to-t from-accent-blue to-accent-neon' 
                      : 'bg-muted'
                  }`}
                  animate={{ 
                    height: `${Math.max(height * (isRecording ? 0.8 : 0.3), 8)}%` 
                  }}
                  transition={{ duration: 0.1, ease: "easeInOut" }}
                />
              ))}
            </div>
          </div>

          {/* Status Message */}
          <motion.div
            className="text-center mb-8"
            animate={{ opacity: 1 }}
          >
            {isProcessing ? (
              <p className="text-accent-blue font-medium">
                Processing your response...
              </p>
            ) : isRecording ? (
              <p className="text-accent-neon font-medium">
                Listening... Speak clearly into your microphone
              </p>
            ) : hasAnsweredCurrent ? (
              <p className="text-green-400 font-medium">
                ✓ Response recorded successfully
              </p>
            ) : (
              <p className="text-secondary">
                Click the button below to start recording your response
              </p>
            )}
          </motion.div>

          {/* Recording Controls */}
          <div className="flex justify-center mb-8">
            {!isProcessing && (
              <motion.button
                onClick={isRecording ? handleStopRecording : handleStartRecording}
                className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isRecording
                    ? 'bg-red-500 hover:bg-red-600'
                    : 'bg-gradient-to-r from-accent-blue to-accent-neon hover:scale-105'
                } text-white font-semibold text-sm`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: isRecording 
                    ? ['0 0 0 0 rgba(239, 68, 68, 0.4)', '0 0 0 20px rgba(239, 68, 68, 0)']
                    : '0 0 20px rgba(59, 130, 246, 0.3)'
                }}
                transition={{
                  boxShadow: isRecording 
                    ? { duration: 1, repeat: Infinity } 
                    : {}
                }}
              >
                {isRecording ? 'STOP' : 'START'}
              </motion.button>
            )}
          </div>

          {/* Navigation */}
          <motion.div
            className="flex justify-between items-center pt-6 border-t border-primary"
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
        </motion.div>
      </div>
    </div>
  );
};