const buyBtns = document.querySelectorAll('.js-buy-ticket');

function showBuyTickets () {
    alert("DMM");
}
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets)
}