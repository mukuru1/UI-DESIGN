import React from 'react'

export default function StatsCard({ title, value, color }) {
  const colorStyles = {
    blue: 'bg-primary-50 border-primary-200',
    green: 'bg-green-50 border-green-200',
    purple: 'bg-purple-50 border-purple-200',
    orange: 'bg-orange-50 border-orange-200',
  }

  const valueColors = {
    blue: 'text-primary-600',
    green: 'text-green-600',
    purple: 'text-purple-600',
    orange: 'text-orange-600',
  }


  return (
       <div className={`${colorStyles[color]} border rounded-xl p-6 text-center`}>
      <p className={`text-4xl font-bold ${valueColors[color]}`}>{value}</p>
      <p className="text-gray-600 mt-2">{title}</p>
    </div>
  )

}