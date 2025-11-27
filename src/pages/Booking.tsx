import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBookingStore } from '../store/bookingStore';
import { Calendar, Check, CreditCard, User, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Booking() {
  const { currentStep, setCurrentStep } = useBookingStore();
  const [isProcessing, setIsProcessing] = useState(false);

  const steps = [
    { id: 1, label: 'Dates', icon: Calendar },
    { id: 2, label: 'Suite', icon: Home },
    { id: 3, label: 'Guest', icon: User },
    { id: 4, label: 'Payment', icon: CreditCard },
  ];

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsProcessing(true);
      setTimeout(() => {
        setIsProcessing(false);
        setCurrentStep(5); // Success state
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Progress Bar */}
        {currentStep < 5 && (
          <div className="mb-12">
            <div className="flex justify-between relative">
              <div className="absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 -z-10" />
              <div 
                className="absolute top-1/2 left-0 h-1 bg-yellow-500 -translate-y-1/2 -z-10 transition-all duration-500"
                style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
              />
              
              {steps.map((step) => (
                <div key={step.id} className="flex flex-col items-center gap-2 bg-stone-950 px-2">
                  <div 
                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors ${
                      currentStep >= step.id 
                        ? 'border-yellow-500 bg-yellow-500 text-stone-950' 
                        : 'border-white/20 bg-stone-900 text-stone-500'
                    }`}
                  >
                    <step.icon className="w-5 h-5" />
                  </div>
                  <span className={`text-xs font-medium uppercase tracking-wider ${currentStep >= step.id ? 'text-yellow-500' : 'text-stone-600'}`}>
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Content */}
        <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 min-h-[400px] relative overflow-hidden">
          <AnimatePresence mode="wait">
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="text-2xl text-stone-100 font-serif">Select Your Dates</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-stone-400 text-sm">Check-in Date</label>
                    <input type="date" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-stone-100 focus:border-yellow-500 outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-stone-400 text-sm">Check-out Date</label>
                    <input type="date" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-stone-100 focus:border-yellow-500 outline-none" />
                  </div>
                </div>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="text-2xl text-stone-100 font-serif">Choose Your Suite</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {['Presidential Suite', 'Luxury Villa'].map((suite) => (
                    <div key={suite} className="border border-yellow-500/50 bg-yellow-500/10 rounded-xl p-4 cursor-pointer hover:bg-yellow-500/20 transition-colors">
                      <h3 className="text-stone-100 font-bold">{suite}</h3>
                      <p className="text-yellow-500">$1200 / night</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="text-2xl text-stone-100 font-serif">Guest Information</h2>
                <div className="space-y-4">
                  <input type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-stone-100 outline-none focus:border-yellow-500" />
                  <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-stone-100 outline-none focus:border-yellow-500" />
                  <input type="tel" placeholder="Phone Number" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-stone-100 outline-none focus:border-yellow-500" />
                </div>
              </motion.div>
            )}

            {currentStep === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="text-2xl text-stone-100 font-serif">Payment Method</h2>
                <div className="space-y-4">
                  <div className="p-4 border border-white/10 rounded-xl flex items-center gap-4 hover:border-yellow-500 cursor-pointer transition-colors">
                    <div className="w-12 h-8 bg-white/10 rounded" />
                    <span className="text-stone-300">Credit Card</span>
                  </div>
                  <div className="p-4 border border-white/10 rounded-xl flex items-center gap-4 hover:border-yellow-500 cursor-pointer transition-colors">
                    <div className="w-12 h-8 bg-white/10 rounded" />
                    <span className="text-stone-300">Mobile Money</span>
                  </div>
                </div>
              </motion.div>
            )}

            {currentStep === 5 && (
              <motion.div
                key="step5"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-6 py-12"
              >
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto text-green-500">
                  <Check className="w-10 h-10" />
                </div>
                <h2 className="text-3xl text-stone-100 font-serif">Booking Confirmed!</h2>
                <p className="text-stone-400">Your reservation code is <span className="text-yellow-500 font-mono">SAV-8X29</span></p>
                <Link to="/" className="inline-block bg-white/10 text-stone-100 px-8 py-3 rounded-full hover:bg-white/20 transition-colors">
                  Return Home
                </Link>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          {currentStep < 5 && (
            <div className="flex justify-between mt-8 pt-8 border-t border-white/10">
              <button 
                onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                className={`px-6 py-3 rounded-full text-stone-400 hover:text-stone-100 transition-colors ${currentStep === 1 ? 'opacity-0 pointer-events-none' : ''}`}
              >
                Back
              </button>
              <button 
                onClick={handleNext}
                disabled={isProcessing}
                className="bg-yellow-500 text-stone-950 px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {isProcessing ? 'Processing...' : currentStep === 4 ? 'Confirm Payment' : 'Next Step'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
