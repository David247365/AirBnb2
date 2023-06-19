"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Spot extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Spot.belongsTo(models.User, { foreignKey: "userId " });
			Spot.hasMany(models.SpotImage, { foreignKey: "spotId" });
			Spot.hasMany(models.Review, { foreignKey: "spotId" });
			Spot.hasMany(models.Booking, {
				foreignKey: "spotId",
				onDelete: "CASCADE",
				hooks: true,
			});
		}
	}
	Spot.init(
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			userId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notNull: { msg: "User ID is required" },
					isInt: { msg: "User ID must be an integer" },
				},
				references: {
					model: "User",
					key: "id",
				},
			},
			address: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: { msg: "Address is required" },
					notEmpty: { msg: "Address must not be empty" },
				},
			},
			city: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: { msg: "City is required" },
					notEmpty: { msg: "City must not be empty" },
				},
			},
			state: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: { msg: "State is required" },
					notEmpty: { msg: "State must not be empty" },
				},
			},
			country: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: { msg: "Country is required" },
					notEmpty: { msg: "Country must not be empty" },
				},
			},
			lat: {
				type: DataTypes.DECIMAL,
				allowNull: false,
				validate: {
					notNull: { msg: "Latitude is required" },
					isDecimal: { msg: "Latitude must be a decimal number" },
				},
			},
			lng: {
				type: DataTypes.DECIMAL,
				allowNull: false,
				validate: {
					notNull: { msg: "Longitude is required" },
					isDecimal: { msg: "Longitude must be a decimal number" },
				},
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: { msg: "Name is required" },
					notEmpty: { msg: "Name must not be empty" },
				},
			},
			description: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: { msg: "Description is required" },
					notEmpty: { msg: "Description must not be empty" },
				},
			},
			price: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notNull: { msg: "Price is required" },
					isInt: { msg: "Price must be an integer" },
				},
			},
			avgRating: {
				type: DataTypes.DECIMAL,
				allowNull: true,
				validate: {
					isDecimal: { msg: "Average rating must be a decimal number" },
				},
			},
			previewImage: {
				type: DataTypes.STRING,
				allowNull: true,
				validate: {
					isUrl: { msg: "Preview image must be a valid URL" },
				},
			},
		},
		{
			sequelize,
			modelName: "Spot",
		}
	);
	return Spot;
};
