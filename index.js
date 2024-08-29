const overlay = document.querySelector('.overlay')

document.querySelector('#menuOpen').addEventListener('click', (event) => {
    event.stopPropagation()
    openOverlay()
})

document.querySelector('#menuClose').addEventListener('click', () => {
    closeOverlay()
})


document.addEventListener('click', (event) => {
    if (!overlay.contains(event.target)) {
        closeOverlay()
    }
})

















function closeOverlay() {
    document.querySelector('.overlay').style.width = '0';
    // document.body.classList.remove('no-scroll');
    document.querySelector('.nav-logo').style.display = 'block'
}

function openOverlay() {
    document.querySelector('.overlay').style.width = '100%';
    // document.body.classList.add('no-scroll');
    document.querySelector('.nav-logo').style.display = 'none'
}

function toggleOverlay()
{
    (document.querySelector('.overlay').style.width === '100%') 
    ? 
        closeOverlay()
    :
        openOverlay();      
}