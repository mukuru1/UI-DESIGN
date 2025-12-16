import React from 'react'

const users = [
  { name: 'John Smith', email: 'john.smith@ihuza.com', role: 'Admin', status: 'Active', lastLogin: '2 hours ago' },
  { name: 'Sarah Johnson', email: 'sarah.j@ihuza.com', role: 'Manager', status: 'Active', lastLogin: '5 hours ago' },
  { name: 'Michael Brown', email: 'm.brown@ihuza.com', role: 'Staff', status: 'Active', lastLogin: '1 day ago' },
  { name: 'Emily Davis', email: 'emily.d@ihuza.com', role: 'Staff', status: 'Inactive', lastLogin: '3 days ago' },
  { name: 'David Wilson', email: 'd.wilson@ihuza.com', role: 'Staff', status: 'Active', lastLogin: '6 hours ago' },
  { name: 'Lisa Anderson', email: 'lisa.a@ihuza.com', role: 'Manager', status: 'Active', lastLogin: '30 min ago' },
  { name: 'Robert Taylor', email: 'r.taylor@ihuza.com', role: 'Staff', status: 'Active', lastLogin: '2 days ago' },
  { name: 'Jennifer Miller', email: 'j.miller@ihuza.com', role: 'Staff', status: 'Active', lastLogin: '4 hours ago' },
  { name: 'Christopher Lee', email: 'c.lee@ihuza.com', role: 'Admin', status: 'Active', lastLogin: '1 hour ago' },
  { name: 'Amanda White', email: 'a.white@ihuza.com', role: 'Staff', status: 'Inactive', lastLogin: '1 week ago' },
]

export default function UsersTable() {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="flex justify-between items-center p-6 border-b">
        <h3 className="text-lg font-semibold text-gray-800">Users</h3>
        <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
          Add User
        </button>
      </div>