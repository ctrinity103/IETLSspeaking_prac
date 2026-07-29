function pickRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function pickRandomN(array, n) {
  const copy = [...array];
  const result = [];
  const count = Math.min(n, copy.length);
  for (let i = 0; i < count; i++) {
    const index = Math.floor(Math.random() * copy.length);
    result.push(copy.splice(index, 1)[0]);
  }
  return result;
}

function renderCard(topic, vocab, grammar) {
  document.getElementById("category").textContent = topic.category;
  document.getElementById("topic-title").textContent = topic.title;

  const cueList = document.getElementById("cue-card");
  cueList.innerHTML = "";
  topic.cueCard.forEach((point) => {
    const li = document.createElement("li");
    li.textContent = point;
    cueList.appendChild(li);
  });

  const vocabList = document.getElementById("vocab-list");
  vocabList.innerHTML = "";
  vocab.forEach((item) => {
    const li = document.createElement("li");
    const strong = document.createElement("strong");
    strong.textContent = item.word;
    li.appendChild(strong);
    li.appendChild(document.createTextNode(" — " + item.meaning));
    vocabList.appendChild(li);
  });

  document.getElementById("grammar-name").textContent = grammar.name;
  document.getElementById("grammar-explanation").textContent = grammar.explanation;
  document.getElementById("grammar-example").textContent = grammar.example;
}

function generatePracticeCard() {
  const topic = pickRandom(TOPICS);
  const vocab = pickRandomN(topic.vocabulary, 4);
  const grammar = pickRandom(GRAMMAR_STRUCTURES);
  renderCard(topic, vocab, grammar);
}

document.getElementById("generate-btn").addEventListener("click", generatePracticeCard);

generatePracticeCard();
