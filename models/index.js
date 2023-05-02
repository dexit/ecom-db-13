// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
//Product belongs to Category, as a category can have multiple products but a product can only belong to one category.
 
 Category.hasMany(Product, {
  foreignKey: 'category_id',
});
// Categories have many Products
// Category has many Product models.
 


  Product.belongsTo(Category, {
    foreignKey: 'category_id',
  });

// Products belongToMany Tags (through ProductTag)
// Product belongs to many Tag models. Using the ProductTag through model, allow products to have multiple tags and tags to have many products.
   
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
  onDelete: 'CASCADE',
});



// Tags belongToMany Products (through ProductTag)
// Tag belongs to many Product models.
 Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
  onDelete: 'CASCADE',
 });

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
