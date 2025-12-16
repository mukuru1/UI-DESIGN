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