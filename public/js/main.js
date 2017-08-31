function getEvent(e) {
  e.preventDefault();
  fetch(`/events/${e.target.query.value}`)
  .then(res => res.json())
  .then(jsonRes => {
    console.log(jsonRes);
  })
}

function getForm() {
  const form = document.querySelector('#search');
  form.addEventListener('submit', (e) => getEvent(e));
  console.log('Button works')
}

document.addEventListener('DOMContentLoaded', getForm);
