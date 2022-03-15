const main = () => {
    var count = Number(document.getElementById("count").innerText)

    var add = document.getElementById("add")
    var subtract = document.getElementById("subtract")
    var reset = document.getElementById("reset")


    add.onclick = () => {
        count = count + 1;
        document.getElementById("count").innerText = count
        addClass()
        removeClass()
    }
    subtract.onclick = () => {
        count = count - 1;
        document.getElementById("count").innerText = count
        addClass()
        removeClass()
    }
    reset.onclick = () => {
        count = 0;
        document.getElementById("count").innerText = count
        addClass()
        removeClass()
    }
    const addClass = () => {
        if (count < 0) {
            document.getElementById("count").classList.add('color-red')
        }
        else if(count > 0){
            document.getElementById("count").classList.add('color-yollow')
        }
    }
    const removeClass = () => {
        if (count > 0) {
            document.getElementById("count").classList.remove('color-red')
        }
        else if(count < 0){
            document.getElementById("count").classList.remove('color-yollow')
        }
        else {
            document.getElementById("count").classList.remove('color-yollow' ,'color-red')
        }
    }
    
}
main()