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

function renderCard(topic, vocab, grammar, part3Questions) {
  document.getElementById("category").textContent = "\u{1F343} " + topic.category;
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
  vocab.forEach((item, index) => {
    const li = document.createElement("li");
    li.style.setProperty("--i", index);
    const strong = document.createElement("strong");
    strong.textContent = item.word;
    li.appendChild(strong);
    li.appendChild(document.createTextNode(" — " + item.meaning));
    vocabList.appendChild(li);
  });

  document.getElementById("grammar-name").textContent = grammar.name;
  document.getElementById("grammar-explanation").textContent = grammar.explanation;
  document.getElementById("grammar-example").textContent = grammar.example;

  const part3List = document.getElementById("part3-list");
  part3List.innerHTML = "";
  part3Questions.forEach((question, index) => {
    const li = document.createElement("li");
    li.style.setProperty("--i", index);
    li.textContent = question;
    part3List.appendChild(li);
  });

  const card = document.querySelector(".card");
  card.style.animation = "none";
  void card.offsetWidth;
  card.style.animation = "";
}

function populateTopicSelect() {
  const select = document.getElementById("topic-select");
  select.innerHTML = "";

  const randomOption = document.createElement("option");
  randomOption.value = "";
  randomOption.textContent = "🌱 Random plot";
  select.appendChild(randomOption);

  const categories = [...new Set(TOPICS.map((t) => t.category))];
  categories.forEach((category) => {
    const group = document.createElement("optgroup");
    group.label = category;
    TOPICS.filter((t) => t.category === category).forEach((topic) => {
      const option = document.createElement("option");
      option.value = topic.title;
      option.textContent = topic.title;
      group.appendChild(option);
    });
    select.appendChild(group);
  });
}

function getSelectedTopic() {
  const select = document.getElementById("topic-select");
  if (!select.value) {
    return pickRandom(TOPICS);
  }
  return TOPICS.find((t) => t.title === select.value);
}

function generatePracticeCard() {
  const topic = getSelectedTopic();
  const vocab = pickRandomN(CATEGORY_VOCAB[topic.category], 4);
  const grammar = pickRandom(GRAMMAR_STRUCTURES);
  const part3Questions = pickRandomN(topic.part3, 4);
  renderCard(topic, vocab, grammar, part3Questions);
}

populateTopicSelect();
document.getElementById("generate-btn").addEventListener("click", generatePracticeCard);
document.getElementById("topic-select").addEventListener("change", generatePracticeCard);

generatePracticeCard();
