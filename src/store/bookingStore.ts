import { create } from 'zustand';

export interface Suite {
  id: string;
  name: string;
  price: number;
  image: string;
}

interface BookingState {
  checkIn: Date | null;
  checkOut: Date | null;
  guests: number;
  selectedSuite: Suite | null;
  currentStep: number;
  
  setCheckIn: (date: Date | null) => void;
  setCheckOut: (date: Date | null) => void;
  setGuests: (count: number) => void;
  setSelectedSuite: (suite: Suite | null) => void;
  setCurrentStep: (step: number) => void;
  resetBooking: () => void;
}

export const useBookingStore = create<BookingState>((set) => ({
  checkIn: null,
  checkOut: null,
  guests: 1,
  selectedSuite: null,
  currentStep: 1,

  setCheckIn: (date) => set({ checkIn: date }),
  setCheckOut: (date) => set({ checkOut: date }),
  setGuests: (count) => set({ guests: count }),
  setSelectedSuite: (suite) => set({ selectedSuite: suite }),
  setCurrentStep: (step) => set({ currentStep: step }),
  resetBooking: () => set({
    checkIn: null,
    checkOut: null,
    guests: 1,
    selectedSuite: null,
    currentStep: 1
  }),
}));
