// function getEvent(e) {
//   e.preventDefault();
//   fetch(`/events/${e.target.query.value}`)
//   .then(res => res.json())
//   .then(jsonRes => {
//     console.log(jsonRes);
//   })
// }

// function getForm() {
//   const form = document.querySelector('#search');
//   form.addEventListener('submit', (e) => getEvent(e));
//   console.log('Button works')
// }

// document.addEventListener('DOMContentLoaded', getForm);

$(document).ready(function(){


  const bgImages = [
  'https://images.unsplash.com/reserve/rHBf1lEaSc2nsbqYPQau_IMG_0177.jpg',
  'https://images.unsplash.com/photo-1487662701465-ee09afb4e1fa',
  'https://images.unsplash.com/photo-1468869196565-78ea346a98ee',
  'https://images.unsplash.com/photo-1468774871041-fc64dd5522f3'
  ];

  $('body').css({'background-image': 'url(' + bgImages[Math.floor(Math.random() * bgImages.length)] + ')'});
});

