let titleProject = 'разработка сайта';
const screenPrice = 50000;
const servicePrice1 = 10000;
const servicePrice2 = 5000;
const servicePrice3 = 3000;
const contractorPercent = 10;


// Function expression
const getAllServicePrices = function () {
  return servicePrice1 + servicePrice2 + servicePrice3;
};

const allServicePrices = getAllServicePrices();

// Function declaration
function getFullPrice() {
  return screenPrice + allServicePrices;
}

const fullPrice = getFullPrice();

function getTitle() {
  titleProject =
    titleProject.charAt(0).toUpperCase() +
    titleProject.slice(1).toLowerCase();

  return titleProject;
}

function getServicePercentPrices() {
  return fullPrice - (fullPrice * contractorPercent) / 100;
}

const servicePercentPrice = getServicePercentPrices();

function getRollbackMessage() {
  let rollbackPercent = 0;

  if (fullPrice > 50000) {
    rollbackPercent = 20;
  } else if (fullPrice > 30000) {
    rollbackPercent = 10;
  }

  const rollbackPrice = (fullPrice * rollbackPercent) / 100;

  console.log(
    `Скидка клиента: ${rollbackPercent}% (${rollbackPrice} руб.)`
  );

  return rollbackPrice;
}

const title = getTitle();
const rollbackPrice = getRollbackMessage();

console.log(`Название проекта: ${title}`);
console.log(`Стоимость вёрстки: ${screenPrice} руб.`);
console.log(`Стоимость всех услуг: ${allServicePrices} руб.`);
console.log(`Стоимость всего проекта: ${fullPrice} руб.`);
console.log(
  `Стоимость проекта после вычета процента подрядчику: ${servicePercentPrice} руб.`
);
console.log(`Размер скидки клиента: ${rollbackPrice} руб.`);