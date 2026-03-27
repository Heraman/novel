let currentChapter = 1;
const maxChapter = 447;

const viewer = document.getElementById("pdfViewer");

function loadChapter(chapter) {
  viewer.src = `pdf/chapter-${chapter}.pdf`;
  document.getElementById("title").innerText = `Chapter ${chapter}`;

  // simpan progress
  localStorage.setItem("lastChapter", chapter);
}

function nextChapter() {
  if (currentChapter < maxChapter) {
    currentChapter++;
    loadChapter(currentChapter);
  }
}

function prevChapter() {
  if (currentChapter > 1) {
    currentChapter--;
    loadChapter(currentChapter);
  }
}

function jumpChapter() {
  const input = document.getElementById("jumpInput").value;
  const num = parseInt(input);

  if (num >= 1 && num <= maxChapter) {
    currentChapter = num;
    loadChapter(currentChapter);
  }
}

// load terakhir dibaca
const saved = localStorage.getItem("lastChapter");
if (saved) {
  currentChapter = parseInt(saved);
}

loadChapter(currentChapter);
