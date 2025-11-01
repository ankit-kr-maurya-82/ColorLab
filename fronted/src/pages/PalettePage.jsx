import { useState } from 'react'
import Palette from '../components/Palette'

export default function PalettePage() {
  const [baseColor, setBaseColor] = useState('#7C3AED')
  const [palette, setPalette] = useState(['#7C3AED','#06B6D4','#F59E0B','#EF4444','#10B981','#111827'])

  const randomColor = () => '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6,'0').toUpperCase()
  const randomize = () => setPalette(Array.from({length:6}, randomColor))
  const clear = () => setPalette([])

  return (
    <div className="page">
      <h2>Palette Generator</h2>
      <div className="controls">
        <input type="color" value={baseColor} onChange={e=>setBaseColor(e.target.value)} />
        <button onClick={()=>setPalette([baseColor,...palette])}>Add</button>
        <button onClick={randomize}>Random</button>
        <button onClick={clear}>Clear</button>
      </div>
      <Palette colors={palette} />
    </div>
  )
}
