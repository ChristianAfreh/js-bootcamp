const Hangman = function(word,remainingGuesses){
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
    this.status = 'playing'
}

Hangman.prototype.calculateStatus = function(){
    
    const finished = this.word.every((letter)=> this.guessedLetters.includes(letter))

    //Alternative
    // const unGuessedLetters = this.word.filter((letter)=>{
    //     return !this.guessedLetters.includes(letter)
    // })
    
    // const finished = unGuessedLetters.length === 0
    
    // Alternative
    // let finished = true

    // this.word.forEach((letter) => {
    //     if(this.guessedLetters.includes(letter)){
        
    //     } else{
    //         finished = false
    //     }
    // })
    

    if(this.remainingGuesses === 0){
        this.status = 'failed'
    } else if(finished){
        this.status = 'finished'
    } else{
        this.status = 'playing'
    }
}

Hangman.prototype.getPuzzle = function(){
    let puzzle = ''

    this.word.forEach((letter) => {
        if(this.guessedLetters.includes(letter) || letter === ' '){
            puzzle += letter
        }
        else{
            puzzle += '*'
        }
    });

    return puzzle
}

Hangman.prototype.makeGuess = function(guess){
    guess = guess.toLowerCase()
    
    const isUnique = !this.guessedLetters.includes(guess)
    const badGuess = !this.word.includes(guess)

    if(isUnique){
        this.guessedLetters.push(guess)
    }

    if(isUnique && badGuess){
        this.remainingGuesses--
    }

    this.calculateStatus()
}





