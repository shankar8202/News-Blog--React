import React, { useState, useEffect } from "react";
import axios from "axios";
import CardChild from "./cardChild";
import Footer from "./Footer";
import styled from "styled-components";
const MainDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

//api key = 41bd8b048bbb45e295709c4d5291bfad
function Card() {
  let [items, setItems] = useState([]);
  let [showPerPage, setShowPerPage] = useState(12);
  let [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  let PaginationChange =(start2 ,end2)=>{       //value which is come from Footer component
    setPagination({
      start:start2,
      end :end2
    })
  }
  useEffect(() => {
    const storedData = localStorage.getItem("Data");
    if (storedData) {
      //if storedata is true
      setItems(JSON.parse(storedData));
    } else {
      let axiosData = axios
        .get(
          "https://newsapi.org/v2/everything?q=apple&from=2023-03-31&to=2023-03-31&sortBy=popularity&apiKey=41bd8b048bbb45e295709c4d5291bfad"
        )
        .then((res) => {
          setItems(res.data.articles);
          localStorage.setItem("Data", JSON.stringify(res.data.articles));
          console.log(res);
        });
    }
  }, []);

  return (
    <>
      <MainDiv>
        {items.slice(pagination.start, pagination.end).map((data, index) => {
          return <CardChild key={index} item={data} />;
          // console.log(data)
        })}
      </MainDiv>
      <Footer showPerPage={showPerPage} PaginationChange={PaginationChange} />
    </>
  );
}

export default Card;
