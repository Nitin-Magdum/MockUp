import styled from 'styled-components';
import FixedContainer from './Components/SimpleContainer'



const StyledBody = styled.body`
  /* hide scrollbar */
  scrollbar-width: none !important;
  -ms-overflow-style: none !important;

  /* hide scrollbar for Chrome and Safari */
  &::-webkit-scrollbar {
    display: none !important;
  }
`;


export default function App() {
  return (
   
    <div>

    <StyledBody>
    <FixedContainer/>
      </StyledBody>

    </div>
      
 
  );
}

