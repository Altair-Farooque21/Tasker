export function checkUsername(status,data){
    if(status === 'register.usernameExists'){
        return "Username already exists"
    }
    else if(data === ''){
        return "Please enter username"
    }
    else{
        return ''
    }
}

export function  checkEmail(status,data){
    if(status === 'register.emailExists'){
        return "This email is already in-use"
    }
    else if(data === ''){
      return "Please enter your email"
  }
    else{
        return ''
    }
}

export function  checkPasswordStrength(password){
    const hasCapitalLetter = /[A-Z]/.test(password);
    const hasLowerCaseLetter = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialCharacter = /[^A-Za-z0-9]/.test(password);
    const hasPasswordLength  = (password.length < 8) ? true : false

    if(password === ''){
        return "Please enter your password"
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

export function  comparePasswords(pwd,cpwd){
      if(cpwd === ''){
        return "Please re-enter your password";
      }
      else if(!(pwd === cpwd)){
        return "Password must be same"
      }
      else{
        return ''
      }
}

export function  validateFrom(formData,formErrors,setformErrors){
  let hasErrors = false
   // check username ✅
   if(formData.userName === ''){
      setformErrors(formErrors => ({
        ...formErrors,
        userName: checkUsername('',formData.userName)
      }));
      hasErrors = true
   }
   else{
    setformErrors(formErrors => ({
      ...formErrors,
      userName: checkUsername(formData.userName,formData.userName)
    }));
      hasErrors = false
   }
   // check email ✅
   if(formData.email === ''){
    setformErrors(formErrors => ({
      ...formErrors,
      email: checkEmail('',formData.email)
    }));
    hasErrors = true
   }
   else{
    setformErrors(formErrors => ({
      ...formErrors,
      email: checkEmail('',formData.email)
    }));
    hasErrors = false
   }
   // check passwaord ✅
   if(formData.password === ''){
    setformErrors(formErrors => ({
      ...formErrors,
      password: checkPasswordStrength('')
    }));
    hasErrors = true
   }
   else if(formData.password !== ''){
    setformErrors(formErrors => ({
      ...formErrors,
      password: checkPasswordStrength(formData.password)
    }));
    hasErrors = false
   }
   // check cpassword
   if(formData.confirmPassword === ''){
    setformErrors(formErrors => ({
      ...formErrors,
      confirmPassword: comparePasswords('',formData.confirmPassword)
    }));
    hasErrors = true
   }
   else if(!(formData.password === formData.confirmPassword)){
    setformErrors(formErrors => ({
      ...formErrors,
      confirmPassword: comparePasswords(formData.password,formData.confirmPassword)
    }));
    hasErrors = true
   }
   else{
    setformErrors(formErrors => ({
      ...formErrors,
      confirmPassword: comparePasswords(formData.password,formData.confirmPassword)
    }));
    hasErrors = false
   }
   return hasErrors
}

// module.exports = {checkUsername,checkEmail,checkPasswordStrength,comparePasswords,validateFrom}