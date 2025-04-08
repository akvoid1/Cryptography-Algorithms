 Cipher Suite in C

Overview
This project is a comprehensive C program that implements a variety of classical cryptographic ciphers. It features a menu-driven interface allowing users to select from 14 different ciphers, input plaintext, and provide necessary parameters (e.g., keys, shifts) to encrypt the text. The encrypted result (ciphertext) is then displayed.
The implemented ciphers include both substitution (single and multiple) and transposition types, covering:
- Single substitution: Atbash, Caesar, Affine
- Multiple substitution: Vigenere, Gronsfeld, Beaufort, Auto Key, Running Key, Hill
- Transposition: Rail Fence, Route, Columnar, Double Transpositional, Myszkowski

 Compilation
To compile the program, use a C compiler such as `gcc`. Run the following command in the directory containing the source file (e.g., `cipher_suite.c`):

bash
gcc -o cipher_suite cipher_suite.c


This generates an executable named `cipher_suite`.

 Usage
1. Run the program:
   bash
   ./cipher_suite
   
2. A menu will display the available ciphers numbered 1-14, with 0 to exit.
3. Enter your choice (0-14).
4. Provide the plaintext when prompted.
5. Depending on the cipher, enter additional parameters (e.g., shift value, key, matrix values).
6. The program will output the encrypted ciphertext.
7. Repeat or exit by selecting 0.

Example

Cipher Menu 
1. Atbash Cipher
2. Caesar Cipher

Enter your choice (1-15, 0 to exit): 2
Enter plaintext: HELLO WORLD
Enter shift: 3
Ciphertext: KHOOR ZRUOG


 Implemented Ciphers
1. Atbash Cipher: Reverses the alphabet (A→Z, B→Y, etc.).
2. Caesar Cipher: Shifts each letter by a fixed number (mod 26).
3. Affine Cipher: Uses a linear transformation (ax + b mod 26).
4. Vigenere Cipher: Polyalphabetic substitution with a repeating keyword.
5. Gronsfeld Cipher: Like Vigenere but uses a numeric key.
6. Beaufort Cipher: Subtracts plaintext from key (mod 26).
7. Auto Key Cipher: Extends the key with the plaintext itself.
8. Running Key Cipher: Uses a long key (e.g., book text) for substitution.
9. Hill Cipher: Polygraphic substitution using a 2x2 matrix.
10.Rail Fence Cipher: Transposition by writing text in a zigzag pattern.
11.Route Cipher: Rearranges text in a grid, read column-wise.
12.Columnar Cipher: Writes text in a grid and reads by key-ordered columns.
13.Double Transpositional Cipher: Applies columnar transposition twice with two keys.
14.Myszkowski Cipher: Columnar transposition with a key, reading by alphabetical order.

Features
- enu-Driven: Simple interface to select ciphers.
- Flexible Input: Handles both uppercase and lowercase letters; preserves non-alphabetic characters where applicable.
- In-Place Encryption: Modifies the input string directly to produce ciphertext.

Limitations
- No Decryption: Only encryption is implemented.
- Basic Error Handling: Minimal validation for inputs (e.g., Affine's 'a' must be coprime with 26, but this isn't checked).
- Hill Cipher: Simplified to a 2x2 matrix; requires even-length text.
- Padding: Transposition ciphers pad with spaces if needed, which may affect output.
- Key Length: Some ciphers assume keys are shorter than plaintext; longer keys are truncated or repeated.

Potential Improvements
- Add decryption functions for each cipher.
- Implement robust input validation (e.g., matrix invertibility for Hill, valid shifts).
- Support file input/output for larger texts.
- Enhance Hill Cipher with variable matrix sizes.
- Optimize memory usage for transposition ciphers with large inputs.

Requirements
- C compiler (e.g., `gcc`)
- Standard C libraries (`stdio.h`, `string.h`, `ctype.h`, `stdlib.h`)



