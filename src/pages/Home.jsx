import styled from "styled-components";

import Diary from "../components/Diary";
import InputForm from "../components/InputForm";
import Grid from "../element/Grid";


const Home = () => {
  return (
    <>
    <InputForm />
    <Grid BG_color='#234E70'>
      <Diary />
    </Grid>
    
    </>
  )
}



export default Home;