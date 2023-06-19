"use strict";

let options = {};
if (process.env.NODE_ENV === "production") {
	options.schema = process.env.SCHEMA; // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		options.tableName = "Spots";
		return queryInterface.bulkInsert(
			options,
			[
				{
					userId: 1,
					address: "123 Main St",
					city: "Example City",
					state: "Example State",
					country: "Example Country",
					lat: 37.12345,
					lng: -122.6789,
					name: "Spot 1",
					description: "This is the first spot",
					price: 100.0,
					avgStarRating: 4.5,
					preview_image: "https://www.google.com/",
				},
				{
					userId: 2,
					address: "456 Elm St",
					city: "Another City",
					state: "Another State",
					country: "Another Country",
					lat: 38.54321,
					lng: -121.98765,
					name: "Spot 2",
					description: "This is the second spot",
					price: 150.0,
					avgStarRating: 4.0,
					preview_image: "http://placekitten.com/200/300",
				},
				{
					userId: 1,
					address: "789 Oak St",
					city: "Third City",
					state: "Third State",
					country: "Third Country",
					lat: 39.87654,
					lng: -120.34567,
					name: "Spot 3",
					description: "This is the third spot",
					price: 200.0,
					avgStarRating: 4.8,
					preview_image: "https://www.twitter.com/",
				},
			],
			{}
		);
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		options.tableName = "Spots";
		return queryInterface.bulkDelete(options, null, {});
	},
};
