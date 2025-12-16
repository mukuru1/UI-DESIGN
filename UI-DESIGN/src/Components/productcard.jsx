import React from 'react'

export default function ProductCard({ name, category, date, status }) {
  const statusStyles = {
    'In Stock': 'bg-green-100 text-green-700',
    'Low Stock': 'bg-yellow-100 text-yellow-700',
    'Out of Stock': 'bg-red-100 text-red-700',
  }

    return (

        <div className="bg-gray-50 rounded-xl p-4 flex justify-between items-start">
      <div>
        <h4 className="font-semibold text-gray-800">{name}</h4>
        <p className="text-sm text-gray-500">{category}</p>
        <p className="text-sm text-gray-400 mt-1">{date}</p>
      </div>
      <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyles[status]}`}>
        {status}
      </span>
    </div>

    )
    
}