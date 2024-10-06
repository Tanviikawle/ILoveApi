const jwt = require('jsonwebtoken');

// Function to generate a JWT token
function generateToken(secretKey) {
    // Get current time in UTC
    const currentTime = Math.floor(Date.now() / 1000); // Convert to seconds

    // Define the claims for the JWT
    const payload = {
        exp: currentTime + (2 * 60 * 60), // Token expiration time (2 hours)
        nbf: currentTime,                 // Token is valid immediately
        iat: currentTime,                 // Issued at current time
    };

    // Generate the token by signing it with the secret key
    const token = jwt.sign(payload, secretKey);

    return token;
}

// Example usage
const secretKey = 'secret_key_0c77f108a95ff5a339cbd510b00c62f2_FW31V0ce50169543101c40187b1e1a2b61592'; // Replace with your actual secret key
const token = generateToken(secretKey);
console.log("Generated JWT token:", token);
