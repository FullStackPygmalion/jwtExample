const jwt = require('jsonwebtoken')

const [, , option, secret, nameOrToken ] = process.argv


function signToken(payload, secret) {
     return jwt.sign(payload, secret)
}

function verifyToken(token, secret){
    return jwt.verify(token, secret)
}

// option = 'sign', 'verify'
if ( !option || !secret || !nameOrToken) {
    return console.log("Missing arguments")
}

if(option == 'sign') {
    console.log(signToken({ sub : nameOrToken }, secret ))
} else if (option == 'verify') {
    console.log(verifyToken(nameOrToken, secret))
} else {
    console.log('Invalid option')
}


//npm install jsonwebtoken