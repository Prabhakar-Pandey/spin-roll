var Card = (function(){
    var cards = ["1-s","2-s","3-s","4-s","5-s","6-s","7-s","8-s","9-s","10-s","j-s","k-s","q-s",
                    "1-h","2-h","3-h","4-h","5-h","6-h","7-h","8-h","9-h","10-h","j-h","k-h","q-h"
                ];


    return{
        shuffle:function(){
            let shuffledCard = [...cards];
            for(var i=0;i<shuffledCard.length;i++){
                var j = Math.floor(Math.random()*i)//1.121212[5];[0-5]//0.232323*5
                console.log(j)
                let temp = shuffledCard[i];
                shuffledCard[i]=shuffledCard[j]
                shuffledCard[j]=temp;
                //[shuffledCard[i],shuffledCard[j]]=[shuffledCard[j],shuffledCard[i]];
            }
            return shuffledCard
        }
    }
})();

console.log(Card.shuffle());

function Node(data){
     this.data = data;
     this.next = null;
}

function LinkList(){
    var head = null;
    var tail = null;
    function getHead(){
        if(head==null){
            return "no data"
        }else{
            return head;
        }
    }
    function addData(data){
        if(head==null && tail == null){
            head = new Node(data);
            
        }else{
            head.next = new Node(data)
        }
    }
    function removeData(){

    }
    return {
        getHead,
        addData,
        removeData
    }
}


let Head = new Node(2);
console.log(Head.data);
//Head.next = new Node(3)

//console.log(Head,"<<<")



