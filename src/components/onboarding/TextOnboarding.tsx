import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { ArrowLeftIcon } from '@radix-ui/react-icons';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  education: string;
  interests: string;
  goals: string;
  experience: string;
}

interface TextOnboardingProps {
  onComplete: () => void;
  onBack: () => void;
}

export const TextOnboarding: React.FC<TextOnboardingProps> = ({ onComplete, onBack }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    education: '',
    interests: '',
    goals: '',
    experience: ''
  });

  const steps = [
    {
      title: 'Personal Information',
      subtitle: 'Tell us about yourself',
      fields: [
        { key: 'firstName', label: 'First Name', type: 'text', placeholder: 'Enter your first name' },
        { key: 'lastName', label: 'Last Name', type: 'text', placeholder: 'Enter your last name' },
        { key: 'email', label: 'Email Address', type: 'email', placeholder: 'Enter your email' },
        { key: 'phone', label: 'Phone Number', type: 'tel', placeholder: 'Enter your phone number' },
      ]
    },
    {
      title: 'Educational Background',
      subtitle: 'Help us understand your academic journey',
      fields: [
        { key: 'dateOfBirth', label: 'Date of Birth', type: 'date', placeholder: '' },
        { key: 'education', label: 'Highest Education Level', type: 'select', placeholder: 'Select your education level',
          options: ['High School', 'Bachelor\'s Degree', 'Master\'s Degree', 'PhD', 'Other'] },
      ]
    },
    {
      title: 'Learning Preferences',
      subtitle: 'Let us know what drives your learning',
      fields: [
        { key: 'interests', label: 'Areas of Interest', type: 'textarea', placeholder: 'Tell us about your learning interests...' },
        { key: 'goals', label: 'Learning Goals', type: 'textarea', placeholder: 'What do you hope to achieve?' },
        { key: 'experience', label: 'Previous Experience', type: 'textarea', placeholder: 'Any relevant experience or background?' },
      ]
    }
  ];

  const currentStepData = steps[currentStep];
  const isLastStep = currentStep === steps.length - 1;
  const progress = ((currentStep + 1) / steps.length) * 100;

  const handleInputChange = (key: string, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleNext = () => {
    if (isLastStep) {
      onComplete();
    } else {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    } else {
      onBack();
    }
  };

  const isStepValid = () => {
    const stepFields = currentStepData.fields;
    return stepFields.every(field => {
      const value = formData[field.key as keyof FormData];
      return value && value.trim() !== '';
    });
  };

  const renderField = (field: any) => {
    const value = formData[field.key as keyof FormData];
    
    if (field.type === 'select') {
      return (
        <select
          value={value}
          onChange={(e) => handleInputChange(field.key, e.target.value)}
          className="w-full px-4 py-3 bg-secondary border border-primary rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-accent-blue transition-all text-primary"
        >
          <option value="">{field.placeholder}</option>
          {field.options?.map((option: string) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      );
    }
    
    if (field.type === 'textarea') {
      return (
        <textarea
          value={value}
          onChange={(e) => handleInputChange(field.key, e.target.value)}
          placeholder={field.placeholder}
          rows={4}
          className="w-full px-4 py-3 bg-secondary border border-primary rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-accent-blue transition-all text-primary resize-none"
        />
      );
    }
    
    return (
      <input
        type={field.type}
        value={value}
        onChange={(e) => handleInputChange(field.key, e.target.value)}
        placeholder={field.placeholder}
        className="w-full px-4 py-3 bg-secondary border border-primary rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-accent-blue transition-all text-primary"
      />
    );
  };

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-primary mb-2">
            Text-based Onboarding
          </h1>
          <p className="text-secondary">
            Step {currentStep + 1} of {steps.length}
          </p>
          
          {/* Progress Bar */}
          <div className="w-full bg-muted rounded-full h-2 mt-4">
            <motion.div
              className="bg-gradient-to-r from-accent-blue to-accent-neon h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>

        {/* Form Card */}
        <motion.div
          className="bg-card border border-primary rounded-2xl p-8 glow-effect"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Step Header */}
          <motion.div
            className="mb-8"
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-2xl font-semibold text-primary mb-2">
              {currentStepData.title}
            </h2>
            <p className="text-secondary">
              {currentStepData.subtitle}
            </p>
          </motion.div>

          {/* Form Fields */}
          <motion.div
            className="space-y-6"
            key={`step-${currentStep}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {currentStepData.fields.map((field, index) => (
              <motion.div
                key={field.key}
                className="space-y-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <label className="block text-sm font-medium text-primary">
                  {field.label}
                </label>
                {renderField(field)}
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation */}
          <motion.div
            className="flex justify-between items-center mt-8 pt-6 border-t border-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <Button
              variant="secondary"
              onClick={handlePrevious}
              className="flex items-center space-x-2"
            >
              <ArrowLeftIcon className="w-4 h-4" />
              <span>{currentStep > 0 ? 'Previous' : 'Back to Selection'}</span>
            </Button>

            <div className="flex space-x-2">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index <= currentStep
                      ? 'bg-gradient-to-r from-accent-blue to-accent-neon'
                      : 'bg-muted'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="primary"
              onClick={handleNext}
              disabled={!isStepValid()}
              glow={isStepValid()}
            >
              {isLastStep ? 'Complete Onboarding' : 'Next Step'}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};