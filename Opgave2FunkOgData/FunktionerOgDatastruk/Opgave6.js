let variablen = "()[([]{}]()]"

function stakParentes(variablen){
    let stack = []
    for(char of variablen){
        if(char == "("){
            stack.push(char)

        }else if(char =="["){
            stack.push(char)
        }
        else if(char == "{"){
            stack.push(char)
        } else
        {
            if(!checkForHojreParentes(stack.pop(),char)){
                return false
            }
        }
    }
    return true
}

function checkForHojreParentes(topElement,chars){
        return ceheckInverParentes(topElement) == chars 
       
}

function ceheckInverParentes(element){
    if(element == "("){
        return ")"
    } 
    else  if(element == "["){
        return "]"
    } 
    else if(element == "{"){
        return "}"
    }
}

console.log(stakParentes(variablen))



