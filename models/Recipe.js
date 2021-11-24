const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Recipe extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Recipe.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    dish: {
      type: DataTypes.STRING,
      allowNull: true
    },

    dishPic: {
      type: DataTypes.STRING,
      allowNull: true,

    },

    filename: {
      type: DataTypes.STRING,
      allowNull: true
    },

    chef: {
      type: DataTypes.STRING,
      allowNull: true
    },
    prepTime: {
      type: DataTypes.STRING,
      allowNull: true
    },

    nutrition_facts: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dishDesc: {
      type: DataTypes.STRING,
      allowNull: true

      
    },

    ingredients: {
      type: DataTypes.STRING,
      allowNull: true
    },

    directions1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    directions2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    directions3: {
      type: DataTypes.STRING,
      allowNull: true
    },
    directions4: {
      type: DataTypes.STRING,
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'recipe'
  }
);

module.exports = Recipe;
