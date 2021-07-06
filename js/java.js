'use strict'
let storearr=[]
let num=[]
let imagname=[]
let votechart=[]
let showchart=[]
    Image.arr=[]
function Image(name,path,){
    this.name=name
    this.path=path
   
    this.vote=0
    this.show=0
    Image.arr.push(this)
    imagname.push(this.name)
    storearr.push(this);
    
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

let s1=document.getElementById('s1');
let leftpic=document.getElementById('left');
let midpic=document.getElementById('mid');
let rightpic=document.getElementById('right');



let leftnumber
let midnumber
let rightnumber


function re(){
leftnumber=randomfu();
midnumber=randomfu();
rightnumber=randomfu();

// num=[leftnumber,midnumber,rightnumber];
// console.log('1',num)

// num.push([leftnumber,midnumber,rightnumber])
// console.log('before',leftnumber);
// console.log('before',midnumber);
// console.log('before',rightnumber);

while(leftnumber===midnumber||rightnumber===leftnumber||rightnumber===midnumber||num[0]==leftnumber||num[0]==midnumber ||num[0]==rightnumber||num[1]==leftnumber||num[1]==midnumber ||num[1]==rightnumber||num[2]==leftnumber||num[2]==midnumber ||num[2]==rightnumber){
  // console.log('3')
  // console.log('if the same sim',leftnumber);
  // console.log('if the same sim',midnumber);
  // console.log('if the same sim',rightnumber);
     leftnumber=randomfu();
 midnumber=randomfu();
 rightnumber=randomfu();  
  }


leftpic.src=Image.arr[leftnumber].path;

midpic.src=Image.arr[midnumber].path;
rightpic.src=Image.arr[rightnumber].path;} ;
re();
s1.addEventListener('click',conting);
// leftpic.addEventListener('click',conting);
// midpic.addEventListener('click',conting);
// rightpic.addEventListener('click',conting);

function conting(){num=[leftnumber,midnumber,rightnumber];
  count++
  
  store()
  // back()

  // console.log(Image.arr)
  // 
  
  if(count<=max){
 
    Image.arr[leftnumber].show++ ;
    
      Image.arr[midnumber].show++;

        Image.arr[rightnumber].show++;

    if(event.target.id === 'left'){
      Image.arr[leftnumber].vote++;}

    else if(event.target.id ==='mid'){
       Image.arr[midnumber].vote++;}
    
    else if(event.target.id ==='right'){
        Image.arr[rightnumber].vote++;}
    else{alert("please click exactly on the image you want")
         count--
         Image.arr[leftnumber].show--;
         Image.arr[midnumber].show--;
         Image.arr[rightnumber].show--;}

       re();
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
  votechart.push(Image.arr[i].vote);
  showchart.push(Image.arr[i].show);
  }
  chart();
  leftpic.removeEventListener('click',conting);
  midpic.removeEventListener('click',conting);
  rightpic.removeEventListener('click',conting);
  click.removeEventListener('click',List)
  
}
function chart(){
let ctx = document.getElementById('myChart').getContext('2d');
let  myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: imagname,
        datasets: [{
            label: '# of Votes',
            data: votechart,
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                
            ],
            
           
        },
        
        {
            label: '# of show',
            data: showchart,
            backgroundColor: [
                'rgba(55, 33, 466, 1)',
                
            ],
            
           
        }]
    },
   
});}


function store(){
  let convertedarr = JSON.stringify(Image.arr);

 localStorage.setItem('arr',convertedarr);
}

function back(){
  
  let storeddata=localStorage.getItem('arr')
  // console.log(storeddata)
  let convert=JSON.parse(storeddata)
  console.log(convert)
  if(convert!==null){
Image.arr=convert
console.log(Image.arr)}
// 

}

back()