# IELTS Speaking Part 2 Practice Generator

A single-page web app for practicing IELTS Speaking Part 2 with a student. Click
the button to get a random cue-card topic, 4 random pieces of relevant
vocabulary, and one advanced grammar structure to try to use in the answer.

## Usage

Open `index.html` in a browser (no build step or server required).

## Customizing the data

All topics, vocabulary, and grammar structures live in `data.js`:

- `TOPICS`: an array of topics, each with a `category`, `title`, `cueCard`
  (bullet points, like a real IELTS cue card), and a `vocabulary` list
  (word + short meaning). Add more items to a topic's `vocabulary` array or
  add whole new topic objects to expand the pool.
- `GRAMMAR_STRUCTURES`: an array of advanced grammar points, each with a
  `name`, `explanation`, and an example `sentence`.

The app (`app.js`) picks one random topic, 4 random vocabulary items from
that topic, and one random grammar structure each time "New Practice Card"
is clicked.
