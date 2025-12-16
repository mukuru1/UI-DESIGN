import React from 'react'

const actions = [
  { title: 'View Users', description: 'View all registered users' },
  { title: 'View Products', description: 'View all registered products' },
  { title: 'View Assignments', description: 'View all product assignments' },
]

export default function QuickActions() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
      <div className="space-y-3">
        {actions.map((action) => (
          <div key={action.title} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <div>
              <p className="font-medium text-gray-800">{action.title}</p>
              <p className="text-sm text-gray-500">{action.description}</p>
            </div>
            <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors text-sm">
              Go
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
