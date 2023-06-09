"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Review extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Review.belongsTo(models.User, { foreignKey: "userId" });
			Review.belongsTo(models.Spot, { foreignKey: "spotId" });
			Review.hasMany(models.ReviewImage, { foreignKey: "reviewId" });
		}
	}
	Review.init(
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			userId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: "Users",
					key: "id",
				},
				onDelete: "cascade",
			},
			spotId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: "Spots",
					key: "id",
				},
			},
			review: DataTypes.STRING,
			stars: DataTypes.INTEGER,
			createdAt: {
				type: DataTypes.DATE,
				defaultValue: DataTypes.NOW,
			},
			updatedAt: {
				type: DataTypes.DATE,
				defaultValue: DataTypes.NOW,
			},
		},
		{
			sequelize,
			modelName: "Review",
		}
	);
	return Review;
};
