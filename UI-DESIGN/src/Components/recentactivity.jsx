import React from 'react'

const activities = [
  { 
    title: 'Product added to inventory',
    description: 'MacBook Pro 16" M3 (PROD2024001)',
    date: 'Dec 4, 2024'
  },


  { 
    title: 'Product assigned to Sarah Johnson',
    description: 'Dell ThinkPad X1 Carbon (PROD2024001)',
    date: 'Dec 3, 2024'
  },

 { 
    title: 'Product assigned to Michael Brown',
    description: 'Apple MacBook Air M2 (PROD2024001)',
    date: 'Dec 2, 2024'
  },


  { 
    title: 'Product sent for maintenance',
    description: 'HP Spectre x360 - Screen replacement required',
    date: 'Jan 16, 2024'
  },

  { 
    title: 'New user registered',
    description: 'Amanda White - Staff Member',
    date: 'Jan 14, 2024'
  },
]

export default function RecentActivity() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Recent Activity</h3>
        <a href="#" className="text-primary-600 hover:text-primary-700 text-sm font-medium">View all</a>
      </div>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
            <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
            <div>
              <p className="font-medium text-gray-800">{activity.title}</p>
              <p className="text-sm text-gray-500">{activity.description}</p>
              <p className="text-xs text-gray-400 mt-1">{activity.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
