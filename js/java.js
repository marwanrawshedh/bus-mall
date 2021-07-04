'use strict'
    Image.arr=[]
function Image(name,path,){
    this.name=name
    this.path=path
   
    this.vote=0
    this.show=0
    Image.arr.push(this)
}

new Image ('bag','image/bag.jpg');
new Image ('banana','image/banana.jpg');
new Image ('bathroom','image/bathroom.jpg');
new Image ('boots','image/boots.jpg');
new Image ('breakfast','image/breakfast.jpg');
new Image ('bubblegum','image/bubblegum.jpg');
new Image ('chair','image/chair.jpg');
new Image ('cthulhu','image/cthulhu.jpg');
new Image ('dog-duck','image/dog-duck.jpg');
new Image ('dragon','image/dragon.jpg');
new Image ('pen','image/pen.jpg');
new Image ('pet','image/pet-sweep.jpg');
new Image ('scissors','image/scissors.jpg');
new Image ('shark','image/shark.jpg');
new Image ('sweep','image/sweep.png');
new Image ('tauntaun','image/tauntaun.jpg');
new Image ('unicorn','image/unicorn.jpg');
new Image ('water','image/water-can.jpg');
new Image ('win-glass','image/wine-glass.jpg');

let max=25
let count=0
function randomfu(){
    return Math.floor(Math.random()*Image.arr.length)
}
// console.log(randomfu())

let leftpic=document.getElementById('left');
let midpic=document.getElementById('mid');
let rightpic=document.getElementById('right');

// console.log(Image.arr)
// leftpic.setAttribute("",Image.arr[1].path,)
let leftnumber
let midnumber
let rightnumber


function re(){
leftnumber=randomfu();
midnumber=randomfu();
rightnumber=randomfu();

// console.log('before',leftnumber);
// console.log('before',midnumber);
// console.log('before',rightnumber);
while(leftnumber===midnumber||rightnumber===leftnumber||rightnumber===midnumber){
     leftnumber=randomfu()
 midnumber=randomfu()
 rightnumber=randomfu()
}



// console.log('after',leftnumber);
// console.log('after',midnumber);
// console.log('after',rightnumber);
leftpic.src=Image.arr[leftnumber].path;
midpic.src=Image.arr[midnumber].path;
rightpic.src=Image.arr[rightnumber].path;} ;
re();

leftpic.addEventListener('click',conting);
midpic.addEventListener('click',conting);
rightpic.addEventListener('click',conting);

function conting(){
  count++
  // console.log(count)
  if(count<=max){

  for(let i=0;i<Image.arr.length;i++){
  if( Image.arr[leftnumber].name === Image.arr[i].name){
    Image.arr[leftnumber].show++ ;;break}}
    
    for(let i=0;i<Image.arr.length;i++){
    if( Image.arr[midnumber].name === Image.arr[i].name){
      Image.arr[midnumber].show++;break}}
      
      for(let i=0;i<Image.arr.length;i++){
      if( Image.arr[rightnumber].name === Image.arr[i].name){
        Image.arr[rightnumber].show++;break }}
   
        if(event.target.id === 'left'){
        Image.arr[leftnumber].vote++

        ;

      }else if(event.target.id ==='mid'){
       Image.arr[midnumber].vote++;
      }
      else if(event.target.id ==='right'){
        Image.arr[rightnumber].vote++;
       }
       re();
}else{
      // List();
  }
}

let click=document.getElementById('click')
click.addEventListener('click',List)

function List(){ 
  const unorder = document.getElementById('unorder');
  for(let i = 0 ; i <   Image.arr.length; i++){
    let list = document.createElement('li');
    unorder.appendChild(list);
    list.textContent = `${Image.arr[i].name} had  ${Image.arr[i].vote} vote , and was seen ${Image.arr[i].show}    time`
  }
  leftpic.removeEventListener('click',conting);
  midpic.removeEventListener('click',conting);
  rightpic.removeEventListener('click',conting);
  click.removeEventListener('click',List)
}