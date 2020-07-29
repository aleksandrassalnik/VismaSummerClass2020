const paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel ornare ipsum. Proin erat massa, ornare et vehicula eget, auctor eu lectus. Nunc at lorem.'

const WordSearch = (w) => {
    //checks for the word and what's wrapped around it, allows only punctuation and whitespaces around chosen word.
    const regex = new RegExp(`\\b${w}\\b`);
    const search = (paragraph.search(regex));
    if (search !== -1) return true;
    else return false;
}

console.log(WordSearch('dolor'))