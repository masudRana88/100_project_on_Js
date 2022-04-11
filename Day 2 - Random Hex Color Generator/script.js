
const button = document.getElementById('btn')


button.addEventListener('click', () => {
    let rendomColor= Math.random().toString(16).substring(2,8)
    document.body.style.backgroundColor = '#' + rendomColor
    document.getElementById('color').innerHTML = '#' + rendomColor;
})