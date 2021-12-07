const router = require('express').Router();
const userRoutes = require('./userRoutes');
const recipeRoutes = require('./recipeRoutes');
const addRecipeRoutes = require ('./addReceipRoutes');



router.use('/users', userRoutes);
router.use('/recipe', recipeRoutes);
router.use('/add-recipe', addRecipeRoutes);



module.exports = router;
