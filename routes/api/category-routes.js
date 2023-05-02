const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
   
  Category.findAll({
    include: [{ model: Product }],
  })
  .then((category) => res.json(category))
  .catch((err) => {
    
    console.log(err);
    res.status(500).json(err);
  })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id,
    },
    include: [{ model: Product }],
  })
 .then((category) => res.json(category))
 .catch((err) => {
   console.log(err);
   res.status(500).json(err);
 })
 
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
      
  Category.destroy({
    where: {
      id: req.params.id,
    },
    force: true,

  })
    .then((category) => {
      res.status(200).json(category);
    })  
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });

});

module.exports = router;
