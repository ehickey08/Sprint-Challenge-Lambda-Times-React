import React, { Component } from 'react';
import styled from 'styled-components'
import withAuthenticate from './components/Authentication/withAuthenticate'
import NewsPage from './components/NewsPage'

const AppDiv = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #f1f1f1;
    color: #333;
    font-family: 'PT Sans', sans-serif;
`
const ComponentFromWithAuthenticate = withAuthenticate(NewsPage)

const App = () => {
  return (
    <ComponentFromWithAuthenticate />
  )
}

export default App;
