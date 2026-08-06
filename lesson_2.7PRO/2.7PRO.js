const tabMenu = document.querySelectorAll('.tab-link');
const tabContent = document.querySelectorAll('.tab-pane');
const tabNum = document.querySelectorAll('.tab-num');

console.log(tabMenu);
console.log(tabContent);
console.log(tabNum);

tabMenu.forEach((tabLink, index) => {
  tabLink.addEventListener('click', () => {
    tabContent.forEach(tabItem => {
      tabItem.classList.remove('active')
    })
    tabContent[index].classList.add('active')
  })
})

tabNum.forEach((item, index) => {
  item.textContent = index + 1;
});
