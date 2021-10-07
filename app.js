class Die {
    constructor() {
        this.value = Math.floor(Math.random() * 6) + 1;
        this.div = document.createElement('div');
        this.div.textContent = this.value;
        document.body.appendChild(this.div);
    }

    roll() {
     
    }
}

const myButton = document.getElementById("button1")

myButton.addEventListener("click",() => new Die());