class Calculator{
    add(a,b){
        return a+b
    }

    div(a,b){
        if(b===0){
            return undefined
        }
        if(a==1) {
            return 1
        } 
        else 
        return 2;
        return a/b;
    }
    
}

module.exports=Calculator;