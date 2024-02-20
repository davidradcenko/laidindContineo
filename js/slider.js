// slider
let sliderContainer = document.querySelector('.slider');

const idButtonSlider1 = document.getElementById('slider-button-id-1');
const idButtonSlider2 = document.getElementById('slider-button-id-2');
const idButtonSlider3 = document.getElementById('slider-button-id-3');


const nextButton = document.querySelector('.next');

let nodeList = document.querySelectorAll('.slider-item')
let sliderItems = Array.from(nodeList)

let buttons = document.querySelectorAll('.buttons-slider')
let buttonsArray = Array.from(buttons)

let currentPosition = 1;


// function for listing slider
function updateSliderPosition() {
  sliderItems.forEach((item, index) => {
    
    buttonsArray[index].classList.remove('button-active')

    if(index == currentPosition){
      item.classList.remove('item1', 'item2', 'item3');
      buttonsArray[index].classList.add('button-active')
      item.classList.add('item2')
      sliderItems[index==2?0:index+1].classList.remove('item1', 'item2', 'item3');
      sliderItems[index==2?0:index+1].classList.add('item3')
      sliderItems[index == 0? 2 : index-1].classList.remove('item1', 'item2', 'item3');
      sliderItems[index == 0? 2 : index-1].classList.add('item1') 
    }
  });
}


// click on slider buttons 
idButtonSlider1.addEventListener('click', (event) => {
  clearInterval(avtoPlay)
  currentPosition = 0
  updateSliderPosition()
  avtoPlay = setInterval(avtoPlayAnd, 4000)
})
idButtonSlider2.addEventListener('click', (event) => {
  clearInterval(avtoPlay)
  currentPosition = 1
  updateSliderPosition()
 
  avtoPlay = setInterval(avtoPlayAnd, 4000)
})
idButtonSlider3.addEventListener('click', (event) => {
  clearInterval(avtoPlay)
  currentPosition = 2
  updateSliderPosition()
  avtoPlay =  setInterval(avtoPlayAnd, 4000)
})

// function for avto play slider
function avtoPlayAnd (){
  newxtslider()
  updateSliderPosition()
}
let avtoPlay = setInterval(avtoPlayAnd, 4000)

// function for figure out current slider
function newxtslider (){
 if ( currentPosition == 2) {
  currentPosition = 0
 } else {
  currentPosition = currentPosition + 1
 }
}


