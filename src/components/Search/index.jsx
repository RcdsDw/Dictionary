import React, { useState } from "react";
import styled from "styled-components";
import search from "../../utils/functions/index"
import Phonetic from "../Phonetic";
import Phonetics from "../Phonetics";
import Noun from "../Noun";
import Title from "../Title";
import Meanings from "../Meanings";
import Footer from '../Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../../../src/index.css'

const SearchContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.text};
    font-family: 'Inter', sans-serif;
`

const SearchInput = styled.input `
    position: absolute;
    top: 70px;
    left: auto;
    height: 64px;
    width: 736px;
    border: none;
    border-radius: 15px;
    background-color: ${props => props.theme.searchBar};
    font-size: xx-large;
    padding-left: 15px;
    outline: none;
    color: ${props => props.theme.text};
    border: 2px solid ${props => props.error ? props.theme.red : props.theme.searchBar};
    caret-color: ${props => props.theme.violet};
    &:focus {
        border: 2px solid ${props => props.error ? props.theme.red : props.theme.violet};
    }
`

const SearchButton = styled.button `
    z-index: 10;
    width: 64px;
    height: 64px;
    background: none;
    border: none;
    position: absolute;
    top: 72px;
    right: 490px;
`

const ErrorText = styled.div `
    position: absolute;
    top: 150px;
    left: 490px;
    color: ${props => props.theme.red};
`

const AnswerWrapper = styled.div `
`

const MeaningsWrapper = styled.div `
    position: absolute;
    top: 34vh;
    left: 55vh;
    width: 70%;
`


function SearchBar() {

    function handleSearch(e) {
        setWord(e.target.value)
    }

    function handleKeyPress(e) {
        if (e.charCode === 13) {
           handleClick()
        }
    }

    const [word, setWord] = useState("")
    const [answers, setAnswers] = useState([])
    const [error, setError] = useState("")

    async function handleClick() {  
        let response = await search(word)
        setError("") 
        if (response === false) {
            setError("Whoops, this word not exist...")
        } else {
        setAnswers(response)
        }
    }
    
    return (
        <SearchContainer>
            <SearchInput type="text" id="search" name="search" placeholder="Write a word." onChange={handleSearch} onKeyPress={handleKeyPress} value={word} error={error}/>
            {error !== "" && <ErrorText>{error}</ErrorText>}
            <SearchButton type="button" id="button" name="button" onClick={handleClick}><FontAwesomeIcon icon={faSearch} size="2xl" style={{ color: "#b665ec" }} /></SearchButton>
            <Title>{word}</Title>

                {answers.map((answer, index) => 
                <AnswerWrapper key={`answer-${index}`}>
                    <Phonetic>{answer.phonetic}</Phonetic>
                    <Phonetics>{answer.phonetics && answer.phonetics[0] && answer.phonetics[0].audio ? answer.phonetics[0].audio : answer.phonetics[1].audio}</Phonetics>
                </AnswerWrapper>
                )}

            {answers.length > 0 && (
            <MeaningsWrapper>
                {answers[0].meanings && (
                <Noun
                    definitions={answers[0].meanings[0].definitions}
                    synonyms={answers[0].meanings[0].synonyms}
                    antonyms={answers[0].meanings[0].antonyms}
                />
                )}
                <Meanings
                verbs={answers[0].meanings.filter(
                    (meaning) => meaning.partOfSpeech === "verb"
                )}
                adjectives={answers[0].meanings.filter(
                    (meaning) => meaning.partOfSpeech === "adjective"
                )}
                />
                
                {answers[0] && (<Footer source={answers[0].sourceUrls}/>)}
            </MeaningsWrapper>
            )}
        </SearchContainer>
    )
}

export default SearchBar






