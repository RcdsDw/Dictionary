import React from "react";
import styled from "styled-components";
import Button from "../Button";

const HeaderMenu = styled.div `
    width: 100%;
    height: 50px;
    background-color: ${props => props.theme.background};
`

function Header() {

    return (
            <HeaderMenu>
                <Button></Button>
            </HeaderMenu>
    )
}

export default Header