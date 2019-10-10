const url = 'http://192.168.1.6:8080/component.html';
fetch(url, { mode: 'no-cors' })
  .then(response => response.text())
  .then(data => {
    console.log('Here is the component for index: ', data);
    window.document.getElementById('root').innerHTML = data;
  });
