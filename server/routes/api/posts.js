const router = require('express').Router()
const postController = require('../../controllers/postController')

// Matches "/api/events"
router
  .route('/')
  .get(postController.findAll)
  .post(postController.create)

// Matches "/api/events/:id"
router
  .route('/:id')
  .get(postController.findById)
  .put(postController.update)
  .delete(postController.remove)

router.route('/bid/new').post(postController.addBid)
router.route('/bid/confirm').post(postController.confirmBid)
module.exports = router
