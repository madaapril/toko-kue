// src/app/components/TombolUnik.tsx
"use client"; // Jika tombol ini punya event handler
 
import React from 'react';
import styles from './TombolUnik.module.css'; // Impor CSS Module sebagai objek 'styles'
 
interface TombolUnikProps {
  children: React.ReactNode;
  onClick?: () => void;
}
 
export default function TombolUnik({ children, onClick }: TombolUnikProps) {
  return (
    <div className={styles.container}> {/* Pake styles.container */}
      <button className={styles.tombol} onClick={onClick}> {/* Pake styles.tombol */}
        {children}
      </button>
    </div>
  );
}