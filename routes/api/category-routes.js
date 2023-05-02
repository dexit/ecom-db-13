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
 .then((cat) => res.json(cat))
 .catch((err) => {
   console.log(err);
   res.status(500).json(err);
 })
 
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
    .then((cat) => res.json(cat))
    .catch((err) => {
      
      console.log(err);
      res.status(500).json(err);
    })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
    force: true,
     })
   .then((cat) => {
     if (!cat) {
       res.status(404).json({ message: 'No category found with this id!' });
       return;
     }
     res.json(cat);
  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
      
  Category.destroy({
    where: {
      id: req.params.id,
    },
    force: true,

  })
    .then((cat) => {
      if
        (!cat) {
          res.status(404).json({ message: 'No product found with this id!' });
          return;
        }
            res.json(cat);
    })  
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    })

});

module.exports = router;
