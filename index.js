function shadowizard(options) {
    // this is to create a standard class name that the user can use
    let images = document.querySelectorAll('.shadowizard'); // user needs to place this standard class name to the element to style

    if (options.shadow_type === 'hard') {
        options.shadow_type = '0px';
    } else {
        options.shadow_type = '15px';
    }

    images.forEach(image => {
        image.style.boxShadow = `10px 10px ${options.shadow_type} 1px rgba(0, 0, 0, 0.12 )`

        if (options.padding === true) {
            image.style.padding = `1rem`;
        } else {
            image.style.padding = `3rem`;
        }
    })
}

module.exports.shadowizard = shadowizard;