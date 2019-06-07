import React, { Component } from 'react';
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import Content from './Content/Content';
import styled from 'styled-components'


const NewsPageDiv = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #f1f1f1;
    color: #333;
    font-family: 'PT Sans', sans-serif;
`


export default class NewsPage extends Component{
    state = {
        username: ''
    }

    LogOut = () => {
        localStorage.setItem('username', '')
        window.location.reload('false')
    }

    render (){
        return (
            <NewsPageDiv>
                <TopBar logout = {this.LogOut}/>
                <Header />
                <Content />
            </NewsPageDiv>
        );
    }
}

