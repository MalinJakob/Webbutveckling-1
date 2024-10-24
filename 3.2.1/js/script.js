function preloadImages () {
  if (document.images) {
    const img1 = new Image()
    const img2 = new Image()
    const img3 = new Image()

    img1.src = '/images/img1.jpg'
    img2.src = '/images/img2.jpg'
    img3.src = '/images/img3.jpg'
  }
}

const images = ['/images/img1.jpg', '/images/img2.jpg', '/images/img3.jpg']
let changeImageTimer;
let imgIndex = 0 

function changeImage(){
  currentImage = (currentImage + 1) % images.length
  $('#currentImage').attr('src' , images[imgIndex])
}

function imageTimer() {
  changeImageTimer = setInterval(changeImage, 2000);
}

$(function(){
  let $img = $('#currentImg')
  $img.on('mouseover', function(){
    changeImage()
  })
})

preloadImages()
imageTimer()


