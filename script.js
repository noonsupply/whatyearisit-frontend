fetch('https://whatyearisit-frontend-lake.vercel.app')
.then(response => response.json())
.then(data => {
  document.querySelector('#year').textContent = data.value;
  
});