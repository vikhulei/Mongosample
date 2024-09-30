const express = require ('express')
const router = express.Router()
const auth = require('../../middleware/auth')
const { check, validationResult } = require('express-validator')

const Profile = require('../../models/Profile')
const User = require('../../models/User')

//@route GET api/profile/me
//@desc Get current user's profile
//@access Private
router.get('/me', auth, async (req, res) => {

    try{
        const profile = await Profile.findOne( { user: req.user.id}).populate('user', ['name', 'avatar'])

        if(!profile) {
            res.status(400).json({ msg: 'There is no profile for this user'})
        }

        res.json(profile)

    }catch(err) {
        console.error(err.message)
        res.status(500).send('Server error')
    }

})


//@route POST api/profile
//@desc Create or update user's profile
//@access Private

router.post('/', [ auth, [
    check('status', 'Status is required').not().isEmpty(),
    check('skills', 'Skills is required').not().isEmpty()
] ], async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }

    const {
        website,
        skills,
        youtube,
        twitter,
        instagram,
        linkedin,
        facebook,
        // spread the rest of the fields we don't need to check
        ...rest
      } = req.body;

})

module.exports = router