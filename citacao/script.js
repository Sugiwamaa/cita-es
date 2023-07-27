const quotes = [
  {
    quote: "A vida é o que acontece enquanto você está ocupado fazendo outros planos.",
    author: "John Lennon",
    image: "john.jpg"
  },
  {
    quote: "Não é a força, mas a constância dos bons sentimentos que conduz os homens à felicidade.",
    author: "Friedrich Nietzsche",
    image: "niet.jpg"
  },
  {
    quote: "O insucesso é apenas uma oportunidade para recomeçar com mais inteligência.",
    author: "Henry Ford",
    image: "henry.jpg"
  },
  {

    quote: "Nada é permanente, exceto a mudança.",
    author: "Heráclito de Éfeso",
    image: "efeso.jpg"

  },
  {

    quote: "O ser é e o não-ser não é.",
    author: "Parmênides de Eleia",
    image: "eleia.jpg"

  },
  {

    quote: "Só sei que nada sei.",
    author: "Sócrates",
    image: "socrates.jpg"

  },
  {

    quote: "Creio para compreender e compreendo para crer melhor.",
    author: "Santo Agostinho",
    image: "santo.png"

  },
  {

    quote: "O desordenado amor por si mesmo é a causa de todos os pecados.",
    author: "São Tomás de Aquino",
    image: "tomas.jpg"

  },
  {

    quote: "Penso, logo existo.",
    author: "Descartes",
    image: "descartes.jpg"

  },
  {

    quote: "Onde não há lei, não há liberdade.",
    author: "Locke",
    image: "locke.png"

  }
];

const quoteDisplay = document.getElementById('quoteDisplay');
const authorDisplay = document.getElementById('authorDisplay');
const authorImage = document.getElementById('authorImage');
const newQuoteButton = document.getElementById('newQuoteButton');

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteDisplay.textContent = `"${randomQuote.quote}"`;
  authorDisplay.textContent = `- ${randomQuote.author}`;
  authorImage.src = randomQuote.image;
}

newQuoteButton.addEventListener('click', generateRandomQuote);

generateRandomQuote();
