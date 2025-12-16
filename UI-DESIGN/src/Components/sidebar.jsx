import React from 'react'

const navItems = [
  { name: 'Dashboard', active: true },
  { name: 'Users', active: false },
  { name: 'Products', active: false },
  { name: 'Assignments', active: false },
  { name: 'Categories', active: false },
]

const stats = [
  { label: 'Users', value: '116' },
  { label: 'Products', value: '100' },
  { label: 'Assignments', value: '10' },
]

export default function Sidebar() {
  return (
    <aside className="w-64 bg-primary-600 min-h-screen flex flex-col text-white">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
            <span className="text-primary-600 font-bold text-lg">i</span>
          </div>
          <div>
            <h1 className="text-xl font-bold">iHUZA</h1>
            <p className="text-xs text-primary-200">INVENTORY</p>
          </div>
        </div>

        <nav className="space-y-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href="#"
              className={`block px-4 py-3 rounded-lg transition-colors ${
                item.active
                  ? 'bg-primary-500 text-white font-medium'
                  : 'text-primary-100 hover:bg-primary-500/50'
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-6">
        <div className="bg-primary-500/30 rounded-lg p-4 mb-6">
          {stats.map((stat) => (
            <div key={stat.label} className="flex justify-between py-2 border-b border-primary-400/30 last:border-0">
              <span className="text-primary-100">{stat.label}</span>
              <span className="font-semibold">{stat.value}</span>
            </div>
          ))}
        </div>

        <button className="w-full flex items-center gap-3 px-4 py-3 text-primary-100 hover:bg-primary-500/50 rounded-lg transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Logout
        </button>
      </div>
    </aside>
  )
}
