const {Router} = require("express");
const {Posts} = require("../../models/posts");

const router = Router();

router.get("/", async (req, res) => {
        try {
           
            const posts_list = await Posts.findAll({
                attributes: ['post_title', 'post_body', 'featured_image', 'status', 'updated_at']
               }).then((data) => {
                return res.status(200).json(data);
              });                       
        } catch (err) {
            res.status(500).json({
                error: err.message,
            });
        }
    }
);

module.exports = router;
