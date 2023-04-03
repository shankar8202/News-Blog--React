import React,{useState,useEffect} from 'react'
import styled from "styled-components"
const Flex = styled.div`
  display: flex;
  justify-content: center;
  gap:20px;
  margin-top:20px;

 `;
 const Button = styled.button`
 background-color: #2f2e30;
 color: white
 `;

function Footer(props) {
    let {showPerPage,PaginationChange}=props;
    
    // console.log(showPerPage,"showPerPage")
    let [counter, setCounter]=useState(1)
    
    useEffect(()=>{
    let value = showPerPage * counter
    // console.log(value-showPerPage ,"value-showPerPage")
    // console.log(value ,"value")
    PaginationChange(value-showPerPage,value)
    },[counter,console.log(counter,"counter")])


    // Function for next Button
    let FunctionForPre=(data)=>{
    if(data==="Previous"){
        if(counter===1){
            setCounter(1)
        }else{
            setCounter(counter-1)
        }
    }
    else if(data ==="Next"){
    if(counter===9){
        setCounter(9)
    }else{
        setCounter(counter+1)
    }
   }

    }

  return (
    <Flex>
      <Button onClick={()=>FunctionForPre("Previous")} >Previous</Button>
      <Button>1 </Button>
      <Button>2 </Button>
      <Button>3 </Button>
      <Button>4 </Button>
      <Button>5 </Button>
      <Button>6 </Button>
      <Button>7 </Button>
      <Button>8 </Button>
      <Button onClick={()=>FunctionForPre("Next")}>Next</Button>
    </Flex>
  )
}

export default Footer
