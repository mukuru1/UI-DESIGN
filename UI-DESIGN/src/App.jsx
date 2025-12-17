import React from 'react'
import Topbar from './Components/topbar'
import QuickActions from './Components/quickactions'
import StatsCard from './Components/statscard'
import ProductCard from './Components/productcard'
import UsersTable from './Components/userstable'
import Sidebar from './Components/sidebar'

export default function App(){
  const stats = [
    { label: 'Total Users', value: 116, icon: 'users' },
    { label: 'Total Products', value: 100, icon: 'package' },
    { label: 'Assigned Products', value: 10, icon: 'check' },
    { label: 'Unassigned Products', value: 90, icon: 'warning' },
  ]

  const products = [
    { title: 'MacBook Pro 16"', category: 'Laptops', date: 'Dec 10, 2024', status: 'In Stock' },
    { title: 'Dell XPS 13', category: 'Laptops', date: 'Dec 9, 2024', status: 'In Stock' },
    { title: 'iPhone 15 Pro', category: 'Mobile', date: 'Dec 8, 2024', status: 'Low Stock' },
    { title: 'iPad Air', category: 'Tablets', date: 'Dec 7, 2024', status: 'In Stock' },
    { title: 'Surface Pro 9', category: 'Tablets', date: 'Dec 6, 2024', status: 'Out of Stock' },
  ]

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1 p-6 md:p-8 lg:p-10">
        <QuickActions />
        <main className="space-y-6">
          {/* Hero */}
          <div className="rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-primarycolor-500 to-primarycolor-400 text-white rounded-lg p-6 shadow-card">
              <div className="flex items-start justify-between gap-4">
                <div className="max-w-2xl">
                  <h3 className="text-xl md:text-2xl font-semibold leading-tight">iHUZA INVENTORY - System Overview</h3>
                  <p className="mt-2 text-sm opacity-95">Monitor your IHUZA inventory and product assignments in real-time.</p>
                  <div className="mt-4 inline-flex items-center gap-3 text-sm bg-white/10 px-3 py-1.5 rounded-full">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>All Systems Operational</span>
                  </div>
                </div>

                <div className="text-right hidden md:block">
                  <div className="text-sm opacity-90">Welcome Back, Admin</div>
                  <div className="text-xs mt-2 opacity-80">Admin Dashboard</div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s,i)=>(
              <StatsCard key={i} label={s.label} value={s.value} />
            ))}
          </div>

          {/* Content area */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <section className="lg:col-span-2 card card-border">
              <div className="flex items-center justify-between mb-5">
                <h4 className="text-lg font-semibold">Recent Added Products</h4>
                <button className="text-sm bg-primarycolor-500 hover:bg-primarycolor-600 text-white px-3 py-2 rounded-md shadow-sm">Add Product</button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {products.map((p, idx) => <ProductCard key={idx} {...p} />)}
              </div>
            </section>

            <section className="card card-border">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold">Users</h4>
                <button className="text-sm bg-primarycolor-50 hover:bg-primarycolor-100 text-primarycolor-700 px-3 py-1.5 rounded-md">Add User</button>
              </div>

              <UsersTable />
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}