const express = require('express');
const {
    getMe,
    getUsers,
    updateUser,
    deleteUser
} = require('../controllers/userController');

const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// All user routes need to be protected
router.use(protect);

router.get('/me', getMe);

// Admin-only routes
router.use(authorize('admin'));

router.route('/')
    .get(getUsers);

router.route('/:id')
    .put(updateUser)
    .delete(deleteUser);

module.exports = router;
