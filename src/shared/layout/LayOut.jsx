import styled from "styled-components"
import Footer from "./Footer";
import Header from "./Header";


const Layout = ({ children }) => {

  return (
    <div>
      <Header />
      <LayOutBox>
        {children}
      </LayOutBox>
      <Footer />
    </div>
  );
}

const LayOutBox = styled.div`
  width: 100%;
  height: 100vh;
  /* border: 1px solid black; */
  font-family:  'NanumSquareNeo-Variable';
`

export default Layout;