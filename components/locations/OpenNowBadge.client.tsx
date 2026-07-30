'use client';

import React, { useEffect, useState } from 'react';

export interface OperatingHours {
  open: string;
  close: string;
}

export type WeeklyHours = Record<
  'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday',
  OperatingHours
>;

interface OpenNowBadgeProps {
  hours: WeeklyHours;
}

export default function OpenNowBadge({ hours }: OpenNowBadgeProps) {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);

  useEffect(() => {
    const checkIsOpen = () => {
      const now = new Date();
      // Enforce Asia/Jakarta timezone constraints securely
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Jakarta',
        weekday: 'long',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      });
      
      const parts = formatter.formatToParts(now);
      let day = '';
      let hour = '';
      let minute = '';
      
      parts.forEach(p => {
        if (p.type === 'weekday') day = p.value.toLowerCase();
        if (p.type === 'hour') hour = p.value;
        if (p.type === 'minute') minute = p.value;
      });

      const todayHours = hours[day as keyof WeeklyHours];
      if (!todayHours) {
        setIsOpen(false);
        return;
      }

      // Handle midnight correctly ("24:00" mapping in 2-digit format is often "24" or "00")
      // Normalize '24' to '00' for comparison if needed, but strict HH:mm string comparison handles most edge cases.
      const normalizedHour = hour === '24' ? '00' : hour;
      const currentTime = `${normalizedHour}:${minute}`;
      
      if (currentTime >= todayHours.open && currentTime <= todayHours.close) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    checkIsOpen();
    // Validate every 60 seconds
    const interval = setInterval(checkIsOpen, 60000);
    return () => clearInterval(interval);
  }, [hours]);

  if (isOpen === null) {
    return <span className="inline-block h-6 w-28 bg-coffee-dark/5 animate-pulse rounded-full border border-coffee-dark/10"></span>;
  }

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-coffee-dark/10 bg-coffee-white shadow-sm">
      {isOpen ? (
        <>
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          <span className="font-sans text-xs font-semibold text-green-700 tracking-wide uppercase">Buka Sekarang</span>
        </>
      ) : (
        <>
          <span className="relative flex h-2.5 w-2.5">
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
          </span>
          <span className="font-sans text-xs font-semibold text-red-700 tracking-wide uppercase">Sudah Tutup</span>
        </>
      )}
    </div>
  );
}
