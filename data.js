// IELTS Speaking Part 2 practice data: topics (with cue-card points and
// relevant vocabulary) and advanced grammar structures for storytelling.

const TOPICS = [
  {
    category: "People",
    title: "Describe a person who inspires you",
    cueCard: [
      "who this person is",
      "how you know them",
      "what they have done",
      "and explain why this person inspires you"
    ],
    vocabulary: [
      { word: "role model", meaning: "a person you admire and try to be like" },
      { word: "down-to-earth", meaning: "practical, sensible, and modest" },
      { word: "perseverance", meaning: "continued effort despite difficulty" },
      { word: "to look up to someone", meaning: "to admire and respect someone" },
      { word: "self-made", meaning: "successful through one's own effort, not inherited advantage" },
      { word: "resilient", meaning: "able to recover quickly from difficulties" },
      { word: "words of wisdom", meaning: "advice that shows good judgement" },
      { word: "trailblazer", meaning: "a person who is the first to do something new" }
    ]
  },
  {
    category: "People",
    title: "Describe a family member you admire",
    cueCard: [
      "who this person is",
      "what they do",
      "how often you see them",
      "and explain why you admire them"
    ],
    vocabulary: [
      { word: "close-knit family", meaning: "a family with strong, caring relationships" },
      { word: "breadwinner", meaning: "the main income earner in a family" },
      { word: "supportive", meaning: "providing encouragement and help" },
      { word: "hardworking", meaning: "putting in a lot of effort and energy" },
      { word: "sacrifice", meaning: "giving something up for someone else's benefit" },
      { word: "nurturing", meaning: "caring for and encouraging the growth of someone" },
      { word: "wholeheartedly", meaning: "completely and sincerely" },
      { word: "unconditional love", meaning: "love with no limits or conditions" }
    ]
  },
  {
    category: "People",
    title: "Describe a friend you have known for a long time",
    cueCard: [
      "who this friend is",
      "how you met",
      "what you usually do together",
      "and explain why you have stayed friends"
    ],
    vocabulary: [
      { word: "childhood friend", meaning: "a friend you have known since you were young" },
      { word: "to hit it off", meaning: "to immediately like and get along with someone" },
      { word: "inseparable", meaning: "always together, very close" },
      { word: "trustworthy", meaning: "able to be relied on as honest" },
      { word: "to keep in touch", meaning: "to maintain contact with someone" },
      { word: "shared interests", meaning: "hobbies or topics both people enjoy" },
      { word: "loyal", meaning: "faithful and supportive" },
      { word: "reminisce", meaning: "to talk about pleasant memories from the past" }
    ]
  },
  {
    category: "People",
    title: "Describe a teacher who influenced you",
    cueCard: [
      "who this teacher was",
      "what subject they taught",
      "what was special about their teaching",
      "and explain how they influenced you"
    ],
    vocabulary: [
      { word: "mentor", meaning: "an experienced person who advises a less experienced one" },
      { word: "strict but fair", meaning: "demanding high standards while treating students justly" },
      { word: "to instil (values)", meaning: "to gradually establish an idea or attitude in someone" },
      { word: "approachable", meaning: "friendly and easy to talk to" },
      { word: "thought-provoking", meaning: "stimulating careful thought" },
      { word: "dedicated", meaning: "committed to a task or purpose" },
      { word: "to broaden one's horizons", meaning: "to expand one's knowledge or experience" },
      { word: "encouraging", meaning: "giving support and confidence" }
    ]
  },
  {
    category: "Places",
    title: "Describe your hometown",
    cueCard: [
      "where it is",
      "what it is famous for",
      "what it looks like",
      "and explain how you feel about it"
    ],
    vocabulary: [
      { word: "picturesque", meaning: "visually attractive, like a picture" },
      { word: "bustling", meaning: "full of busy activity" },
      { word: "laid-back", meaning: "relaxed and easy-going" },
      { word: "landmark", meaning: "a well-known building or feature that identifies a place" },
      { word: "up-and-coming", meaning: "developing and likely to succeed" },
      { word: "off the beaten track", meaning: "not well-known or often visited" },
      { word: "urban sprawl", meaning: "the uncontrolled expansion of a city" },
      { word: "sense of community", meaning: "a feeling of belonging among neighbours" }
    ]
  },
  {
    category: "Places",
    title: "Describe a place you would like to visit",
    cueCard: [
      "where this place is",
      "how you learned about it",
      "what you would do there",
      "and explain why you want to visit it"
    ],
    vocabulary: [
      { word: "bucket-list destination", meaning: "a place you want to visit before you die" },
      { word: "breathtaking", meaning: "astonishingly beautiful" },
      { word: "off the grid", meaning: "remote, without normal services" },
      { word: "immerse oneself in", meaning: "to become fully involved in something" },
      { word: "hidden gem", meaning: "a wonderful place that is not well known" },
      { word: "vibrant culture", meaning: "a lively and colourful way of life" },
      { word: "must-see attraction", meaning: "something visitors should not miss" },
      { word: "wanderlust", meaning: "a strong desire to travel" }
    ]
  },
  {
    category: "Places",
    title: "Describe a quiet place you like to go",
    cueCard: [
      "where it is",
      "how you found out about it",
      "what you do there",
      "and explain why you find it peaceful"
    ],
    vocabulary: [
      { word: "tranquil", meaning: "calm and peaceful" },
      { word: "sanctuary", meaning: "a place of safety or peace" },
      { word: "to unwind", meaning: "to relax after stress or tension" },
      { word: "secluded", meaning: "quiet and private, hidden away" },
      { word: "recharge one's batteries", meaning: "to rest and regain energy" },
      { word: "serenity", meaning: "the state of being calm and peaceful" },
      { word: "escape the hustle and bustle", meaning: "to get away from busy, noisy life" },
      { word: "idyllic", meaning: "extremely peaceful and picturesque" }
    ]
  },
  {
    category: "Places",
    title: "Describe a foreign country you would like to visit",
    cueCard: [
      "which country it is",
      "what you know about it",
      "what you would like to do there",
      "and explain why you want to go there"
    ],
    vocabulary: [
      { word: "cultural heritage", meaning: "traditions and customs passed down over generations" },
      { word: "cuisine", meaning: "a style of cooking associated with a place" },
      { word: "exotic", meaning: "unusual and exciting because from a distant place" },
      { word: "to broaden one's perspective", meaning: "to gain a wider view of the world" },
      { word: "language barrier", meaning: "difficulty communicating due to different languages" },
      { word: "culture shock", meaning: "disorientation from encountering an unfamiliar culture" },
      { word: "melting pot", meaning: "a place where different cultures mix" },
      { word: "itinerary", meaning: "a planned route or schedule for a trip" }
    ]
  },
  {
    category: "Objects",
    title: "Describe a gift you received that you liked",
    cueCard: [
      "what the gift was",
      "who gave it to you",
      "why they gave it to you",
      "and explain why you liked it"
    ],
    vocabulary: [
      { word: "sentimental value", meaning: "value based on emotional association, not price" },
      { word: "thoughtful", meaning: "showing careful consideration for others" },
      { word: "to treasure something", meaning: "to value something highly" },
      { word: "heirloom", meaning: "a valuable object passed down through generations" },
      { word: "unwrap", meaning: "to remove the wrapping from a gift" },
      { word: "token of appreciation", meaning: "a gift given to show gratitude" },
      { word: "cherished", meaning: "deeply and fondly valued" },
      { word: "keepsake", meaning: "a small item kept in memory of someone or something" }
    ]
  },
  {
    category: "Objects",
    title: "Describe a piece of technology you find useful",
    cueCard: [
      "what it is",
      "how often you use it",
      "what you use it for",
      "and explain why you find it useful"
    ],
    vocabulary: [
      { word: "indispensable", meaning: "absolutely necessary" },
      { word: "user-friendly", meaning: "easy to use" },
      { word: "streamline", meaning: "to make a process simpler and more efficient" },
      { word: "cutting-edge", meaning: "most modern and advanced" },
      { word: "to rely on", meaning: "to depend on something" },
      { word: "glitch", meaning: "a small technical problem" },
      { word: "multitask", meaning: "to do several things at the same time" },
      { word: "labour-saving", meaning: "reducing the amount of work needed" }
    ]
  },
  {
    category: "Objects",
    title: "Describe an item of clothing you like to wear",
    cueCard: [
      "what it is",
      "when you got it",
      "when you wear it",
      "and explain why you like it"
    ],
    vocabulary: [
      { word: "versatile", meaning: "able to be used in many different ways" },
      { word: "understated", meaning: "simple and elegant, not showy" },
      { word: "hand-me-down", meaning: "a used item passed from one person to another" },
      { word: "tailored", meaning: "made to fit closely to someone's body" },
      { word: "on-trend", meaning: "fashionable at the moment" },
      { word: "comfort zone (in style)", meaning: "the familiar style one feels comfortable wearing" },
      { word: "statement piece", meaning: "an item that stands out and expresses personality" },
      { word: "well-worn", meaning: "showing signs of frequent use" }
    ]
  },
  {
    category: "Objects",
    title: "Describe a book that had a strong impact on you",
    cueCard: [
      "what the book was",
      "what it was about",
      "when you read it",
      "and explain why it had a strong impact on you"
    ],
    vocabulary: [
      { word: "page-turner", meaning: "a book that is exciting and hard to put down" },
      { word: "thought-provoking", meaning: "causing careful thought" },
      { word: "protagonist", meaning: "the main character in a story" },
      { word: "gripping", meaning: "extremely exciting or interesting" },
      { word: "to broaden one's outlook", meaning: "to expand one's way of thinking" },
      { word: "plot twist", meaning: "an unexpected change in a story's direction" },
      { word: "resonate with someone", meaning: "to have deep meaning or emotional connection for someone" },
      { word: "profound", meaning: "having deep meaning or effect" }
    ]
  },
  {
    category: "Events",
    title: "Describe a memorable celebration you attended",
    cueCard: [
      "what the celebration was",
      "where it took place",
      "who you celebrated with",
      "and explain why it was memorable"
    ],
    vocabulary: [
      { word: "festive atmosphere", meaning: "a joyful, celebratory mood" },
      { word: "get-together", meaning: "an informal social gathering" },
      { word: "to let one's hair down", meaning: "to relax and enjoy oneself freely" },
      { word: "extravagant", meaning: "elaborate and expensive" },
      { word: "milestone", meaning: "a significant event or achievement" },
      { word: "to reminisce", meaning: "to talk fondly about the past" },
      { word: "unforgettable", meaning: "so remarkable it cannot be forgotten" },
      { word: "gathering", meaning: "a meeting of people for a shared purpose" }
    ]
  },
  {
    category: "Events",
    title: "Describe an achievement you are proud of",
    cueCard: [
      "what the achievement was",
      "when it happened",
      "what you did to achieve it",
      "and explain why you are proud of it"
    ],
    vocabulary: [
      { word: "milestone", meaning: "a significant point of progress" },
      { word: "to overcome obstacles", meaning: "to successfully deal with difficulties" },
      { word: "sense of accomplishment", meaning: "a feeling of satisfaction from achieving something" },
      { word: "determination", meaning: "firmness of purpose" },
      { word: "to pay off", meaning: "to result in success after effort" },
      { word: "against all odds", meaning: "despite great difficulty" },
      { word: "hard-earned", meaning: "gained through significant effort" },
      { word: "breakthrough", meaning: "an important discovery or achievement" }
    ]
  },
  {
    category: "Events",
    title: "Describe a time you helped someone",
    cueCard: [
      "who you helped",
      "what the situation was",
      "what you did to help",
      "and explain how you felt afterwards"
    ],
    vocabulary: [
      { word: "to lend a hand", meaning: "to help someone" },
      { word: "compassionate", meaning: "feeling and showing concern for others" },
      { word: "to go out of one's way", meaning: "to make a special effort to do something" },
      { word: "selfless", meaning: "putting others' needs before one's own" },
      { word: "gratifying", meaning: "giving satisfaction or pleasure" },
      { word: "in need", meaning: "lacking basic necessities or requiring help" },
      { word: "to make a difference", meaning: "to have a significant positive effect" },
      { word: "empathy", meaning: "the ability to understand another's feelings" }
    ]
  },
  {
    category: "Events",
    title: "Describe a journey that was memorable",
    cueCard: [
      "where you went",
      "who you went with",
      "what happened during the journey",
      "and explain why it was memorable"
    ],
    vocabulary: [
      { word: "road trip", meaning: "a journey made by car" },
      { word: "scenic route", meaning: "a route with beautiful views" },
      { word: "eventful", meaning: "full of interesting or important happenings" },
      { word: "detour", meaning: "an alternative, indirect route" },
      { word: "to set off", meaning: "to begin a journey" },
      { word: "unforeseen circumstances", meaning: "unexpected events" },
      { word: "once-in-a-lifetime", meaning: "an experience that happens only once" },
      { word: "layover", meaning: "a short stop between parts of a journey" }
    ]
  },
  {
    category: "Experiences",
    title: "Describe a time you learned a new skill",
    cueCard: [
      "what the skill was",
      "how you learned it",
      "how long it took",
      "and explain how you felt about learning it"
    ],
    vocabulary: [
      { word: "steep learning curve", meaning: "a skill that is difficult to learn quickly" },
      { word: "hands-on experience", meaning: "practical, direct experience" },
      { word: "trial and error", meaning: "learning by testing and correcting mistakes" },
      { word: "to master a skill", meaning: "to become highly proficient at something" },
      { word: "proficient", meaning: "highly skilled or competent" },
      { word: "to pick something up", meaning: "to learn something informally" },
      { word: "persistence", meaning: "continued effort despite difficulty" },
      { word: "self-taught", meaning: "having learned something without formal instruction" }
    ]
  },
  {
    category: "Experiences",
    title: "Describe a difficult decision you made",
    cueCard: [
      "what the decision was",
      "what the alternatives were",
      "how you made the decision",
      "and explain why it was difficult"
    ],
    vocabulary: [
      { word: "to weigh up the pros and cons", meaning: "to carefully consider advantages and disadvantages" },
      { word: "dilemma", meaning: "a difficult choice between two options" },
      { word: "to be torn between", meaning: "to be unable to choose between two options" },
      { word: "gut feeling", meaning: "an instinct rather than logical reasoning" },
      { word: "to take the plunge", meaning: "to decide to do something risky" },
      { word: "second thoughts", meaning: "doubts about a decision already made" },
      { word: "life-changing", meaning: "having a significant impact on someone's life" },
      { word: "no regrets", meaning: "not feeling sorry about a past choice" }
    ]
  },
  {
    category: "Experiences",
    title: "Describe a time you were very happy",
    cueCard: [
      "when this was",
      "where you were",
      "what happened",
      "and explain why you felt so happy"
    ],
    vocabulary: [
      { word: "overjoyed", meaning: "extremely happy" },
      { word: "on cloud nine", meaning: "extremely happy, elated" },
      { word: "elated", meaning: "very happy and excited" },
      { word: "to beam with joy", meaning: "to smile radiantly, showing happiness" },
      { word: "euphoric", meaning: "feeling intense excitement and happiness" },
      { word: "heart-warming", meaning: "causing feelings of happiness and love" },
      { word: "jump for joy", meaning: "to be extremely pleased" },
      { word: "content", meaning: "in a state of peaceful happiness" }
    ]
  },
  {
    category: "Experiences",
    title: "Describe an occasion when you received good news",
    cueCard: [
      "what the news was",
      "how you received it",
      "who told you",
      "and explain how you reacted"
    ],
    vocabulary: [
      { word: "to break the news", meaning: "to tell someone important information" },
      { word: "overwhelmed with joy", meaning: "having very strong feelings of happiness" },
      { word: "long-awaited", meaning: "waited for over a long time" },
      { word: "to sink in", meaning: "to be fully realised or understood gradually" },
      { word: "ecstatic", meaning: "extremely happy and excited" },
      { word: "a weight off one's shoulders", meaning: "a relief from worry or burden" },
      { word: "unexpected", meaning: "not anticipated" },
      { word: "celebrate in style", meaning: "to celebrate in a memorable, lavish way" }
    ]
  },
  {
    category: "Activities & Media",
    title: "Describe a hobby you enjoy",
    cueCard: [
      "what the hobby is",
      "how long you have done it",
      "how often you do it",
      "and explain why you enjoy it"
    ],
    vocabulary: [
      { word: "pastime", meaning: "an activity done regularly for enjoyment" },
      { word: "to unwind", meaning: "to relax" },
      { word: "immersive", meaning: "deeply engaging, absorbing full attention" },
      { word: "therapeutic", meaning: "having a calming, healing effect" },
      { word: "enthusiast", meaning: "a person who is very interested in something" },
      { word: "to hone a skill", meaning: "to refine and improve a skill" },
      { word: "addictive", meaning: "extremely engaging, hard to stop doing" },
      { word: "outlet (for creativity/stress)", meaning: "a way to express or release something" }
    ]
  },
  {
    category: "Activities & Media",
    title: "Describe a film that made an impression on you",
    cueCard: [
      "what the film was",
      "what it was about",
      "when you watched it",
      "and explain why it made an impression on you"
    ],
    vocabulary: [
      { word: "gripping", meaning: "extremely exciting or engaging" },
      { word: "plot twist", meaning: "an unexpected turn in the storyline" },
      { word: "cinematography", meaning: "the art of film photography" },
      { word: "thought-provoking", meaning: "causing serious thought" },
      { word: "box-office hit", meaning: "a commercially very successful film" },
      { word: "compelling", meaning: "evoking strong interest or attention" },
      { word: "storyline", meaning: "the plot of a film or book" },
      { word: "to leave a lasting impression", meaning: "to be remembered for a long time" }
    ]
  },
  {
    category: "Activities & Media",
    title: "Describe a piece of music you enjoy listening to",
    cueCard: [
      "what it is",
      "who performs it",
      "when you listen to it",
      "and explain why you enjoy it"
    ],
    vocabulary: [
      { word: "uplifting", meaning: "making one feel happier or more hopeful" },
      { word: "catchy tune", meaning: "a melody that is easy to remember" },
      { word: "to strike a chord", meaning: "to evoke a strong emotional response" },
      { word: "soothing", meaning: "having a calming effect" },
      { word: "nostalgic", meaning: "evoking sentimental memories of the past" },
      { word: "on repeat", meaning: "listened to again and again" },
      { word: "lyrics", meaning: "the words of a song" },
      { word: "mood-lifting", meaning: "improving one's emotional state" }
    ]
  },
  {
    category: "Activities & Media",
    title: "Describe a sport you enjoy watching or playing",
    cueCard: [
      "what the sport is",
      "how you got interested in it",
      "how often you watch or play it",
      "and explain why you enjoy it"
    ],
    vocabulary: [
      { word: "adrenaline rush", meaning: "a sudden feeling of excitement and energy" },
      { word: "team spirit", meaning: "a feeling of unity among team members" },
      { word: "to root for a team", meaning: "to support a team enthusiastically" },
      { word: "nail-biting finish", meaning: "an extremely tense and exciting ending" },
      { word: "underdog", meaning: "a competitor expected to lose" },
      { word: "stamina", meaning: "the ability to sustain prolonged physical effort" },
      { word: "sportsmanship", meaning: "fair and generous behaviour in sport" },
      { word: "to keep fit", meaning: "to maintain physical health through exercise" }
    ]
  }
];

// Advanced grammatical structures useful for a 1-2 minute Part 2 monologue,
// each with a short explanation and an example the student can adapt.
const GRAMMAR_STRUCTURES = [
  {
    name: "Past Perfect Simple",
    explanation: "Use to show one past action happened before another past action.",
    example: "By the time I arrived, the party had already started."
  },
  {
    name: "Past Perfect Continuous",
    explanation: "Use to emphasise the duration of an action before another past event.",
    example: "I had been studying English for two years before I took the test."
  },
  {
    name: "Present Perfect Continuous",
    explanation: "Use to describe an action that started in the past and continues, emphasising duration.",
    example: "I've been learning to play the guitar since last summer."
  },
  {
    name: "Future Perfect",
    explanation: "Use to describe an action that will be completed before a specific point in the future.",
    example: "By next year, I will have finished my degree."
  },
  {
    name: "Used to / Would (past habits)",
    explanation: "Use to describe repeated past actions or states that no longer happen.",
    example: "When I was a child, I used to visit my grandparents every weekend."
  },
  {
    name: "Third Conditional",
    explanation: "Use to talk about an imaginary past result of a past action that didn't happen.",
    example: "If I hadn't missed the bus, I would have arrived on time."
  },
  {
    name: "Mixed Conditional",
    explanation: "Use to link a past condition to a present result, or a present condition to a past result.",
    example: "If I hadn't studied abroad, I wouldn't be so confident speaking English now."
  },
  {
    name: "Non-defining Relative Clause",
    explanation: "Use to add extra, non-essential information about a person, place, or thing.",
    example: "My grandmother, who raised five children on her own, taught me perseverance."
  },
  {
    name: "Passive Voice (past)",
    explanation: "Use to focus on the action or result rather than who performed it.",
    example: "The award was given to me in front of the whole school."
  },
  {
    name: "Reported Speech",
    explanation: "Use to report what someone said without quoting them directly.",
    example: "She told me that it was the best decision I would ever make."
  },
  {
    name: "Cleft Sentence (What...)",
    explanation: "Use to add emphasis to a particular part of a sentence.",
    example: "What really impressed me was her dedication to helping others."
  },
  {
    name: "Participle Clause",
    explanation: "Use to combine two actions concisely, showing sequence or cause.",
    example: "Having finished my exams, I decided to travel for a month."
  }
];
