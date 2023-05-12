module.exports = (sequelize, dataTypes) => {
    let alias = "Role";
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

    const Role = sequelize.define(alias, cols, config);

    return Role;
}