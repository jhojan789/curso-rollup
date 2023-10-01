const $body = document.querySelector('body');
const API = 'https://fakestoreapi.com/products?limit=5';

import logo from './assets/JavaScript-logo.png';
import './styles/styles.css';

const main = async ()=>{
  const response = await fetch(API);
  const products = await response.json();
  
  const output = products.map(product =>{
    return `
      <article class="Card">
        <img src="${product.image}"/>
        <h2>
          ${product.title}
          <small>Price: $ ${product.price}</small>
        </h2>
      
      
      </article>
    
    `;
  }).join('');

  const section = document.createElement('section');
  section.classList.add('Items');
  section.innerHTML = output;
  $body.appendChild(section);

  const header = document.createElement('header');
  const img = document.createElement('img');
  img.src = logo;

  header.appendChild(img);
  $body.prepend(header);


}

main();