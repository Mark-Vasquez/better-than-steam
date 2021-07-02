# Better-Than-Steam

## Introduction
Better-Than-Steam is a playful clone-combination of [Product Hunt](https://www.producthunt.com/) and [Steam](https://store.steampowered.com/). It showcases the trendiest games for gamers to upvote and discuss about. The top games are showcased on the front page for gamers, new and experienced, to take part in!

## Link to live site
[Better-Than-Steam](http://better-than-steam.herokuapp.com/)

## Link to wiki docs
[Better-Than-Steam Wiki](https://github.com/Mark-Vasquez/better-than-steam/wiki)

## Technologies Used
* Heroku
* JavaScript
* Node.js
* Express.js
* pug.js, a JavaScript library used to code HTML
* CSS
* Sequelize

## Features
* The team has implemented full CRUD functionality with omments. Users can post a new comment, read a page of all the comments, edit, and delete their own comment. 
A visitor is also able to create a new account as well as login and sign out.
* Sequelize is also implemented to seed a list of games into the front page with their respective desription, genre, and creator.

## Challenges
* Many technical challenges arose throughout the whole process, but they were solved with time and research. The main challenge was figuring out a way to seed and make fetch requests to the database. A lot of coordination and understanding of the different routers used throughout the code helped overcome the challenge.
* Another seemingly simple, but challenging aspect of the project was making the website look like a clone of [Product Hunt](https://www.producthunt.com/) with the short amount of time given. The constraints to use CSS only made it even more of a challenge. This has been solved with a fair amount of rearranging of divs and trial-and-error.

## Code Snippet
* This snippet took almost half a day to work properly. The goal was to have an upvote button persist with data and recognize the click on any part of the nested div within the pug file
```js
window.addEventListener("load", async (event)=>{
    console.log("hello from javascript!")

    const voteBtns =  document.querySelectorAll('.game__vote-button');

    voteBtns.forEach( (btn => {
      btn.addEventListener('click', async(e) => {
        e.preventDefault();

        const gameId = e.target.value;

        const res = await fetch('/users/testroute', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            gameId
          })
        });
        let voteCount = parseInt(e.target.innerText)
        console.log(voteCount);
        if (res.status === 200) {
          voteCount++
          e.target.innerText = voteCount.toString()

          const triangle = document.querySelector('.game__vote-button > span > .triangle__icon');
          triangle.classList.add('triangle__icon-voted')
        }
      })
    }));

})
```