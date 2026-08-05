
function checkIsNumber(value) {
  return (
    typeof value === 'string' &&
    value.trim() !== '' &&
    isFinite(Number(value))
  );
}

function randomGenerate(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const gameBotFunction = function () {
  let mysteryNumber = randomGenerate(1, 100);
  let tries = 3;

  function getResult() {
    let answerNum = prompt('Угадайте число от 1 до 100');

    if (answerNum === null) {
      alert('Вы завершили игру');
      return;
    }

    while (
      !checkIsNumber(answerNum) ||
      Number(answerNum) < 1 ||
      Number(answerNum) > 100
    ) {
      answerNum = prompt('Введите число от 1 до 100');

      if (answerNum === null) {
        alert('Вы завершили игру');
        return;
      }
    }

    answerNum = Number(answerNum);

    if (answerNum === mysteryNumber) {
      const playAgain = confirm(
        'Поздравляю! Вы угадали число. Хотите сыграть ещё раз?'
      );

      if (playAgain) {
        tries = 3;
        gameBotFunction();
      } else {
        alert('Вы завершили игру');
      }

      return;
    }

        tries--;

    if (answerNum < mysteryNumber) {
      alert(`Загаданное число больше. Осталось попыток: ${tries}`);
    } else {
      alert(`Загаданное число меньше. Осталось попыток: ${tries}`);
    }


    if (tries > 0) {
      getResult();
      return;
    }

    const playAgain = confirm('Попытки закончились! Хотите сыграть ещё раз?');

    if (playAgain) {
      tries = 3;
      gameBotFunction();
    } else {
      alert('Вы завершили игру');
    }
  }

  getResult();
};

gameBotFunction();