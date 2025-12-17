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
    <div className="card">
      <div className="card-header">
        <h3 style={{margin:0,fontWeight:700}}>Users</h3>
        <button className="small-btn">Add User</button>
      </div>

      <div className="users-table">
        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Role</th>
              <th>Status</th>
              <th>Last Login</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.email}>
                <td>
                  <div style={{display:'flex',alignItems:'center',gap:12}}>
                    <div className="avatar" aria-hidden>{user.name.split(' ').map(n=>n[0]).join('')}</div>
                    <div>
                      <div style={{fontWeight:600}}>{user.name}</div>
                      <div style={{color:'var(--muted)',fontSize:13}}>{user.email}</div>
                    </div>
                  </div>
                </td>
                <td style={{color:'var(--muted)'}}>{user.role}</td>
                <td>
                  <span style={{padding:'6px 10px',borderRadius:20,background:user.status==='Active'?'#ecfdf5':'#f3f4f6',color:user.status==='Active'?'#047857':'#6b7280',fontSize:12,fontWeight:600}}>{user.status}</span>
                </td>
                <td style={{color:'var(--muted)'}}>{user.lastLogin}</td>
                <td>
                  <div style={{display:'flex',gap:8}}>
                    <button style={{background:'transparent',border:'none',color:'var(--primary-600)',cursor:'pointer'}}>Edit</button>
                    <button style={{background:'transparent',border:'none',color:'#ef4444',cursor:'pointer'}}>Delete</button>
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