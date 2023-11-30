import _ from 'lodash';

function component() {
    const element = document.createElement('div');

    // now lodash is imported by this script
    element.innerHTML = _.join(['Hello is this ', 'webpack'], ' ');
    element.classList.add('hello')

    return element;
}

document.body.appendChild(component());