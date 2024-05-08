const contact = require("../models/contactModel")

const contactForm = async ( req, res ) => {
    try {
        const response = req.body;
        await contact.create(response);
        return res.status(200).json({message : "Meassage sent successfully"});
    } catch (error) {
        return res.status(500).json({message : "Message not deliverd"});
    }
};

module.exports = contactForm;