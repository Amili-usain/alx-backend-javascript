const fs = require('fs');

const countStudents = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n');
        let count = 0;
        const fields = {};

        for (let i = 1; i < lines.length; i++) {
          const line = lines[i].trim();
          if (line !== '') {
            const [fname, lname, age, field] = line.split(',');
            if (!fields[field]) {
              fields[field] = [fname];
            } else {
              fields[field].push(fname);
            }
            count++;
          }
        }

        console.log(`Number of students: ${count}`);
        for (const field in fields) {
          const students = fields[field];
          console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
        }

        resolve();
      }
    });
  });
};

module.exports = countStudents;
