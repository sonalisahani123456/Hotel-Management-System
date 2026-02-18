const suggestions = [
    "the taj palace",
    "jw marriott",
    "The Oberoi Amarvilas",
    "Umaid bhawan palace",
    "The Oberoi udaivilas",
    "The leela palace",
    "The oberoi",
    "The lake palace",
    "ITC Grab=nd palace",
"The park hyatt",
"Trident nariman point",
  ];
  
  function showSuggestions(value) {
    const suggestionsList = document.getElementById("suggestions-list");
    suggestionsList.innerHTML = '';
    
    if (value.length === 0) {
        suggestionsList.style.display = 'none';
        return;
    }
  
    const filteredSuggestions = suggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(value.toLowerCase())
    );
  
    filteredSuggestions.forEach((suggestion) => {
        const suggestionItem = document.createElement("div");
        suggestionItem.classList.add("suggestion-item");
        suggestionItem.textContent = suggestion;
        suggestionItem.onclick = () => {
            document.getElementById("search-bar").value = suggestion;
            suggestionsList.style.display = 'none';
        };
        suggestionsList.appendChild(suggestionItem);
    });
  
    suggestionsList.style.display = filteredSuggestions.length > 0 ? 'block' : 'none';
  }