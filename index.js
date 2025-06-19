/**
 * js-string-toolkit/index.js
 *
 * This module provides a comprehensive collection of utility functions for common
 * string manipulations, wrapping many standard JavaScript String methods
 * for consistent usage and easy import.
 */

/**
 * Ensures the input is a string. If not, converts it or returns an empty string.
 * This is a helper function to ensure robustness of other methods.
 * @param {*} input The value to ensure is a string.
 * @returns {string} The string representation of the input.
 */
function ensureString(input) {
  if (typeof input === "string") {
    return input;
  }
  if (input === null || input === undefined) {
    return "";
  }
  return String(input);
}

/**
 * Capitalizes the first letter of a string.
 * @param {string} str The input string.
 * @returns {string} The string with its first letter capitalized.
 */
function capitalize(str) {
  str = ensureString(str);
  if (str.length === 0) {
    return "";
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Reverses a given string.
 * @param {string} str The input string.
 * @returns {string} The reversed string.
 */
function reverseString(str) {
  str = ensureString(str);
  return str.split("").reverse().join("");
}

/**
 * Checks if a string is a palindrome (case-insensitive, ignores non-alphanumeric).
 * @param {string} str The input string.
 * @returns {boolean} True if the string is a palindrome, false otherwise.
 */
function isPalindrome(str) {
  str = ensureString(str);
  if (str.length < 2) {
    return true; // Single character or empty string is considered a palindrome
  }
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleanedStr === reverseString(cleanedStr);
}

/**
 * Returns the length of the string.
 * @param {string} str The input string.
 * @returns {number} The length of the string.
 */
function length(str) {
  return ensureString(str).length;
}

/**
 * Concatenates the given strings to the original string.
 * @param {string} str The original string.
 * @param {...string} strings The strings to concatenate.
 * @returns {string} The concatenated string.
 */
function concat(str, ...strings) {
  str = ensureString(str);
  return str.concat(...strings.map((s) => ensureString(s)));
}

/**
 * Checks if a string contains another string.
 * @param {string} str The string to search within.
 * @param {string} searchString The string to search for.
 * @param {number} [position=0] The position to start searching from.
 * @returns {boolean} True if the string contains the search string, false otherwise.
 */
function includes(str, searchString, position = 0) {
  return ensureString(str).includes(ensureString(searchString), position);
}

/**
 * Returns the index of the first occurrence of a specified value.
 * @param {string} str The string to search within.
 * @param {string} searchString The string to search for.
 * @param {number} [fromIndex=0] The position at which to begin searching.
 * @returns {number} The index of the first occurrence, or -1 if not found.
 */
function indexOf(str, searchString, fromIndex = 0) {
  return ensureString(str).indexOf(ensureString(searchString), fromIndex);
}

/**
 * Returns the index of the last occurrence of a specified value.
 * @param {string} str The string to search within.
 * @param {string} searchString The string to search for.
 * @param {number} [fromIndex] The position at which to begin searching backwards.
 * @returns {number} The index of the last occurrence, or -1 if not found.
 */
function lastIndexOf(str, searchString, fromIndex) {
  return ensureString(str).lastIndexOf(ensureString(searchString), fromIndex);
}

/**
 * Checks if a string begins with the characters of a specified string.
 * @param {string} str The string to search within.
 * @param {string} searchString The characters to be searched for at the beginning.
 * @param {number} [position=0] The position to begin searching.
 * @returns {boolean} True if the string starts with the search string, false otherwise.
 */
function startsWith(str, searchString, position = 0) {
  return ensureString(str).startsWith(ensureString(searchString), position);
}

/**
 * Checks if a string ends with the characters of a specified string.
 * @param {string} str The string to search within.
 * @param {string} searchString The characters to be searched for at the end.
 * @param {number} [length] The length of the string to consider.
 * @returns {boolean} True if the string ends with the search string, false otherwise.
 */
function endsWith(str, searchString, length) {
  return ensureString(str).endsWith(ensureString(searchString), length);
}

/**
 * Extracts a part of a string between two specified indices.
 * @param {string} str The input string.
 * @param {number} indexStart The start index.
 * @param {number} [indexEnd] The end index (exclusive).
 * @returns {string} The extracted substring.
 */
function substring(str, indexStart, indexEnd) {
  return ensureString(str).substring(indexStart, indexEnd);
}

/**
 * Extracts a section of a string and returns it as a new string.
 * @param {string} str The input string.
 * @param {number} beginSlice The index at which to begin extraction.
 * @param {number} [endSlice] The index before which to end extraction.
 * @returns {string} The extracted part of the string.
 */
function slice(str, beginSlice, endSlice) {
  return ensureString(str).slice(beginSlice, endSlice);
}

/**
 * Extracts a number of characters from a string, starting from a specified index.
 * (Note: substr() is a legacy feature and may be removed from future versions of JavaScript.
 * It is recommended to use slice() or substring() instead.)
 * @param {string} str The input string.
 * @param {number} start The index from which to start extracting characters.
 * @param {number} [length] The number of characters to extract.
 * @returns {string} The extracted part of the string.
 */
function substr(str, start, length) {
  return ensureString(str).substr(start, length);
}

/**
 * Divides a string into an ordered list of substrings.
 * @param {string} str The input string.
 * @param {string|RegExp} [separator] Specifies the characters to use for splitting the string.
 * @param {number} [limit] A non-negative integer specifying a limit on the number of substrings to be included in the array.
 * @returns {string[]} An array of substrings.
 */
function split(str, separator, limit) {
  return ensureString(str).split(separator, limit);
}

/**
 * Removes whitespace from both ends of a string.
 * @param {string} str The input string.
 * @returns {string} The string with whitespace removed from both ends.
 */
function trim(str) {
  return ensureString(str).trim();
}

/**
 * Removes whitespace from the beginning of a string.
 * @param {string} str The input string.
 * @returns {string} The string with whitespace removed from the beginning.
 */
function trimStart(str) {
  return ensureString(str).trimStart();
}

/**
 * Removes whitespace from the end of a string.
 * @param {string} str The input string.
 * @returns {string} The string with whitespace removed from the end.
 */
function trimEnd(str) {
  return ensureString(str).trimEnd();
}

/**
 * Converts a string to lowercase letters.
 * @param {string} str The input string.
 * @returns {string} The string converted to lowercase.
 */
function toLowerCase(str) {
  return ensureString(str).toLowerCase();
}

/**
 * Converts a string to uppercase letters.
 * @param {string} str The input string.
 * @returns {string} The string converted to uppercase.
 */
function toUpperCase(str) {
  return ensureString(str).toUpperCase();
}

/**
 * Replaces some or all matches of a pattern with a replacement.
 * @param {string} str The input string.
 * @param {string|RegExp} pattern A String or RegExp to be replaced.
 * @param {string|function} replacement The replacement string or a function to be called for each match.
 * @returns {string} The new string with some or all matches of a pattern replaced.
 */
function replace(str, pattern, replacement) {
  return ensureString(str).replace(pattern, replacement);
}

/**
 * Replaces all occurrences of a specified string value with another string value.
 * @param {string} str The input string.
 * @param {string|RegExp} pattern A String or RegExp to be replaced.
 * @param {string|function} replacement The replacement string or a function to be called for each match.
 * @returns {string} The new string with all matches of a pattern replaced.
 */
function replaceAll(str, pattern, replacement) {
  str = ensureString(str);
  // replaceAll requires a RegExp with 'g' flag or a string.
  // If pattern is a string, it will only replace the first occurrence without 'g'.
  // We'll mimic the behavior of native replaceAll for string patterns.
  if (typeof pattern === "string") {
    return str.split(pattern).join(replacement);
  }
  return str.replaceAll(pattern, replacement);
}

/**
 * Retrieves the result of matching a string against a regular expression.
 * @param {string} str The input string.
 * @param {RegExp} regexp The regular expression object.
 * @returns {RegExpMatchArray|null} An Array containing the results of the match, or null if no match is found.
 */
function match(str, regexp) {
  return ensureString(str).match(regexp);
}

/**
 * Returns an iterator of all results matching a string against a regular expression.
 * @param {string} str The input string.
 * @param {RegExp} regexp The regular expression object (must have 'g' flag).
 * @returns {IterableIterator<RegExpMatchArray>} An iterator.
 */
function matchAll(str, regexp) {
  return ensureString(str).matchAll(regexp);
}

/**
 * Executes a search for a match between a regular expression and a specified string.
 * @param {string} str The input string.
 * @param {string|RegExp} regexp The regular expression object.
 * @returns {number} The index of the first match, or -1 if no match is found.
 */
function search(str, regexp) {
  return ensureString(str).search(regexp);
}

/**
 * Constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
 * @param {string} str The input string.
 * @param {number} count The number of times to repeat the string.
 * @returns {string} The new string containing the specified number of copies.
 */
function repeat(str, count) {
  return ensureString(str).repeat(count);
}

/**
 * Pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length.
 * The padding is applied from the end (right) of the current string.
 * @param {string} str The input string.
 * @param {number} targetLength The length of the resulting string once the current string has been padded.
 * @param {string} [padString=' '] The string to pad the current string with.
 * @returns {string} The padded string.
 */
function padEnd(str, targetLength, padString = " ") {
  return ensureString(str).padEnd(targetLength, ensureString(padString));
}

/**
 * Pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length.
 * The padding is applied from the start (left) of the current string.
 * @param {string} str The input string.
 * @param {number} targetLength The length of the resulting string once the current string has been padded.
 * @param {string} [padString=' '] The string to pad the current string with.
 * @returns {string} The padded string.
 */
function padStart(str, targetLength, padString = " ") {
  return ensureString(str).padStart(targetLength, ensureString(padString));
}

// Export all your functions so they can be used by other modules.
module.exports = {
  capitalize,
  reverseString,
  isPalindrome,
  length,
  concat,
  includes,
  indexOf,
  lastIndexOf,
  startsWith,
  endsWith,
  substring,
  slice,
  substr, // Keep for compatibility, but recommend slice/substring
  split,
  trim,
  trimStart,
  trimEnd,
  toLowerCase,
  toUpperCase,
  replace,
  replaceAll,
  match,
  matchAll,
  search,
  repeat,
  padEnd,
  padStart,
};
