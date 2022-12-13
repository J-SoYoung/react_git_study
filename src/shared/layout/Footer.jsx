import styled from "styled-components"



const Footer = () => {
  return (
    <FootBox>
      <h1>2022@ 정소영-허정은-양진규-DIARY-제목은무엇인갘ㅋㅋ </h1>
    </FootBox>
  )
}


const FootBox = styled.div`
  width: 100%;
  height: 70px;
  color: #FBF8BE;
  font-weight: 600;
  font-size: 20px;
  background-color: #234E70;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
`;

export default Footer;