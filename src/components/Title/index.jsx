import React from "react";
import styled from "styled-components";

const TitleText = styled.h1 `
    position: absolute;
    top: 150px;
    left: 55vh;
    font-size: 50px;
`

function Title({children}) {
    return (
        <TitleText>{children}</TitleText>
    )
}

export default Title