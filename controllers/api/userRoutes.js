const router = require('express').Router();
const { User } = require('../../models');


// route to get signup page
// router.get('/signup', async (req, res) => {
//   try {
//     const userData = await User.findAll({
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });

//     const users = userData.map((user) =>
//       user.get({ plain: true })
//     );
//     console.log(users);
//     res.render('signup', {
//       users
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });



// route to create/add a user
// router.post('/signup', async (req, res) => {
//   try {
//     const userData = await User.create({
//       name: req.body.name,
//       email: req.body.email,
//       password: req.body.password

//     });
//     const user = userData.get({ plain: true });
//     res.render('account-without-recipe', user);
//   } catch (err) {
//     res.status(500).json(err);
//   };


// });



router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// log in
router.post('/login', async (req, res) => {
  try {
    // Find the user who matches the posted e-mail address
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // Verify the posted password with the password store in the database
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // Create session variables based on the logged in user
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    // Remove the session variables
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
