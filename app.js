const WORDS = [
  { id: 1, idn: "Halo (sopan)", ko: "안녕하세요", roman: "annyeonghaseyo", category: "Salam", note: "Salam sopan yang umum dipakai saat bertemu seseorang." },
  { id: 2, idn: "Terima kasih", ko: "감사합니다", roman: "gamsahamnida", category: "Ungkapan dasar", note: "Ungkapan terima kasih yang sopan." },
  { id: 3, idn: "Maaf", ko: "죄송합니다", roman: "joesonghamnida", category: "Ungkapan dasar", note: "Permintaan maaf yang sopan." },
  { id: 4, idn: "Ya", ko: "네", roman: "ne", category: "Jawaban dasar", note: "Bisa berarti “ya” atau “iya”." },
  { id: 5, idn: "Tidak", ko: "아니요", roman: "aniyo", category: "Jawaban dasar", note: "Bentuk sopan untuk mengatakan “tidak”." },
  { id: 6, idn: "Air", ko: "물", roman: "mul", category: "Benda", note: "Kata benda untuk air." },
  { id: 7, idn: "Nasi / makanan", ko: "밥", roman: "bap", category: "Makanan", note: "Dapat berarti nasi atau makanan." },
  { id: 8, idn: "Rumah", ko: "집", roman: "jip", category: "Tempat", note: "Kata benda untuk rumah." },
  { id: 9, idn: "Sekolah", ko: "학교", roman: "hakgyo", category: "Tempat", note: "Kata benda untuk sekolah." },
  { id: 10, idn: "Teman", ko: "친구", roman: "chingu", category: "Orang", note: "Kata benda untuk teman." },
  { id: 11, idn: "Keluarga", ko: "가족", roman: "gajok", category: "Orang", note: "Kata benda untuk keluarga." },
  { id: 12, idn: "Buku", ko: "책", roman: "chaek", category: "Benda", note: "Kata benda untuk buku." },
  { id: 13, idn: "Makan (kata kerja dasar)", ko: "먹다", roman: "meokda", category: "Kata kerja", note: "Bentuk kamus. Dalam percakapan, bentuknya berubah sesuai situasi." },
  { id: 14, idn: "Minum (kata kerja dasar)", ko: "마시다", roman: "masida", category: "Kata kerja", note: "Bentuk kamus untuk minum." },
  { id: 15, idn: "Pergi (kata kerja dasar)", ko: "가다", roman: "gada", category: "Kata kerja", note: "Bentuk kamus untuk pergi." },
  { id: 16, idn: "Datang (kata kerja dasar)", ko: "오다", roman: "oda", category: "Kata kerja", note: "Bentuk kamus untuk datang." },
  { id: 17, idn: "Bagus", ko: "좋아요", roman: "joayo", category: "Ungkapan", note: "Bentuk sopan yang sering dipakai untuk mengatakan “bagus/suka” sesuai konteks." },
  { id: 18, idn: "Besar", ko: "커요", roman: "keoyo", category: "Kata sifat", note: "Bentuk sopan percakapan dari “besar”." },
  { id: 19, idn: "Kecil", ko: "작아요", roman: "jagayo", category: "Kata sifat", note: "Bentuk sopan percakapan dari “kecil”." },
  { id: 20, idn: "Sampai jumpa", ko: "안녕히 가세요", roman: "annyeonghi gaseyo", category: "Salam", note: "Diucapkan kepada orang yang pergi ketika kamu tetap di tempat." }
];

const $ = (id) => document.getElementById(id);
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let deck = [];
let index = 0;
let correct = 0;
let streak = 0;
let bestStreak = Number(localStorage.getItem("kr-best-streak") || 0);
let answered = new Set();
let recognition = null;
let isListening = false;
let answerShown = false;

const normalize = (s) => (s || "")
  .toLocaleLowerCase("ko-KR")
  .replace(/[.,!?。！？\s'’\-]/g, "")
  .replace(/[\u200b-\u200d\ufeff]/g, "")
  .trim();

function shuffle(items) {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function startSession() {
  deck = shuffle(WORDS);
  index = 0; correct = 0; streak = 0; answered = new Set();
  $("completion").classList.add("hidden");
  renderQuestion();
}

function currentWord() { return deck[index]; }

function renderQuestion() {
  if (index >= deck.length) { finishSession(); return; }
  const w = currentWord();
  answerShown = false;
  $("indonesianWord").textContent = w.idn;
  $("categoryText").textContent = w.category;
  $("progressText").textContent = `${index + 1}/${deck.length}`;
  $("correctText").textContent = correct;
  $("streakText").textContent = streak;
  $("progressBar").style.width = `${(index / deck.length) * 100}%`;
  $("transcript").textContent = "";
  $("feedback").textContent = "";
  $("feedback").className = "feedback";
  $("micLabel").textContent = SpeechRecognition ? "Ketuk mikrofon untuk menjawab" : "Pengenalan suara tidak didukung browser ini";
  $("micBtn").classList.remove("listening");
  $("micBtn").disabled = !SpeechRecognition;
  $("showAnswerBtn").disabled = false;
  $("showAnswerBtn").textContent = "Lihat Jawaban";
  $("nextBtn").disabled = true;
  $("answerPanel").classList.add("hidden");
  $("hangulAnswer").textContent = w.ko;
  $("romanization").textContent = w.roman;
  $("extraNote").textContent = w.note;
}

function showAnswer() {
  answerShown = true;
  $("answerPanel").classList.remove("hidden");
  $("showAnswerBtn").textContent = "Jawaban Ditampilkan";
  $("feedback").textContent = "Pelajari jawabannya, lalu lanjutkan jika sudah siap.";
  $("feedback").className = "feedback";
  $("nextBtn").disabled = false;
}

function startListening() {
  if (!SpeechRecognition || isListening) return;
  try {
    recognition = new SpeechRecognition();
    recognition.lang = "ko-KR";
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.maxAlternatives = 5;
    isListening = true;
    $("micBtn").classList.add("listening");
    $("micLabel").textContent = "Mendengarkan… ucapkan sekarang";
    $("feedback").textContent = "";
    $("transcript").textContent = "";
    recognition.onresult = (event) => {
      let interim = "";
      let finalText = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i];
        if (result.isFinal) finalText += result[0].transcript;
        else interim += result[0].transcript;
      }
      $("transcript").textContent = finalText || interim ? `Terdengar: ${finalText || interim}` : "";
      if (finalText) evaluateAnswer(finalText, event.results[event.results.length - 1]);
    };
    recognition.onerror = (event) => {
      $("feedback").textContent = event.error === "not-allowed"
        ? "Izin mikrofon ditolak. Izinkan mikrofon di pengaturan situs Chrome."
        : event.error === "no-speech"
          ? "Suara belum terdengar. Coba bicara sedikit lebih keras."
          : "Suara belum berhasil dikenali. Coba sekali lagi.";
      $("feedback").className = "feedback bad";
    };
    recognition.onend = () => {
      isListening = false;
      $("micBtn").classList.remove("listening");
      if (!answered.has(currentWord().id)) $("micLabel").textContent = "Ketuk mikrofon untuk mencoba lagi";
    };
    recognition.start();
  } catch (e) {
    isListening = false;
    $("micBtn").classList.remove("listening");
    $("feedback").textContent = "Mikrofon belum bisa dimulai. Periksa izin mikrofon dan coba lagi.";
    $("feedback").className = "feedback bad";
  }
}

function evaluateAnswer(transcript, result) {
  const w = currentWord();
  const alternatives = [];
  if (result) {
    for (let i = 0; i < result.length; i++) alternatives.push(result[i].transcript);
  }
  alternatives.push(transcript);
  const target = normalize(w.ko);
  const matched = alternatives.some(t => {
    const spoken = normalize(t);
    return spoken === target || (spoken.length > 1 && target.length > 1 && (spoken.includes(target) || target.includes(spoken)));
  });
  if (matched) {
    if (!answered.has(w.id)) {
      answered.add(w.id); correct++; streak++;
      bestStreak = Math.max(bestStreak, streak);
      localStorage.setItem("kr-best-streak", String(bestStreak));
    }
    $("correctText").textContent = correct;
    $("streakText").textContent = streak;
    $("feedback").textContent = "Benar! Bagus sekali 🎉";
    $("feedback").className = "feedback good";
    $("micLabel").textContent = "Jawaban dikenali dengan benar";
    $("answerPanel").classList.remove("hidden");
    $("showAnswerBtn").textContent = "Lihat Jawaban";
    $("nextBtn").disabled = false;
    $("progressBar").style.width = `${((index + 1) / deck.length) * 100}%`;
    // Give the learner a brief moment to see the result, then advance automatically.
    setTimeout(() => {
      if (index < deck.length && currentWord().id === w.id && $("nextBtn").disabled === false) nextQuestion();
    }, 1200);
  } else {
    streak = 0;
    $("streakText").textContent = streak;
    $("feedback").textContent = "Belum cocok. Coba lagi, atau lihat jawabannya.";
    $("feedback").className = "feedback bad";
    $("micLabel").textContent = "Ketuk mikrofon untuk mencoba lagi";
  }
}

function nextQuestion() {
  if (isListening && recognition) recognition.stop();
  index++;
  renderQuestion();
}

function speakAnswer() {
  const w = currentWord();
  if (!("speechSynthesis" in window)) {
    $("feedback").textContent = "Fitur suara contoh tidak tersedia di browser ini.";
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(w.ko);
  utterance.lang = "ko-KR";
  utterance.rate = 0.82;
  const voices = window.speechSynthesis.getVoices();
  const koreanVoice = voices.find(v => v.lang.toLowerCase().startsWith("ko"));
  if (koreanVoice) utterance.voice = koreanVoice;
  window.speechSynthesis.speak(utterance);
}

function finishSession() {
  $("progressBar").style.width = "100%";
  $("summaryText").textContent = `Kamu menjawab ${correct} dari ${deck.length} kosakata dengan benar pada percobaan pertama yang berhasil. Rekor beruntun tersimpan: ${bestStreak}.`;
  $("completion").classList.remove("hidden");
}

$("micBtn").addEventListener("click", startListening);
$("showAnswerBtn").addEventListener("click", showAnswer);
$("nextBtn").addEventListener("click", nextQuestion);
$("speakAnswerBtn").addEventListener("click", speakAnswer);
$("resetBtn").addEventListener("click", startSession);
$("againBtn").addEventListener("click", startSession);

if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => {}));
}
startSession();
