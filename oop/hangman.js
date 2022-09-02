const Hangman = function(word,guessNo){
    this.word = word
    this.guessNo = guessNo
}

const game1 = new Hangman('goat',4) 
console.log(game1)

const game2 = new Hangman('cheetah',5)
console.log(game2)