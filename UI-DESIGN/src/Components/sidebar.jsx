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
    <aside className="sidebar">
      <div className="brand">
        <div className="logo">i</div>
        <div>
          <div style={{fontWeight:700}}>iHUZA</div>
          <div style={{fontSize:12,color:'var(--muted)'}}>INVENTORY</div>
        </div>
      </div>

      <nav className="nav">
        {navItems.map((item) => (
          <a key={item.name} href="#" className={item.active ? 'active' : ''}>{item.name}</a>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div style={{marginBottom:12}}>
          {stats.map((stat) => (
            <div key={stat.label} style={{display:'flex',justifyContent:'space-between',padding:'6px 0'}}>
              <span style={{color:'var(--muted)'}}>{stat.label}</span>
              <span style={{fontWeight:600}}>{stat.value}</span>
            </div>
          ))}
        </div>

        <button className="small-btn" style={{width:'100%'}}>Logout</button>
      </div>
    </aside>
  )
}
