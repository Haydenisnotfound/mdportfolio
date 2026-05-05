// Teaching Philosophy Text Split into Two Paragraphs
const philosophyText1 = `My goal as a student is to learn from being a beginner to having intermediate skills, while cultivating resilience and self-confidence. I aim to have an authentic experience of tackling challenging problems, learning that difficulty is not a barrier but an opportunity for growth. `;

const philosophyText2 = `Mastery is not the expectation; perseverance, curiosity, and learning from mistakes are. Students develop a "tolerance for complexity", persisting through frustration and uncertainty, knowing that effort leads to meaningful progress. Structured projects explore HTML, CSS, JavaScript, responsive design, and interactive interfaces, encouraging experimentation, iteration, and problem-solving.`;

const para1 = document.getElementById("philosophy-text-1");
const para2 = document.getElementById("philosophy-text-2");

let index1 = 0;
let index2 = 0;

// Type first paragraph
function typePhilosophy1() {
  if (index1 < philosophyText1.length) {
    para1.textContent += philosophyText1.charAt(index1);
    index1++;
    setTimeout(typePhilosophy1, 50);
  } else {
    // Start second paragraph after a short delay
    setTimeout(typePhilosophy2, 500);
  }
}

// Type second paragraph
function typePhilosophy2() {
  if (index2 < philosophyText2.length) {
    para2.textContent += philosophyText2.charAt(index2);
    index2++;
    setTimeout(typePhilosophy2, 50);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  typePhilosophy1();
});