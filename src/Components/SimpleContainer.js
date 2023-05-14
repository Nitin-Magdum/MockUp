import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import BoxSx from './SelectionBox'




export default function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <BoxSx />
      </Container>
    </React.Fragment>
  );
}