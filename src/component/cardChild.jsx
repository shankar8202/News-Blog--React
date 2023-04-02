import styled from 'styled-components';
const FlexDiv=styled.div`
display:flex;
flex-direction:column;
align-items:center;
gap:10px;
padding:30px;
margin-top:115px;
border:1px solid silver;
width:354px;
background-color:#e3dede;
border-radius:20px;
`

 const MainDiv=styled.div`
display:flex;
flex-wrap:wrap;
justify-content:space-between
`

 const Img=styled.img`
width:309px;
height:300px`

 const TitleDiv=styled.div`
height:20px`
const CardChild = (props) => {
  let { title,author,content,description,urlToImage,url } = props.item;
  return (
    <FlexDiv>
        <TitleDiv style={{overflow:'auto'}}><strong>Title : {title}</strong> </TitleDiv>
      
      <div><strong>Author: - </strong>{author}</div>
      
      
      <Img src={urlToImage} alt="Image logo" />
      <br />
      <div style={{overflow:'auto'}}><strong>content : -{content} </strong></div>
      {/* <div><strong>description : -</strong>  {description}</div> */}
      <a href={url}>read more</a>
    </FlexDiv>
  );
};

export default CardChild;