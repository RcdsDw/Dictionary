import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const Play = styled.div `
    position: relative;
    left: 2px;
    opacity: 1;
    color: ${props => props.theme.violet}
`

const ButtonPlay = styled.button `
    border: none;
    border-radius: 25px;
    width: 50px;
    height: 50px;
    background-color: ${props => props.theme.violet}50;
    transition: 0.2s background-color;
    &:hover {
        background-color: ${props => props.theme.violet};
        & > ${Play} {
            color: #ffffff;
        }
    }
`

function ButtonSound({...props}) {

    return (
            <ButtonPlay {...props}>
                <Play>
                    <FontAwesomeIcon icon={faPlay} size={"lg"}/>
                </Play>
            </ButtonPlay>
    )
}

export default ButtonSound