module.exports = (sequelize, dataTypes) => {
  let alias = "Product_Image";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: dataTypes.TEXT,
    }
  };
  let config = {
    timestamps: false
  }

  const Product_Image = sequelize.define(alias, cols, config);

  Product_Image.associate = ((models) => {
    Product.belongsTo(models.Product, {
      as: 'product',
      foreignKey: "products_id"
    })
  });

  return Product_Image;
};