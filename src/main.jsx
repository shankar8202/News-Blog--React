import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Card from './component/card'
import NewsApp from './component/readLater'
import Header from './component/header'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Header/>
    <Card/>
    {/* <NewsApp/> */}
  </React.StrictMode>,
)
