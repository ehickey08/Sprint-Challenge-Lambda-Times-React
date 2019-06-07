import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TabsDiv = styled.div`
    border-bottom: 1px solid lightgrey;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 100%;
    height: 47px;
    background-color: #fff;

    @media(min-width: 1280px){
        width: 1280px;
    }
`

const TopicsDiv = styled.div`
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;
`

const TabTitle = styled.span`
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
`
const Tabs = ({tabs, ...rest}) => {
  return (
    <TabsDiv>
      <TopicsDiv>
        <TabTitle className="title">TRENDING TOPICS:</TabTitle>
        {tabs.map(tab => <Tab tab = {tab} {...rest}/>)}
      </TopicsDiv>
    </TabsDiv>
  );
};

Tabs.propTypes ={
    tabs: PropTypes.arrayOf(
        PropTypes.string,
    ),
    selectedTab: PropTypes.string,
    selectTabHandler: PropTypes.func,
}
export default Tabs;
