Cipher Web App
Overview
The Cipher Web App is a single-page web application designed for encrypting and decrypting text using a variety of classical cipher algorithms. It features a modern, responsive interface with a gradient background, custom color palette, and user-friendly controls. Users can select a cipher, choose between encryption and decryption, input text, provide cipher-specific parameters, and view the output. Additional features include copying the output to the clipboard and clearing all inputs.
Features

Supported Ciphers: Atbash, Caesar, Affine, Vigenere, Gronsfeld, Beaufort, Auto Key, Running Key, Hill, Rail Fence, Route, Columnar, Double Transpositional, and Myszkowski.
Encryption and Decryption: Toggle between encrypt and decrypt operations using radio buttons.
Dynamic Parameters: Input fields for cipher-specific parameters (e.g., shift for Caesar, matrix for Hill) appear dynamically based on the selected cipher.
Enhanced UI: Features a gradient background, custom Tailwind CSS colors, and a two-column layout for desktop screens.
Additional Functionality: Buttons to copy output to the clipboard and clear all inputs.
Responsive Design: Optimized for both mobile and desktop devices using Tailwind CSS.
Client-Side Processing: All computations are performed in the browser using JavaScript, requiring no server.

File Structure

index.html: The main file containing HTML structure, JavaScript logic for ciphers, and Tailwind CSS integration with a custom theme.

Prerequisites

A modern web browser (e.g., Chrome, Firefox, Safari, Edge).
No server or additional software is required, as the app runs entirely in the browser.

Installation

Clone or Download:
Clone this repository or download the index.html file.


Open the App:
Open index.html in a web browser by double-clicking the file or dragging it into the browser.



Usage

Select a Cipher:
Choose a cipher from the dropdown menu (e.g., "Caesar Cipher").


Choose Operation:
Select "Encrypt" or "Decrypt" using the radio buttons.


Enter Text:
Input the text to process in the "Input Text" textarea.


Provide Parameters:
Fill in the cipher-specific parameters that appear (e.g., "Shift" for Caesar, "Key" for Vigenere).


Process:
Click the "Process" button to compute the result.


View Output:
The encrypted or decrypted text appears in the readonly "Output" textarea.


Additional Actions:
Click "Copy Output" to copy the result to the clipboard.
Click "Clear All" to reset the input, output, and parameter fields.



Notes

Input Validation: Basic validation ensures numeric inputs for shifts and non-empty keys. Invalid inputs trigger alerts.
Hill Cipher: Decryption requires a matrix with a modular inverse modulo 26; otherwise, an error is displayed.
Text Handling: Non-alphabetic characters are preserved in most ciphers, except where specific handling is required (e.g., Hill Cipher processes letter pairs).
Performance: Suitable for small to medium-sized texts. Large inputs may slow down processing due to client-side computation.

Technologies Used

HTML: Defines the structure of the web page.
JavaScript: Implements cipher algorithms, dynamic UI updates, and clipboard functionality.
Tailwind CSS: Provides styling via CDN with a custom color palette (primary shades).

Limitations

No server-side storage or session persistence; all data is processed in-memory.
Some ciphers (e.g., Hill, Route) may produce unexpected results with certain inputs (e.g., odd-length text for Hill, insufficient grid size for Route).
Error handling is basic; users are alerted for invalid inputs but may need to adjust parameters manually.
The clipboard API (document.execCommand('copy')) is used, which may have compatibility issues in some environments.

Future Improvements

Replace document.execCommand('copy') with the modern Clipboard API for better compatibility.
Add support for saving or exporting results.
Include visual diagrams for ciphers like Rail Fence or Route.
Enhance error messages with detailed guidance.
Optimize performance for larger inputs.

License
This project is open-source and available under the MIT License.
Contact
For questions or contributions, please open an issue or submit a pull request on the repository.

Built as a standalone web application for educational purposes.
