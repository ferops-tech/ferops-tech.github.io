const body = document.body;
const btnHamburger = document.querySelector('.fa-bars');
const btnTheme = document.querySelector('.fa-moon, .fa-sun');

// ==========================
// Dark/Light Theme Handling
// ==========================

// Read saved theme from localStorage, default to dark
let savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
body.classList.remove('dark', 'light'); // remove any pre-existing class
body.classList.add(savedTheme);

// Ensure icon is correct
if (btnTheme) {
  btnTheme.classList.remove('fa-moon', 'fa-sun');
  btnTheme.classList.add(savedTheme === 'dark' ? 'fa-sun' : 'fa-moon');
}

// Toggle theme function
const toggleTheme = () => {
  const isCurrentlyDark = body.classList.contains('dark');

  // Swap body classes
  body.classList.toggle('dark', !isCurrentlyDark);
  body.classList.toggle('light', isCurrentlyDark);

  // Swap icon
  if (btnTheme) {
    btnTheme.classList.toggle('fa-sun', !isCurrentlyDark);
    btnTheme.classList.toggle('fa-moon', isCurrentlyDark);
  }

  // Save current theme
  localStorage.setItem('portfolio-theme', body.classList.contains('dark') ? 'dark' : 'light');
};

// Attach click to theme icon
if (btnTheme) btnTheme.addEventListener('click', toggleTheme);

// ==========================
// Hamburger Menu
// ==========================
const displayList = () => {
  const navUl = document.querySelector('.nav__list');
  if (btnHamburger.classList.contains('fa-bars')) {
    btnHamburger.classList.replace('fa-bars', 'fa-times');
    navUl.classList.add('display-nav-list');
  } else {
    btnHamburger.classList.replace('fa-times', 'fa-bars');
    navUl.classList.remove('display-nav-list');
  }
};

btnHamburger.addEventListener('click', displayList);

// ==========================
// Scroll Up Button
// ==========================
const scrollUp = () => {
  const btnScrollTop = document.querySelector('.scroll-top');
  if (body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    btnScrollTop.style.display = 'block';
  } else {
    btnScrollTop.style.display = 'none';
  }
};

document.addEventListener('scroll', scrollUp);
