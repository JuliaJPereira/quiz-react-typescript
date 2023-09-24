import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import QuizRoutes from './quiz-routes.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QuizRoutes />
  </React.StrictMode>,
)
