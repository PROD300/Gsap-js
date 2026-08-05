let titleProject = prompt('Название проекта?') || 'BiGCompleance';
let screensValue = prompt('Типы экранов (шаблонные, с уникальным дизайном, с анимациями)') || '';
const screenPrice = 165; // цена за экран (фиксированная)

const respAns = (prompt('Нужен ли респонсивный сайт? (да/нет)') || 'нет').trim();
const responsive = /^(д|y|yes)/i.test(respAns);

// Сервисы и их цены
const service1 = prompt('Какой сервис нужен?') || '';
const servicePrice1 = parseFloat((prompt('Сколько это будет стоить?') || '').replace(',', '.')) || 0;
const service2 = prompt('Какой еще сервис тебе нужен?') || '';
const servicePrice2 = parseFloat((prompt('Сколько будет стоить этот второй сервис?') || '').replace(',', '.')) || 0;

// Итоговая сумма: screenPrice + servicePrice1 + servicePrice2
const fullPrice = screenPrice + servicePrice1 + servicePrice2;

// Процент отката подрядчику (по умолчанию 10)
let partnerPercent = parseFloat((prompt('Какой процент отдаём подрядчику? (введите число, например 10)') || '10').replace(',', '.'));
if (isNaN(partnerPercent)) partnerPercent = 10;
const servicePercentPrice = Math.round(fullPrice - fullPrice * (partnerPercent / 100));

console.log('servicePercentPrice:', servicePercentPrice);

// Гарантируем наличие контейнера для вывода
let result = document.getElementById('result');
if (!result) {
  result = document.createElement('div');
  result.id = 'result';
  document.body.appendChild(result);
}

// Заполняем информацию на странице
result.innerHTML = `
  <h2>${titleProject}</h2>
  <p><strong>Скрины:</strong> ${screensValue}</p>
  <p><strong>Цена за экран:</strong> ${screenPrice}</p>
  <p><strong>Сервис 1:</strong> ${service1} — ${servicePrice1}</p>
  <p><strong>Сервис 2:</strong> ${service2} — ${servicePrice2}</p>
  <p><strong>Полная цена (screen + services):</strong> ${fullPrice}</p>
  <p><strong>Процент партнёру:</strong> ${partnerPercent}%</p>
  <p><strong>Итог после отката партнёру:</strong> ${servicePercentPrice}</p>
  <p><strong>Адаптив:</strong> ${responsive ? 'Да' : 'Нет'}</p>
`;

// Логика скидок и проверок
if (fullPrice < 0) {
  console.log('Что то пошло не так');
} else if (fullPrice === 0) {
  console.log('Цена равна 0');
} else if (fullPrice === 20000) {
  console.log('Цена равна 20000 — специальный случай');
} else if (fullPrice === 50000) {
  console.log('Цена равна 50000 — специальный случай');
} else if (fullPrice > 50000) {
  console.log('Сделаем скидку 10%');
} else if (fullPrice > 20000) {
  console.log('Сделаем скидку 5%');
} else if (fullPrice > 0) {
  console.log('Скидка не предусмотрена');
}

// Дополнительный лог для отладки
console.log({
  titleProject,
  screensValue,
  screenPrice,
  responsive,
  service1,
  servicePrice1,
  service2,
  servicePrice2,
  fullPrice,
  partnerPercent,
  servicePercentPrice
});


