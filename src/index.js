import { buildCustomElementConstructor } from 'lwc';
import ComponentLand from 'component/land';

customElements.define('component-land', buildCustomElementConstructor(ComponentLand));

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
                  '--color-highlight': '#FFCE4D',
                  '--color-light': '#FF8F4D',
                  '--color-accent': '#49F1C7',
                  '--color-mid': '#6071F2',
                  '--color-mid-light': '#A0AAF3',
                  '--color-mid-dark': '#082f4f',
                  '--color-dark': '#011627',
                  '--shadow-drop':
                      'drop-shadow(12px 12px 7px rgba(0, 0, 0, 0.5))',
                  '--shadow-top':
                      '0px 2px 4px 0 rgba(0, 0, 0, 0.2), 0px -4px 10px 0px rgba(0, 0, 0, 0.2)'
              };
/* 
    --color-bright: #FFF;
    --color-lightest: #EEE;
    --color-highlight: #FFCE4D;
    --color-light: #FF8F4D;
    --color-accent: #49F1C7;
    --color-mid: #6071F2;
    --color-mid-dark: #082f4f;
    --color-dark: #011627;
 */
    setTheme(theme);

    if (storage !== 'object') {
        localStorage.setItem('theme', JSON.stringify(theme));
    }
}
/* Main Primary color */
//.color-primary-0 { color: #49F1C7 }
//.color-primary-1 { color: #FDFEFE }
//.color-primary-2 { color: #92F2DA }
//.color-primary-3 { color: #02F6B9 }
//.color-primary-4 { color: #00CE9A }
/* Main Secondary color (1) */
//.color-secondary-1-0 { color: #6071F2 }
//.color-secondary-1-1 { color: #FDFDFE }
//.color-secondary-1-2 { color: #A0AAF3 }
//.color-secondary-1-3 { color: #223BF7 }
//.color-secondary-1-4 { color: #0019D3 }
/* Main Secondary color (2) */
//.color-secondary-2-0 { color: #FFCE4D }
//.color-secondary-2-1 { color: #FFFFFE }
//.color-secondary-2-2 { color: #FFE39A }
//.color-secondary-2-3 { color: #FFB902 }
//.color-secondary-2-4 { color: #FFB800 }
/* Main Complement color */
//.color-complement-0 { color: #FF8F4D }
//.color-complement-1 { color: #FFFFFE }
//.color-complement-2 { color: #FFC09A }
//.color-complement-3 { color: #FF6002 }
//.color-complement-4 { color: #FF5F00 }
/* 
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
*/