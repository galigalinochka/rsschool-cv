const menuIcon = document.querySelector('.header__menu-icon');
const wrapper = document.querySelector('.wrapper');
const burgerMenu = document.createElement('div');
burgerMenu.innerHTML = `
  <nav class="sidebar__nav">
    <ul>
      <li><a href="#contacts">Contacts</a></li>
      <li><a href="#tech-skills">Tech Skills</a></li>
      <li><a href="#soft-skills">Soft Skills</a></li>
      <li><a href="#about-me">About me</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#work-experience">Work experience</a></li>
      <li><a href="#education">Education</a></li>
    </ul>
  </nav>`;
burgerMenu.classList.add('close');
wrapper.append(burgerMenu);

menuIcon.addEventListener('click', function() {
  burgerMenu.classList.toggle('close');
  burgerMenu.classList.toggle('open');
});