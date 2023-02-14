const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(occupied)')
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie')


//+ works as parseint

populateUI();

let ticketPrice = +movieSelect.value;
//save slected move index and price
function setMovieData(movieIndex, moviePrice){
  localStorage.setItem('selectedMovieIndex', movieIndex)
  localStorage.setItem('selectedMoviePrice', moviePrice)
}

//This function counts seats and return a  list of all
function updateSelectedCount(){
  const selectedSeats = document.querySelectorAll('.row .seat.selected')

// i map(run for each) the seat selected a function that gives me the seat location on the first seat const.
//used ... for take the arr info
const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex))

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
  
}
// get data from local storage
function populateUI(){
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

  if (selectedSeats !== null && selectedSeats.length > 0){
    seats.forEach((seat, index) =>{
      if(selectedSeats.indexOf(index)> -1){
        seat.classList.add('selected')
      }
    })
  }

  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
  if(selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}


// movie select
movieSelect.addEventListener('change', e =>{
ticketPrice = +e.target.value;
 setMovieData(e.target.selectedIndex, e.target.value)
updateSelectedCount();
})


// seat click event
container.addEventListener('click', function(e){
  if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected')



    updateSelectedCount();
  }
})



// Initial count and total
updateSelectedCount();