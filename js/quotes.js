'use strict';

const collection = [{
    quote: "Tough times never last, but tough people do.",
    author: "-Robert H. Schuller-",
},
{
    quote: "I’ve failed over and over and over again in my life and that is why I succeed.",
    author: "-Michael Jordan-",
},{
    quote: "If you don’t get out of the box you’ve been raised in, you won’t understand how much bigger the world is.",
    author: "-Angelina Jolie-",
},{
    quote: "But I know, somehow, that only when it is dark enough can you see the stars. ",
    author: "-Martin Luther King, Jr",
},{
    quote: "Grind Hard, Shine Hard",
    author: "-Dwayne Johnson-",
},{
    quote: "I didn’t get there by wishing for it or hoping for it, but by working for it.",
    author: "-Estée Lauder-",
},{
    quote: "You cannot change what you are, only what you do",
    author: "-Phillip Pullman-",
},{
    quote: "Change hte way you look at things and the thing you look at change",
    author: "-Wayne Dyer-",
},{
    quote: "If you have always done it that way, it is probably wrong.",
    author: "-Charles Kettering-",
},
{
    quote: "The greatest mistake you can make in life is to be continually fearing you will make one.",
    author: "-Elbert Hubbard-",
}];
const quoteSpot = document.querySelector("#clone h3");
const authorSpot = document.querySelector("#clone h4");


const randomCollection = collection[Math.floor(Math.random() * collection.length)];

quoteSpot.innerText = randomCollection.quote;
authorSpot.innerText = randomCollection.author;