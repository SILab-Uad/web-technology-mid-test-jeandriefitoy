// TODO: Implement the password generation logic based on user input

export const generatePassword = (length, options) => {
  // Character sets for password generation
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialChars = "!@#$%^&*()";

  // TODO: Create a variable for the character set based on selected options
  let charset = "";
  if (options.includeUppercase) charset += uppercase;
  if (options.includeLowercase) charset += lowercase;
  if (options.includeNumbers) charset += numbers;
  if (options.includeSpecialChars) charset += specialChars;
  if (charset === "") {
    throw new Error("At least one character type must be selected.");
  }
  // TODO: Generate the password based on the selected criteria
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
};

// TODO: Add event listener to the button to call generatePassword and display the output
// document.getElementById("generateBtn").addEventListener("click", () => {
//   const length = parseInt(document.getElementById("length").value, 10);
//   const options = {
//     includeUppercase: document.getElementById("includeUppercase").checked,
//     includeLowercase: document.getElementById("includeLowercase").checked,
//     includeNumbers: document.getElementById("includeNumbers").checked,
//     includeSpecialChars: document.getElementById("includeSpecialChars").checked,
//   };

//   const password = generatePassword(length, options);
//   document.getElementById("passwordOutput").textContent = password;
// });

// if (typeof module !== "undefined" && module.exports) {
//   module.exports = { generatePassword };
// }

// BONUS: Implement the copy to clipboard functionality
// document.getElementById("copyBtn").addEventListener("click", () => {
//   const passwordOutput = document.getElementById("passwordOutput").textContent;
//   if (passwordOutput) {
//     navigator.clipboard
//       .writeText(passwordOutput)
//       .then(() => {
//         alert("Password copied to clipboard!");
//       })
//       .catch((err) => {
//         console.error("Could not copy text: ", err);
//       });
//   } else {
//     alert("No password to copy!");
//   }
// });
