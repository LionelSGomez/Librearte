module.exports = (sequelize, dataTypes) => {
    let alias = "Product_Category";
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: dataTypes.TEXT,
        allowNull: false
      }
    };
    let config = {
      timestamps: false
    }
  
    const Product_Category = sequelize.define(alias, cols, config);
  
    return Product_Category;
  };