/* Clicked button stays activated */
const rateBtns = document.querySelectorAll('.btn');

rateBtns.forEach((button) => {
  button.addEventListener('click', () => {
    rateBtns.forEach((rateBtn) => {
      return rateBtn.classList.remove('btn-selected');
    });
    button.classList.add('btn-selected');
  });
});
