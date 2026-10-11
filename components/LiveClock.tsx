"use client";

import { useEffect, useState } from "react";

export default function LiveClock() {
  const [time, setTime] = useState<string>("");
  const [tzOffset, setTzOffset] = useState<string>("");

  useEffect(() => {
    const update = () => {
      try {
        const now = new Date();
        const offsetMinutes = -now.getTimezoneOffset();
        const sign = offsetMinutes >= 0 ? "+" : "-";
        const absMinutes = Math.abs(offsetMinutes);
        const hours = Math.floor(absMinutes / 60);
        const mins = absMinutes % 60;
        const gmtString = mins > 0 
          ? `GMT${sign}${hours}:${mins.toString().padStart(2, "0")}`
          : `GMT${sign}${hours}`;
        setTzOffset(gmtString);

        const formatted = now.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: true,
        });
        setTime(formatted.toLowerCase());
      } catch (err) {
        console.error(err);
      }
    };

    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="footer-meta">
      <span className="footer-locale" suppressHydrationWarning>{tzOffset || "GMT+5:30"}</span>
      <span className="footer-time" suppressHydrationWarning>{time}</span>
    </span>
  );
}
