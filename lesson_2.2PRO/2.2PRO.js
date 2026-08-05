const titleProject = 'BiGCompliance';
const screensValue = 'шаблонные, с уникальным дизайном, с анимациями';
const screenPrice = 165;
const percentage = 25;
const fullPrice = 3500;
const responsive = true;

const totalScreens = Math.round(fullPrice / screenPrice);
const discount = fullPrice * (percentage / 100);
const finalPrice = fullPrice - discount;

const result = document.getElementById('result');

if (result) {
  result.innerHTML = `
    <h2>${titleProject}</h2>
    <p><strong>Скрины:</strong> ${screensValue}</p>
    <p><strong>Цена экрана:</strong> ${screenPrice}</p>
    <p><strong>Процент:</strong> ${percentage}%</p>
    <p><strong>Полная цена:</strong> ${fullPrice}</p>
    <p><strong>Адаптив:</strong> ${responsive ? 'Да' : 'Нет'}</p>
    <p><strong>Количество экранов:</strong> ${totalScreens}</p>
    <p><strong>Скидка:</strong> ${discount}</p>
    <p><strong>Итоговая цена:</strong> ${finalPrice}</p>
  `;
}

console.log({
  titleProject,
  screensValue,
  screenPrice,
  percentage,
  fullPrice,
  responsive,
  totalScreens,
  discount,
  finalPrice
});
