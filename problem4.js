let sandwitch_calculator=function(bread,cheese){

    if((bread/2)<=cheese ){
        let possible_sandwitchs=bread/2;
        return possible_sandwitchs;
    }
    if((bread/2)>cheese){
        let possible_sandwitchs=cheese;
        return possible_sandwitchs;
    }
    
}
console.log(sandwitch_calculator(80,5));