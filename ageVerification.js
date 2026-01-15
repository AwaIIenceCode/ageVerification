const prompt = require("prompt-sync")();

function main()
{
    const userAge = Number(prompt("Enter your age -> "));
    
    if (isNaN(userAge)) { console.log("Must be a number, try again..."); return; }
    
    if (userAge < 18) { console.log("Access denied") }
    else if (userAge <= 65) { console.log("Access granted"); }
    else { console.log("Retirement mode"); }
}

main()