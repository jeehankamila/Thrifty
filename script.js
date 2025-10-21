/** @format */

// switch ke tiap pages
function showPage(pageName) {
  var homePage    = document.getElementById('home-page');
  var detailPage  = document.getElementById('product-detail-page');
  var contactPage = document.getElementById('contact-page');

  homePage.classList.remove('active');
  detailPage.classList.remove('active');
  contactPage.classList.remove('active');

  if (pageName === 'home-page') {
    homePage.classList.add('active');
  } else if (pageName === 'product-detail-page') {
    detailPage.classList.add('active');
  } else if (pageName === 'contact-page') {
    contactPage.classList.add('active');
  }

  // scroll balik ke atas
  window.scrollTo(0, 0);
}

function goToHome() {
  showPage('home-page');
}

function goToContact() {
  showPage('contact-page');
}

// nampilin detail product
function showProductDetail(card) {
  var title = card.querySelector('.product-title').textContent;
  var price = card.querySelector('.product-price').textContent;
  var condition = card.querySelector('.product-condition').textContent;
  var imageDiv = card.querySelector('.product-image');

  document.getElementById('detail-title').textContent = title;
  document.getElementById('detail-price').textContent = price;
  document.getElementById('detail-condition').textContent = condition;

  var detailImageContainer = document.querySelector('.product-detail-image');

  // copy style dari product card ke detail page
  detailImageContainer.style.backgroundImage = imageDiv.style.backgroundImage;
  detailImageContainer.style.backgroundSize = 'cover';
  detailImageContainer.style.backgroundPosition = 'center';
  document.getElementById('detail-icon').style.display = 'none';

  showPage('product-detail-page');
}

// klik product card
var productCards = document.querySelectorAll('.product-card');

for (var i = 0; i < productCards.length; i++) {
  var card = productCards[i];

  card.addEventListener('click', function () {
    showProductDetail(this);
  });
}

// klik hero button buat scroll
var heroButton = document.querySelector('.hero-btn');
heroButton.addEventListener('click', function () {
  var firstSection = document.querySelector('.section');
  var sectionPosition = firstSection.offsetTop - 100;

  window.scrollTo({
    top: sectionPosition,
    behavior: 'smooth',
  });
});

// submit contact form
var contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function (event) {
  event.preventDefault();

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var subject = document.getElementById('subject').value;

  alert(
    'Terima kasih ' +
      name +
      '!\nPesan Anda telah dikirim.\n\nKami akan menghubungi Anda di ' +
      email +
      ' segera.',
  );

  contactForm.reset();
});
