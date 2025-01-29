const auth = firebase.auth();

function authenticate(email, password) {
  // Email validation before Firebase authentication
  if (!isValidEmail(email)) {
    return Promise.reject(new Error('Invalid email format'));
  }

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Successful authentication
      console.log('Authentication successful:', userCredential.user);
    })
    .catch((error) => {
      // Handle errors with more informative messages
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Authentication failed:', errorCode, errorMessage);
    });
}

function isValidEmail(email) {
  // Basic email validation regex
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
}

// Example usage with both valid and invalid emails
authentificate("test@example.com","password");
authentificate("test\"@example.com","password");