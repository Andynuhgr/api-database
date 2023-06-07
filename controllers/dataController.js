const connection = require('../utils/dbConnection');

const dataController = {
  getAllData: (req, res) => {
    connection.query('SELECT * FROM food_materials', (err, rows) => {
      if (err) {
        console.error('Error executing query: ', err);
        res.status(500).json({ error: 'Error executing query' });
      } else {
        res.json(rows);
      }
    });
  },

  createData: (req, res) => {
    const { month, year, food_item, quantity, purchase_date, expiry_date, category } = req.body;
    const newData = { month, year, food_item, quantity, purchase_date, expiry_date, category };
    
    connection.query('INSERT INTO food_materials SET ?', newData, (err, result) => {
      if (err) {
        console.error('Error executing query: ', err);
        res.status(500).json({ error: 'Error executing query' });
      } else {
        res.json({ message: 'Data created successfully' });
      }
    });
  },

  updateData: (req, res) => {
    const id = req.params.id;
    const { month, year, food_item, quantity, purchase_date, expiry_date, category } = req.body;
    const newData = { month, year, food_item, quantity, purchase_date, expiry_date, category };
    
    connection.query('UPDATE food_materials SET ? WHERE id = ?', [newData, id], (err, result) => {
      if (err) {
        console.error('Error executing query: ', err);
        res.status(500).json({ error: 'Error executing query' });
      } else {
        res.json({ message: 'Data updated successfully' });
      }
    });
  },

  getDataByCategory: (req, res) => {
    const category = req.params.category;
    connection.query('SELECT * FROM food_materials WHERE category = ?', category, (err, rows) => {
      if (err) {
        console.error('Error executing query: ', err);
        res.status(500).json({ error: 'Error executing query' });
      } else {
        res.json(rows);
      }
    });
  }
};

module.exports = dataController;


