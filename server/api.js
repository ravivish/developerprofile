const express = require('express');
const developers = require('./developers');

const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.use('/developers', developers);

module.exports = router;
