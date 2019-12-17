function insertNumber(btnID){
    var operator = ["+", "-", "*", "/"]

    var ident = btnID[3]

    if(ident == "A"){
        document.getElementById("screen").textContent = 0 
        return;
    } 

    if(ident == "B"){
        let text = ""

        for (let index = 0; index < (document.getElementById("screen").textContent.length - 1); index++) {
            const element = document.getElementById("screen").textContent[index];
            text += element
        }
        
        document.getElementById("screen").textContent = text

        if(text == ""){
            document.getElementById("screen").textContent = 0
        }
        
        return
    }

    if (isNaN(Number(ident))) {
        var res
        var expression = document.getElementById("screen").textContent
        var numbers = [ 0 , 0 ]

        if (isNaN(Number(expression[expression.length - 1]))) {
            return
        }

        for (let index = 0; index < operator.length; index++) {
            const element = operator[index];
            
            if (expression.indexOf(element) != -1) {
                
                numbers = expression.split(element)

                switch (element) {
                    case "+":
                        res = Number(numbers[0]) + Number(numbers[1])
                        break;
    
                    case "-":
                        res = Number(numbers[0])- Number(numbers[1])
                        break;
    
                    case "*":
                        res = Number(numbers[0]) * Number(numbers[1])
                        break;
    
                    case "/":
                        if (Number(numbers[1] == 0)) {
                            document.getElementById("screen").textContent = "=Error"
                            return
                        }else{
                            res = Number(numbers[0]) / Number(numbers[1])
                        }
                        break;
    
                    default:
                        break;
                }

                if (ident == "I") {
                    document.getElementById("screen").textContent = "=" + res
                    return
                }
                else{
                    document.getElementById("screen").textContent = res
                }
            }
            
        }
    }

    if(document.getElementById("screen").textContent.indexOf("=") != -1 || document.getElementById("screen").textContent == 0){
        document.getElementById("screen").textContent = ""
    }

    if(document.getElementById("screen").textContent.length != 10){
        document.getElementById("screen").textContent += ident
    }
    
}

function changeColorIn(dId){
    if(dId[3] == "A" || dId[3] == "B" || dId[3] == "I"){
        document.getElementById(dId).className = "operatorIn";
        return;
    }

    document.getElementById(dId).className = "buttonIn";
}

function changeColorOut(dId){
    if(dId[3] == "A" || dId[3] == "B" || dId[3] == "I"){
        document.getElementById(dId).className = "operator";
        return;
    }

    document.getElementById(dId).className = "button";
}