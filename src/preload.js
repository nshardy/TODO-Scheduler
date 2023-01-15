// preload.js

const Store = require('electron-store');
const store = new Store();

window.addEventListener('DOMContentLoaded', () => {
    // change theme
    const replaceThemeText = (selector, text) => {
        const element = document.getElementById(selector);
        if ( element )
            element.innerHTML = text;
    }
    
    if ( store.get('theme') ) {
        let themeString = store.get('theme');
        let themeSelected = document.getElementById('themeSelected')

        if ( themeString === 'Light' )
            themeString = '/default/lightmode.css';
        if ( themeString === 'Dark' )
            themeString = '/default/darkmode.css';
        if ( themeString === 'Darker' )
            themeString = '/default/darkermode.css';

        replaceThemeText(themeSelected, `<link rel=\"stylesheet\" href=\"../plugins/themes${themeString}\">`);
    }
});