import React from 'react'

export default function Topbar() {
  return (
    <header className="topbar">
      <div style={{display:'flex',alignItems:'center',gap:12}}>
        <h2 style={{margin:0}}>Dashboard</h2>
      </div>

      <div className="search">
        <input aria-label="Search" placeholder="Search products, users..." style={{width:'100%',padding:'10px 12px',borderRadius:10,border:'1px solid #e6e9ef'}} />
      </div>

      <div className="actions">
        <button className="small-btn">New</button>
        <div className="avatar">A</div>
      </div>
    </header>
  )
}
