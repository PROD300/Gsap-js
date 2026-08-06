document.addEventListener('DOMContentLoaded', () => {
  const tabMenu = document.querySelectorAll('.tab-link');
  const tabContent = document.querySelectorAll('.tab-pane');
  const tabNum = document.querySelectorAll('.tab-num');

  tabMenu.forEach((tabLink, index) => {
    tabLink.addEventListener('click', () => {
      tabContent.forEach(tc => tc.classList.remove('active'));
      tabMenu.forEach(tm => tm.classList.remove('active'));

      if (tabContent[index]) tabContent[index].classList.add('active');
      tabLink.classList.add('active');
    });
  });

  tabNum.forEach((item, index) => {
    item.textContent = index + 1;
  });

  // инициализация: синхронизировать active для tab-link с уже активной панелью или первый
  const activeIndex = Array.from(tabContent).findIndex(tc => tc.classList.contains('active'));
  const init = activeIndex === -1 ? 0 : activeIndex;
  tabMenu.forEach(tm => tm.classList.remove('active'));
  if (tabMenu[init]) tabMenu[init].classList.add('active');
})