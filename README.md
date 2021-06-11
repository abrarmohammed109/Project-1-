# Project-1-

## Link to live project:



## Description
A classic, this is a simple trivia game to test your knowledge on various topics. Topics include anywhere from entertainment and celebrities to politics and games, and more. Each match consists of 3 rounds, and each player is give 2 questions. Whoever scores higher that round wins that respective round, player with the most won rounds wins the match. 


## Motivation: 
I believe that creating a trivia game would involve implementing everything we have learned in GA so far since week 1 (classes, APIs, if/else, arrays, DOM Manipulation). I wanted to use this project (and specifically the Trivia Game) as an opportunitiy to refine my skills and put what I have learned so far to use.

## Approach Taken:
Since this game requires 2 players and a means to keep track of their names and scores, I thought classes would be the best approach to create 2 instances of players to store respective data. 

Initially I wanted to create my own set of questions and answers. Then I realized I can grab them via an API. The benefit of doing so is that I would have a huge batch of questions to cycle through (Trivia API link: https://opentdb.com/api_config.php). From there, my next step was to think of ways to not only display them to the browser, but to also diferentiate them between the player and opponent. 

## Technologies Used:
This game was built via Visual Studio Code. 
Font was imported form Google Fonts. 
Notes and progress were updated to GitHub. 
Trivia API used was https://opentdb.com/api_config.php

## Challenges: 
1. Manipulation of DOM to display the fetched question/answer choices accoprdingly (SOLVED) 
2. Removing colored borders from div after completion of a question (the borders would stay as I go to the next question, despite not having answered it) 
3. Per completion of a round, clearing the elements that stored previous questions/answers so a new batch can be loaded
4. Brute code - lots of lines of code (700+) for displaying of only 4 questions (had to shorten it to 2 questions per player instead of the initially intended 5 per player) 

## Stretch Goals (to be revisited): 
1. (Color pallet-based game instead of score-based) - each time you get a question right, a colorful tile will appear from the bottom. Every time you get a question right, another color will stack on top of the previous one. If the tiles reach the top of the screen, you win. if you get a question wrong, you lose exactly 1 color tile and your turn ends ==> this will balance out the game style, to offset whoever has the advantage of going first.
2. Coin toss to see who will go first
3. 3 different modes (easy, medium, hard)
4. The option to choose by topic instead of having all the questions jumbled into a round of the game
5. Timer
6. Option to enter name
7. Option to set score limit (default will be 100 with each question being 10 points)
8. Fewer lines of code so many more questions can be loaded (refactor) 

## Citation/Source: 
1. Trivia API: https://opentdb.com/api_config.php 
2. Google Fonts (used Poppins): https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap  |  https://fonts.google.com/?query=poppins
