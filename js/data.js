/**
 * ALICE ESL Phonics P5 - Mighty Fish 3D 海底探險題庫資料
 * 課本學習範圍：Page 04 - 09
 * 主題：Digraph Sounds & Days of the Week
 */

const P5_FISH_QUESTIONS = [
  {
    "id": "fish-qa-1",
    "type": "QA",
    "source": "ALICE ESL Phonics P5 Page 04 - 09",
    "questionEn": "Can you sing a song?",
    "questionZh": "你會唱歌嗎？",
    "speechText": "Can you sing a song?",
    "options": [
      "Yes, I can.",
      "No, I can't.",
      "Yes, I mouth."
    ],
    "correct": "Yes, I can.",
    "audioFallback": "P5_flashcards_audios/P5_sing.mp3",
    "voiceType": "speech"
  },
  {
    "id": "fish-qa-2",
    "type": "QA",
    "source": "ALICE ESL Phonics P5 Page 04 - 09",
    "questionEn": "Is today Monday?",
    "questionZh": "今天是星期一嗎？",
    "speechText": "Is today Monday?",
    "options": [
      "Yes, it is.",
      "No, it isn't.",
      "Yes, I can."
    ],
    "correct": "Yes, it is.",
    "audioFallback": "P5_flashcards_audios/P5_Monday.mp3",
    "voiceType": "speech"
  },
  {
    "id": "fish-qa-3",
    "type": "QA",
    "source": "ALICE ESL Phonics P5 Page 04 - 09",
    "questionEn": "Which word has digraph th?",
    "questionZh": "哪一個單字有複合子音 th？",
    "speechText": "Which word has digraph th?",
    "options": [
      "mouth",
      "star",
      "socks"
    ],
    "correct": "mouth",
    "audioFallback": "P5_flashcards_audios/P5_mouth.mp3",
    "voiceType": "speech"
  },
  {
    "id": "fish-qa-4",
    "type": "QA",
    "source": "ALICE ESL Phonics P5 Page 04 - 09",
    "questionEn": "Which word begins with st?",
    "questionZh": "哪一個單字是 st 開頭？",
    "speechText": "Which word begins with st?",
    "options": [
      "star",
      "thumb",
      "sing"
    ],
    "correct": "star",
    "audioFallback": "P5_flashcards_audios/P5_star.mp3",
    "voiceType": "speech"
  },
  {
    "id": "fish-qa-5",
    "type": "QA",
    "source": "ALICE ESL Phonics P5 Page 04 - 09",
    "questionEn": "Which word ends with ng?",
    "questionZh": "哪一個單字是 ng 結尾？",
    "speechText": "Which word ends with ng?",
    "options": [
      "sing",
      "stew",
      "math"
    ],
    "correct": "sing",
    "audioFallback": "P5_flashcards_audios/P5_sing.mp3",
    "voiceType": "speech"
  },
  {
    "id": "fish-qa-6",
    "type": "QA",
    "source": "ALICE ESL Phonics P5 Page 04 - 09",
    "questionEn": "Which day is in the weekend?",
    "questionZh": "哪一天是週末？",
    "speechText": "Which day is in the weekend?",
    "options": [
      "Saturday",
      "Monday",
      "Friday"
    ],
    "correct": "Saturday",
    "audioFallback": "P5_flashcards_audios/P5_Saturday.mp3",
    "voiceType": "speech"
  }
];

if (typeof window !== "undefined") {
  window.P1_FISH_QUESTIONS = P5_FISH_QUESTIONS;
  window.P5_FISH_QUESTIONS = P5_FISH_QUESTIONS;
  window.P1_QUESTIONS_DATA = P5_FISH_QUESTIONS;
  window.P5_QUESTIONS_DATA = P5_FISH_QUESTIONS;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    P1_FISH_QUESTIONS: P5_FISH_QUESTIONS,
    P5_FISH_QUESTIONS,
    P1_QUESTIONS_DATA: P5_FISH_QUESTIONS
  };
}
