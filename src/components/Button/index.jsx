import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../context/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

const ButtonTheme = styled.button `
    position: absolute;
    width: 30px;
    height: 30px; 
    border: 1px solid ${props => props.theme.text};
    border-radius: 25px;
    top: 20px;
    right: 29%;
    background-color: ${props => props.theme.background};
    &:hover {
        transition: border 0.5s, background-color 0.5s;
        border: 1px solid ${props => props.theme.violet};
        background-color: ${props => props.theme.violet}60;
    }
`

const StyledIcon = styled.div`
`

function Button() {

    const {currentTheme, setCurrentTheme} = useContext(ThemeContext)

    function handleClick() {
        setCurrentTheme(currentTheme === 'dark' ? 'light' : 'dark');
    }

    return (
        <ButtonTheme type="button" id="themeButton" name="themeButton" onClick={handleClick}>
            <StyledIcon>
                {currentTheme === 'dark' 
                ? 
                <FontAwesomeIcon icon={faSun} style={{color: "#ffffff"}}/> 
                : 
                <FontAwesomeIcon icon={faMoon} style={{color: "#000000"}}/>
                }
            </StyledIcon>
        </ButtonTheme>
    )
}

export default Button