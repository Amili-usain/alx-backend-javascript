const fs = require('fs');

const countStudents = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n');
        const students = {};
        const fields = {};

        for (let i = 1; i < lines.length; i++) {
          const line = lines[i].trim();
          if (line !== '') {
            const [fname, lname, age, field] = line.split(',');
            if (!students[field]) {
              students[field] = [fname];
              fields[field] = 1;
            } else {
              students[field].push(fname);
              fields[field]++;
            }
          }
        }

        const totalStudents = Object.values(fields).reduce((acc, count) => acc + count, 0);
        console.log(`Number of students: ${totalStudents}`);
        for (const field in fields) {
          console.log(`Number of students in ${field}: ${fields[field]}. List: ${students[field].join(', ')}`);
        }

        resolve();
      }
    });
  });
};

module.exports = countStudents;
