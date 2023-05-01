const express = require('express')
const router = express.Router()
const checkOrigin = require('../middleware/origin')
const { getItem, getItems, updateItem, deleteItem, createItem } = require('../controllers/users')

router.get('/user', getItem)
router.get('/users', getItems)
router.post('/create-user', checkOrigin, createItem)
router.put('/:id', updateItem)
router.delete('/:id', deleteItem)


module.exports = router