
document.addEventListener('DOMContentLoaded' , () => {
  const eventInput = document.getElementById("event")
  const hoursInput = document.getElementById("hours")
  const imagesInput = document.getElementById("numberOfImages")
  const totalAmount = document.getElementById("totalAmount")

  let basePrice = 0

  function getTotal(){
    const hours = parseInt(hoursInput.value) || 0;
    const images = parseInt(imagesInput.value) || 0;
    const total = basePrice + hours * 100 + images * 5;
    totalAmount.textContent = `$${total}`;
  }

  document.querySelectorAll("#priceBox .box").forEach((box) => {
    box.addEventListener("click", () => {
      const eventName = box.getAttribute("data-event");
      const defaultHours = box.getAttribute("data-hours");
      const defaultImages = box.getAttribute("data-images");
      basePrice = parseInt(box.getAttribute("data-price"));

      eventInput.value = eventName;
      hoursInput.value = defaultHours;
      imagesInput.value = defaultImages;

      getTotal();
    });
  })
  hoursInput.addEventListener("input", getTotal);
  imagesInput.addEventListener("input", getTotal);
})


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

function changeImage () {
  imgIndex++
  let currentImage
  currentImage = imgIndex % images.length
  $('#currentImage').attr('src', images[currentImage])
}

function imageTimer () {
  let changeImageTimer
  changeImageTimer = setInterval(changeImage, 2700)
}

$(document).ready(function () {
  preloadImages()
  imageTimer()
})
