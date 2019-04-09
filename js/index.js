// Your code goes here
// * [ ] Using your [index.js file](js/index.js), create 10 [unique event listeners](https://developer.mozilla.org/en-US/docs/Web/Events). using your creativity to make the Fun Bus site more interactive.  Here are some unique events you could try to use: 
// 	* [ ] `mouseover`
// 	* [ ] `keydown`
// 	* [ ] `wheel`
// 	* [ ] `drag / drop`
// 	* [ ] `load`
// 	* [ ] `focus`
// 	* [ ] `resize`
// 	* [ ] `scroll`
// 	* [ ] `select`
// 	* [ ] `dblclick`

//////////////////////////////////////////////////////////////////////nav mouseover
const navBar = document.querySelector('.nav-container')

navBar.addEventListener('mouseover', function(eventObject){
    console.log(`Event Target: ${eventObject.target}`);
    eventObject.target.style.color = "#17A2B8";
});

//////////////////////////////////////////////////////////////////////////////////mouseout

const button2 = document.querySelector('.btn2');

button2.addEventListener('mouseout', function(){
    console.log('ghost!');
});
////////////////////////////////////////////////////////////////////////mouseup
const button3 = document.querySelector('.btn3');

button3.addEventListener('mouseup', function(){
    console.log('mouseUP!');
});

/////////////////////////////////////////////////////////////////////////double click
const ancDbl = document.querySelector('a');

ancDbl.addEventListener('dblclick', function(){
    console.log('I was double clicked!');
});

/////////////////////////////////////////////////////////////////////////mousemove
const imgWheel = document.querySelector('.img-content');

imgWheel.addEventListener('mousemove', function(){
    console.log('I was hovered!');
});

/////////////////////////////////////////////////////////////////////////mouseover
const h1 = document.querySelector('.logo-heading');

h1.addEventListener('mouseover', function(){
    console.log('Fun mouseover');
    TweenMax.to(".logo-heading", 3, {x:200, rotation:360, color:"red", fontSize: "6rem"});
});

//////////////////////////////////////////////////////////////////////////mouseenter
const img3 = document.querySelector('.img-fluid-rounded');

img3.addEventListener('mouseenter', function(){
    console.log('img3 mouseenter');
});

//////////////////////////////////////////////////////////////////////////red click
const intro = document.querySelector('.intro');

intro.addEventListener('click', function(eventObject){
    console.log(`Event Target: ${eventObject.target}`);
    eventObject.target.style.color = "red";
});

//////////////////////////////////////////////////////////////////////////mouseover Let's go text
const contSect = document.querySelector('.content-section');

contSect.addEventListener('mouseover', function(eventObject){
    console.log(`Event Target: ${eventObject.target}`);
    eventObject.target.style.color = "#17A2B8";
});

//////////////////////////////////////////////////////////////////////////fun bus click display none
const funBusPoof = document.querySelector('.img-fun-bus');

funBusPoof.addEventListener('click', function(eventObject){
    console.log(`Event Target: ${eventObject.target}`);
    eventObject.target.style.display = "none";
});

////////////////////////////////////////////////////////////////////////// for propogation 1
const button = document.querySelector('.btn');

button.addEventListener('click', function(eventObject){
    console.log('button 1 click');
    eventObject.stopPropagation();
});

const contClick = document.querySelector('.content-pick');

contClick.addEventListener('click', function(){
    console.log('content pick was clicked!');
});

////////////////////////////////////////////////////////////////////////// for propogation 2
const pickDest = document.querySelector('.content-destination p');

pickDest.addEventListener('click', function(eventObject){
    console.log(`Event Target: ${eventObject.target}`);
    eventObject.target.style.color = "#17A2B8";
    eventObject.stopPropagation();
});


const contDest = document.querySelector('.content-destination');

contDest.addEventListener('click', function(){
    console.log('content destination was clicked!');
});

//////////////////////////////////////////////////////////////////////////Prevent Default 
const navDefault = document.querySelector('.nav')

navDefault.addEventListener('click', function(){
    console.log(`Nav item was clicked!`);
    event.preventDefault();
});
//////////////////////////////////////////////////////////////////////////animations
const h2 = document.querySelector('.intro h2');

h2.addEventListener('mouseover', function(){
    console.log('h2 motion');
    TweenMax.to(".intro h2", 3, {x:200, color:"red", fontSize: "4rem"});
});

const contH2 = document.querySelector('.contH2');

contH2.addEventListener('mouseover', function(){
    console.log('contH2 motion');
    TweenMax.to(".contH2", 3, {x:200, color:"red", fontSize: "4rem"});
});

const invCont = document.querySelector('.advH2');

invCont.addEventListener('mouseover', function(){
    console.log('invCont motion');
    TweenMax.to(".advH2", 3, {x:100, color:"blue", fontSize: "4rem"});
});

const contDestH2 = document.querySelector('.content-destination h2');

contDestH2.addEventListener('mouseover', function(){
    console.log('content destination h2 was hovered!');
    TweenMax.to(".content-destination h2", 3, {x:150, color:"blue", fontSize: "5rem"});
});

const dest1 = document.querySelector('.dest1 ');

dest1.addEventListener('mouseover', function(){
    console.log('content destination was clicked!');
    TweenMax.to(".dest1", 3, { color:"#17A2B8", fontSize: "3.5rem",fontWeight: 900});
});

const dest2 = document.querySelector('.dest2');

dest2.addEventListener('mouseover', function(){
    console.log('content destination was clicked!');
    TweenMax.to(".dest2", 3, { color:"#17A2B8", fontSize: "3.1rem",fontWeight: 900});
});

const dest3 = document.querySelector('.dest3');

dest3.addEventListener('mouseover', function(){
    console.log('content destination was clicked!');
    TweenMax.to(".dest3", 3, { color:"#17A2B8", fontSize: "3.5rem", fontWeight: 900});
});

const funBusFooter = document.querySelector('.funbusfooter');

funBusFooter.addEventListener('mouseover', function(){
    console.log('Fun bus flip');
    TweenMax.to(".funbusfooter", 3, {x:1300, scale: 2.5});
});


