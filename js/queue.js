class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class queue{
    constructor(){
        this.first = null
        this.last = null
    }

    insert(value){
        if(this.first != null){
            this.last.next = new Node(value)
            this.last = this.last.next
            return
        }
        this.first = new Node(value)
        this.last = this.first
    }

    getHtml(){
        let code = ''
        let current = this.first
        let noSquares = 0
        while(current != null){
            code += `<div class="table-row cell${noSquares}"><div class="table-data">${current.value}</div></div>`
            current = current.next
        }
        return code
    }

    pop(){
        if(this.first){
            let temporary = this.first.value
            this.first = this.first.next
            return temporary
        }
        return null
    }
}

let cola1 = new queue()
cola1.insert(1)
cola1.insert(2)
cola1.insert(3)
cola1.insert(4)
cola1.insert(5)
cola1.insert(6)
cola1.insert(7)
cola1.insert(8)
cola1.insert(9)
document.getElementById('t3').innerHTML = cola1.getHtml()

let cola2 = new queue()

function addRight(){
    let tmp = cola1.pop()
    if(tmp != null){
        cola2.insert(tmp)
        document.getElementById('t4').innerHTML = cola2.getHtml()
        gsap.from('.cell0',{
            duration: 0.5,
            y: 200,
            display: 1
        })
        document.getElementById('t3').innerHTML = cola1.getHtml()
    }
}

function addLeft(){
    let tmp = cola2.pop()
    if(tmp != null){
        cola1.insert(tmp)
        document.getElementById('t3').innerHTML = cola1.getHtml()
        gsap.from('.cell0',{
            duration: 0.5,
            y: 200,
            display: 1
        })
        document.getElementById('t4').innerHTML = cola2.getHtml()
    }
}