const body = document.querySelector('body'); 
// loader work
const loaderContainer = document.querySelector('#loader-container');
addEventListener('load',()=>
{setTimeout(()=>{loaderContainer.style.display='none';},1500)});

// nav functions
const hamburger = document.querySelector('#hamburger');
const hamburgerIcon = document.querySelector('#hamburger > i');
const theme = document.querySelector('#theme');
const themeIcon = document.querySelector('#theme > i');
const asideContainer = document.querySelector('#aside-container');

hamburger.addEventListener('click',()=>
{
  if(hamburgerIcon.className=='bi bi-list')
  {
  hamburgerIcon.className='bi bi-x-lg';
  asideContainer.style.left='0';
  }
  else 
  {
  hamburgerIcon.className='bi bi-list';
  asideContainer.style.left='-100%';
  }
});

// theme here

theme.addEventListener('click',()=>
{
  if(themeIcon.className=='bi bi-lightbulb')
  {
  themeIcon.className='bi bi-lightbulb-off';
  body.className='dark';
  localStorage.setItem('mode','dark');
  }
  else 
  {
  themeIcon.className='bi bi-lightbulb';
  body.className='light';
  localStorage.setItem('mode','light');
  }
});

let localStorageData = localStorage.getItem('mode');

if(localStorageData==null || localStorageData=='light')
{
  themeIcon.className='bi bi-lightbulb';
  body.className='light';
}
else 
{
  themeIcon.className='bi bi-lightbulb-off';
  body.className='dark';
}

// age geting
const getage = document.querySelector('#getage');
function calculate_age(dob) { 
  var diff_ms = Date.now() - dob.getTime();
  var age_dt = new Date(diff_ms); 
  return Math.abs(age_dt.getUTCFullYear() - 1970);
}
getage.textContent=calculate_age(new Date(2006, 5, 1));

// photos show hide
const photoMore = document.querySelector('#photo-more');
const photoMoreTxt = document.querySelector('#photo-more > span');
const img = document.querySelectorAll('.img');

photoMore.addEventListener('click',()=>
{
for(let i=0;i<img.length;i++)
{
  if(img[i].className=='photos-wrap img hide')
  {
  img[i].setAttribute('data-photos','show');
  img[i].className='photos-wrap img show';
  photoMoreTxt.innerHTML="Show Less <i class='bx bx-caret-right-circle bx-rotate-90'></i>";
  }
  else 
  {
  img[i].setAttribute('data-photos','hide');
  img[i].className='photos-wrap img hide';
  photoMoreTxt.innerHTML="Show More <i class='bx bx-caret-right-circle'></i>";
  }
}
});

// photo frame
const photoFrameContainer = document.querySelector('#photo-frame-container'); 
const photoFrameClose = document.querySelector('#photo-frame-close'); 
const photoFrame = document.querySelector('#photo-frame'); 

function openImgFrame(imgSrc)
{
  photoFrameContainer.style.transform='scale(1)';
  photoFrame.src=imgSrc;
  body.style.overflow='hidden';
  if(imgSrc=='res/img/1.jpg')
  {photoFrame.style.maxWidth='280px';}
  else {photoFrame.style.maxWidth='';}
}

photoFrameClose.addEventListener('click',()=>
{
  photoFrameContainer.style.transform='scale(0)';
  photoFrame.src='';
  body.style.overflow='';
});

// typing plugin js
let options = 
{
    strings: 
    [
      'Apurba',
      'from Bangladesh',
      'Study on Collage'
    ],
    typeSpeed: 80,
    backSpeed: 70,
    backDelay: 1200,
    loop: true,
};
let typed = new Typed('#autotxt', options);
  
// aos plugin
AOS.init(
{
  offset: 0,
  duration: 500,
  mirror: false,
});

