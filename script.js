/* PSUEDO CODE: 

1. Create classes: 
    -Player 1
    -Palyer 2
    -Each will have their own score variable and array of quesitons allocated 
    -Each will have a method of increasing and decreasing score 


2. Have a begin game functino that will do the following: 
    -fetch API data 
    -display the question and answers [do i want to go back and forth or do my set first and after i finish let it be opponent's turn?]
    -go to the opponent function (either when i finihsh my set of questions OR per question)

3. DOM Manipulation
    -after a question, -> removechild to replace with next question ?

*/






const API_ENDPOINT = 'https://opentdb.com/api.php?amount=10&type=multiple'
const mainGame = document.getElementById('main-game')
const button = document.getElementById('button')

class Me {
    constructor(name){
        this.name = name 
        this.score = 0
        this.Q_A = {
            questions: [],
            answers: []
        }
    }

    increaseScore(){
        return this.score+=10 
    }

    decreaseScore(){
        return this.score-=10
    }

}

class Opponent {
    constructor(name){
        this.name = name
        this.score = 0
        this.Q_A = {
            questions: [],
            answers: []
        }
    }

    increaseScore(){
        return this.score+=10 
    }

    decreaseScore(){
        return this.score-=10
    }
}

const me = new Me ('Player 1') 
const opponent = new Opponent ('Player 2')



const beginGame = async () => {
    // window.location.href = 'index2.html'

    try{
        const response = await fetch(API_ENDPOINT)
        const data = await response.json()
        console.log(data)

        for(i=0;i<data.results.length;i++){             //storing questions for my class via for loop, since I grabbed 10 questions from API
            me.Q_A.questions.push(data.results[i].question)           //^^ ALTERNATIVE: created an object so i can store BOTH questions and answers in the same location and access them from one point >>> this one is pushing all the qustions form the API to the object
            me.Q_A.answers.push(data.results[i].incorrect_answers,data.results[i].correct_answer)             // ^^This is storing all the answers per respective question to the same object the question is located
        }
        // console.log(me.Q_A.questions)
        console.log(me.Q_A.answers)

        me.Q_A.answers[0].push(me.Q_A.answers[1])
        console.log(me.Q_A.answers[0])

        // const iterator = me.Q_A.answers[0].values()          //individually extracts the values and displays them to the console
        // for (const value of iterator ){
        //     console.log(value)
        // }

        const gameHTML = `<h2>${me.Q_A.questions[0]}</h2>
        <input type="radio" name="choice1" value="choice1">
        <label id="choice1" for="choice1">${me.Q_A.answers[0][0]}</label><br>
        <input type="radio" name="choice2" value="choice2">
        <label id="choice2" for="choice2">${me.Q_A.answers[0][1]}</label><br>
        <input type="radio" name="choice3" value="choice3">
        <label id="choice3" for="choice3">${me.Q_A.answers[0][2]}</label><br>
        <input type="radio" name="choice4" value="choice4">
        <label id="choice4" for="choice4">${me.Q_A.answers[0][3]}</label>` 
        mainGame.innerHTML = gameHTML
    } catch (err){
        console.error(err)
    }
}

button.addEventListener('click',beginGame)
