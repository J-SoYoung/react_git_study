import styled from "styled-components"

const Header = () =>{
  return (
    <>
      <HeaderBox className='nav_contain'>
        <div className='nav_title_L'>DIARY</div>
        <div className='nav_title_R'>DIARY</div>
      </HeaderBox>
    </>
  )
}

const HeaderBox = styled.div`
  width: 100%;
  height: 70px;
  color: #FBF8BE;
  font-weight: 600;
  font-size: 35px;
  background-color: #234E70;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
`;



export default Header;
