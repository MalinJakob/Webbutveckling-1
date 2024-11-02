//preloading images and generates an images change
//every third second 

//use the Image method to create invisible objects
//to load in images in the background 
//when source is assigned the browser will load the image
function preloadImages () {
  if (document.images) {
    const img1 = new Image()
    const img2 = new Image()
    const img3 = new Image()
    const img4 = new Image()
    const img5 = new Image()
    const img6 = new Image()
    const img7 = new Image()
    const img8 = new Image()
    const img9 = new Image()
    const img10 = new Image()

    img1.src = 'images/gallery/gallery1.jpg'
    img2.src = 'images/gallery/gallery2.jpg'
    img3.src = 'images/gallery/gallery3.jpg'
    img4.src = 'images/gallery/gallery4.jpg'
    img5.src = 'images/gallery/gallery5.jpg'
    img6.src = 'images/gallery/gallery6.jpg'
    img7.src = 'images/gallery/gallery7.jpg'
    img8.src = 'images/gallery/gallery8.jpg'
    img9.src = 'images/gallery/gallery9.jpg'
    img10.src = 'images/gallery/gallery10.jpg'
  }
}

const images = [
  'images/gallery/gallery1.jpg',
  'images/gallery/gallery2.jpg',
  'images/gallery/gallery3.jpg',
  'images/gallery/gallery4.jpg',
  'images/gallery/gallery5.jpg',
  'images/gallery/gallery6.jpg',
  'images/gallery/gallery7.jpg',
  'images/gallery/gallery8.jpg',
  'images/gallery/gallery9.jpg',
  'images/gallery/gallery10.jpg'
]
let imgIndex = 0


//use an increment to go through the list 
//and uploads the image in the browser
function changeImage () {
  imgIndex++
  let currentImage
  currentImage = imgIndex % images.length
  $('#currentImage').attr('src', images[currentImage])
}

//setting a timer to call the changeImage function
//every 2700 millisecond
function imageTimer () {
  let changeImageTimer
  changeImageTimer = setInterval(changeImage, 2700)
}

//when the document is ready, call the functions within 
$(document).ready(function () {
  preloadImages()
  imageTimer()
})


