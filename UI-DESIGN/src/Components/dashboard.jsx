import React from 'react'
import StatsCard from './statscard'
import ProductCard from './productcard'
import UsersTable from './userstable'
import RecentActivity from './recentactivity'
import QuickActions from './quickactions'


const stats = [
  { title: 'Total Users', value: '116', color: 'blue' },
  { title: 'Total Products', value: '100', color: 'green' },
  { title: 'Assigned Products', value: '10', color: 'purple' },
  { title: 'Unassigned Products', value: '90', color: 'orange' },
]

const products = [
  { name: 'MacBook Pro 16"', category: 'Laptops', date: 'Dec 10, 2024', status: 'In Stock' },
  { name: 'Dell XPS 13', category: 'Laptops', date: 'Dec 9, 2024', status: 'In Stock' },
  { name: 'iPhone 15 Pro', category: 'Mobile', date: 'Dec 8, 2024', status: 'Low Stock' },
  { name: 'iPad Air', category: 'Tablets', date: 'Dec 7, 2024', status: 'In Stock' },
  { name: 'Surface Pro 9', category: 'Tablets', date: 'Dec 6, 2024', status: 'Out of Stock' },
]

export default function Dashboard() {
  return (
    <div className="p-6">
      <header className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Welcome Back, Admin</h1>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-gray-600">Admin@ihuza.com</span>
          <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
            <span className="text-primary-600 font-medium">A</span>
          </div>
        </div>
      </header>

      <div className="bg-white rounded-xl p-6 mb-6 shadow-sm">
        <h2 className="text-lg font-semibold text-primary-600 mb-2">iHUZA INVENTORY - System Overview</h2>
        <p className="text-gray-600 mb-4">Monitor your iHUZA inventory and product assignments in real-time.</p>
        <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          All Systems Operational
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-6">
        {stats.map((stat) => (
          <StatsCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="bg-white rounded-xl p-6 mb-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Added Products</h3>
        <div className="grid grid-cols-3 gap-4">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>