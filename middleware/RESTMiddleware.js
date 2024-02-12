const jwt = require('jsonwebtoken');
const path = require('path');
const multer = require('multer');
const Image = require('../models/Image');

const uploadPath = path.join('public', Image.imageBasePath);
const imageMimeTypes = ['image/jpeg', 'image/png', 'image/gif'];

const upload = multer({
    dest: uploadPath,
    fileFilter: (req, file, callback) => {
        callback(null, imageMimeTypes.includes(file.mimetype));
    }
    // limits:{fieldSize: 25 * 1024 * 1024}
});


module.exports = {upload};
