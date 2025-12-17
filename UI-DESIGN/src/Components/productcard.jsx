import React from 'react'

export default function ProductCard({ title, category, date, status }) {
  return (
    <div className="product-card">
      <div>
        <h4 style={{margin:0,fontWeight:600}}>{title}</h4>
        <div className="meta">{category} • {date}</div>
      </div>
      <div>
        <span style={{padding:'6px 10px',borderRadius:20,background:'#eef2ff',color:'var(--primary-600)',fontSize:12,fontWeight:600}}>{status}</span>
      </div>
    </div>
  )
}