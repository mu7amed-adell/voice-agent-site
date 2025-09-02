'use client';

import { useState } from 'react';

export function useConsultationBooking() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  return {
    isBookingOpen,
    openBooking,
    closeBooking
  };
}
