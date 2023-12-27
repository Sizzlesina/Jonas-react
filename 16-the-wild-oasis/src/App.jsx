/** @format */

import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyled";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.div`
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row type='horizontal'>
            <Heading type='h1'>The Wild Oasis</Heading>

            <div>
              <Heading type='h2'>Check in and out</Heading>
              <Button
                variation='primary'
                size='medium'
                onClick={() => alert("Check in")}>
                Check in{" "}
              </Button>
              <Button
                variation='secondary'
                size='small'
                onClick={() => alert("Check out")}>
                Check out{" "}
              </Button>
            </div>
          </Row>
          <Row>
            <Heading as='h3'>Form</Heading>
            <form>
              <Input type='number' placeholder='Numebr of guests' />
              <Input type='number' placeholder='Numebr of guests' />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
