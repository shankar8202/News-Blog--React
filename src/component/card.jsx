import React,{useState,useEffect} from 'react'
import axios from "axios"
import CardChild from './cardChild'
import styled from 'styled-components';
const MainDiv=styled.div`
display:flex;
flex-wrap:wrap;
justify-content:space-between
`


//api key = 41bd8b048bbb45e295709c4d5291bfad
function Card() {
let [items,setItems]=useState([])
    useEffect(()=>{
    axios.get("https://newsapi.org/v2/everything?q=apple&from=2023-03-31&to=2023-03-31&sortBy=popularity&apiKey=41bd8b048bbb45e295709c4d5291bfad")
    .then((res)=>{
   setItems(res.data.articles)
console.log(res)
    })
    },[])
  return (
    <MainDiv>
        {items.map((data,index)=>{
            ;
   return <CardChild key={index}  item={data}/>
    // console.log(data)
    localStorage.setItem('Data', {data})
        })}
      
    </MainDiv>
  )
}

export default Card
// new Date().getTime