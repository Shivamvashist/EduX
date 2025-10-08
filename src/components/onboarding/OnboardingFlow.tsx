import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { OnboardingSelection } from './OnboardingSelection';
import { TextOnboarding } from './TextOnboarding';
import { AudioOnboarding } from './AudioOnboarding';
import { VideoOnboarding } from './VideoOnboarding';
import { OnboardingComplete } from './OnboardingComplete';

type OnboardingStep = 'selection' | 'text' | 'audio' | 'video' | 'complete';
type OnboardingType = 'text' | 'audio' | 'video';

interface OnboardingFlowProps {
  onComplete: () => void;
}

export const OnboardingFlow: React.FC<OnboardingFlowProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState<OnboardingStep>('selection');
  const [selectedType, setSelectedType] = useState<OnboardingType | null>(null);

  const handleSelection = (type: OnboardingType) => {
    setSelectedType(type);
    setCurrentStep(type);
  };

  const handleOnboardingComplete = () => {
    setCurrentStep('complete');
  };

  const handleBackToSelection = () => {
    setCurrentStep('selection');
    setSelectedType(null);
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'selection':
        return <OnboardingSelection onSelect={handleSelection} />;
      
      case 'text':
        return (
          <TextOnboarding 
            onComplete={handleOnboardingComplete}
            onBack={handleBackToSelection}
          />
        );
      
      case 'audio':
        return (
          <AudioOnboarding 
            onComplete={handleOnboardingComplete}
            onBack={handleBackToSelection}
          />
        );
      
      case 'video':
        return (
          <VideoOnboarding 
            onComplete={handleOnboardingComplete}
            onBack={handleBackToSelection}
          />
        );
      
      case 'complete':
        return (
          <OnboardingComplete 
            onboardingType={selectedType!}
            onContinueToDashboard={onComplete}
          />
        );
      
      default:
        return <OnboardingSelection onSelect={handleSelection} />;
    }
  };

  return (
    <AnimatePresence mode="wait">
      {renderCurrentStep()}
    </AnimatePresence>
  );
};