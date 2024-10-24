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

function changeImage () {
  imgIndex++
  let currentImage
  currentImage = (imgIndex) % images.length
  $('#currentImage').attr('src', images[currentImage])
}

function imageTimer () {
  let changeImageTimer
  changeImageTimer = setInterval(changeImage, 2000)
}

$(document).ready(function () {
  preloadImages()
  imageTimer()
  $('#currentImage').on('mouseover', function () {
    changeImage()
  })
})
