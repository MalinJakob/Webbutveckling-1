//an preloaded image gallery that changes images each 2 
//second and also when you hover your mouse over the images 

//use the Image method to create invisible objects
//to load in images in the background 
//when source is assigned the browser will load the image
function preloadImages () {
  if (document.images) {
    const img1 = new Image()
    const img2 = new Image()
    const img3 = new Image()

    img1.src = 'images/img1.jpg'
    img2.src = 'images/img2.jpg'
    img3.src = 'images/img3.jpg'
  }
}

const images = ['images/img1.jpg', 'images/img2.jpg', 'images/img3.jpg']
let imgIndex = 0

//goes through image list and change to the next index in list to
//display in browser
function changeImage () {
  imgIndex++
  let currentImage
  currentImage = (imgIndex) % images.length
  $('#currentImage').attr('src', images[currentImage])
}

//set interval so that every other second the image changes, 
//by calling the changeImage function  
function imageTimer () {
  let changeImageTimer
  changeImageTimer = setInterval(changeImage, 2000)
}

//when document is ready call the functions within 
//and catch if the mouse is over the area of the image, 
//call the changeImage function 
$(document).ready(function () {
  preloadImages()
  imageTimer()
  $('#currentImage').on('mouseover', function () {
    changeImage()
  })
})
