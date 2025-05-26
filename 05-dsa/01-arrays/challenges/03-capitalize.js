
const capitalize = sentence => {

    const words = sentence.split(" ");
    const capitalizedWords = words.map(word => word.split("")[0].toUpperCase() + word.slice(1));

    return capitalizedWords.join(' ')
    

}

const capitalizeConcised = sentence => {
    return sentence
        .split(" ")
        .map(word => word.split("")[0].toUpperCase() + word.slice(1))
        .join(' ');
}

console.log(capitalize("hello how are you?"))
console.log(capitalize("hello I'm Mahendra, full stack developer"))

console.log(capitalizeConcised("hello how are you?"))
console.log(capitalizeConcised("hello I'm Mahendra, full stack developer another word"))