const checkUsername = (status,data) =>{
    if(status === 'register.usernameExists'){
        return "Username already exists"
    }
    else if(data === ''){
        return "Please enter required field!"
    }
    else{
        return ''
    }
}

const checkEmail = (status,data)=>{
    if(status === 'register.emailExists'){
        return "this Email is already in-use"
    }
    else if(data === ''){
      return "Please enter required field!"
  }
    else{
        return ''
    }
}

const checkPasswordStrength = (password) => {
    const hasCapitalLetter = /[A-Z]/.test(password);
    const hasLowerCaseLetter = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialCharacter = /[^A-Za-z0-9]/.test(password);
    const hasPasswordLength  = (password.length <= 8) ? true : false

    if(password === ''){
        return "Please enter required field!"
    }

    if(hasPasswordLength){
        return "password must be aleast 8 characters";
    }
  
    if (
      hasCapitalLetter &&
      hasLowerCaseLetter &&
      hasNumber &&
      hasSpecialCharacter
    ) {
      return '';
    } else {
      return 'Password must contain at least one capital letter, one lowercase letter, one number, and one special character.';
    }
  }

const comparePasswords  = (pwd,cpwd) =>{
      if(cpwd === ''){
        return "Please enter required field!"
      }
      else if(!(pwd === cpwd)){
        return "password must be same"
      }
      else{
        return ''
      }
}

module.exports = {checkUsername,checkEmail,checkPasswordStrength,comparePasswords}