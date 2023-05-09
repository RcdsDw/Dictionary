import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';



const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 3vh 0px 5px 0px;
`

const FooterLine = styled.div`
    width: 60%;
    height: 2px;    
    background: ${props => props.theme.greyLight}
`

const FooterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: 5vh 0px 5px 0px;
`

const FooterLink = styled.a `
    font-size: 12px;
    color: ${props => props.theme.greyLight}
`

const FooterText = styled.div`
    font-size: 12px;
`

function Footer({ source }) {

    return (
        <FooterContainer>
            <FooterLine/>
            <FooterWrapper>
                <FooterText>Source </FooterText>
                <FooterLink href={source[0]}>  { source[0] }</FooterLink>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} size={"xs"}/>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer