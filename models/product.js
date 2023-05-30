
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'data', 'products.json');

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  static fetchAll(cb) {
    fs.readFile(filePath, (err, fileContent) => {
      if (err) {
        return cb([]);
      }

      try {
        const products = JSON.parse(fileContent);
        cb(products);
      } catch (parseErr) {
        console.error('Error parsing products.json:', parseErr);
        cb([]);
      }
    });
  }

  save() {
    Product.fetchAll((products) => {
      products.push({ title: this.title });

      fs.writeFile(filePath, JSON.stringify(products), (writeErr) => {
        if (writeErr) {
          console.error('Error writing to products.json:', writeErr);
        }
      });
    });
  }
};



// const fs = require('fs');
// const path = require('path');

// module.exports = class Product {
//   constructor(t) {
//     this.title = t;
//   }

//   save() {
//     const p = path.join(__dirname, '..', 'data', 'products.json');
  
//     fs.readFile(p, (err, fileContent) => {
//       let products = [];
//       if (!err) {
//         try {
//           products = JSON.parse(fileContent);
//           if (!Array.isArray(products)) {
//             products = [];
//           }
//         } catch (parseErr) {
//           console.error('Error parsing products.json:', parseErr);
//         }
//       }
  
//       products.push({ title: this.title });
  
//       fs.writeFile(p, JSON.stringify(products), (writeErr) => {
//         if (writeErr) {
//           console.error('Error writing to products.json:', writeErr);
//         }
//       });
//     });
//   }

//   static fetchAll(cb) {
//     const p = path.join(__dirname, '..', 'data', 'products.json');

//     fs.readFile(p, (err, fileContent) => {
//       if (err) {
//         cb([]);
//       } else {
//         try {
//           cb(JSON.parse(fileContent));
//         } catch (parseErr) {
//           console.error('Error parsing products.json:', parseErr);
//           cb([]);
//         }
//       }
//     });
//   }
// };
