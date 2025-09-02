'use client';

import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import ConsultationBooking from '@/components/ConsultationBooking';
import { useConsultationBooking } from '@/hooks/useConsultationBooking';


interface ClientLayoutProps {
  children: React.ReactNode;
}

declare global {
  interface Window {
    openConsultationBooking?: () => void;
  }
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const { isBookingOpen, openBooking, closeBooking } = useConsultationBooking();

  // Make the booking functions available globally for easy access
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.openConsultationBooking = openBooking;
    }
  }, [openBooking]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {children}
      </main>
      <ConsultationBooking isOpen={isBookingOpen} onClose={closeBooking} />
    </div>
  );
}
