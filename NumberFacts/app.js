let favoriteNumber = 4;
let baseURL = "http://numbersapi.com";

// 1.
$.getJSON(`${baseURL}/${favoriteNumber}?json`).then(data => {
  console.log(data);
});

// 2.
let favoriteNumbers = [9, 16, 27];
$.getJSON(`${baseURL}/${favoriteNumbers}?json`).then(data => {
  console.log(data);
});

// 3.
Promise.all(
  Array.from({ length: 4 }, () => {
    return $.getJSON(`${baseURL}/${favoriteNumber}?json`);
  })
).then(facts => {
  facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
});
