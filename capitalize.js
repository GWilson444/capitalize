// DEFINE YOUR FUNCTION BELOW:
function capitalize(str) {
    const firstLetter = str.slice(0, 1).toUpperCase();
    const endWord = str.slice(1);
    return firstLetter + endWord;
}