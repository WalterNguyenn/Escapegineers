'use client'

interface BookingProgressProps {
  currentStep: 1 | 2 | 3
  totalSteps: 3
}

export default function BookingProgress({ currentStep, totalSteps }: BookingProgressProps) {
  const steps = [
    { number: 1, title: 'Select Room' },
    { number: 2, title: 'Choose Time' },
    { number: 3, title: 'Payment' }
  ]

  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center">
            {/* Step Circle */}
            <div className={`
              w-10 h-10 rounded-full flex items-center justify-center font-body font-bold text-sm
              ${currentStep >= step.number 
                ? 'bg-light-gold dark:bg-dark-gold text-white' 
                : 'bg-light-hover dark:bg-dark-hover text-light-muted dark:text-dark-muted border-2 border-light-border dark:border-dark-border'
              }
            `}>
              {currentStep > step.number ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              ) : (
                step.number
              )}
            </div>
            
            {/* Step Title */}
            <div className="ml-3 hidden sm:block">
              <p className={`font-body text-sm font-medium ${
                currentStep >= step.number 
                  ? 'text-light-text dark:text-dark-text' 
                  : 'text-light-muted dark:text-dark-muted'
              }`}>
                {step.title}
              </p>
            </div>
            
            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div className={`
                hidden sm:block w-16 h-0.5 mx-4
                ${currentStep > step.number 
                  ? 'bg-light-gold dark:bg-dark-gold' 
                  : 'bg-light-border dark:bg-dark-border'
                }
              `} />
            )}
          </div>
        ))}
      </div>
      
      {/* Mobile Step Title */}
      <div className="sm:hidden text-center mt-4">
        <p className="font-body text-sm font-medium text-light-text dark:text-dark-text">
          Step {currentStep} of {totalSteps}: {steps[currentStep - 1].title}
        </p>
      </div>
    </div>
  )
} 