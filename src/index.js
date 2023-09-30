const $body = document.querySelector('body');
const API = '[GET] https://api.escuelajs.co/api/v1/products?offset=0&limit=10';

import logo from './assets/JavaScript-logo.png';
import './styles/styles.css';

const main = async ()=>{
  const response = await fetch(API);
  const products = await response.json();
  
  const output = products.map(product =>{
    return `
      <article class="card">
        <img src="${product.images[0]}"/>
        <h2>
          ${product.title}
          <small>Price: $ ${product.price}</small>
        </h2>
      
      
      </article>
    
    `;
  }).join('');

  const section = document.createElement('section');
  section.classList.add('items');
  section.innerHTML = output;
  $body.appendChild(section);

  const header = document.createElement('header');
  const img = document.createElement('img');

  header.appendChild(img);
  $body.appendChild(header);


}

main();