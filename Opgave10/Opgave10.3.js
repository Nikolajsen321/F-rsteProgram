class StringStack{
    constructor(){
        this.stringArray = []
        this.top = 0
    }

    push = function(string){
       this.stringArray[this.top] = string
        this.top++;
    }

    pop = function(){
        if(this.top == 0){
            return null
        }
        this.top--
        let popString = this.stringArray[this.top]
        this.stringArray[this.top]= null
        return popString
        
    }


    getStack = function(){
        let arrayStack = []
        let newTop = this.top
        for(let i = this.top -1; i >= 0; i--){
            arrayStack[newTop++] = this.stringArray[i]
        }
        return arrayStack
    }


}

let stringStack1 = new StringStack();


stringStack1.push("Hans");
stringStack1.push("Jens");

let stackArray = stringStack1.getStack(); // Få stakken som et array

console.log("Få stakken")
stackArray.forEach(element => {
    console.log(element); // Udskriv hvert element i stakken
});


