console.log("Hello it seems you have found the secrets hiddent withing the developer tools") ;

console.log("Yes I did in fact lie to you straight to your face")

for(let i = 1; i<100; i++) {
    console.log(i)
}



console.log("You are probably wondering why i just did that. The answer is idk i was bored.")

let secret = document.createElement("div");

let secrets = ["___", "_", "___", "__________", "check the developer tools"];

function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
  }
  
for(let i =1; i<11; i++) {
    let shh = document.createElement("p");
    shh.innerText = secrets[getRandomIntInclusive(0,secrets.length-1)];
    secret.appendChild(shh);
}

document.body.appendChild(secret)
