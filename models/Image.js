const mongoose = require('mongoose')
const path  = require('path')
const imageBasePath = 'upload/images'

const imageSchema = new mongoose.Schema({
    imageName : {
        type : String,
        required : true
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'User'
    }
})

imageSchema.virtual('imagePath').get(function (){
    if(this.imageName != null){
        return path.join('/',imageBasePath,this.imageName)
    }
})

module.exports = mongoose.model('Image',imageSchema)
module.exports.imageBasePath = imageBasePath