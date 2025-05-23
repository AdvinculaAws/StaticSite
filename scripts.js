function obtenerDatos(){
  const Http = new XMLHttpRequest();
  // const url='https://jsonplaceholder.typicode.com/posts';
  // const url='https://api.escuelajs.co/api/v1/categories';
  const url = 'https://api.escuelajs.co/api/v1/users';
  Http.open("GET", url);
  Http.send();
  
  Http.onreadystatechange = (e) => {

    const obj = JSON.parse(Http.responseText);

    for (const [key, value] of Object.entries(obj[1])) {
      console.log(`${key}: ${value}`);
    }

    document.getElementById('results').innerText = Http.responseText;
  }
}