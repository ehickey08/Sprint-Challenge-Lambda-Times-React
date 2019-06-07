import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TabUnselected = styled.div`
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;
    color: #fff;
    background-color: #333;
    margin: 0 5px;
    padding: 2px 10px;
    font-size: 12px;
    letter-spacing: 2px;
    cursor: pointer;
    font-weight: bold;

    &:hover{
        text-decoration: underline;
    }
`

const TabSelected = styled(TabUnselected)`
    background-color: #fff;
    color: #333;
    border: 2px solid #333;
`
const Tab = props => {
    const Component = props.tab === props.selectedTab ? TabSelected : TabUnselected;

    return(
        <Component onClick={() => props.selectTabHandler(props.tab)}>
            {props.tab.toUpperCase()}
        </Component>
    )
}

Tab.propTypes ={
    tab: PropTypes.string,
    selectedTab: PropTypes.string,
    selectTabHandler: PropTypes.func,
}

export default Tab;
