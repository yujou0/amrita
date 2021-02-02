import express from 'express'
import { deletee, create, usercheckout } from '../controllers/orders.js'

const router = express.Router()

router.post('/', create)
// router.patch('/:id', edit)
router.delete('/:id',deletee)
router.get('/checkoutlist', usercheckout)

export default router
