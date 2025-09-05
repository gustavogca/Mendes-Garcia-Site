// menu dropdown navbar

document.querySelectorAll('.menuToggle').forEach(function(toggle) {
    toggle.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelectorAll('.dropdown-menu').forEach(function(menu) {
            if (menu !== toggle.nextElementSibling) {
                menu.classList.remove('show');

                if (menu.previousElementSibling) {
                    menu.previousElementSibling.classList.remove('active');
                }
            }
        });

        toggle.nextElementSibling.classList.toggle('show');
        toggle.classList.toggle('active');
    });
});

document.addEventListener('click', function(e) {

    if (!e.target.closest('nav')) {
        document.querySelectorAll('.dropdown-menu').forEach(function(menu) {
            menu.classList.remove('show');
        });
        document.querySelectorAll('.menuToggle').forEach(function(toggle) {
            toggle.classList.remove('active');
        });
    }
});

// carrossel de logos

const track = document.querySelector('.carrossel-track');
const items = Array.from(track.children);
const btnPrev = document.querySelector('.carrossel-btn.prev');
const btnNext = document.querySelector('.carrossel-btn.next');

const slideWidth = 180;
let pos = 0;

items.forEach(item => {
  const clone = item.cloneNode(true);
  track.appendChild(clone);
});

const total = track.children.length;

function moveTrack(direction) {
  pos += direction * slideWidth;
  track.style.transition = 'transform 0.5s ease';
  track.style.transform = `translateX(${pos}px)`;

  track.addEventListener('transitionend', () => {
    if (pos <= -(total / 2) * slideWidth) {

      track.style.transition = 'none';
      pos = 0;
      track.style.transform = `translateX(${pos}px)`;
    }
    if (pos > 0) {

      track.style.transition = 'none';
      pos = -(total / 2 - 1) * slideWidth;
      track.style.transform = `translateX(${pos}px)`;
    }
  }, { once: true });
}

btnNext.addEventListener('click', () => moveTrack(-1));
btnPrev.addEventListener('click', () => moveTrack(1));