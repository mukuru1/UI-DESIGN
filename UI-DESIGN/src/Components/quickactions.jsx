import React from 'react'

const actions = [
  { title: 'View Users', description: 'View all registered users' },
  { title: 'View Products', description: 'View all registered products' },
  { title: 'View Assignments', description: 'View all product assignments' },
]

export default function QuickActions() {
  return (
    <div className="card">
      <h3 style={{margin:0,fontWeight:700,marginBottom:12}}>Quick Actions</h3>
      <div style={{display:'grid',gap:10}}>
        {actions.map((action) => (
          <div key={action.title} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:12,background:'#fbfbfd',borderRadius:8}}>
            <div>
              <div style={{fontWeight:600}}>{action.title}</div>
              <div style={{color:'var(--muted)',fontSize:13}}>{action.description}</div>
            </div>
            <button className="small-btn">Go</button>
          </div>
        ))}
      </div>
    </div>
  )
}
