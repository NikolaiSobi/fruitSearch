const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];

	for(let element of fruit){
		if (element.toLowerCase().includes(str.toLowerCase())){
			results.push(element);
		}
	}
	return results.slice(0,5);
}

function searchHandler(e) {
	input.style.borderBottomRightRadius = "0px";
	input.style.borderBottomLeftRadius = "0px";
	suggestions.innerHTML = ""
	
	if(input.value === ""){
		input.style.borderBottomRightRadius = "10px";
		input.style.borderBottomLeftRadius = "10px";
		return
	}
	let results = search(e.target.value)

	results.forEach(element => {
		let newLi = document.createElement('li')
		newLi.innerText = element;
		suggestions.append(newLi);
	});

}

function useSuggestion(e) {
	input.value = e.target.innerText
	suggestions.innerHTML = ""
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);


