## Project 2 - Chef Recipe Web Application

## Description

### Design Concept :

Everyone can be a Chef and save their yummy recipes in a place with a beautiful tiles presentation! Besides that, you may find more ideas here to create a New recipe!

### Why Chef Recipe?

Do you always have some pain-points like this?

- I cook everyday, I don’t even know what should I cook today?
- Why those recipes look so hard and complicated to follow up?
- Want to save my yummy recipes somewhere and go back to check if I forget.

### Our Plan is…

- Build an easy, simple, tasty recipe book for housewives and someone who needs to cook at home almost everyday like a Chef
- Provide a place to save those scrumptious, family recipes for those Chef Amateurs and share recipes with others.

### Design Process:

- Research : reference some market recipes websites, like allrecipes, simple recipes, food network, etc.
- Plan and Design : plan what we can do and design the layout (html/css)
- Build and Create : coding time!
- Test : we test and code together.
- Improve : there are still some unfinshed functions...

## User Story

```md
AS A user I WANT to see some recipes cards with a dish name, a brief description and chef name SO THAT I can have an idea about what I can cook today

As A user I WANT to see a recipe button on a recipe card SO THAT I can click it to enter a recipe page

As A user I WANT to see a recipe page with dish name, short description, prep and cooking time, ingredients, directions, and nutrition facts

AS A user I WANT to sign up SO THAT I can add recipes and save them on the recipe website

AS A user I WANT to login the recipe website SO THAT I can add recipes and save them on the recipe website

AS A user I WANT to see my name on the navbar after I log in

AS A user I WANT to see a recipe form with dish name, short description, prep and cooking time, ingredients, directions, and nutrition facts colums SO THAT I can add a recipe

AS A user I WANT to save my recipe on the recipe website SO THAT I can go back to check my recipes whenever I want

AS A user I WANT to see my recipes showed on the homepage of the website SO THAT I can share my recipes with others

AS A user I WANT to log out the recipe website SO THAT I can keep my account safe

AS A user I WANT to know the recipe website's contact information SO THAT I can contact the recipe website
```

## Acceptance Criteria

```md
GIVEN a homepage presented with several cards
WHEN I click one of cards' recipe button
THEN I am able to enter that card's recipe
THEN it shows a recipe page with dish name, dish description, preparation & cooking time, ingredients, directions with 4 steps, and then nutrition facts

GIVEN a navbar presented a "Chef Recipe" logo, login, your recipe, and contact buttons
WHEN I click the "Chef Recipe" logo button
THEN it brings me to the homepage
WHEN I click the login button
THEN it pops up a login form
WHEN I click your recipe button and I have not logged in
THEN it pops up a tooltip "Log in please"
WHEN I logged in
THEN it shows the recipes I created
WHEN I click the contact button
THEN it brings me to the contact information

GIVEN I don't have an account
WHEN I click it
THEN it pops up a login form with login and sign-up button
THEN I click the sign-up button
THEN it shows me the sign-up page
WHEN I complete the form and click submit
THEN it shows me the account page and the login button on the navbar changes to log out
THEN your recipe button on navbar changes to my name's recipe  
WHEN I click log out
THEN I log out

GIVEN I have an account
WHEN I click log in button on the navbar
THEN it shows me the account page and the your recipe change to my name's recipe

GIVEN an add button on the navbar and I haven't logged in
WHEN I click the add button
THEN it pops up the login form
THEN I login and it shows me the account page

GIVEN I have logged in
WHEN I click the add button on the navbar
THEN it shows me the add recipe form

GIVEN I have added a recipe in a recipe form
WHEN I click submit button
THEN it shows me the account page with a recipe card and a recipe button
WHEN I click the recipe button
THEN it shows me the recipe page

GIVEN an account page with a recipe card with a delete button
WHEN I click the delete button on a recipe card
THEN it deletes the recipe card
```

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Technology Used & Task Owner

Font End

- HTML/ CSS/ Bootstrap ➡ Millie
- Javascript ➡ Millie

Back End

- Node.js
- Express.js
- Config (connection.js) ➡ Millie & Kaden
- MVC: Models (Recipe/ User) ➡ Millie & Kaden
- MVC: Controllers (routes) ➡ Millie
- MVC: View (handlebars) ➡ Millie
- Database (MySQL)
- Seeds ➡ Kaden & Millie
- Authentication (express-session and cookies) ➡ Kaden & Millie
- Environment Variables
- Compression (new package) ➡ Millie
- Web api Cloudinary (under construction) ➡ Kaden
- Multer (under construction) ➡ Kaden
- Published to Heroku ➡ Millie
- README ➡ Millie

### Other Tasks

## Future Improvement / Development

- Be able to add an image while adding a recipe
- Add edit recipe and sharing feature
- Add a rating feature

## Other Tasks Owner

- Build a Repo/brunches in GitHub ➡ Kartiki
- User Story ➡ Millie
- Acceptance Criteria ➡ Millie
- PowerPoint (Keynote) ➡ Millie

Website Screenshot
![screenshot](./assets/chef-recipe.png)

Please click [here](https://chef-recipe-1.herokuapp.com/) for the Chef Recipe website

Please click [here](https://drive.google.com/drive/folders/1X7Lffj1-SK8XnmeGp2y7EchXb7nExpmG?usp=sharing) for the Chef Recipe keynote and pdf file (presentation materials)

---

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
