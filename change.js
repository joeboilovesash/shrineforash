document.addEventListener("animationend", () => {
    console.log('event caught')
    if (event.animationName == 'lastone') {
        console.log('lastone executed')

        window.location.href = "home.html";

    }
  
});

