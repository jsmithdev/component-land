import { buildCustomElementConstructor } from 'lwc';
import MyApp from 'my/app';

customElements.define('my-app', buildCustomElementConstructor(MyApp));

{
    // Handle Theming
    const setTheme = theme => {
        for (const key in theme) {
            if( theme[key])
                document.documentElement.style.setProperty(key, theme[key]);
        }
    };

    // Get custom theme
    const storage = localStorage.getItem('theme');
    const data = storage ? JSON.parse(storage) : null;

    // If theme is set use it else use default theme and set it
    const theme =
        data === 'object'
            ? data
            : {
                  '--color-bright': '#FFF',
                  '--color-lightest': '#EEE',
                  '--color-accent': '#00e6ff',
                  '--color-light': '#ec00ff',
                  '--color-mid': '#4f23d7',
                  '--color-mid-dark': '#082f4f',
                  '--color-dark': '#011627',
                  '--color-highlight': '#ffd70e',
                  '--shadow-drop':
                      'drop-shadow(12px 12px 7px rgba(0, 0, 0, 0.5))',
                  '--shadow-top':
                      '0px 2px 4px 0 rgba(0, 0, 0, 0.2), 0px -4px 10px 0px rgba(0, 0, 0, 0.2)'
              };

    setTheme(theme);

    if (storage !== 'object') {
        localStorage.setItem('theme', JSON.stringify(theme));
    }
}
