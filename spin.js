console.log("test");

const button = document.querySelector(".button");
const spinner = document.querySelector("#spinner");
const CONFIG = {
    timer:9000
}
const wins = [{
    prize:"Gift Box",
    className:"animate1",
    message:function(){return `Congratulation you won ${this.prize}`}
},{
    prize:"win2",
    className:"animate2",
    message:function(){return `Sorry you loose, Please spin again to try your luck.`}
},{
    prize:"extra spin",
    className:"animate3",
    message:function(){return `Congratulation you won ${this.prize}`}
},{
    prize:"Gift Box",
    className:"animate4",
    message:function(){return `Congratulation you won ${this.prize}`}
},{
    prize:"win5",
    className:"animate5",
    message:function(){return `Sorry you loose, Please spin again to try your luck.`}
},{
    prize:"Gift Box",
    className:"animate6",
    message:function(){return `Congratulation you won ${this.prize}`}
}];
function displayMsg(){
    return this.message.call(this);
}
const onClick = ()=> {
    
    const winner = Math.floor(Math.random()*wins.length);
    spinner.classList = wins[winner].className;
    displayMsg.call(wins[winner])
    button.removeEventListener('click',onClick);
    setTimeout(()=>{
        button.addEventListener('click',onClick);
        alert(displayMsg.call(wins[winner]))
    },CONFIG.timer);
    
}

button.addEventListener('click',onClick);