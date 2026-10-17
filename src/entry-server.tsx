import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'

export const renderApp = () => renderToString(
  <StrictMode>
    <App />
  </StrictMode>,
)