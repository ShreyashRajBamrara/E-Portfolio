// Academic data
const academicData = [
  {
    institution: "Joni's University",
    degree: 'B.Sc. in Lifeblood Studies',
    year: '2020–2024',
    grade: 'GPA: 3.92/4.0',
    description: 'Explored the mysteries of lifeblood, blue magic, and butterfly migration.',
    achievements: [
      'Lifeblood Research Grant Recipient',
      'Published paper on Blue Butterfly Migration',
      'Student Council President'
    ]
  },
  {
    institution: 'Azure High',
    degree: 'High School Diploma',
    year: '2018–2020',
    grade: 'Top 5%',
    description: 'Focused on science, arts, and the study of bioluminescent flora.',
    achievements: [
      'Science Olympiad Finalist',
      'Art Club Vice President',
      'Founded Butterfly Conservation Club'
    ]
  }
];

// SVG for a blue butterfly
const butterflySVG = `
<svg class="butterfly" viewBox="0 0 32 32" fill="none">
  <ellipse cx="16" cy="16" rx="6" ry="10" fill="#7ffcff" fill-opacity="0.7"/>
  <ellipse cx="10" cy="16" rx="7" ry="12" fill="#3eeaff" fill-opacity="0.5" transform="rotate(-20 10 16)"/>
  <ellipse cx="22" cy="16" rx="7" ry="12" fill="#3eeaff" fill-opacity="0.5" transform="rotate(20 22 16)"/>
  <ellipse cx="16" cy="22" rx="2" ry="4" fill="#aeefff" fill-opacity="0.7"/>
  <ellipse cx="16" cy="10" rx="1.5" ry="2.5" fill="#aeefff" fill-opacity="0.7"/>
</svg>
`;

// SVG for a blue water drop
const waterDropSVG = `
<svg class="water-drop-svg" viewBox="0 0 32 32" fill="none">
  <ellipse cx="16" cy="22" rx="10" ry="14" fill="#3eeaff" fill-opacity="0.18"/>
  <ellipse cx="16" cy="18" rx="7" ry="10" fill="#7ffcff" fill-opacity="0.22"/>
  <ellipse cx="16" cy="24" rx="3" ry="4" fill="#aeefff" fill-opacity="0.5"/>
</svg>
`;

// SVG for a vine
const vineSVG = `
<svg class="vine-svg" viewBox="0 0 60 180" fill="none">
  <path d="M30 0 Q35 40 20 60 Q5 80 30 100 Q55 120 40 140 Q25 160 30 180" stroke="#3ec6b8" stroke-width="3" fill="none"/>
  <ellipse cx="30" cy="180" rx="6" ry="3" fill="#3ec6b8" fill-opacity="0.4"/>
</svg>
`;

// Generate timeline
function generateTimeline() {
  const timelineContainer = document.querySelector('.timeline-container');
  academicData.forEach((entry, index) => {
    const timelineEntry = document.createElement('div');
    timelineEntry.className = 'timeline-entry';
    timelineEntry.innerHTML = `
      <div class="timeline-node">${butterflySVG}</div>
      <div class="timeline-content">
        <h2>${entry.institution}</h2>
        <h3>${entry.degree}</h3>
        <div class="year">${entry.year} ${entry.grade ? '| ' + entry.grade : ''}</div>
        <p>${entry.description}</p>
        <ul class="achievements">
          ${entry.achievements.map(a => `<li>${a}</li>`).join('')}
        </ul>
      </div>
    `;
    timelineContainer.appendChild(timelineEntry);
  });
}

// Intersection Observer for fade-in
function setupIntersectionObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  document.querySelectorAll('.timeline-entry').forEach(entry => {
    observer.observe(entry);
  });
}

// Floating butterflies
function createButterflies(num = 7) {
  const container = document.querySelector('.butterfly-container');
  // Large main butterfly
  const main = document.createElement('div');
  main.innerHTML = butterflySVG;
  main.className = 'floating-butterfly';
  main.style.position = 'absolute';
  main.style.left = '60vw';
  main.style.top = '60vh';
  main.style.opacity = 0.9;
  main.style.transform = 'scale(1.5)';
  container.appendChild(main);
  animateButterfly(main, 0.12, 0.08);
  // Small butterflies
  for (let i = 0; i < num; i++) {
    const el = document.createElement('div');
    el.innerHTML = butterflySVG;
    el.className = 'floating-butterfly';
    el.style.position = 'absolute';
    el.style.left = Math.random() * 100 + 'vw';
    el.style.top = Math.random() * 80 + 'vh';
    el.style.opacity = 0.5 + Math.random() * 0.4;
    el.style.transform = `scale(${0.5 + Math.random() * 0.7})`;
    container.appendChild(el);
    animateButterfly(el);
  }
}
function animateButterfly(el, speedX = 0.2, speedY = 0.1) {
  let x = parseFloat(el.style.left);
  let y = parseFloat(el.style.top);
  let dx = (Math.random() - 0.5) * speedX;
  let dy = (Math.random() - 0.5) * speedY;
  function move() {
    x += dx + (Math.random() - 0.5) * 0.08;
    y += dy + (Math.random() - 0.5) * 0.06;
    if (x < 0) x = 100; if (x > 100) x = 0;
    if (y < 0) y = 80; if (y > 80) y = 0;
    el.style.left = x + 'vw';
    el.style.top = y + 'vh';
    requestAnimationFrame(move);
  }
  move();
}

// Water drops
function createWaterDrops(num = 5) {
  const container = document.querySelector('.waterdrops-container');
  for (let i = 0; i < num; i++) {
    const el = document.createElement('div');
    el.className = 'water-drop';
    el.innerHTML = waterDropSVG;
    el.style.left = Math.random() * 90 + 'vw';
    el.style.top = (20 + Math.random() * 60) + 'vh';
    el.style.animationDelay = (Math.random() * 5) + 's';
    el.style.opacity = 0.3 + Math.random() * 0.4;
    el.style.transform = `scale(${0.7 + Math.random() * 0.7})`;
    container.appendChild(el);
  }
}

// Vines
function createVines(num = 4) {
  const container = document.querySelector('.vines-container');
  for (let i = 0; i < num; i++) {
    const el = document.createElement('div');
    el.className = 'vine';
    el.innerHTML = vineSVG;
    el.style.left = `calc(${10 + i * 20 + Math.random() * 10}vw)`;
    el.style.animationDelay = (Math.random() * 3) + 's';
    container.appendChild(el);
  }
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  generateTimeline();
  setupIntersectionObserver();
  createButterflies();
  createWaterDrops();
  createVines();
}); 