import React from 'react';
import {render, screen, getByText} from '@testing-library/react';
import {def} from 'bdd-lazy-var/global';
import App from '../App'

def('rendered', () => render(<App />));

describe('App', () => {
  it('does not crash', () => {
    expect(() => $rendered).not.toThrowError()
  })

  it('renders Hello World', () => {
    // console.log($rendered.getByText('Hello World'))
    expect($rendered.getByText('Hello World')).toBeInTheDocument()
  })
})
