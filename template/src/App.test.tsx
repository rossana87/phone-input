import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders the input', () => {
    render(<App />)
    const input = screen.getByPlaceholderText("(555) 555-5555")
    expect(input).toBeInTheDocument()
  })

  it('renders the button submit', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /submit/i })
    expect(button).toBeInTheDocument()
  })
})
