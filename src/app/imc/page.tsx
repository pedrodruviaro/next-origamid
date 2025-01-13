"use client"

import { FormEvent, useState } from "react"

export default function ImcPage() {
  const [height, setHeight] = useState<number>(0)
  const [weight, setWeight] = useState<number>(0)
  const [result, setResult] = useState<string>("")

  const calculateImc = () => {
    if (!weight || !height) return ""
    return (weight / ((height / 100) * (height / 100))).toFixed(2)
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    setResult(calculateImc())
  }

  return (
    <div>
      <h1>IMC</h1>
      {result && <h2>Result: {result}</h2>}
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Height"
          autoFocus
          value={height}
          onChange={(e) => setHeight(Number(e.target.value))}
        />
        <input
          type="number"
          placeholder="Weight"
          value={weight}
          onChange={(e) => setWeight(Number(e.target.value))}
        />
        <button type="submit">Calculate</button>
      </form>
    </div>
  )
}
