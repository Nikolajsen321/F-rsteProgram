const randomQuoteUrl = "https://www.tronalddump.io/random/quote";
const searchQuoteUrl = "https://www.tronalddump.io/search/quote?tag=";

document.addEventListener("DOMContentLoaded", () => {
    const quoteValueElement = document.getElementById("quoteValue");
    const quoteTagElement = document.getElementById("quoteTag");
    const newQuoteButton = document.getElementById("newQuoteButton");
    const quoteListElement = document.getElementById("quoteList");

    async function fetchQuote(url) {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    }

    async function displayRandomQuote() {
        try {
            const quote = await fetchQuote(randomQuoteUrl);
            quoteValueElement.textContent = quote.value;
            quoteTagElement.textContent = `Tag: ${quote.tags[0]}`;
            quoteTagElement.onclick = () => fetchQuotesByTag(quote.tags[0]);
        } catch (error) {
            console.error("Error fetching random quote:", error);
        }
    }

    async function fetchQuotesByTag(tag) {
        try {
            const quotesData = await fetchQuote(`${searchQuoteUrl}${tag}`);
            displayQuotes(quotesData._embedded.quotes);
        } catch (error) {
            console.error("Error fetching quotes by tag:", error);
        }
    }

    function displayQuotes(quotes) {
        quoteListElement.innerHTML = "";
        quotes.forEach(quote => {
            const listItem = document.createElement("li");
            listItem.textContent = `${quote.value} (Tag: ${quote.tags[0]})`;
            listItem.onclick = () => fetchQuotesByTag(quote.tags[0]);
            quoteListElement.appendChild(listItem);
        });
    }

    newQuoteButton.onclick = displayRandomQuote;

    displayRandomQuote();
});
