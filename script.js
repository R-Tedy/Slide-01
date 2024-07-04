let prevBtn=document.getElementById('prev');
let nextBtn = document.getElementById('next');
let carousel = document.querySelector('.carousel');
let items = carousel.querySelectorAll('.list .item');
let indicators = carousel.querySelector('.indicators');
let dots = indicators.querySelectorAll('ul li');
let active = 0;
let firstPosition = 0;
let lastPosition = items.length-1;
let autoPlay;

const startAutoPlay = () =>{
  clearInterval(autoPlay);
  autoPlay  = setInterval(() => {
    nextBtn.click();
  }, 5000);
}

const setSlider = () =>{
  let itemActiveOld = carousel.querySelector('.list .item.active');
  if (itemActiveOld) {
    itemActiveOld.classList.remove('active');
  }
  items[active].classList.add('active');
  let dotActiveOld = indicators.querySelector('li.active');
  if (dotActiveOld) {
    dotActiveOld.classList.remove('active');
  }
  dots[active].classList.add('active');
  indicators.querySelector('.number').innerText= '0' +(active + 1);
  startAutoPlay()
}
setSlider();

nextBtn.onclick = () =>{
  active = active + 1 >lastPosition ? 0 : active + 1;
  carousel.style.setProperty('--calculation', 1);
  setSlider();
}
prevBtn.onclick = () =>{
  active = active - 1 <firstPosition ? lastPosition : active - 1;
  carousel.style.setProperty('--calculation', -1);
  setSlider();
}
dots.forEach((item, position) =>{
  item.onclick = () =>{
    active = position;
    setSlider()
  }
})