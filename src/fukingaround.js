console.log("I'm jsut fuking around with what some youtube guy told me");

const table = document.getElementsByClassName('table')[0];
console.log(table);

function createCard(number) {
  const card = document.createElement('div');
  card.className = 'card';

  const topNum = document.createElement('div');
  topNum.innerText = number;

  const bottomNumber = document.createElement('div');
  bottomNumber.className = 'right';
  bottomNumber.innerText = number;

  card.append(topNum);
  card.append(bottomNumber);

  return card;
}

table.appendChild(createCard(1));
table.appendChild(createCard(2));
table.appendChild(createCard(3));
table.appendChild(createCard(4));
