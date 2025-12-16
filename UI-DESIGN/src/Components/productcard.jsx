import React from 'react'

export default function ProductCard({ name, category, date, status }) {
  const statusStyles = {
    'In Stock': 'bg-green-100 text-green-700',
    'Low Stock': 'bg-yellow-100 text-yellow-700',
    'Out of Stock': 'bg-red-100 text-red-700',
  }

    return
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200">