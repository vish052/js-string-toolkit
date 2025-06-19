# **js-string-toolkit**

<img src="assets/logo.png" alt="js-string-toolkit Logo" width="200" title="A toolkit for string manipulation in JavaScript">

[![npm version](https://img.shields.io/npm/v/js-string-toolkit.svg)](https://www.npmjs.com/package/js-string-toolkit)
![Language](https://img.shields.io/badge/Language-JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Category](https://img.shields.io/badge/Category-String-blue.svg)
![Type](https://img.shields.io/badge/Type-Utility-555555.svg)
![Dependencies](https://img.shields.io/badge/Dependencies-Zero-brightgreen.svg)


A comprehensive Node.js utility module for common string operations, wrapping many standard JavaScript String methods for consistent usage and easy import. This library aims to provide robust string manipulation functionalities, ensuring type safety and handling edge cases gracefully.

## **Features**

* **Optimized Performance**: Leverages highly optimized native JavaScript string methods and efficient algorithms for fast and reliable string transformations.  
* **Granular Control**: Offers precise control over string manipulations, allowing for operations like specific substring extraction (slice, substring, substr), targeted replacements (replace, replaceAll), and case transformations.  
* **Simple & Intuitive API**: Provides a clean, easy-to-understand API with clearly named functions and consistent parameter ordering, making string operations straightforward to implement.  
* **Robust Input Handling**: Includes internal validation to ensure inputs are handled correctly, converting non-string types to strings where appropriate and preventing unexpected errors.

## **Installation**

You can install this module using npm:

```bash
npm install js-string-toolkit
```

## **Usage**

After installation, you can import and use the functions in your Node.js project:

```bash
const stringUtils = require('js-string-toolkit');

console.log(stringUtils.capitalize('hello world')); // Output: Hello world  
console.log(stringUtils.reverseString('JavaScript')); // Output: tpircSavaJ  
console.log(stringUtils.isPalindrome('madam')); // Output: true
```

## **API Reference**

Below is a detailed list of all available functions in js-string-toolkit, along with their descriptions, parameters, return values, and examples.

### **capitalize(str)**

* **Description:** Capitalizes the first letter of a string.  
* **Parameters:**  
  * str (string): The input string.  
* **Returns:** (string) The string with its first letter capitalized.  
* **Example:**
  ```bash  
  const result1 = stringUtils.capitalize("hello");  
  console.log(result1); // Output: Hello

  const result2 = stringUtils.capitalize("world wide web");  
  console.log(result2); // Output: World wide web

  const result3 = stringUtils.capitalize("");  
  console.log(result3); // Output: ""

  const result4 = stringUtils.capitalize(123);  
  console.log(result4); // Output: 123 (converts to string first)
  ```

### **reverseString(str)**

* **Description:** Reverses a given string.  
* **Parameters:**  
  * str (string): The input string.  
* **Returns:** (string) The reversed string.  
* **Example:**
  ```bash  
  const result1 = stringUtils.reverseString("developer");  
  console.log(result1); // Output: repoleved

  const result2 = stringUtils.reverseString("level");  
  console.log(result2); // Output: level

  const result3 = stringUtils.reverseString("");  
  console.log(result3); // Output: ""

  const result4 = stringUtils.reverseString(null);  
  console.log(result4); // Output: ""
  ```

### **isPalindrome(str)**

* **Description:** Checks if a string is a palindrome (case-insensitive, ignores non-alphanumeric characters).  
* **Parameters:**  
  * str (string): The input string.  
* **Returns:** (boolean) True if the string is a palindrome, false otherwise.  
* **Example:**
  ```bash
  console.log(stringUtils.isPalindrome("madam")); // Output: true  
  console.log(stringUtils.isPalindrome("Racecar")); // Output: true  
  console.log(stringUtils.isPalindrome("A man, a plan, a canal: Panama")); // Output: true  
  console.log(stringUtils.isPalindrome("hello")); // Output: false  
  console.log(stringUtils.isPalindrome("")); // Output: true  
  console.log(stringUtils.isPalindrome("a")); // Output: true
  ```

### **length(str)**

* **Description:** Returns the length of the string.  
* **Parameters:**  
  * str (string): The input string.  
* **Returns:** (number) The length of the string.  
* **Example:** 
  ```bash 
  console.log(stringUtils.length("Hello World\!")); // Output: 12  
  console.log(stringUtils.length("")); // Output: 0  
  console.log(stringUtils.length(12345)); // Output: 5 (converts to string "12345")
  ```

### **concat(str, ...strings)**

* **Description:** Concatenates the given strings to the original string.  
* **Parameters:**  
  * str (string): The original string.  
  * ...strings (string): The strings to concatenate.  
* **Returns:** (string) The concatenated string.  
* **Example:**  
  ```bash
  console.log(stringUtils.concat("Hello", " ", "World", "\!")); // Output: Hello World\!  
  console.log(stringUtils.concat("First")); // Output: First  
  console.log(stringUtils.concat("", "One", "Two")); // Output: OneTwo
  ```

### **includes(str, searchString, \[position=0\])**

* **Description:** Checks if a string contains another string.  
* **Parameters:**  
  * str (string): The string to search within.  
  * searchString (string): The string to search for.  
  * position (number, optional): The position to start searching from. Defaults to 0\.  
* **Returns:** (boolean) True if the string contains the search string, false otherwise.  
* **Example:**  
  ```bash
  const text = "The quick brown fox jumps over the lazy dog.";  
  console.log(stringUtils.includes(text, "fox")); // Output: true  
  console.log(stringUtils.includes(text, "cat")); // Output: false  
  console.log(stringUtils.includes(text, "the", 20)); // Output: true (starts searching from index 20)
  ```

### **indexOf(str, searchString, \[fromIndex=0\])**

* **Description:** Returns the index of the first occurrence of a specified value.  
* **Parameters:**  
  * str (string): The string to search within.  
  * searchString (string): The string to search for.  
  * fromIndex (number, optional): The position at which to begin searching. Defaults to 0\.  
* **Returns:** (number) The index of the first occurrence, or \-1 if not found.  
* **Example:**  
  ```bash
  const text = "Hello world, welcome to the world.";  
  console.log(stringUtils.indexOf(text, "world")); // Output: 6  
  console.log(stringUtils.indexOf(text, "World")); // Output: -1 (case-sensitive)  
  console.log(stringUtils.indexOf(text, "world", 7)); // Output: 24 (starts searching from index 7)
  ```

### **lastIndexOf(str, searchString, \[fromIndex\])**

* **Description:** Returns the index of the last occurrence of a specified value.  
* **Parameters:**  
  * str (string): The string to search within.  
  * searchString (string): The string to search for.  
  * fromIndex (number, optional): The position at which to begin searching backwards. Defaults to str.length \- 1\.  
* **Returns:** (number) The index of the last occurrence, or \-1 if not found.  
* **Example:**  
  ```bash
  const text = "Hello world, welcome to the world.";  
  console.log(stringUtils.lastIndexOf(text, "world")); // Output: 24  
  console.log(stringUtils.lastIndexOf(text, "o", 10)); // Output: 7  
  console.log(stringUtils.lastIndexOf(text, "xyz")); // Output: -1
  ```

### **startsWith(str, searchString, \[position=0\])**

* **Description:** Checks if a string begins with the characters of a specified string.  
* **Parameters:**  
  * str (string): The string to search within.  
  * searchString (string): The characters to be searched for at the beginning.  
  * position (number, optional): The position to begin searching. Defaults to 0\.  
* **Returns:** (boolean) True if the string starts with the search string, false otherwise.  
* **Example:**  
  ```bash
  const text = "Hello World\!";  
  console.log(stringUtils.startsWith(text, "Hello")); // Output: true  
  console.log(stringUtils.startsWith(text, "World", 6)); // Output: true  
  console.log(stringUtils.startsWith(text, "world")); // Output: false (case-sensitive)
  ```

### **endsWith(str, searchString, \[length\])**

* **Description:** Checks if a string ends with the characters of a specified string.  
* **Parameters:**  
  * str (string): The string to search within.  
  * searchString (string): The characters to be searched for at the end.  
  * length (number, optional): The length of the string to consider (from the beginning). Defaults to str.length.  
* **Returns:** (boolean) True if the string ends with the search string, false otherwise.  
* **Example:**  
  ```bash
  const text = "Hello World\!";  
  console.log(stringUtils.endsWith(text, "World\!")); // Output: true  
  console.log(stringUtils.endsWith(text, "World", 11)); // Output: true (considers "Hello World")  
  console.log(stringUtils.endsWith(text, "world\!")); // Output: false (case-sensitive)
  ```

### **substring(str, indexStart, \[indexEnd\])**

* **Description:** Extracts a part of a string between two specified indices (exclusive of indexEnd).  
* **Parameters:**  
  * str (string): The input string.  
  * indexStart (number): The start index.  
  * indexEnd (number, optional): The end index (exclusive).  
* **Returns:** (string) The extracted substring.  
* **Example:**  
  ```bash
  const text = "Mozilla";  
  console.log(stringUtils.substring(text, 1, 4)); // Output: ozi  
  console.log(stringUtils.substring(text, 2)); // Output: zilla  
  console.log(stringUtils.substring(text, 4, 1)); // Output: ozi (indices are swapped if start \> end)
  ```

### **slice(str, beginSlice, \[endSlice\])**

* **Description:** Extracts a section of a string and returns it as a new string. Similar to substring but handles negative indices differently.  
* **Parameters:**  
  * str (string): The input string.  
  * beginSlice (number): The index at which to begin extraction.  
  * endSlice (number, optional): The index before which to end extraction.  
* **Returns:** (string) The extracted part of the string.  
* **Example:**  
  ```bash
  const text = "The quick brown fox";  
  console.log(stringUtils.slice(text, 4, 9)); // Output: quick  
  console.log(stringUtils.slice(text, -3)); // Output: fox (from end of string)  
  console.log(stringUtils.slice(text, 4, -4)); // Output: quick brown
  ```

### **substr(str, start, \[length\])**

* **Description:** Extracts a number of characters from a string, starting from a specified index. (Note: substr() is a legacy feature and slice() or substring() are recommended.)  
* **Parameters:**  
  * str (string): The input string.  
  * start (number): The index from which to start extracting characters.  
  * length (number, optional): The number of characters to extract.  
* **Returns:** (string) The extracted part of the string.  
* **Example:**  
  ```bash
  const text = "JavaScript";  
  console.log(stringUtils.substr(text, 4, 6)); // Output: Script  
  console.log(stringUtils.substr(text, 4)); // Output: Script  
  console.log(stringUtils.substr(text, -4, 2)); // Output: ip (starts 4 from end, takes 2 chars)
  ```

### **split(str, \[separator\], \[limit\])**

* **Description:** Divides a string into an ordered list of substrings.  
* **Parameters:**  
  * str (string): The input string.  
  * separator (string|RegExp, optional): Specifies the characters to use for splitting the string.  
  * limit (number, optional): A non-negative integer specifying a limit on the number of substrings to be included in the array.  
* **Returns:** (string\[\]) An array of substrings.  
* **Example:**  
  ```bash
  const text = "apple,banana,orange";  
  console.log(stringUtils.split(text, ",")); // Output: ["apple", "banana", "orange"]  
  console.log(stringUtils.split("Hello World", " ")); // Output: ["Hello", "World"]  
  console.log(stringUtils.split(text, ",", 2)); // Output: ["apple", "banana"]  
  console.log(stringUtils.split("1-2-3-4", "-")); // Output: ["1", "2", "3", "4"]
  ```

### **trim(str)**

* **Description:** Removes whitespace from both ends of a string.  
* **Parameters:**  
  * str (string): The input string.  
* **Returns:** (string) The string with whitespace removed from both ends.  
* **Example:**  
  ```bash
  const text = "   Hello World\!   ";  
  console.log(\`"${stringUtils.trim(text)}"\`); // Output: "Hello World\!"  
  console.log(\`"${stringUtils.trim("  test  ")}"\`); // Output: "test"
  ```

### **trimStart(str)**

* **Description:** Removes whitespace from the beginning of a string.  
* **Parameters:**  
  * str (string): The input string.  
* **Returns:** (string) The string with whitespace removed from the beginning.  
* **Example:**  
  ```bash
  const text = "   Hello World\!   ";  
  console.log(\`"${stringUtils.trimStart(text)}"\`); // Output: "Hello World\!   "
  ```

### **trimEnd(str)**

* **Description:** Removes whitespace from the end of a string.  
* **Parameters:**  
  * str (string): The input string.  
* **Returns:** (string) The string with whitespace removed from the end.  
* **Example:**  
  ```bash
  const text = "   Hello World\!   ";  
  console.log(\`"${stringUtils.trimEnd(text)}"\`); // Output: "   Hello World\!"
  ```

### **toLowerCase(str)**

* **Description:** Converts a string to lowercase letters.  
* **Parameters:**  
  * str (string): The input string.  
* **Returns:** (string) The string converted to lowercase.  
* **Example:**  
  ```bash
  console.log(stringUtils.toLowerCase("HELLO World\!")); // Output: hello world\!  
  console.log(stringUtils.toLowerCase("JAVASCRIPT")); // Output: javascript
  ```

### **toUpperCase(str)**

* **Description:** Converts a string to uppercase letters.  
* **Parameters:**  
  * str (string): The input string.  
* **Returns:** (string) The string converted to uppercase.  
* **Example:**  
  ```bash
  console.log(stringUtils.toUpperCase("Hello world\!")); // Output: HELLO WORLD\!  
  console.log(stringUtils.toUpperCase("css")); // Output: CSS
  ```

### **replace(str, pattern, replacement)**

* **Description:** Replaces some or all matches of a pattern with a replacement. If pattern is a string, only the first occurrence is replaced. If it's a RegExp without the global flag (g), only the first match is replaced. If it's a RegExp with the global flag (g), all matches are replaced.  
* **Parameters:**  
  * str (string): The input string.  
  * pattern (string|RegExp): A String or RegExp to be replaced.  
  * replacement (string|function): The replacement string or a function to be called for each match.  
* **Returns:** (string) The new string with some or all matches of a pattern replaced.  
* **Example:**  
  ```bash
  const text = "The dog barks. The dog runs.";  
  console.log(stringUtils.replace(text, "dog", "cat")); // Output: The cat barks. The dog runs. (only first)  
  console.log(stringUtils.replace(text, /dog/g, "cat")); // Output: The cat barks. The cat runs. (all with regex)  
  console.log(stringUtils.replace("color", "o", "u")); // Output: culor
  ```

### **replaceAll(str, pattern, replacement)**

* **Description:** Replaces all occurrences of a specified string value with another string value.  
* **Parameters:**  
  * str (string): The input string.  
  * pattern (string|RegExp): A String or RegExp to be replaced.  
  * replacement (string|function): The replacement string or a function to be called for each match.  
* **Returns:** (string) The new string with all matches of a pattern replaced.  
* **Example:**  
  ```bash
  const text = "The quick brown fox jumps over the lazy fox.";  
  console.log(stringUtils.replaceAll(text, "fox", "cat")); // Output: The quick brown cat jumps over the lazy cat.  
  console.log(stringUtils.replaceAll("banana", "a", "o")); // Output: bonono
  ```

### **match(str, regexp)**

* **Description:** Retrieves the result of matching a string against a regular expression.  
* **Parameters:**  
  * str (string): The input string.  
  * regexp (RegExp): The regular expression object.  
* **Returns:** (RegExpMatchArray|null) An Array containing the results of the match, or null if no match is found.  
* **Example:**  
  ```bash
  const text = "Hello 123 World 456";  
  console.log(stringUtils.match(text, /\\d+/)); // Output: \["123", index: 6, input: "Hello 123 World 456", groups: undefined\]  
  console.log(stringUtils.match(text, /abc/)); // Output: null  
  console.log(stringUtils.match(text, /\\w+/g)); // Output: \["Hello", "123", "World", "456"\] (if global flag is used)
  ```

### **matchAll(str, regexp)**

* **Description:** Returns an iterator of all results matching a string against a regular expression. The regular expression *must* have the global flag (g).  
* **Parameters:**  
  * str (string): The input string.  
  * regexp (RegExp): The regular expression object (must have 'g' flag).  
* **Returns:** (IterableIterator) An iterator.  
* **Example:**  
  ```bash
  const text = "Hello 123 World 456";  
  const iterator = stringUtils.matchAll(text, /\\d+/g);  
  for (const match of iterator) {  
    console.log(match\[0\]); // Output: 123, then 456  
  }  
  // Convert iterator to array for easier logging  
  console.log(Array.from(stringUtils.matchAll(text, /\[Hh\]ello/g)));  
  // Output: \[\["Hello", index: 0, input: "Hello 123 World 456", groups: undefined\]\]
  ```

### **search(str, regexp)**

* **Description:** Executes a search for a match between a regular expression and a specified string.  
* **Parameters:**  
  * str (string): The input string.  
  * regexp (string|RegExp): The regular expression object.  
* **Returns:** (number) The index of the first match, or \-1 if no match is found.  
* **Example:**  
  ```bash
  const text = "The quick brown fox";  
  console.log(stringUtils.search(text, /brown/)); // Output: 10  
  console.log(stringUtils.search(text, "quick")); // Output: 4  
  console.log(stringUtils.search(text, /xyz/)); // Output: -1
  ```

### **repeat(str, count)**

* **Description:** Constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.  
* **Parameters:**  
  * str (string): The input string.  
  * count (number): The number of times to repeat the string.  
* **Returns:** (string) The new string containing the specified number of copies.  
* **Example:**  
  ```bash
  console.log(stringUtils.repeat("abc", 3)); // Output: abcabcabc  
  console.log(stringUtils.repeat("\*", 5)); // Output: \*\*\*\*\*  
  console.log(stringUtils.repeat("hello", 0)); // Output: ""
  ```

### **padEnd(str, targetLength, \[padString=' '\])**

* **Description:** Pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end (right) of the current string.  
* **Parameters:**  
  * str (string): The input string.  
  * targetLength (number): The length of the resulting string once the current string has been padded.  
  * padString (string, optional): The string to pad the current string with. Defaults to a single space (' ').  
* **Returns:** (string) The padded string.  
* **Example:**
  ```bash  
  console.log(stringUtils.padEnd("abc", 10, "-")); // Output: abc-------  
  console.log(stringUtils.padEnd("hello", 7)); // Output: hello  
  console.log(stringUtils.padEnd("data", 8, "0")); // Output: data0000
  ```

### **padStart(str, targetLength, \[padString=' '\])**

* **Description:** Pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the start (left) of the current string.  
* **Parameters:**  
  * str (string): The input string.  
  * targetLength (number): The length of the resulting string once the current string has been padded.  
  * padString (string, optional): The string to pad the current string with. Defaults to a single space (' ').  
* **Returns:** (string) The padded string.  
* **Example:**
  ```bash  
  console.log(stringUtils.padStart("abc", 10, "-")); // Output: -------abc  
  console.log(stringUtils.padStart("hello", 7)); // Output: hello  
  console.log(stringUtils.padStart("data", 8, "0")); // Output: 0000data
  ```

## Contributing

We welcome contributions to `js-string-toolkit`! If you have suggestions for improvements, bug reports, or want to contribute code, please feel free to:

1.  **Open an issue:** Describe the bug or feature request in detail.
2.  **Submit a pull request:**
    * Fork the repository.
    * Create a new branch for your feature or bug fix.
    * Write clear, concise code that adheres to the project's style.
    * Add or update tests to cover your changes.
    * Ensure all tests pass.
    * Submit your pull request, referencing any relevant issues.

---

## License

This project is licensed under the **MIT License**.

See the `LICENSE` file for more details.