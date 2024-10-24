/*Write a isValidPassword function
It accepts 2 arguments: password and username
Password must:

- be atleast 8 characters
- cannot contain spaces
- cannot contain the username
If all requirements are met, return true,
otherwise return false
*/

//declare variables
let password;
let username;

//create a function that accept 2 arguments
function isValidPassword(password, username){

    //check the condition password must contain at least 8 characters
    if(password.length >= 8 && 
    
    //password must not contains username
    !password.includes(username) && 
    
    //password must not contains spaces
    !password.includes(" ")){

    //return true if all conditions are met
        return true;
    }

    //otherwhise return false
    return false;
}

//call the funcions with console.log(password, username)
console.log(isValidPassword ("javascript", "carmelo")); //true
console.log(isValidPassword (" javascript", "carmelo")); //false
console.log(isValidPassword ("carmelojavascript", "carmelo")); //false
console.log(isValidPassword("car", "carmelo"))//false