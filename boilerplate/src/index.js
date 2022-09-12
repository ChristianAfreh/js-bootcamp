//npm install -g babel-cli@6.26.0
//npm init
//npm install babel-preset-env@1.6.1
//babel input.js --out-file output.js

const name = 'Mike'
console.log(name)

class Hangman {
    myMethod() {
        return 'Testing'
    }
}

const hangman = new Hangman()
console.log(hangman.myMethod())