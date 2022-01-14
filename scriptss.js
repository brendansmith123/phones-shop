import data from './datas.js'
const itemList = document.getElementById('item-list')
const itemsContainer = document.querySelector('#items')

for (let i = 0; i < data.length; i += 1) {
	const newDiv = document.createElement('items');
	newDiv.className = 'item'
	const img = document.createElement('img');
	img.src = data[i].image
	img.width = 300
	img.height = 300
	newDiv.appendChild(img)
	itemsContainer.appendChild(newDiv)
  const desc = document.createElement('p')
  desc.innerText = data[i].desc
  newDiv.appendChild(desc)
  const price = document.createElement('p')
  price.innerText = data[i].price
  newDiv.appendChild(price)
  const button = document.createElement('button')
  button.id = data[i].name
  button.dataset.price = data[i].price
  button.innerHTML = "Add to Cart"
  newDiv.appendChild(button)
}
const all_items_button = Array.from(document.querySelectorAll("button"))
  all_items_button.forEach(elt => elt.addEventListener('click', () => {
    addItem(elt.getAttribute('id'), elt.getAttribute('data-price'))
    showItems()
  }))