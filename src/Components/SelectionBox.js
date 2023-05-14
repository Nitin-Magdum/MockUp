import React from 'react';

import styled from 'styled-components';
import ColorSelection from './ColorSelection';


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Box = styled.div`
  width: 900px;
  height: 500px;
  border: 2px solid black;
  box-shadow: 0 0 10px #f50057, 0 0 20px #f50057, 0 0 30px #f50057, 0 0 40px #f50057, 0 0 50px #f50057, 0 0 60px #f50057, 0 0 70px #f50057, 0 0 80px #f50057, 0 0 90px #f50057, 0 0 100px #f50057;
`;



export default function App() {
  



  return (
    <Container>
      <Box>
        <ColorSelection  />
        
        

      </Box>
    </Container>
  );
}
