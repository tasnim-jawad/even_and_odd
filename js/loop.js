//while loop start

function while_even(index,range){
    while(index<=range){                    //for even number
        if(index%2==0)
        console.log(index);
        var node = document.createElement("LI");                 // Create a <li> node
        var textnode = document.createTextNode(index);         // Create a text node
        node.appendChild(textnode);                              // Append the text to <li>
        document.getElementById("even_number").appendChild(node);     // Append <li> to <ul> with id="myList"
        index++;
    }    
}


function while_odd(index,range){
    while(index<=range){                 //for odd number
        if(index%2 != 0)
        console.log(index);
        index++;
    }
}

//while loop end
// //Do while loop start

function do_while_even(index,range){
    do{                                 //for even number
        if(index%2 == 0)
        console.log(index);
        index++;
    }while(index<=range);
}


function do_while_odd(index,range){
    do{                                  //for odd number
        if(index%2 != 0)
        console.log(index);
        index++;
    }while(index<=range)
}


// //Do while loop end
// //for loop start

 
function for_evens(index,range){
    for(index;index<=range;index++){                   //for even number
        if(index%2 == 0)
        console.log(index);
    }
}

function for_odds(index,range){
    for(index;index<=range;index+=2){                   //for odd number
        if(index%2 != 0)
        console.log(index);
    }
}

// //for loop end
//recurcive function start

const recurcive_even =(index,range)=>{
    if(index%2 == 0)
    console.log(index);

    if(index<range){
        recurcive_even(++index,range)
    }
}


const recurcive_odd =(index,range)=>{
    if(index%2 != 0)
    console.log(index);

    if(index<range){
        recurcive_odd(++index,range)
    }
}

//recurcive function end