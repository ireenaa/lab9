// const db = require('./db');


// export const getAllCars = (req, res) => {
//   const {sortBy} = req.query;
//   const query = 'SELECT * FROM cars';
//   if (sortBy){
//     query += `ORDER BY ${sortBy}`
//   }

//   db.query(query, (err, results) => {
//     if (err) {
//       console.error('Error getting cars: ' + err.stack);
//       res.status(500).send('Error getting cars from database');
//       return;
//     }
//     res.status(200).json(results); 
//   });
// };


// export const getCarById = (req, res) => {
//   const carId = req.params.id;
//   const query = `SELECT * FROM cars WHERE id = ?`; 
//   db.query(query, [carId], (err, results) => {
//     if (err) {
//       console.error('Error getting car by ID: ' + err.stack);
//       res.status(500).send('Error getting car from database');
//       return;
//     }
//     if (results.length === 0) {
//       res.status(404).send('Car not found');
//       return;
//     }
//     res.status(200).json(results[0]); 
//   });
// };
// export const sortCars = (req, res) => {
//   const { sortBy } = req.query;
//   let query = `SELECT * FROM cars`;

//   if (sortBy) {
//     query += `ORDER BY ${sortBy}`;
//   }

//   db.query(query, (err, results) => {
//     if (err) {
//       console.error('Error sorting cars:', err);
//       res.status(500).json({ error: 'Internal Server Error' });
//       return;
//     }
//     res.json(results);
//   });
// };

// export const searchCars = (req, res) => {
//   const { search } = req.query;

//   if (!search) {
//     return res.status(400).json({ error: 'Search term is required' });
//   }

//   const query = `SELECT * FROM car WHERE name LIKE ?`;

//   db.query(query, [`%${search}%`], (err, results) => {
//     if (err) {
//       console.error('Error searching cars:', err);
//       res.status(500).json({ error: 'Internal Server Error' });
//       return;
//     }

//     res.json(results);
//   });
// };



// module.exports = {
//   getAllCars,
//   getCarById,
//   sortCars,
//   searchCars,}

const db = require('./db');

exports.read = (req, res) => {
    const { setSearchTerm, setSortOrder } = req.query;

    let selectQuery = 'SELECT * FROM car ';

    if (setSearchTerm) {
        selectQuery += ` WHERE name LIKE '%${setSearchTerm}%'`;
    }

    if (setSortOrder !== '') {
        if (setSearchTerm) {
            selectQuery += ` AND category = '${setSortOrder}'`;
        } else {
            selectQuery += ` WHERE category = '${setSortOrder}'`;
        }
    }

    if (sortByPrice) {
        selectQuery += ` ORDER BY price ${sortByPrice.toUpperCase()}`;
    }

    db.query(selectQuery, (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Database error' });
        } else {
            const data = results;
            const dataArray = data.map(row => ({
                id: row.id,
                title: row.title,
                category: row.category,
                price: row.price,
                description: row.description,
            }));

            res.setHeader('Content-Type', 'application/json');
            res.json({ data: dataArray });
        }
    });
};

exports.getProductById = (req, res) => {
    const productId = req.params.productId;
  
    const selectQuery = `SELECT * FROM table1 WHERE id = ${productId}`;
  
    db.query(selectQuery, (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Database error' });
        } else {
            const data = results;
            const dataArray = data.map(row => ({
                id: row.id,
                title: row.title,
                category: row.category,
                price: row.price,
                description: row.description,
            }));

            res.setHeader('Content-Type', 'application/json');
            res.json({ data: dataArray });
        }
    });
  };
