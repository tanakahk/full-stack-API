const express = require('express');
const router = express.Router();

// middleware
const { jwtAuthenticate } = require("../../helpers/jwtHelpers");

router.post("/login", require('../../controllers/auth/postLogin'))
router.post("/signup", require('../../controllers/auth/postSignup'))
router.post("/trx_sr", jwtAuthenticate, require('../../controllers/trx/postTrxSr'))

router.get("/store", jwtAuthenticate, require('../../controllers/store/getStore'))
router.get("/sr_info/:sr_id", jwtAuthenticate, require('../../controllers/store/getSrInfo'))
router.get("/my_sr", jwtAuthenticate, require('../../controllers/store/getMySr'))

router.get("/heathz", (req, res) => { res.send("OK") })

module.exports = router;
