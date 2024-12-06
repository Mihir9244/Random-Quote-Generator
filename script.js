const quotes = [
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Do not focus on numbers. Focus on doing what you do best. - Cassey Ho",
    "Motivation will almost always beat mere talent. - Norman Ralph Augustine",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau"
];

const quoteElement = document.getElementById("quote");
const getQuoteButton = document.getElementById("getQuote");
const copyQuoteButton = document.getElementById("copyQuote");


getQuoteButton.addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
});


copyQuoteButton.addEventListener("click", function() {
    const quoteText = quoteElement.textContent;
    navigator.clipboard.writeText(quoteText).then(() => {
        alert("Quote copied to clipboard!");
    });
});
