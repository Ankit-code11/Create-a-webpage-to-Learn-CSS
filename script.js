/* ── CSS SIKHO — script.js ── */

/* ══════════════════════════════
   SIDEBAR: Click pe scroll + active
══════════════════════════════ */
function goTo(id, el) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'start' });
  document.querySelectorAll('.sidebar-item').forEach(i => i.classList.remove('active'));
  el.classList.add('active');
}

/* ══════════════════════════════
   SIDEBAR: Scroll pe auto-highlight
══════════════════════════════ */
window.addEventListener('scroll', () => {
  const topics = [
    'topic-1','topic-2','topic-3','topic-4',
    'topic-5','topic-6','topic-7','topic-8',
    'topic-9','topic-10','topic-11','topic-12'
  ];

  topics.forEach((id, i) => {
    const el = document.getElementById(id);
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.top <= 100 && rect.bottom > 100) {
      document.querySelectorAll('.sidebar-item').forEach(s => s.classList.remove('active'));
      document.querySelectorAll('.sidebar-item')[i].classList.add('active');
    }
  });
});

/* ══════════════════════════════
   PROGRESS TRACKER
══════════════════════════════ */
let doneCount = 0;
const TOTAL_TOPICS = 12;

function markDone(n, btn) {
  const sideItem = document.getElementById('side-' + n);
  if (!sideItem.classList.contains('done')) {
    sideItem.classList.add('done');
    btn.classList.add('done');
    btn.textContent = '✓ Completed!';
    doneCount++;
    updateProgress();
  }
}

function updateProgress() {
  const pct = (doneCount / TOTAL_TOPICS) * 100;
  document.getElementById('prog-fill').style.width = pct + '%';
  document.getElementById('prog-text').textContent = doneCount + ' / ' + TOTAL_TOPICS + ' Done';

  // Saare topics complete hone pe celebration
  if (doneCount === TOTAL_TOPICS) {
    const msg = document.getElementById('completion-msg');
    msg.style.display = 'block';
    msg.scrollIntoView({ behavior: 'smooth' });
  }
}

/* ══════════════════════════════
   MEDIA QUERY LIVE DEMO
══════════════════════════════ */
function updateMQ() {
  const w = window.innerWidth;
  const ind = document.getElementById('mq-indicator');
  const txt = document.getElementById('mq-text');

  if (!ind || !txt) return;

  if (w < 480) {
    ind.textContent = '📱 Mobile';
    ind.style.color = 'var(--red)';
    txt.innerHTML = 'Window width: <strong>' + w + 'px</strong> — Mobile layout! (max-width: 480px)';
  } else if (w < 768) {
    ind.textContent = '📱 Large Mobile';
    ind.style.color = 'var(--orange)';
    txt.innerHTML = 'Window width: <strong>' + w + 'px</strong> — Bada phone / 480px+';
  } else if (w < 1024) {
    ind.textContent = '💻 Tablet';
    ind.style.color = 'var(--yellow)';
    txt.innerHTML = 'Window width: <strong>' + w + 'px</strong> — Tablet layout! 768px+';
  } else {
    ind.textContent = '🖥️ Desktop';
    ind.style.color = 'var(--green)';
    txt.innerHTML = 'Window width: <strong>' + w + 'px</strong> — Desktop layout! 1024px+';
  }
}

// Page load + resize dono pe chalao
updateMQ();
window.addEventListener('resize', updateMQ);
