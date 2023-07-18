import React from "react";
import styled from "styled-components";
import Ul from "../../utils/styledUl";

const MeaningsContainer = styled.div `

`

/* verb */

const VerbTitle = styled.h2 `
    display: flex;
    flex-direction: row;
    font-style: italic;
`

const VerbLine = styled.div`
    position: relative;
    top: 18px;
    left: 25px;
    width: 54%;
    height: 2px;    
    background: ${props => props.theme.greyLight}
`

const VerbContainer = styled.div `
`

const VerbWrapper = styled(Ul) `
`

const DefVerb = styled.li `
    position: relative;
    width: 62%;
    overflow: clip;
    left: -25px;
    line-height: 25px;
`

const ExVerb = styled.div `
    color: ${props => props.theme.greyLight};
`

const SynAntVerbContainer = styled.div`
    margin: 5vh 0px 4vh 0px;    
`

const SynVerbContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const SynVerbTitle = styled.div `
    font-family: Inter-Regular, sans-serif;
    color: ${props => props.theme.greyLight};
    margin-bottom: 20px;
`

const SynVerb = styled.div `
    position: relative;
    bottom: 0px;
    left: 10px;
    color: ${props => props.theme.violet};
    font-size: 13px;
`

const AntVerbContainer = styled.div`
    display: flex;
    flex-direction: row;
`


const AntVerbTitle = styled.div `
    font-family: Inter-Regular, sans-serif;
    color: ${props => props.theme.greyLight}    
`

const AntVerb = styled.div `
    position: relative;
    bottom: 0px;
    left: 10px;
    color: ${props => props.theme.violet};
    font-size: 13px;
`



/* adjective */

const AdjTitle = styled.h2 `
    display: flex;
    flex-direction: row;
    font-style: italic;
`

const AdjLine = styled.div`
    position: relative;
    top: 18px;
    left: 25px;
    width: 49%;
    height: 2px;    
    background: ${props => props.theme.greyLight}
`

const AdjContainer = styled.div `
`

const AdjWrapper = styled(Ul) `
`

const DefAdj = styled.li `
    position: relative;
    width: 62%;
    overflow: clip;
    left: -25px;
    line-height: 25px;
`

const ExAdj = styled.div `
    color: ${props => props.theme.greyLight};
`

const SynAntAdjContainer = styled.div`
    margin: 5vh 0px 4vh 0px;
`

const SynAdjContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const SynAdjTitle = styled.div `
    font-family: Inter-Regular, sans-serif;
    color: ${props => props.theme.greyLight};
    margin-bottom: 20px;    
`

const SynAdj = styled.div `
    position: relative;
    bottom: 0px;
    left: 10px;
    color: ${props => props.theme.violet};
    font-size: 13px;
`

const AntAdjContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const AntAdjTitle = styled.div `
    font-family: Inter-Regular, sans-serif;
    color: ${props => props.theme.greyLight}   
`

const AntAdj = styled.div `
    position: relative;
    bottom: 0px;
    left: 10px;
    color: ${props => props.theme.violet};
    font-size: 13px;
`

function Meanings({verbs, adjectives}) {

    return (
        <MeaningsContainer>
            {verbs.length > 0 && <VerbTitle>verb<VerbLine></VerbLine></VerbTitle>}

                {verbs && verbs.map((verb, index) => (
                    <VerbContainer key={`${verb}-${index}`}>
                        {verb.definitions.map((def) => (
                            <VerbWrapper key={`verbWrapper-${index}`}>
                                <DefVerb id="defVerb" key={`defVerb-word-${index}`}>
                                    {def.definition}
                                    <br/>
                                </DefVerb>
                                <ExVerb id="exVerb" key={`exVerb-word-${index}`}>
                                    {def.example}
                                </ExVerb>
                            </VerbWrapper>    
                        ))}
                        <SynAntVerbContainer>
                            <SynVerbContainer>
                                {verb.synonyms.length > 0 && <SynVerbTitle>Synonyms</SynVerbTitle>}
                                {verb.synonyms && verb.synonyms.map((synonym, index) => (
                                    <SynVerb id="synVerb" key={`synVerb-word-${index}`}>{synonym}, </SynVerb>
                                ))}
                            </SynVerbContainer>
                            <AntVerbContainer>
                                {verb.antonyms.length > 0 && <AntVerbTitle>Antonyms</AntVerbTitle>}
                                {verb.antonyms && verb.antonyms.map((antonym, index) => (
                                    <AntVerb id="antVerb" key={`antVerb-word-${index}`}>{antonym}, </AntVerb>
                                ))}
                            </AntVerbContainer>
                        </SynAntVerbContainer>
                    </VerbContainer>
                ))}


            {adjectives.length > 0 && <AdjTitle>adjective<AdjLine></AdjLine></AdjTitle>}

                {adjectives && adjectives.map((adjective, index) => (
                    <AdjContainer key={`${adjective}-${index}`}>
                        {adjective.definitions.map((def) => (
                            <AdjWrapper key={`adjWrapper-${index}`}>
                                <DefAdj id="defAdj" key={`defAdj-word-${index}`}>
                                    {def.definition}
                                    <br/>
                                </DefAdj>
                                <ExAdj id="exAdj" key={`exAdj-word-${index}`}>
                                    {def.example}
                                </ExAdj>
                            </AdjWrapper>    
                        ))}
                        <SynAntAdjContainer>
                            <SynAdjContainer>
                                {adjective.synonyms.length > 0 && <SynAdjTitle>Synonyms</SynAdjTitle>}
                                {adjective.synonyms && adjective.synonyms.map((synonym, index) => (
                                    <SynAdj id="synAdj" key={`synAdj-word-${index}`}>{synonym}, </SynAdj>
                                ))}
                            </SynAdjContainer>
                            <AntAdjContainer>
                                {adjective.antonyms.length > 0 && <AntAdjTitle>Antonyms</AntAdjTitle>}
                                {adjective.antonyms && adjective.antonyms.map((antonym, index) => (
                                    <AntAdj id="antAdj" key={`antAdj-word-${index}`}>{antonym}, </AntAdj>
                                ))}
                            </AntAdjContainer>
                        </SynAntAdjContainer>
                    </AdjContainer>
                ))}
        </MeaningsContainer>
    )
}

export default Meanings