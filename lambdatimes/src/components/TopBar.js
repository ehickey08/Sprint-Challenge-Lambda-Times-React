import React from 'react';
import styled from 'styled-components'

const TopBarDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: none;
    flex-direction: row;
    position: fixed;
    height: 44px;
    background-color: #333;
`
const TopContainerDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: none;
    align-items: none;
    flex-direction: row;
    color: #fff;
    letter-spacing: 1px;
    padding: 0 10px;

    @media(min-width:1280px){
        width: 1280px;
    }
`

const LeftDiv = styled.div`
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;
    flex: 1;
    font-size: 11px;
`
const LeftSpan = styled.span`
    cursor: pointer;
    margin-right: 25%;
    font-weight: bold;
`

const CenterDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex: 3;
    font-size: 9px;
`
const CenterSpan = styled.span`
    cursor: pointer;
    margin-right: 5%;

    &:last-child{
        margin-right: 0;
    }

    &:hover{
        text-decoration: underline;
    }
`

const RightDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
    flex: 1;
    font-size: 11px;
    font-weight: bold;
`
const RightSpan = styled.span`
    cursor:pointer;
`

const TopBar = props => {
  return (
    <TopBarDiv>
      <TopContainerDiv>
        <LeftDiv>
          <LeftSpan>TOPICS</LeftSpan><LeftSpan>SEARCH</LeftSpan>
        </LeftDiv>
        <CenterDiv>
          <CenterSpan>GENERAL</CenterSpan><CenterSpan>BROWNBAG</CenterSpan><CenterSpan>RANDOM</CenterSpan><CenterSpan>MUSIC</CenterSpan><CenterSpan>ANNOUNCEMENTS</CenterSpan>
        </CenterDiv>
        <RightDiv>
          <RightSpan onClick = {() => props.logout()}>LOG OUT</RightSpan>
        </RightDiv>
      </TopContainerDiv>
    </TopBarDiv>
  )
}

export default TopBar;