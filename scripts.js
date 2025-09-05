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

const track = document.querySelector('.carrossel-track');
const items = Array.from(track.children);
const btnPrev = document.querySelector('.carrossel-btn.prev');
const btnNext = document.querySelector('.carrossel-btn.next');

const slideWidth = 180; // largura + gap
let pos = 0;

// 1️⃣ Duplica os itens para criar o loop
items.forEach(item => {
  const clone = item.cloneNode(true);
  track.appendChild(clone);
});

// 2️⃣ Calcula o total real (com duplicatas)
const total = track.children.length;

// 3️⃣ Função para mover
function moveTrack(direction) {
  pos += direction * slideWidth;
  track.style.transition = 'transform 0.5s ease';
  track.style.transform = `translateX(${pos}px)`;

  // 4️⃣ Detecta se chegou no fim/início e reposiciona
  track.addEventListener('transitionend', () => {
    if (pos <= -(total / 2) * slideWidth) {
      // Passou do fim
      track.style.transition = 'none';
      pos = 0;
      track.style.transform = `translateX(${pos}px)`;
    }
    if (pos > 0) {
      // Passou do início
      track.style.transition = 'none';
      pos = -(total / 2 - 1) * slideWidth;
      track.style.transform = `translateX(${pos}px)`;
    }
  }, { once: true });
}

// 5️⃣ Eventos dos botões
btnNext.addEventListener('click', () => moveTrack(-1));
btnPrev.addEventListener('click', () => moveTrack(1));