"use client";
import { useEffect, useState } from "react";
import './KissCounter.css'; // CSS dosyasını dahil et

export default function KissCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const savedCount = localStorage.getItem("kissCounter");
    if (savedCount) {
      setCount(parseInt(savedCount, 10));
    }
  }, []);

  const increaseCount = () => {
    setCount(prev => {
      const newCount = prev + 1;
      localStorage.setItem("kissCounter", newCount.toString());
      return newCount;
    });

    // Butona tıklanınca YouTube linkini yeni sekmede aç
    window.open("https://www.youtube.com/watch?v=4Gc1v8kh6MU", "_blank");
  };

  return (
    <div className="kiss-counter-container">
      <h1 className="kiss-counter-title">Nazlışın Öpücük Sayacı</h1>
      <p className="kiss-counter-text">Toplam Öpücük: {count}</p>
      <button 
        onClick={increaseCount}
        className="kiss-counter-button"
      >
        Bir Öpücük Daha!
      </button>
      <footer className="kiss-counter-footer">
        -Made by Tümer &hearts; with love
      </footer>
    </div>
  );
}
