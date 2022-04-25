const main = () => {
    const number = document.getElementById('number')
    document.getElementById('btn').addEventListener('click',()=> {
        let renNum = Math.floor(Math.random() * 10 + 1)
        number.innerHTML = renNum
        
    })
}
main()