import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { StoreProvide } from './hooks/Store.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreProvide>
      <App />
    </StoreProvide>
  </React.StrictMode>,
)
