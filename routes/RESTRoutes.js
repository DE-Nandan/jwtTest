const { Router } = require('express');
const RESTController = require('../controllers/RESTController');
const {upload,imagePath} = require('../middleware/RESTMiddleware');
const {requireAuth} = require('../middleware/authMiddleware')
const router = Router();

router.get('/imagesUpload' ,requireAuth ,RESTController.imagesUpload_get);
router.post('/imagesUpload', requireAuth,upload.single('image') ,RESTController.imagesUpload_post);
router.get('/imagesFetch' ,requireAuth,RESTController.imagesFetch_get);

module.exports = router;