import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Card from './component/card'

import Header from './component/header'

// import NewsArticleList from './component/readLater'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Header/>
    <Card/>
    {/* <Footer/> */}
    {/* <NewsApp/> */}
    
  </React.StrictMode>,
)
