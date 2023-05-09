async function search(word) {
    let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    if (response.ok) {
       return await response.json()
    } else {
        return false;
    }
}

export default search