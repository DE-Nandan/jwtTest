const User = require("../models/User");
const Image = require("../models/Image");




// handle errors
const handleErrors = (err) => {
  console.log(err.message, err.code);

}



// controller actions
module.exports.imagesUpload_get = (req, res) => {
  res.render('imagesUpload');
}
module.exports.imagesFetch_get = (req, res) => {
  
  const userId = req.user._id;
  Image.find({ user: userId })
    .then(images => {
      // Render the imagesFetch template and pass the fetched images as data
    //  console.log(images)
      res.render('imagesFetch', { images });
    })
    .catch(error => {
      console.error('Error fetching images:', error);
      // Handle error
      res.status(500).send('Error fetching images');
    });

 
}


module.exports.imagesUpload_post = async (req, res) => {
  // Multer middleware has already processed the file upload, so you can access req.file
  
  const fileName = req.file != null ? req.file.filename : null;
  
  const image = new Image({
    imageName : fileName,
    user: req.body.user // Assuming you want to store the file name in the image object
    
  });

  try {
    const newImage = await image.save();
    
    res.status(201).json({ newImage }); // Respond with the newly created image
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

