class Node{
    constructor(value){
        this.value = value
        this.previous = null
    }
}

class stack{
    constructor(){
        this.last = null
    }

    insert(value) {
        if(this.last != null){
            let newNode = new Node(value)
            newNode.previous = this.last
            this.last = newNode
            return
        }
        this.last = new Node(value)
    }

    /*
    traverse(){
        let actual = this.last
        while(actual != null){
            console.log(actual.value)
            actual = actual.previous
        }
    }
    */

    getHtml(){
        let code = ''
        let actual = this.last
        let noSquares = 0
        while(actual != null){
            code += `<div class="table-row cell${noSquares}"><div class="table-data">${actual.value}</div></div>`
            actual = actual.previous
            noSquares ++
        }
        return code
    }

    pop(){
        if(this.last){
            let temporal = this.last.value
            this.last = this.last.previous
            return temporal
        }
        return null
    }
    
}

let lista1 = new stack()
lista1.insert(1)
lista1.insert(2)
lista1.insert(3)
lista1.insert(4)
lista1.insert(5)
lista1.insert(6)
lista1.insert(7)
lista1.insert(8)
lista1.insert(9)
document.getElementById('t1').innerHTML = lista1.getHtml()

let lista2 = new stack()

function addRight(){
    let tmp = lista1.pop()
    if(tmp != null){
        lista2.insert(tmp)
        document.getElementById('t2').innerHTML = lista2.getHtml()
        gsap.from('.cell0',{
            duration: 0.5,
            y: -200,
            display: 1,
        })
        document.getElementById('t1').innerHTML = lista1.getHtml()
    }

}

function addLeft(){
    let tmp = lista2.pop()
    if(tmp != null){
        lista1.insert(tmp)
        document.getElementById('t1').innerHTML = lista1.getHtml()
        gsap.from('.cell0',{
            duration: 0.5,
            y: -200,
            display: 1,
        })
        document.getElementById('t2').innerHTML = lista2.getHtml()
    }
}

