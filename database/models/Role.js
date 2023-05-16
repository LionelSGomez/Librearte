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

    Role.associate = (models) => {
        Role.hasMany(models.User, {
          as: 'users',
          foreignKey: 'roles_id'
        });
      };

    return Role;
}