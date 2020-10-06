function onOver(element, networkName) {
    let value = 'img/' + networkName + '_colored.svg';
    element.setAttribute('src', value);
}

function onOut(element, networkName) {
    let value = 'img/' + networkName + '_dark.svg';
    element.setAttribute('src', value);
}