const router = require('express').Router()

const reviewsRoutes = require('./reviews')
const usersRoutes = require('./users')
const OneonOnePostRoutes = require('./OneonOnePosts')
const GroupPostRoutes = require('./GroupPostRoutes')


router.use('/api/reviews', reviewsRoutes)
router.use('/api/opendata/users', usersRoutes)

router.use('/api/posts', OneonOnePostRoutes)
router.use('/api/groupposts', GroupPostRoutes)



module.exports = router
