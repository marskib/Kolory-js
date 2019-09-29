let fullScr = document.getElementById('containt');
let body = document.querySelector('body');
let bodyKolor = body.style.backgroundColor.toString();
let fullScrKolor = fullScr.style.backgroundColor.toString();



let handleKlikOnKwadrat = function (event) {
    var kolor = event.target.id.toString();
    body.style.backgroundColor = kolor;
    fullScr.style.backgroundColor = kolor;
    [...kwadraty].forEach(kwadrat => kwadrat.style.backgroundColor = kolor);
    //
    ukryjKursorWylaczHandlery();
    przywrocWszystko(2000);
}

function ukryjKursorWylaczHandlery() {
    body.style.cursor = "none";
    fullScr.style.cursor = "none";
    [...kwadraty].forEach(kwadrat => kwadrat.style.cursor = "none");
    [...kwadraty].forEach(kwadrat => kwadrat.onclick = null);
}

function przywrocWszystko(delay) {
    setTimeout(() => {
        body.style.backgroundColor = bodyKolor;
        fullScr.style.backgroundColor = fullScrKolor;
        [...kwadraty].forEach(kwadrat => kwadrat.style.backgroundColor = kwadrat.id.toString());
        //
        body.style.cursor = "default";
        fullScr.style.cursor = "default";
        [...kwadraty].forEach(kwadrat => kwadrat.style.cursor = "pointer");
        [...kwadraty].forEach(kwadrat => kwadrat.onclick = handleKlikOnKwadrat);
    }, delay);
}

let kwadraty = document.querySelectorAll('section div');
[...kwadraty].forEach(kwadrat => kwadrat.onclick = handleKlikOnKwadrat);


