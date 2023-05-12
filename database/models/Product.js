module.exports = (sequelize, dataTypes) => {
    let alias = "Product";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
        title: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        description: {
            type: dataTypes.TEXT
        },
        price: {
            type: dataTypes.DECIMAL(11,2),
            allowNull: false
        },
        img: {
            type: dataTypes.TEXT
        },
        products_categories_id: {
            type: dataTypes.INTEGER,
        }
    };
    let config = {
        timestamps: false
    }

    const Product = sequelize.define(alias, cols, config);

    Product.associate = ((models) => {
        Product.belongsTo(models.Product_Category, {
            as: 'product_category',
            foreignKey: "products_categories_id"
        })
    });

    return Product;
};