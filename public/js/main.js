function getEvent(e) {
  e.preventDefault();
  fetch(`/events/${e.target.event.value}`)
  .then(res => res.json())
  .then(jsonRes => {
    console.log(jsonRes);
  })
}

function getForm() {
  const form = document.querySelector('#request');
  form.addEventListener('submit', (e) => getEvent(e));
  console.log('Button works')
}

document.addEventListener('DOMContentLoaded', getForm);
