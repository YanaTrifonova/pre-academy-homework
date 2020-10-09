function onEnter(element, networkName) {
    let value = 'img/' + networkName + '_colored.svg';
    element.setAttribute('src', value);
}