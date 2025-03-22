const express = require('express');
const {
    handleGetAllUsers,
    handleGetUserById,
    handleCreateNewUser,
    handleUpdateUserById,
    handleDeleteUserById
} = require('../controllers/controller');

const router = express.Router();

router.route('/')
    .get(handleGetAllUsers)
    .post(handleCreateNewUser);

router.route('/:id')
    .get(handleGetUserById)
    .patch(handleUpdateUserById)
    .delete(handleDeleteUserById);

module.exports = router;

