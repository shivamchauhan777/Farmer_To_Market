import React from "react";

export function Button({ children, onClick, variant = "default", className = "" }) {
  const baseStyle = "px-4 py-2 rounded text-white font-medium transition";
  const styles = variant === "destructive" ? "bg-red-500 hover:bg-red-600" : "bg-blue-500 hover:bg-blue-600";

  return (
    <button onClick={onClick} className={`${baseStyle} ${styles} ${className}`}>
      {children}
    </button>
  );
}
