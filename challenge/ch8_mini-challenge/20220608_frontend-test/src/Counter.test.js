import React from 'react';
import '@babel/polyfill';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Counter from './Counter'

  afterEach(cleanup);
  
  it('Test Increment', async () => {
    const { getByTestId } = render(<Counter />); 
    
    fireEvent.click(getByTestId('increment'))

    expect(getByTestId('counter').textContent).toBe('1')
  });

  it('Test Descrement', () => {
    const { getByTestId } = render(<Counter />); 
    
    fireEvent.click(getByTestId('decrement'))

    expect(getByTestId('counter').textContent).toBe('-1')
  });