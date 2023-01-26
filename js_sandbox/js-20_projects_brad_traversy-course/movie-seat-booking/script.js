const $container = document.querySelector(".container"),
  $seats = document.querySelectorAll(".row .seat:not(.occupied)"),
  $count = document.getElementById("count"),
  $total = document.getElementById("total"),
  $movieSelect = document.getElementById("movie");

let ticketPrice = +$movieSelect.value; // con "+" parseamos el valor a entero

populateUI();

// Save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem("selectedMovieIndex", movieIndex);
  localStorage.setItem("selectedMoviePrice", moviePrice);
}

// Update total and count
function updatedSelectedCount() {
  const $selectedSeats = document.querySelectorAll(".row .seat.selected");

  // Copy selected seats into arr
  // Map through array
  // return a new array indexes
  const seatsIndex = [...$selectedSeats].map((seat) =>
    [...$seats].indexOf(seat)
  );

  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

  const selectedSeatsCount = $selectedSeats.length;

  $count.innerText = selectedSeatsCount;
  $total.innerText = selectedSeatsCount * ticketPrice;
}

// Get data from localStorage and populate UI
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    $seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");
  console.log(selectedMovieIndex);

  if (selectedMovieIndex !== null) {
    $movieSelect.selectedIndex = selectedMovieIndex;
    ticketPrice = +$movieSelect.value;
  }
}

// Movie select event
$movieSelect.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  updatedSelectedCount();
});

// Seat click event
$container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("ocuppied")
  ) {
    e.target.classList.toggle("selected");

    updatedSelectedCount();
  }
});

// Initial count and total set
updatedSelectedCount();
