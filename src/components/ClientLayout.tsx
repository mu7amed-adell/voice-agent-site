'use client';

import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import ConsultationBooking from '@/components/ConsultationBooking';
import { useConsultationBooking } from '@/hooks/useConsultationBooking';
import { Zap, Github, Linkedin } from 'lucide-react';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const { isBookingOpen, openBooking, closeBooking } = useConsultationBooking();

  // Make the booking functions available globally for easy access
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).openConsultationBooking = openBooking;
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
