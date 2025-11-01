import { useState } from 'react'

export default function GradientMaker() {
  const [gradA, setGradA] = useState('#7C3AED')
  const [gradB, setGradB] = useState('#06B6D4')
  const [type, setType] = useState('linear')
  const [preview, setPreview] = useState('linear-gradient(90deg, #7C3AED, #06B6D4)')

  const apply = () => {
    const css = type === 'linear'
      ? `linear-gradient(90deg, ${gradA}, ${gradB})`
      : `radial-gradient(circle at center, ${gradA}, ${gradB})`
    setPreview(css)
  }

  const copy = () => {
    navigator.clipboard.writeText(`background: ${preview};`)
    alert('Gradient CSS copied!')
  }

  return (
    <div className="gradient-maker">
      <div className="grad-preview" style={{ background: preview }}></div>
      <div className="controls">
        <input type="color" value={gradA} onChange={e => setGradA(e.target.value)} />
        <input type="color" value={gradB} onChange={e => setGradB(e.target.value)} />
        <select value={type} onChange={e => setType(e.target.value)}>
          <option value="linear">Linear</option>
          <option value="radial">Radial</option>
        </select>
        <button onClick={apply}>Apply</button>
        <button onClick={copy}>Copy CSS</button>
      </div>
    </div>
  )
}
