const { Router } = require("express");
const { Profile } = require("../../models/profile");
const { User } = require("../../models/user");
const { profiler } = require("../../middleware/profile/profile");
const { upload } = require("../../middleware/profile/upload");

const router = Router();

router.put(
	"/update/:id",
	[profiler, upload.single("image")],
	async (req, res) => {
		try {
			const { id } = req.params;
			if (isNaN(id) || id <= 0) {
				return res.status(400).json({
					error: "Invalid ID",
				});
			}
			await User.findByPk(id).then(async (user) => {
				if (!user) {
					return res.status(404).json({
						error: "Unknown user",
					});
				}

				const {
					username,
					reg_number,
					id_number,
					gender,
					dob,
					citizenship,
					address,
					facility_id,
					cadre_id,
					department_id,
					licence_id,
					index_number,
					image,
				} = req.body;

				await Profile.findOne({
					where: {
						user_id: id,
					},
				})
					.then(async (item) => {
						if (!item) {
							return res.status(404).json({
								error: "User profile does not exist.",
							});
						}
						await Profile.update(
							{
								username: username ? username : item.username,
								reg_number: reg_number ? reg_number : item.reg_number,
								id_number: id_number ? id_number : item.id_number,
								gender: gender ? gender : item.gender,
								dob: dob ? dob : item.dob,
								citizenship: citizenship ? citizenship : item.citizenship,
								address: address ? address : item.address,
								facility_id: facility_id ? facility_id : item.facility_id,
								cadre_id: cadre_id ? cadre_id : item.cadre_id,
								department_id: department_id
									? department_id
									: item.department_id,
								licence_id: licence_id ? licence_id : item.licence_id,
								index_number: index_number ? index_number : item.index_number,
								profile_photo: req.file
									? req.file.filename
									: item.profile_photo,
							},
							{
								where: {
									id: item.id,
								},
							}
						)
							.then(() => {
								return res.status(200).json({
									Success: "Profile successfully updated",
									item,
								});
							})
							.catch((err) => {
								return res.status(400).json({
									error: err.message,
								});
							});
					})
					.catch((err) => {
						return res.status(400).json({
							error: err.message,
						});
					});
			});
		} catch (err) {
			return res.status(500).json({
				error: err.message,
			});
		}
	}
);

router.post("/single", upload.single("image"), (req, res) => {
	if (!req.file) {
		return res.status(400).json({
			error: "Please select an image to upload..",
		});
	}
	console.log(req.file.filename);
	res.status(200).json({
		success: "File uploaded.",
	});
});

module.exports = router;
