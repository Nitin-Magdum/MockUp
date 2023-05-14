import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import styled from 'styled-components';
import BoxSx from './SelectionBox'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #444f64;
`;

export default function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container >
        <BoxSx />
      </Container>
    </React.Fragment>
  );
}
