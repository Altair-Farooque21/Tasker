const validateEmail = (status)=>{
      if(status === 'user.doesnotexists'){
        return "User doesn't exist or Incorrect email";
      }
      else{
        return ''
      }
}

const validatePassword = (status)=>{
    if(status === "user.incorrectPassword"){
        return "Incorrect password!";
    }
    else{
        return '';
    }
}

module.exports = {validateEmail,validatePassword}