import React from 'react'

const Palette = ({colors}) => {
  return (
    <div className='palette'>
      {colors.map((c, i) => (
        <div
          key={i}
          className="swatch"
          style={{ background: c }}
          onClick={() => navigator.clipboard.writeText(c)}
          title="Click to copy"
        >
          <span>{c}</span>
        </div>
      ))}
    </div>
  )
}

export default Palette
