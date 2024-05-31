// app.js

document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const query = document.getElementById('search-input').value;
    if (query) {
        search(query);
    }
});

function search(query) {
    // Simulate search results
    const results = [
        { title: 'Result 1', url: 'https://example.com/1', snippet: 'This is the first result.' },
        { title: 'Result 2', url: 'https://example.com/2', snippet: 'This is the second result.' },
        { title: 'Result 3', url: 'https://example.com/3', snippet: 'This is the third result.' }
    ];

    displayResults(results);
}

function displayResults(results) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    results.forEach(result => {
        const resultDiv = document.createElement('div');
        resultDiv.classList.add('result');

        const title = document.createElement('h2');
        const link = document.createElement('a');
        link.href = result.url;
        link.textContent = result.title;
        title.appendChild(link);
        resultDiv.appendChild(title);

        const snippet = document.createElement('p');
        snippet.textContent = result.snippet;
        resultDiv.appendChild(snippet);

        resultsDiv.appendChild(resultDiv);
    });
}
