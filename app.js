const toogle = document.querySelector('#toggle');
const themeActual = localStorage.getItem('theme');

if(themeActual) {
    document.documentElement.setAttribute('data-theme', themeActual);
}
if(themeActual === 'oscuro') {
    toogle.checked = true;
}

const cambiarTheme = (event) => {
    if(event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'oscuro');
        localStorage.setItem('theme', 'oscuro')
    }else {
        document.documentElement.setAttribute('data-theme', 'null');
        localStorage.setItem('theme', null)
    }
}

toogle.addEventListener('click', cambiarTheme);