import React from "react";

export function Table({ children }) {
  return <table className="w-full border-collapse border border-gray-200">{children}</table>;
}

export function TableHead({ children }) {
  return <thead className="bg-gray-100">{children}</thead>;
}

export function TableRow({ children }) {
  return <tr className="border-b border-gray-200">{children}</tr>;
}

export function TableCell({ children }) {
  return <td className="p-3 border-r border-gray-200">{children}</td>;
}

export function TableBody({ children }) {
  return <tbody>{children}</tbody>;
}
