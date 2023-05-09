import React from "react";
import styled from "styled-components";
import Ul from "../../utils/styledUl";

const NounContainer = styled.div `
`

const NounTitle = styled.h2 `
    display: flex;
    flex-direction: row;
    font-style: italic;
`

const NounLine = styled.div`
    position: relative;
    top: 18px;
    left: 25px;
    width: 53%;
    height: 2px;    
    background: ${props => props.theme.greyLight}
`

const MeaningTitle = styled.div `
    font-family: Inter-Regular, sans-serif;
    color: ${props => props.theme.greyLight};
`

const DefContainer = styled.div `
    position: relative;
    width: 62%;
    overflow: clip;
    left: -25px;
    line-height: 25px;
`

const DefWrapper = styled(Ul) `
`

const Def = styled.li `

`

const Example = styled.div `
    position: relative;
    left: 14px;
    color: ${props => props.theme.greyLight};
`

const SynAntContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    overflow: hidden;
    margin: 5vh 0px 3vh 0px;
`

const SynContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const SynonymsTitle = styled.div `
    font-family: Inter-Regular, sans-serif;
    color: ${props => props.theme.greyLight};
    margin-bottom: 20px;
`

const Synonyms = styled.div `
    position: relative;
    bottom: 0px;
    left: 10px;
    color: ${props => props.theme.violet};
    font-size: 13px;
`

const AntContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const AntonymsTitle = styled.div `
    font-family: Inter-Regular, sans-serif;
    color: ${props => props.theme.greyLight}
`

const Antonyms = styled.div `
    position: relative;
    bottom: 0px;
    left: 10px;
    color: ${props => props.theme.violet};
    font-size: 13px;
`

function Noun({definitions, synonyms, antonyms}) {

    return (
            <NounContainer>
                <NounTitle>noun <NounLine></NounLine></NounTitle>
                <MeaningTitle>Meaning</MeaningTitle>
                <DefContainer>
                    {definitions && definitions.map((definition, index) => (
                        <DefWrapper key={`${definition}-${index}`}>
                            <Def id="def" key={`def-word-${index}`}>{definition.definition}<br/></Def>
                            <Example id="example" key={`ex-word-${index}`}>{definition.example}</Example>
                        </DefWrapper>
                    ))}
                </DefContainer>
                <SynAntContainer>
                    <SynContainer>
                        {synonyms.length > 0 && <SynonymsTitle>Synonyms</SynonymsTitle>}
                            {synonyms && synonyms.map((synonym, index) => (
                                <Synonyms id="syn" key={`syn-word-${index}`}>{synonym}, </Synonyms>
                            ))}
                    </SynContainer>
                    <AntContainer>
                        {antonyms.length > 0 && <AntonymsTitle>Antonyms</AntonymsTitle>}
                            {antonyms && antonyms.map((antonym, index) => (
                                <Antonyms id="ant" key={`ant-word-${index}`}>{antonym}</Antonyms>
                            ))}
                    </AntContainer>
                </SynAntContainer>  
            </NounContainer>
)}

export default Noun