import React from "react";
import styled from "styled-components";

const PhoneticText = styled.h2 `
    position: absolute;
    top: 25.5vh;
    left: 55vh;
    color: ${props => props.theme.violet};
    font-family: Inter-Regular, sans-serif;
`

function Phonetic({children}) {

    return (
            <PhoneticText>{children}</PhoneticText>
    )
}

export default Phonetic