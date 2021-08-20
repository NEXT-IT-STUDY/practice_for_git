import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  const renderApp = () => render((
    <App />
  ));

  it('should be render "Hello!!"', () => {
    const { container } = renderApp();

    expect(container).toHaveTextContent('Hello!!');
  });
});
