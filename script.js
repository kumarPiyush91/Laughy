fetch("https://icanhazdadjoke.com/slack")
  .then(response => response.json())
  .then(jokeData => {
    const jokeText = jokeData.attachments[0].text;
    const jokeElement = document.getElementById("jokeElement");

    jokeElement.textContent = jokeText;
  })
  .catch(error => {
    document.getElementById("jokeElement").textContent =
      "Failed to load joke 😢";
  });
