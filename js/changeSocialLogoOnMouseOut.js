function onOut(element, networkName) {
    let elementClassList = document.getElementById("body").classList;
    let imgSrc;

    elementClassList.forEach((classValue) => {
        if (classValue === "theme-dark") {
            imgSrc = 'img/' + networkName + '_light.svg';
        } else if (classValue === "theme-light") {
            imgSrc = 'img/' + networkName + '_dark.svg';
        } else {
            console.log("error: "+ elementClassList + "does not contains neither theme-light nor theme-light")
        }
    })

    element.setAttribute('src', imgSrc);
}