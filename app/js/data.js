const socialDta = 
{
    'facebook': 'https://www.facebook.com/apurba.sarkar.512006',
    'twitter': 'https://twitter.com/s74274002',
    'instagram': 'https://www.instagram.com/apurbasarkar57',
    'github': 'https://github.com/Apurba170'
}

const fLink = document.querySelectorAll('.f-link');
const tLink = document.querySelectorAll('.t-link');
const iLink = document.querySelectorAll('.i-link');
const gLink = document.querySelectorAll('.g-link');

// for facebook
for(let i= 0;i<fLink.length;i++){fLink[i].href=socialDta.facebook;}
// for twitter
for(let i= 0;i<tLink.length;i++){tLink[i].href=socialDta.twitter;}
// for instagram
for(let i= 0;i<iLink.length;i++){iLink[i].href=socialDta.instagram;}
// for github
for(let i= 0;i<gLink.length;i++){gLink[i].href=socialDta.github;}