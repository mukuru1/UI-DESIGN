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
<div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">User</th>
              <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">Role</th>
              <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">Status</th>
              <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">Last Login</th>
              <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {users.map((user) => (
              <tr key={user.email} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-primary-600 font-medium">
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{user.name}</p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                  </div>
                </td>

                 <td className="px-6 py-4 text-gray-600">{user.role}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    user.status === 'Active' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {user.status}
                  </span>
                </td>

                <td className="px-6 py-4 text-gray-500">{user.lastLogin}</td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button className="text-primary-600 hover:text-primary-700 font-medium">Edit</button>
                    <button className="text-red-600 hover:text-red-700 font-medium">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}