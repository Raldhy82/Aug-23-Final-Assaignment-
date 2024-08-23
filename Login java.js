
function checkCreds()
{
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var badgeNum = document.getElementById("badgeID").value;
    // concatenate
    var fullName = firstName+ " " + lastName;

    if (fullName.length > 20  || fullName.length< 3)
    {
        document.getElementById("loginStatus").innerHTML = "Full name too long or too short";
    }

    else if (badgeNum>999  || badgeNum <100)
    {
        document.getElementById("loginStatus").innerHTML = "Badge num < 100 or badge num >999"
    }

   // else if(badgeNum.length  !=3)
 //   {
  //     document.getElementById("loginStatus").innerHTML = "Badge is incorrect";
//     }
     else
     {
        alert("Access Granted");
        location.replace("Navigation.html");
     }
    


}