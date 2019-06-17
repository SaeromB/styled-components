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
  background: ${({ type }) => (type === 'cancel' ? 'tomato': 'indigo')};
`;

const AppWrapper = styled.div`
  header{
    background: teal;
    &: hover {
      background: green;
    }
  }
`

function App() {
  return (
    <AppWrapper>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Heading>
          Edit <code>src/App.js</code> and save to reload.
        </Heading>
          <Button type="save">Save</Button>
          <Button type="cancel">Cancel</Button>
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
