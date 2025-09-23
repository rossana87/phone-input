import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState('')


  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(onFormat(event.target.value));
  }

  const onSubmit = () => {
    setValue('')
  }

  return (
    <div>
      <input
        type="tel"
        name="tel"
        placeholder="(555) 555-5555"
        id="tel"
        value={value}
        onChange={onChange}
      />
      <button
        disabled={value.length < 14}
        onClick={onSubmit}
      >Submit</button>
    </div>
  )
}

export default App

const onFormat = (str: string): string => {
  const rawString = str.replace(/\D/g, '');
  let output = ''

  if (rawString.length > 0) {
    output += '('
    output += rawString.substring(0, 3)
  }
  if (rawString.length > 3) {
    output += ') '
    output += rawString.substring(3, 6)
  }
  if (rawString.length > 6) {
    output += '-'
    output += rawString.substring(6, 10)
  }

  return output
}