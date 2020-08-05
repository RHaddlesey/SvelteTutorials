import { writable } from "svelte/store";

const PollStore = writable([
  {
    id: 2,
    question: "Python or JavaScript?",
    answerA: "Python",
    answerB: "JavaScript",
    votesA: 9,
    votesB: 15,
  },
]);

export default PollStore;