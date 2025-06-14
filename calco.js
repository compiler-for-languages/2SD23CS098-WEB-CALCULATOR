//javascript functions are written for every button press

let express = "";//an empty string
//Whenlet the declaration is done outside any function then it is like the global scope variable

//let easyway = document.getElementById( "display" );//cant use like this bcoz need updated screen everytime

function press ( value )
{
    express = express + value;//string concat everytime;
    document.getElementById("display").value = express;//reverse technology giving input to input screen , like age.value=18
}

function calculate ()
{
    try
    {
        let ans = eval( express );//evaluates the expression eval method
    
   
        document.getElementById( "display" ).value = ans;
    }
    catch
    {
        document.getElementById( "display" ).value = "invalid"

    }
}

function clearall ()
{
    express = "";
    document.getElementById("display").value ="";

    
}

function turnoff ()
{
    express = "";
    document.getElementById("display").value = "Powered by SKG";

}
function delstep ()
{
    express = express.substring( 0, express.length - 1 ); //last char deleted

    document.getElementById( "display" ).value = express;
    

}
