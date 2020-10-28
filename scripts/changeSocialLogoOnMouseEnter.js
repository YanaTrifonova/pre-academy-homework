function onEnter(element, networkName) {
    let value = 'images/' + networkName + '_colored.svg';
    element.setAttribute('src', value);
}