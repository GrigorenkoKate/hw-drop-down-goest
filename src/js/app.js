const dropdown = document.querySelector('.dropdown');
const minusButtons = document.querySelectorAll('[data-minus]')
const plusButtons = document.querySelectorAll('[data-plus]')
const btnTexts = document.querySelectorAll('.dropdown__item-btn-text')
const sumGuests = document.querySelector('.dropdown__sum')

// кнопки кол-ва гостей 
plusButtons.forEach(function (plus) {
   plus.addEventListener('click', function () {
      const textPlus = this.parentNode.querySelector('.dropdown__item-btn-text')
      textPlus.textContent++
      updateGuestsText()
   })

})

minusButtons.forEach(function (minus) {
   minus.addEventListener('click', function () {
      const textElement = this.parentNode.querySelector('.dropdown__item-btn-text')
      if (textElement.textContent > 0) {
         textElement.textContent--
         updateGuestsText()
      }
   })
})


// кнопкикол-ва гостей ends
function getText(amount) {
   if (amount == 1) {
      return 'гость'
   } else if (amount >= 2 && amount <= 4) {
      return 'гостя'
   } else {
      return 'гостей'
   }
}

function updateGuestsText() {
   const btnTextsArray = Array.from(btnTexts)  //массив чисел гостей 
   let totalSum = 0                            //общая сумма гостей
   btnTextsArray.forEach(function (btnText) {  //перебираем массив с гостями
      totalSum += parseInt(btnText.textContent) // к общей сумме прибавили числа гостей 
   });
   sumGuests.textContent = totalSum + ' ' + getText(totalSum)  // к общей сумме прибавили функцию getText с тектсом 
}


// выпадание списка 
const dropdownBox = document.querySelector('.dropdown__box')
const dropdownContent = document.querySelector('.dropdown__content')
const dropdownArrow = document.querySelector('.dropdown__arrow')

dropdownBox.addEventListener('click', function () {
   dropdownContent.classList.toggle('active')
   dropdownArrow.classList.toggle('active')
});
// выпадание списка ends

