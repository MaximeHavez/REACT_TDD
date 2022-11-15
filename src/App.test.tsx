import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {

  render(<App />); // rendu du composant dans le test bed (conteneur de test)
  const linkElement = screen.getByText(/learn react/i); // Recup de l'élement qui contient le text "learn react" (regexp)
  expect(linkElement).toBeInTheDocument(); // on teste que l'élement est présent dans le DOM
});
