import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import UserContextProvider from './Context/userContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <UserContextProvider>
    <App />
    </UserContextProvider>
    </Router>
)
