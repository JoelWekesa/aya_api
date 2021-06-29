const {Router} = require("express");
const {FAQs} = require("../../models/faqs");

const router = Router();

router.get("/", async (req, res) => {
        try {
           
            const faqs_list = await FAQs.findAll({
                attributes: ['questions', 'answers']
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
