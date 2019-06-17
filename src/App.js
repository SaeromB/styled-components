import React from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import './App.css';

const Heading = styled.h1 `
  font-size: 2rem;
`;

const color = 'white';

const Button = styled.button`
  padding: 5px 10px;
  boarder-radious: 4px;
  color: ${color};
  font-size: 2rem;
  boarder: none;
  background: indigo;
`;

const CancelButton = styled(Button)`
background: tomato;
`;


const AppWrapper = styled.div`
  header{
    background: teal;
  }

  ${Button}{
    margin-bottom: 2rem;
  }
`
const Fake = ({className}) => (
  <div className={className}>
    <h2>I'm a fake component!!</h2>
  </div>
);

const DoubleFake = styled(Fake)`
  h2{
    color: red;
  }
`;

function App() {
  return (
    <AppWrapper>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Heading>
          Edit <code>src/App.js</code> and save to reload.
        </Heading>
        <DoubleFake/>
          <Button>Save</Button>
          <CancelButton>Cancel</CancelButton>
        <Heading>
          Heading2
        </Heading>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </AppWrapper>
  );
}

export default App;
