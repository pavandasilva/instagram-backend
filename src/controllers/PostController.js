const Post = require('../models/Post');
const { saveImageDefault, imageUrlGenerate } = require('../utils/imageUtil');
const { eventEmit } = require('../utils/socketUtil');
const logger  = require('../utils/loggerUtil');

module.exports = {
    async get(req, res) {
        const posts = await Post.find().sort('-createdAt');
        return res.json(posts);
    },

    async post(req, res) {
        const { author, place, description, hashtags } = req.body;

        try {
            if (req.file) {
                var image = await saveImageDefault(req.file);
            }

            const post = await Post.create({
                author,
                place,
                description,
                hashtags,
                image: imageUrlGenerate(image) || null
            });
            
            eventEmit('post', post);
            return res.status(201).json(post);
        } catch(error){
            logger().error(error);
            return res.status(500).json({error});
        } 
    }
}