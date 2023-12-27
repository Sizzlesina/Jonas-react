/** @format */

import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyled";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading type='h1'>The Wild Oasis</Heading>
        <Heading type='h2'>Check in and out</Heading>
        <Button onClick={() => alert("Check in")}>Check in </Button>
        <Button onClick={() => alert("Check out")}>Check out </Button>

        <Heading as='h3'>Form</Heading>
        <Input type='number' placeholder='Numebr of guests' />
        <Input type='number' placeholder='Numebr of guests' />
      </StyledApp>
    </>
  );
}

export default App;
