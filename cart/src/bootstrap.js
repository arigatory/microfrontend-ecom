import faker from "faker";

const cartText = `<div>You have <b>${faker.random.number()}</b> items in your cart</div>`;

document.querySelector('#cart-dev').innerHTML = cartText;