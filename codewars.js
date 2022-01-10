// Vowel remover
/*const shortcut = str => {for (let a = 0; a < str.length; a++) if ('euioa'.includes(str[a])) {str = str.slice(0, a) + str.slice(a + 1); a--}; return str}
console.log(shortcut("goodbye"));*/

// ASCII Total
/*const uniTotal = str => [...str].reduce((acc, char) => acc + char.charCodeAt(0), 0);
console.log(uniTotal('aaa'));*/

// Points of Reflection
/*const symmetricPoint = ([a, b], [c, d]) => [c * 2 - a, d * 2 - b]
console.log(symmetricPoint([10, -10], [-10, 10]));*/

// Fake Binary
/*const fakeBin = str => str.replace(/[1234]/g, '0').replace(/[56789]/g, '1')
console.log(fakeBin('45385593107843568'));*/

// Rock Paper Scissors!
/*function rps(str1, str2) {
    if (str1 === str2) return 'Draw!'
    if (str1 === 'scissors' && str2 === 'paper') return 'Player 1 won!'
    if (str1 === 'scissors' && str2 === 'rock') return 'Player 2 won!'
    if (str1 === 'paper' && str2 === 'scissors') return 'Player 2 won!'
    if (str1 === 'paper' && str2 === 'rock') return 'Player 1 won!'
    if (str1 === 'rock' && str2 === 'paper') return 'Player 2 won!'
    if (str1 === 'rock' && str2 === 'scissors') return 'Player 1 won!'
}
console.log(rps('paper','paper'));*/






