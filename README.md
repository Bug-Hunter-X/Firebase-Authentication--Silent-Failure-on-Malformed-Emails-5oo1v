# Firebase Authentication Silent Failure on Malformed Emails

This repository demonstrates a bug in the Firebase Authentication SDK where authentication silently fails when presented with a malformed email address. The issue is that the SDK doesn't provide a helpful error message, making it difficult to debug.

## Bug Description
The Firebase Authentication SDK does not handle all cases of malformed email addresses gracefully.  Specifically, email addresses containing special characters that are not properly escaped can cause authentication to fail without a clear error message.

## Reproduction
1. Clone this repository.
2. Install the Firebase SDK: `npm install firebase`
3. Run `node bug.js`
4. Observe the lack of a clear error message when using an invalid email address.

## Solution
The `bugSolution.js` file shows a solution that uses email validation prior to authentication and provides custom error handling.