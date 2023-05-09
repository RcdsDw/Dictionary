import React from 'react';
import { createRoot } from 'react-dom/client';
import SearchBar from './components/Search';
import Header from './components/Header'
import ThemeProviders from './context/theme';
import styled from 'styled-components'
import "./index.css"
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => props.theme.background};
  }
`;


const Container = styled.div `
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.background};
`

createRoot(document.getElementById('root')).render(
  <ThemeProviders>
    <GlobalStyle/>
    <Container>
      <Header/>
      <SearchBar/>
    </Container>
  </ThemeProviders>
);