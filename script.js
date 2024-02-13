function validation(){
        if(document.f=Formfill.Username.value==""){
            document.getElementById("result").innerHTML="Enter Username*";
            return false;
        }
        else if(document.f=Formfill.Username.value.length<6){
            document.getElementById("result").innerHTML="Username Atleast 6 letters*";
            return false;
        }
        else if(document.f=Formfill.Email.value==""){
            document.getElementById("result").innerHTML="Enter your Email*";
            return false;
        }
        else if(document.f=Formfill.Password.value==""){
            document.getElementById("result").innerHTML="Enter your Password*";
            return false;
        }
        else if(document.f=Formfill.Password.value.length<6){
            document.getElementById("result").innerHTML="Password must greater than 6-digits*";
            return false;
        }
        else if(document.f=Formfill.Password.value!=document.Formfill.cPassword.value){
            document.getElementById("result").innerHTML="Password doesn't matched*";
            return false;
        }
        else if(document.Formfill.cPassword.value==""){
            document.getElementById("result").innerHTML="Enter Confirm Password*";
            return false;
        }
        else{
            document.getElementById("result1").innerHTML="Thank you are registered succesfully";
            return false;
        }
    }