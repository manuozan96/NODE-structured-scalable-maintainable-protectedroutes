const { httpError } = require('../helpers/handleError')
const userModel = require('../models/users')

const getItems = async (req, res) => {
    try {
        const listAll = await userModel.find({})
        res.send({ data: listAll})
    } catch (error) {
        httpError(res, e)
    }
}


const getItem = (req, res) => {

}

const updateItem = (req, res) => {

}

const createItem = async (req, res) => {
    try {
        const { name, age, email } = req.body
        const resDetail = await userModel.create({name, age, email})
        res.send({ data: resDetail})
    } catch (error) {
        httpError(res, e)
    }
}

const deleteItem = (req, res) => {

}

module.exports = {getItem, getItems, updateItem, deleteItem, createItem}