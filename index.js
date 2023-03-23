const menuIcon = document.querySelector('.burger-menu');
const spanFirst = document.querySelector('.span-first');
const spanSecond = document.querySelector('.span-second');
const spanThird = document.querySelector('.span-third');
const wrapper = document.querySelector('.wrapper');
const body = document.querySelector('body');
const burgerMenu = document.createElement('div');
burgerMenu.classList.add('menu-mobile');

burgerMenu.innerHTML = `
  <nav class="sidebar__nav">
    <ul class = "list-block">
      <li><a href="#contacts" class ="list-item">contacts</a></li>
      <li><a href="#tech-skills" class ="list-item">tech skills</a></li>
      <li><a href="#soft-skills" class ="list-item">soft skills</a></li>
      <li><a href="#about-me" class ="list-item">about me</a></li>
      <li><a href="#projects" class ="list-item">projects</a></li>
      <li><a href="#work-experience" class ="list-item">work experience</a></li>
      <li><a href="#education" class ="list-item">education</a></li>
    </ul>
  </nav>`;
burgerMenu.classList.add('close');
wrapper.append(burgerMenu);

menuIcon.addEventListener('click', function() {
  spanFirst.classList.toggle('active');
  spanSecond.classList.toggle('active');
  spanThird.classList.toggle('active');
  burgerMenu.classList.toggle('close');
  burgerMenu.classList.toggle('open');
  body.classList.add('lock');
  wrapper.classList.add('dark');
});