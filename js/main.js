let imgFolder = document.getElementById("slider")
let btnext = document.getElementById("buttonext")
let btnback = document.getElementById("buttoback")
// definisco Array Immagini

const arrayImg = []
const arrayTitle = []
const arrayCaption = []
current = 0;
// Definisco array immagini
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];
// Costruzioni Elementi HTML per ogni oggetto dell array

images.forEach((element,index,array) => {
    // definisco variabili per proprietà oggetti
    let pic = document.createElement("img")
    let title = document.createElement("h2")
    let caption = document.createElement("p")
    let placeCaption = document.createElement("div")
    // inserisco valori alle variabili
    caption.innerText = element.text;
    title.innerText += element.title;
    pic.src += element.image;
    placeCaption.innerText += element.text;
    // aggiungo classi a gli elementi
    title.classList.add("title");
    placeCaption.classList.add("placecaption")
    caption.classList.add("caption");
    pic.classList.add("slide");
    // posiziono  in html
    imgFolder.append(pic);
    imgFolder.append(title);
    imgFolder.append(placeCaption);
    //  Push in array vuoti
    arrayImg.push(pic);
    arrayTitle.push(title);
    arrayCaption.push(placeCaption);
    if(index > 0) {
        pic.classList.add("hidden")
        placeCaption.classList.add("hidden")
        title.classList.add("hidden")
    }
});

btnext.addEventListener("click", function() {

    for (let c = 0; c < arrayImg.length; c++) {
        
        const slide = arrayImg[c];
        if (c == current+1) {
            slide.classList.remove("hidden");
        
        }
        else {
            slide.classList.add("hidden");
        }
}
for (let c = 0; c < arrayTitle.length; c++) {
        
    const title = arrayTitle[c];
    if (c == current+1) {
        title.classList.remove("hidden");
    }
    else {
        title.classList.add("hidden");
    }
}
current++;
if (currentslide == slideArray.length-1) {
    
    currentslide=-1;
    
    // slide.classList.remove("hidden");
    console.log(currentslide)
}
})






