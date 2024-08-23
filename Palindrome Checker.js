
function reverse()

{
    var str1 = document.getElementById("firstStr").value;
    var splitStr1 = str1.split("");
   //reverses the input to search bar 
    var reverse = splitStr1.reverse();

    //test the result of the reverse 
    var joinStr1 = reverse.join("");
   //decides weather its a palindrome or not 
    if (str1 == joinStr1)
    {
        document.getElementById("palin").innerHTML = "The is a palindorme";
    }
    else
    {
        document.getElementById("palin").innerHTML = "The is NOT  a palindrome";
    }


   

  
    
    
    



}