

// Проверка значения на число

function checkIsNumber(value) {
  return (
    typeof value === 'string' &&
    value.trim() !== '' &&
    isFinite(Number(value))
  );
}



// Получение стоимости вёрстки

let screenPrice = prompt('Сколько будет стоить вёрстка?');

while (
  screenPrice === null ||
  screenPrice.trim() === '' ||
  !checkIsNumber(screenPrice)
) {
  screenPrice = prompt(
    'Введите стоимость вёрстки числом. Поле не должно быть пустым.'
  );
}

screenPrice = Number(screenPrice);



// Получение стоимости всех дополнительных услуг

const getAllServicePrices = function () {
  let sum = 0;

  for (let i = 1; i <= 2; i++) {
    let textFromPrompt = prompt(`Сколько будет стоить услуга ${i}?`);

    while (
      textFromPrompt === null ||
      textFromPrompt.trim() === '' ||
      !checkIsNumber(textFromPrompt)
    ) {
      textFromPrompt = prompt(
        `Введите стоимость услуги ${i} числом. Поле не должно быть пустым.`
      );
    }

    sum += Number(textFromPrompt);
  }

  return sum;
};

const allServicePrices = getAllServicePrices();

console.log(`Стоимость вёрстки: ${screenPrice} руб.`);
console.log(`Стоимость всех услуг: ${allServicePrices} руб.`);


