import { readFile } from 'fs';

/**
 * Reads the database asynchronously.
 * @param {string} filePath - The path to the database file.
 * @returns {Promise<Object>} A promise that resolves to an object of arrays of student first names per fields.
 */
export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const students = {};
        const lines = data.split('\n');

        for (const line of lines) {
          const [firstName, lastName, field] = line.split(',');
          if (students[field]) {
            students[field].push(firstName);
          } else {
            students[field] = [firstName];
          }
        }

        resolve(students);
      }
    });
  });
}
