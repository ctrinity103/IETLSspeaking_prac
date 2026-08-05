# IELTS Speaking Part 2 & 3 Practice Generator

A single-page web app for practicing IELTS Speaking Part 2 and Part 3 with a
student. Click the button to get a random cue-card topic, 4 random pieces of
relevant vocabulary, one advanced grammar structure to try to use in the
answer, and 4 random Part 3 follow-up discussion questions related to the
topic.

## Usage

Open `index.html` in a browser (no build step or server required).

## Customizing the data

All topics, vocabulary, grammar structures, and Part 3 questions live in
`data.js`:

- `TOPICS`: an array of topics, each with a `category`, `title`, `cueCard`
  (bullet points, like a real IELTS cue card), and `part3` (a pool of 5-6
  Part 3 discussion questions related to that specific Part 2 topic). Add
  more items to a topic's `part3` array or add whole new topic objects to
  expand the pool.
- `CATEGORY_VOCAB`: vocabulary pools shared by all topics in a category.
- `GRAMMAR_STRUCTURES`: an array of advanced grammar points, each with a
  `name`, `explanation`, and an example `sentence`.

The app (`app.js`) picks one random topic, 4 random vocabulary items from
that topic's category, one random grammar structure, and 4 random Part 3
questions from that topic's `part3` pool each time "Grow a New Topic" is
clicked.
