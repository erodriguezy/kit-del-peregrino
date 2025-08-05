document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.menu-toggle');
  const menuList = document.querySelector('.menu-list');

  toggleBtn.addEventListener('click', () => {
    menuList.classList.toggle('hidden');
  });
});
