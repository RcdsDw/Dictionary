import React from "react";
import styled from "styled-components";

const StyledUl = styled.ul `
    list-style: none;

    li::before {
        content: "•";
        margin-right: 0.5rem;
        color: ${props => props.theme.violet};
    }
`

function Ul({children}) {

    return (
            <StyledUl>{children}</StyledUl>
    )
}

export default Ul