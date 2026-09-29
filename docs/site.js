const videos = [...document.querySelectorAll('video')];
const allButton = document.querySelector('#play-all');
function updateButtons() {
  for (const video of videos) {
    const button = document.querySelector(`[data-video="${video.id}"]`);
    button.textContent = video.paused ? 'Play' : 'Pause';
    button.setAttribute('aria-label', `${video.paused ? 'Play' : 'Pause'} ${video.dataset.label}`);
  }
  allButton.textContent = videos.some(v => !v.paused) ? 'Pause all videos' : 'Play all videos';
}
for (const video of videos) {
  video.addEventListener('play', updateButtons);
  video.addEventListener('pause', updateButtons);
  document.querySelector(`[data-video="${video.id}"]`).addEventListener('click', async () => {
    if (video.paused) {
      try { await video.play(); } catch { video.controls = true; }
    } else video.pause();
  });
}
allButton.addEventListener('click', async () => {
  if (videos.some(v => !v.paused)) videos.forEach(v => v.pause());
  else await Promise.allSettled(videos.map(v => v.play().catch(() => { v.controls = true; })));
  updateButtons();
});
document.querySelector('#copy-citation').addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try {
    await navigator.clipboard.writeText(document.querySelector('#bibtex').textContent);
    status.textContent = 'BibTeX copied.';
  } catch {
    const range = document.createRange();
    range.selectNodeContents(document.querySelector('#bibtex'));
    const selection = window.getSelection();
    selection.removeAllRanges(); selection.addRange(range);
    status.textContent = 'Citation selected. Press Ctrl+C or ⌘C to copy.';
  }
});
updateButtons();
