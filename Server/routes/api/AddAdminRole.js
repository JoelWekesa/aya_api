const { Router } = require("express");
const { Users } = require("../../models/Users");

const router = Router();

router.put("/", async (req, res) => {
	try {
		const { email_address } = req.body;
		await Users.findOne({
			where: {
				email_address,
			},
		}).then((user) => {
			if (!user) {
				return res.status(404).json({
					error: "We cannot find a user with the provided email",
				});
			}

			Users.update(
				{
					admin: true,
				},
				{
					where: { email_address: email_address },
					returning: true,
					plain: true,
				}
			)
				.then(() => {
					res.status(200).json({
						message: "You have successfully added an admin.",
					});
				})
				.catch((err) => {
					res.status(500).json({
						error: err.message,
					});
				});
		});
	} catch (err) {
		res.status(500).json({
			error: err.message,
		});
	}
});

module.exports = {
	addAdminAPI: router,
};
