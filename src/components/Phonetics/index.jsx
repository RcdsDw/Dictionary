import React, { useRef } from "react";
import styled from "styled-components";
import ButtonSound from "../../utils/styledButton"

const PhoneticsContainer = styled.div`
    background-color: ${props => props.theme.violet} 0.5;
    position: absolute;
    top: 25vh;
    right: 56vh;
`

const PhoneticsButton = styled(ButtonSound) `
    
`

const PhoneticsSound = styled.audio `

`

function Phonetics({children}) {

    function handleClick({audioRef}) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
    }

    const audioRef = useRef(null);

    return (
        <PhoneticsContainer>
            <PhoneticsButton type="button" id="button" name="button" onClick={() => handleClick({ audioRef })}></PhoneticsButton>
            <PhoneticsSound ref={audioRef} id="audio" src={children}/>
        </PhoneticsContainer>
    )
}

export default Phonetics