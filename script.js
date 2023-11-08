window.onload = () =>
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => response.json())
    .then((booksObj) => {
      booksObj.forEach((book) => {
        const row = document.getElementById("books");
        const col = document.createElement("div");
        col.className = "card p-2 mb-2 col-12 col-sm-6 col-md-4 col-lg-3";
        col.style.height = "630px";

        const img = document.createElement("img");
        img.className = "card-img-top";
        img.style.height = "400px";
        img.src = book.img;

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";

        const h5 = document.createElement("h5");
        h5.className = "card-title";
        h5.innerText = book.title;

        const p = document.createElement("p");
        p.className = "card-text";
        p.innerText = "€" + book.price;

        const btn = document.createElement("button");
        btn.className = "btn btn-danger m-2";
        // btn.innerText = "Scarta";
        btn.innerHTML = '<span onclick="removeCard(this)">Scarta</span>';

        const buyBtn = document.createElement("button");
        buyBtn.className = "btn btn-primary";
        buyBtn.innerHTML = '<span onclick="buyBook()">Compra Ora</span>';

        col.appendChild(img);
        cardBody.appendChild(h5);
        cardBody.appendChild(p);
        cardBody.appendChild(btn);
        cardBody.appendChild(buyBtn);
        col.appendChild(cardBody);
        row.appendChild(col);
      });
    })
    .catch((error) => error);

function removeCard(e) {
  console.dir(e);
  const button = e.parentElement;
  const cardBody = button.parentElement;
  const card = cardBody.parentElement;
  card.remove();
}

