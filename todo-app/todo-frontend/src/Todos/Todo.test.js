import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Todo from './Todo'

test('Renders Todo text', () => {
    const todo = {
      text: 'foo',
      done: true
    }
    const mock = jest.fn()

    render(<Todo todo={todo} handleComplete={mock} handleDelete={mock} />)
    const element = screen.getByText('foo')
    expect(element).toBeDefined()
  })
  