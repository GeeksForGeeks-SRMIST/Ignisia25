import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TARGET_DATE = new Date('October 13, 2025 09:00:00 GMT+0530').getTime(); // Event start time (IST)

const CountdownTimer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = TARGET_DATE - now;
      setTime(difference);
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const getTimerElements = (ms) => {
    if (ms <= 0) {
      return { days: '00', hours: '00', minutes: '00', seconds: '00', ended: true };
    }

    const totalSeconds = Math.floor(ms / 1000);
    const days = String(Math.floor(totalSeconds / (3600 * 24))).padStart(2, '0');
    const hours = String(Math.floor((totalSeconds % (3600 * 24)) / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const seconds = String(Math.floor(totalSeconds % 60)).padStart(2, '0');

    return { days, hours, minutes, seconds, ended: false };
  };

  const timer = getTimerElements(time);

  if (timer.ended) {
    return <div className="text-2xl font-nav text-brand-gold">IGNISIA 2025 is LIVE!</div>;
  }

  const TimeSegment = ({ value, label }) => (
    <div className="flex flex-col items-center p-4 bg-black/50 backdrop-blur-md rounded-xl border border-brand-orange/50">
      <motion.div
        className="text-4xl md:text-6xl font-pixel text-brand-gold"
        key={value}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {value}
      </motion.div>
      <span className="text-sm font-nav uppercase tracking-widest mt-1 text-gray-400">{label}</span>
    </div>
  );

  return (
    <div className="flex justify-center gap-2 md:gap-4 lg:gap-8 mt-10">
      <TimeSegment value={timer.days} label="Days" />
      <TimeSegment value={timer.hours} label="Hours" />
      <TimeSegment value={timer.minutes} label="Mins" />
      <TimeSegment value={timer.seconds} label="Secs" />
    </div>
  );
};

export default CountdownTimer;
