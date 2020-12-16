const recipes = [
    {
        name: "Falafel",
        image: "../images/falafel.jpg",
        ingredients: "<li>1 cup dried chickpeas soaked in water overnight</li><li>1 scallion<li>nice big handful of curly parsley</li></li><li>1 tbsp baking powder</li><li>pinch of salt</li><li>1 tbsp cumin</li><li>1 tbsp coriander</li><li>2 tbsp garlic</li><li>1 tbsp ginger</li><li>1/4 onion</li><li>1 lemon</li><li>2 tbsp chili pepper</li><li>pinch of salt</li><li>1 tsp white pep</li>",
        description: "Blast everything in a food processor. Scrape the sides and blast again. Form balls to your desired size and place on a tray. Put the balls into the fridge to set for an hour. Now just fry in a neutral oil until golden brown. <br><br>Yogurt sauce: Combine 3 tbsp dairy free yogurt, pinch of salt, white pep, and coriander, and about a tbsp of lemon juice. Mix that up. <br><br>To finish: Assemble a homemade pita bread, celery root hummus, alfalfa sprouts, pickled green tomato, falafel, yogurt sauce, chill guy hot sauce, and pickled red cabbage."
    },
    {
        name: "Onion Bhaji",
        image: "../images/onion-bhaji.jpg",
        ingredients: "<li>1/4 cup ginger</li><li>1/4 cup garlic<li>2 cups onions</li></li><li>1 green chili</li><li>1 habanero</li><li>1 cup grated potato</li><li>1 tbsp salt</li><li>1 tsp white pep</li><li>2 tbsp each of curry powder, cumin, coriander, fennel seed, garam masala</li><li>1/4 cup red lentils soaked for 15 minutes</li><li>chickpea flour</li>",
        description: "Grate the potato, julienne the onions, and finely chop the ginger, garlic, and chili.  Drain the lentils and combine with your chopped vegetables in a large bowl. Add your spices and just a little splash of water. Now slowly add the chickpea flour in and squeeze the mixture to create a batter like consistency. Throw the mixture in the fridge for an hour to chill. Now shape, fry, and enjoy with a chutney, yogurt sauce, or hot sauce."
    },
    {
        name: "Vegan Shakshouka",
        image: "../images/shakshouka.jpg",
        ingredients: "<li>1 cup of peeled tomato</li><li>1/2 cup strawberry<li>2 cloves of garlic</li></li><li>2 scallion</li><li>half a lemon</li><li>1 small shallot</li><li>splash of white wine vinegar</li><li>splash of olive oil</li><li>1 chili pepper with seeds</li><li>1 tbsp cumin</li><li>pinch of saffron</li><li>curry powder or turmeric</li><li>half a cube of firm tofu</li><li>little bit of parsley</li><li>salt and white pep</li>",
        description: "Chop your vegetables nice and fine. Add olive oil to a cast iron pan and sweat out garlic and shallot. Then add your chili followed by your scallion. Season with cumin, saffron and a pinch of salt and white pep. Now add your chopped tomato. Once the tomato starts to break down add your strawberry. Now add a splash of white wine vinegar and lemon juice. Cook that down a bit and everything should start to break down. If it’s to chunky blast it in a blender or try to break everything up with a wooden spoon in the pan. Now smash up your tofu in a bowl and add curry powder or turmeric. Make a space in the pan for the tofu and cook the tofu briefly. Throw that in a 350 degree oven for about 10 minutes. Add some parsley and scallion garnish. Add sourdough bread to the pan. Eat that right out the pan!"
    },
    {
        name: "My Favorite Cocktail",
        image: "../images/my-favorite-cocktail.jpg",
        ingredients: "<li>ice</li><li>juice of half a lemon</li><li>half an orange</li><li>two drops of vanilla</li><li>1 tbsp honey</li><li>1 egg white</li><li>two ounces of bourbon</li>",
        description: "In a shaker with ice combine the juice of half a lemon, half an orange, two drops of vanilla, 1 tbsp honey, 1 egg white, and two generous ounces of bourbon. Vigorously shake for a minute. Seriously shake it hard af, if you don’t the honey will stick at the bottom and it will smell like egg. Pour over a giant ice cube in a cocktail glass and garnish with an orange peel."
    },
    {
        name: "Duck Breast",
        image: "../images/duck-breast.jpg",
        ingredients: "<li>1 tsp salt</li><li>1 tbsp each of clove</li><li>fennel seed</li><li>cinnamon</li><li>star anise</li><li>2 tbsp szechuan peppercorn</li><li>two onions</li><li>oil</li><li>soy sauce</li><li>2 black garlic cloves</li><li>honey or agave</li><li>oyster mushrooms</li><li>enoki mushrooms</li><li>white pep</li><li>splash of beer</li><li>ponzu sauce</li><li>scallion</li>",
        description: "Chinese five spice: 1 tsp salt, 1 tbsp each of clove, fennel seed, cinnamon, star anise, and 2 tbsp szechuan peppercorn. Blast these in a mortar and pestle and toast them up or just use pre made five spice powder. <br><br>Charred onion honey with black garlic: Dice two onions, toss with a touch oil, place on a sheet pan with parchment paper and blast in the oven on 400 until black (you can also do this in a cast iron pan and stir frequently). Once blackened, transfer to a blender and add a little soy sauce. You want just enough soy sauce to get the blender going. Now, add in two big black garlic cloves and start drizzling in honey or agave. I don’t have a measurement for this, I just add enough to cut through the soy sauce. It should taste sweet but full of umami. Use a lot of honey! <br><br>For the duck breast: Score the skin and massage the five spice into both sides. Place in a cold non stick pan and put the heat on medium high. Sear for 4-5 minutes or until the skin has rendered and crisped up. Flip it over and sear for another 3-4 minutes or until it is 130-135 (that’s how I like it). Pull it off the pan and let it rest for 5 minutes. <br><br>For the mushrooms. Use the same pan as the duck breast and saute oyster mushrooms in the residual fat. Add some of the Chinese five spice and a pinch of white pep. Once they are slightly sweated down add a handful of enoki mushrooms. Once the fat is absorbed, deglaze with a splash of beer. Cook that down and add a splash of ponzu sauce and cook that down. <br><br>To finish: Slice the breast. Add some of the charred onion honey down in a line and spread it out. Place the breast on top of the honey. Decorate the plate with mushrooms and scallion."
    },
    {
        name: "Mushroom Pate",
        image: "../images/pate.jpg",
        ingredients: "<li>pint of mushrooms of your liking</li><li>2 garlic cloves</li><li>1 small shallot</li><li>1 tbsp rosemary</li><li>cognac</li><li>salt</li><li>white pep</li><li>2 tbsp olive oil</li><li>3 tbsp vegan butter</li><li>1/4 help milk</li>",
        description: "Add 2 tbsp olive oil in a hot pan and add shallot and garlic. Sweat them out and add the mushrooms. Season with salt and white pep. Add rosemary and a splash of cognac. Be careful not to scorch your face. Pull the pan off the heat and add the cognac then put it back on the heat and give the pan a flip, it should flame up. Once the mushrooms are nice and soft, discard the rosemary and add everything to a blender. Add 3 tbsp vegan butter and a 1/4 cup of hemp milk. Blast that until smooth and cool down. Serve in a mason jar with some homemade sourdough."
    },

    // ADD THE REST OF THE RECIPES //

    {
        name: "Falafel",
        image: "../images/falafel.jpg",
        ingredients: "<ul><li>1 cup dried chickpeas soaked in water overnight</li><li>1 scallion<li>nice big handful of curly parsley</li></li><li>1 tbsp baking powder</li><li>pinch of salt</li><li>1 tbsp cumin</li><li>1 tbsp coriander</li><li>2 tbsp garlic</li><li>1 tbsp ginger</li><li>1/4 onion</li><li>1 lemon</li><li>2 tbsp chili pepper</li><li>pinch of salt</li><li>1 tsp white pep</li></ul>",
        description: "Blast everything in a food processor. Scrape the sides and blast again. Form balls to your desired size and place on a tray. Put the balls into the fridge to set for an hour. Now just fry in a neutral oil until golden brown. <br><br>Yogurt sauce: Combine 3 tbsp dairy free yogurt, pinch of salt, white pep, and coriander, and about a tbsp of lemon juice. Mix that up. <br><br>To finish: Assemble a homemade pita bread, celery root hummus, alfalfa sprouts, pickled green tomato, falafel, yogurt sauce, chill guy hot sauce, and pickled red cabbage."
    },
    {
        name: "Falafel",
        image: "../images/falafel.jpg",
        ingredients: "<ul><li>1 cup dried chickpeas soaked in water overnight</li><li>1 scallion<li>nice big handful of curly parsley</li></li><li>1 tbsp baking powder</li><li>pinch of salt</li><li>1 tbsp cumin</li><li>1 tbsp coriander</li><li>2 tbsp garlic</li><li>1 tbsp ginger</li><li>1/4 onion</li><li>1 lemon</li><li>2 tbsp chili pepper</li><li>pinch of salt</li><li>1 tsp white pep</li></ul>",
        description: "Blast everything in a food processor. Scrape the sides and blast again. Form balls to your desired size and place on a tray. Put the balls into the fridge to set for an hour. Now just fry in a neutral oil until golden brown. <br><br>Yogurt sauce: Combine 3 tbsp dairy free yogurt, pinch of salt, white pep, and coriander, and about a tbsp of lemon juice. Mix that up. <br><br>To finish: Assemble a homemade pita bread, celery root hummus, alfalfa sprouts, pickled green tomato, falafel, yogurt sauce, chill guy hot sauce, and pickled red cabbage."
    },
    {
        name: "Falafel",
        image: "../images/falafel.jpg",
        ingredients: "<ul><li>1 cup dried chickpeas soaked in water overnight</li><li>1 scallion<li>nice big handful of curly parsley</li></li><li>1 tbsp baking powder</li><li>pinch of salt</li><li>1 tbsp cumin</li><li>1 tbsp coriander</li><li>2 tbsp garlic</li><li>1 tbsp ginger</li><li>1/4 onion</li><li>1 lemon</li><li>2 tbsp chili pepper</li><li>pinch of salt</li><li>1 tsp white pep</li></ul>",
        description: "Blast everything in a food processor. Scrape the sides and blast again. Form balls to your desired size and place on a tray. Put the balls into the fridge to set for an hour. Now just fry in a neutral oil until golden brown. <br><br>Yogurt sauce: Combine 3 tbsp dairy free yogurt, pinch of salt, white pep, and coriander, and about a tbsp of lemon juice. Mix that up. <br><br>To finish: Assemble a homemade pita bread, celery root hummus, alfalfa sprouts, pickled green tomato, falafel, yogurt sauce, chill guy hot sauce, and pickled red cabbage."
    },
    {
        name: "Falafel",
        image: "../images/falafel.jpg",
        ingredients: "<ul><li>1 cup dried chickpeas soaked in water overnight</li><li>1 scallion<li>nice big handful of curly parsley</li></li><li>1 tbsp baking powder</li><li>pinch of salt</li><li>1 tbsp cumin</li><li>1 tbsp coriander</li><li>2 tbsp garlic</li><li>1 tbsp ginger</li><li>1/4 onion</li><li>1 lemon</li><li>2 tbsp chili pepper</li><li>pinch of salt</li><li>1 tsp white pep</li></ul>",
        description: "Blast everything in a food processor. Scrape the sides and blast again. Form balls to your desired size and place on a tray. Put the balls into the fridge to set for an hour. Now just fry in a neutral oil until golden brown. <br><br>Yogurt sauce: Combine 3 tbsp dairy free yogurt, pinch of salt, white pep, and coriander, and about a tbsp of lemon juice. Mix that up. <br><br>To finish: Assemble a homemade pita bread, celery root hummus, alfalfa sprouts, pickled green tomato, falafel, yogurt sauce, chill guy hot sauce, and pickled red cabbage."
    },
    {
        name: "Falafel",
        image: "../images/falafel.jpg",
        ingredients: "<ul><li>1 cup dried chickpeas soaked in water overnight</li><li>1 scallion<li>nice big handful of curly parsley</li></li><li>1 tbsp baking powder</li><li>pinch of salt</li><li>1 tbsp cumin</li><li>1 tbsp coriander</li><li>2 tbsp garlic</li><li>1 tbsp ginger</li><li>1/4 onion</li><li>1 lemon</li><li>2 tbsp chili pepper</li><li>pinch of salt</li><li>1 tsp white pep</li></ul>",
        description: "Blast everything in a food processor. Scrape the sides and blast again. Form balls to your desired size and place on a tray. Put the balls into the fridge to set for an hour. Now just fry in a neutral oil until golden brown. <br><br>Yogurt sauce: Combine 3 tbsp dairy free yogurt, pinch of salt, white pep, and coriander, and about a tbsp of lemon juice. Mix that up. <br><br>To finish: Assemble a homemade pita bread, celery root hummus, alfalfa sprouts, pickled green tomato, falafel, yogurt sauce, chill guy hot sauce, and pickled red cabbage."
    },
    {
        name: "Falafel",
        image: "../images/falafel.jpg",
        ingredients: "<ul><li>1 cup dried chickpeas soaked in water overnight</li><li>1 scallion<li>nice big handful of curly parsley</li></li><li>1 tbsp baking powder</li><li>pinch of salt</li><li>1 tbsp cumin</li><li>1 tbsp coriander</li><li>2 tbsp garlic</li><li>1 tbsp ginger</li><li>1/4 onion</li><li>1 lemon</li><li>2 tbsp chili pepper</li><li>pinch of salt</li><li>1 tsp white pep</li></ul>",
        description: "Blast everything in a food processor. Scrape the sides and blast again. Form balls to your desired size and place on a tray. Put the balls into the fridge to set for an hour. Now just fry in a neutral oil until golden brown. <br><br>Yogurt sauce: Combine 3 tbsp dairy free yogurt, pinch of salt, white pep, and coriander, and about a tbsp of lemon juice. Mix that up. <br><br>To finish: Assemble a homemade pita bread, celery root hummus, alfalfa sprouts, pickled green tomato, falafel, yogurt sauce, chill guy hot sauce, and pickled red cabbage."
    },
    {
        name: "Falafel",
        image: "../images/falafel.jpg",
        ingredients: "<ul><li>1 cup dried chickpeas soaked in water overnight</li><li>1 scallion<li>nice big handful of curly parsley</li></li><li>1 tbsp baking powder</li><li>pinch of salt</li><li>1 tbsp cumin</li><li>1 tbsp coriander</li><li>2 tbsp garlic</li><li>1 tbsp ginger</li><li>1/4 onion</li><li>1 lemon</li><li>2 tbsp chili pepper</li><li>pinch of salt</li><li>1 tsp white pep</li></ul>",
        description: "Blast everything in a food processor. Scrape the sides and blast again. Form balls to your desired size and place on a tray. Put the balls into the fridge to set for an hour. Now just fry in a neutral oil until golden brown. <br><br>Yogurt sauce: Combine 3 tbsp dairy free yogurt, pinch of salt, white pep, and coriander, and about a tbsp of lemon juice. Mix that up. <br><br>To finish: Assemble a homemade pita bread, celery root hummus, alfalfa sprouts, pickled green tomato, falafel, yogurt sauce, chill guy hot sauce, and pickled red cabbage."
    },
    {
        name: "Falafel",
        image: "../images/falafel.jpg",
        ingredients: "<ul><li>1 cup dried chickpeas soaked in water overnight</li><li>1 scallion<li>nice big handful of curly parsley</li></li><li>1 tbsp baking powder</li><li>pinch of salt</li><li>1 tbsp cumin</li><li>1 tbsp coriander</li><li>2 tbsp garlic</li><li>1 tbsp ginger</li><li>1/4 onion</li><li>1 lemon</li><li>2 tbsp chili pepper</li><li>pinch of salt</li><li>1 tsp white pep</li></ul>",
        description: "Blast everything in a food processor. Scrape the sides and blast again. Form balls to your desired size and place on a tray. Put the balls into the fridge to set for an hour. Now just fry in a neutral oil until golden brown. <br><br>Yogurt sauce: Combine 3 tbsp dairy free yogurt, pinch of salt, white pep, and coriander, and about a tbsp of lemon juice. Mix that up. <br><br>To finish: Assemble a homemade pita bread, celery root hummus, alfalfa sprouts, pickled green tomato, falafel, yogurt sauce, chill guy hot sauce, and pickled red cabbage."
    },
    {
        name: "Falafel",
        image: "../images/falafel.jpg",
        ingredients: "<ul><li>1 cup dried chickpeas soaked in water overnight</li><li>1 scallion<li>nice big handful of curly parsley</li></li><li>1 tbsp baking powder</li><li>pinch of salt</li><li>1 tbsp cumin</li><li>1 tbsp coriander</li><li>2 tbsp garlic</li><li>1 tbsp ginger</li><li>1/4 onion</li><li>1 lemon</li><li>2 tbsp chili pepper</li><li>pinch of salt</li><li>1 tsp white pep</li></ul>",
        description: "Blast everything in a food processor. Scrape the sides and blast again. Form balls to your desired size and place on a tray. Put the balls into the fridge to set for an hour. Now just fry in a neutral oil until golden brown. <br><br>Yogurt sauce: Combine 3 tbsp dairy free yogurt, pinch of salt, white pep, and coriander, and about a tbsp of lemon juice. Mix that up. <br><br>To finish: Assemble a homemade pita bread, celery root hummus, alfalfa sprouts, pickled green tomato, falafel, yogurt sauce, chill guy hot sauce, and pickled red cabbage."
    },
    {
        name: "Falafel",
        image: "../images/falafel.jpg",
        ingredients: "<ul><li>1 cup dried chickpeas soaked in water overnight</li><li>1 scallion<li>nice big handful of curly parsley</li></li><li>1 tbsp baking powder</li><li>pinch of salt</li><li>1 tbsp cumin</li><li>1 tbsp coriander</li><li>2 tbsp garlic</li><li>1 tbsp ginger</li><li>1/4 onion</li><li>1 lemon</li><li>2 tbsp chili pepper</li><li>pinch of salt</li><li>1 tsp white pep</li></ul>",
        description: "Blast everything in a food processor. Scrape the sides and blast again. Form balls to your desired size and place on a tray. Put the balls into the fridge to set for an hour. Now just fry in a neutral oil until golden brown. <br><br>Yogurt sauce: Combine 3 tbsp dairy free yogurt, pinch of salt, white pep, and coriander, and about a tbsp of lemon juice. Mix that up. <br><br>To finish: Assemble a homemade pita bread, celery root hummus, alfalfa sprouts, pickled green tomato, falafel, yogurt sauce, chill guy hot sauce, and pickled red cabbage."
    },
    {
        name: "Falafel",
        image: "../images/falafel.jpg",
        ingredients: "<ul><li>1 cup dried chickpeas soaked in water overnight</li><li>1 scallion<li>nice big handful of curly parsley</li></li><li>1 tbsp baking powder</li><li>pinch of salt</li><li>1 tbsp cumin</li><li>1 tbsp coriander</li><li>2 tbsp garlic</li><li>1 tbsp ginger</li><li>1/4 onion</li><li>1 lemon</li><li>2 tbsp chili pepper</li><li>pinch of salt</li><li>1 tsp white pep</li></ul>",
        description: "Blast everything in a food processor. Scrape the sides and blast again. Form balls to your desired size and place on a tray. Put the balls into the fridge to set for an hour. Now just fry in a neutral oil until golden brown. <br><br>Yogurt sauce: Combine 3 tbsp dairy free yogurt, pinch of salt, white pep, and coriander, and about a tbsp of lemon juice. Mix that up. <br><br>To finish: Assemble a homemade pita bread, celery root hummus, alfalfa sprouts, pickled green tomato, falafel, yogurt sauce, chill guy hot sauce, and pickled red cabbage."
    },
    {
        name: "Falafel",
        image: "../images/falafel.jpg",
        ingredients: "<ul><li>1 cup dried chickpeas soaked in water overnight</li><li>1 scallion<li>nice big handful of curly parsley</li></li><li>1 tbsp baking powder</li><li>pinch of salt</li><li>1 tbsp cumin</li><li>1 tbsp coriander</li><li>2 tbsp garlic</li><li>1 tbsp ginger</li><li>1/4 onion</li><li>1 lemon</li><li>2 tbsp chili pepper</li><li>pinch of salt</li><li>1 tsp white pep</li></ul>",
        description: "Blast everything in a food processor. Scrape the sides and blast again. Form balls to your desired size and place on a tray. Put the balls into the fridge to set for an hour. Now just fry in a neutral oil until golden brown. <br><br>Yogurt sauce: Combine 3 tbsp dairy free yogurt, pinch of salt, white pep, and coriander, and about a tbsp of lemon juice. Mix that up. <br><br>To finish: Assemble a homemade pita bread, celery root hummus, alfalfa sprouts, pickled green tomato, falafel, yogurt sauce, chill guy hot sauce, and pickled red cabbage."
    },
    {
        name: "Falafel",
        image: "../images/falafel.jpg",
        ingredients: "<ul><li>1 cup dried chickpeas soaked in water overnight</li><li>1 scallion<li>nice big handful of curly parsley</li></li><li>1 tbsp baking powder</li><li>pinch of salt</li><li>1 tbsp cumin</li><li>1 tbsp coriander</li><li>2 tbsp garlic</li><li>1 tbsp ginger</li><li>1/4 onion</li><li>1 lemon</li><li>2 tbsp chili pepper</li><li>pinch of salt</li><li>1 tsp white pep</li></ul>",
        description: "Blast everything in a food processor. Scrape the sides and blast again. Form balls to your desired size and place on a tray. Put the balls into the fridge to set for an hour. Now just fry in a neutral oil until golden brown. <br><br>Yogurt sauce: Combine 3 tbsp dairy free yogurt, pinch of salt, white pep, and coriander, and about a tbsp of lemon juice. Mix that up. <br><br>To finish: Assemble a homemade pita bread, celery root hummus, alfalfa sprouts, pickled green tomato, falafel, yogurt sauce, chill guy hot sauce, and pickled red cabbage."
    },
    {
        name: "Falafel",
        image: "../images/falafel.jpg",
        ingredients: "<ul><li>1 cup dried chickpeas soaked in water overnight</li><li>1 scallion<li>nice big handful of curly parsley</li></li><li>1 tbsp baking powder</li><li>pinch of salt</li><li>1 tbsp cumin</li><li>1 tbsp coriander</li><li>2 tbsp garlic</li><li>1 tbsp ginger</li><li>1/4 onion</li><li>1 lemon</li><li>2 tbsp chili pepper</li><li>pinch of salt</li><li>1 tsp white pep</li></ul>",
        description: "Blast everything in a food processor. Scrape the sides and blast again. Form balls to your desired size and place on a tray. Put the balls into the fridge to set for an hour. Now just fry in a neutral oil until golden brown. <br><br>Yogurt sauce: Combine 3 tbsp dairy free yogurt, pinch of salt, white pep, and coriander, and about a tbsp of lemon juice. Mix that up. <br><br>To finish: Assemble a homemade pita bread, celery root hummus, alfalfa sprouts, pickled green tomato, falafel, yogurt sauce, chill guy hot sauce, and pickled red cabbage."
    },
    {
        name: "Falafel",
        image: "../images/falafel.jpg",
        ingredients: "<ul><li>1 cup dried chickpeas soaked in water overnight</li><li>1 scallion<li>nice big handful of curly parsley</li></li><li>1 tbsp baking powder</li><li>pinch of salt</li><li>1 tbsp cumin</li><li>1 tbsp coriander</li><li>2 tbsp garlic</li><li>1 tbsp ginger</li><li>1/4 onion</li><li>1 lemon</li><li>2 tbsp chili pepper</li><li>pinch of salt</li><li>1 tsp white pep</li></ul>",
        description: "Blast everything in a food processor. Scrape the sides and blast again. Form balls to your desired size and place on a tray. Put the balls into the fridge to set for an hour. Now just fry in a neutral oil until golden brown. <br><br>Yogurt sauce: Combine 3 tbsp dairy free yogurt, pinch of salt, white pep, and coriander, and about a tbsp of lemon juice. Mix that up. <br><br>To finish: Assemble a homemade pita bread, celery root hummus, alfalfa sprouts, pickled green tomato, falafel, yogurt sauce, chill guy hot sauce, and pickled red cabbage."
    },
    {
        name: "Falafel",
        image: "../images/falafel.jpg",
        ingredients: "<ul><li>1 cup dried chickpeas soaked in water overnight</li><li>1 scallion<li>nice big handful of curly parsley</li></li><li>1 tbsp baking powder</li><li>pinch of salt</li><li>1 tbsp cumin</li><li>1 tbsp coriander</li><li>2 tbsp garlic</li><li>1 tbsp ginger</li><li>1/4 onion</li><li>1 lemon</li><li>2 tbsp chili pepper</li><li>pinch of salt</li><li>1 tsp white pep</li></ul>",
        description: "Blast everything in a food processor. Scrape the sides and blast again. Form balls to your desired size and place on a tray. Put the balls into the fridge to set for an hour. Now just fry in a neutral oil until golden brown. <br><br>Yogurt sauce: Combine 3 tbsp dairy free yogurt, pinch of salt, white pep, and coriander, and about a tbsp of lemon juice. Mix that up. <br><br>To finish: Assemble a homemade pita bread, celery root hummus, alfalfa sprouts, pickled green tomato, falafel, yogurt sauce, chill guy hot sauce, and pickled red cabbage."
    },
    {
        name: "Falafel",
        image: "../images/falafel.jpg",
        ingredients: "<ul><li>1 cup dried chickpeas soaked in water overnight</li><li>1 scallion<li>nice big handful of curly parsley</li></li><li>1 tbsp baking powder</li><li>pinch of salt</li><li>1 tbsp cumin</li><li>1 tbsp coriander</li><li>2 tbsp garlic</li><li>1 tbsp ginger</li><li>1/4 onion</li><li>1 lemon</li><li>2 tbsp chili pepper</li><li>pinch of salt</li><li>1 tsp white pep</li></ul>",
        description: "Blast everything in a food processor. Scrape the sides and blast again. Form balls to your desired size and place on a tray. Put the balls into the fridge to set for an hour. Now just fry in a neutral oil until golden brown. <br><br>Yogurt sauce: Combine 3 tbsp dairy free yogurt, pinch of salt, white pep, and coriander, and about a tbsp of lemon juice. Mix that up. <br><br>To finish: Assemble a homemade pita bread, celery root hummus, alfalfa sprouts, pickled green tomato, falafel, yogurt sauce, chill guy hot sauce, and pickled red cabbage."
    },
    {
        name: "Falafel",
        image: "../images/falafel.jpg",
        ingredients: "<ul><li>1 cup dried chickpeas soaked in water overnight</li><li>1 scallion<li>nice big handful of curly parsley</li></li><li>1 tbsp baking powder</li><li>pinch of salt</li><li>1 tbsp cumin</li><li>1 tbsp coriander</li><li>2 tbsp garlic</li><li>1 tbsp ginger</li><li>1/4 onion</li><li>1 lemon</li><li>2 tbsp chili pepper</li><li>pinch of salt</li><li>1 tsp white pep</li></ul>",
        description: "Blast everything in a food processor. Scrape the sides and blast again. Form balls to your desired size and place on a tray. Put the balls into the fridge to set for an hour. Now just fry in a neutral oil until golden brown. <br><br>Yogurt sauce: Combine 3 tbsp dairy free yogurt, pinch of salt, white pep, and coriander, and about a tbsp of lemon juice. Mix that up. <br><br>To finish: Assemble a homemade pita bread, celery root hummus, alfalfa sprouts, pickled green tomato, falafel, yogurt sauce, chill guy hot sauce, and pickled red cabbage."
    },
    {
        name: "Falafel",
        image: "../images/falafel.jpg",
        ingredients: "<ul><li>1 cup dried chickpeas soaked in water overnight</li><li>1 scallion<li>nice big handful of curly parsley</li></li><li>1 tbsp baking powder</li><li>pinch of salt</li><li>1 tbsp cumin</li><li>1 tbsp coriander</li><li>2 tbsp garlic</li><li>1 tbsp ginger</li><li>1/4 onion</li><li>1 lemon</li><li>2 tbsp chili pepper</li><li>pinch of salt</li><li>1 tsp white pep</li></ul>",
        description: "Blast everything in a food processor. Scrape the sides and blast again. Form balls to your desired size and place on a tray. Put the balls into the fridge to set for an hour. Now just fry in a neutral oil until golden brown. <br><br>Yogurt sauce: Combine 3 tbsp dairy free yogurt, pinch of salt, white pep, and coriander, and about a tbsp of lemon juice. Mix that up. <br><br>To finish: Assemble a homemade pita bread, celery root hummus, alfalfa sprouts, pickled green tomato, falafel, yogurt sauce, chill guy hot sauce, and pickled red cabbage."
    },
    {
        name: "Falafel",
        image: "../images/falafel.jpg",
        ingredients: "<ul><li>1 cup dried chickpeas soaked in water overnight</li><li>1 scallion<li>nice big handful of curly parsley</li></li><li>1 tbsp baking powder</li><li>pinch of salt</li><li>1 tbsp cumin</li><li>1 tbsp coriander</li><li>2 tbsp garlic</li><li>1 tbsp ginger</li><li>1/4 onion</li><li>1 lemon</li><li>2 tbsp chili pepper</li><li>pinch of salt</li><li>1 tsp white pep</li></ul>",
        description: "Blast everything in a food processor. Scrape the sides and blast again. Form balls to your desired size and place on a tray. Put the balls into the fridge to set for an hour. Now just fry in a neutral oil until golden brown. <br><br>Yogurt sauce: Combine 3 tbsp dairy free yogurt, pinch of salt, white pep, and coriander, and about a tbsp of lemon juice. Mix that up. <br><br>To finish: Assemble a homemade pita bread, celery root hummus, alfalfa sprouts, pickled green tomato, falafel, yogurt sauce, chill guy hot sauce, and pickled red cabbage."
    },
    {
        name: "Falafel",
        image: "../images/falafel.jpg",
        ingredients: "<ul><li>1 cup dried chickpeas soaked in water overnight</li><li>1 scallion<li>nice big handful of curly parsley</li></li><li>1 tbsp baking powder</li><li>pinch of salt</li><li>1 tbsp cumin</li><li>1 tbsp coriander</li><li>2 tbsp garlic</li><li>1 tbsp ginger</li><li>1/4 onion</li><li>1 lemon</li><li>2 tbsp chili pepper</li><li>pinch of salt</li><li>1 tsp white pep</li></ul>",
        description: "Blast everything in a food processor. Scrape the sides and blast again. Form balls to your desired size and place on a tray. Put the balls into the fridge to set for an hour. Now just fry in a neutral oil until golden brown. <br><br>Yogurt sauce: Combine 3 tbsp dairy free yogurt, pinch of salt, white pep, and coriander, and about a tbsp of lemon juice. Mix that up. <br><br>To finish: Assemble a homemade pita bread, celery root hummus, alfalfa sprouts, pickled green tomato, falafel, yogurt sauce, chill guy hot sauce, and pickled red cabbage."
    },
    {
        name: "Falafel",
        image: "../images/falafel.jpg",
        ingredients: "<ul><li>1 cup dried chickpeas soaked in water overnight</li><li>1 scallion<li>nice big handful of curly parsley</li></li><li>1 tbsp baking powder</li><li>pinch of salt</li><li>1 tbsp cumin</li><li>1 tbsp coriander</li><li>2 tbsp garlic</li><li>1 tbsp ginger</li><li>1/4 onion</li><li>1 lemon</li><li>2 tbsp chili pepper</li><li>pinch of salt</li><li>1 tsp white pep</li></ul>",
        description: "Blast everything in a food processor. Scrape the sides and blast again. Form balls to your desired size and place on a tray. Put the balls into the fridge to set for an hour. Now just fry in a neutral oil until golden brown. <br><br>Yogurt sauce: Combine 3 tbsp dairy free yogurt, pinch of salt, white pep, and coriander, and about a tbsp of lemon juice. Mix that up. <br><br>To finish: Assemble a homemade pita bread, celery root hummus, alfalfa sprouts, pickled green tomato, falafel, yogurt sauce, chill guy hot sauce, and pickled red cabbage."
    },
    {
        name: "Falafel",
        image: "../images/falafel.jpg",
        ingredients: "<ul><li>1 cup dried chickpeas soaked in water overnight</li><li>1 scallion<li>nice big handful of curly parsley</li></li><li>1 tbsp baking powder</li><li>pinch of salt</li><li>1 tbsp cumin</li><li>1 tbsp coriander</li><li>2 tbsp garlic</li><li>1 tbsp ginger</li><li>1/4 onion</li><li>1 lemon</li><li>2 tbsp chili pepper</li><li>pinch of salt</li><li>1 tsp white pep</li></ul>",
        description: "Blast everything in a food processor. Scrape the sides and blast again. Form balls to your desired size and place on a tray. Put the balls into the fridge to set for an hour. Now just fry in a neutral oil until golden brown. <br><br>Yogurt sauce: Combine 3 tbsp dairy free yogurt, pinch of salt, white pep, and coriander, and about a tbsp of lemon juice. Mix that up. <br><br>To finish: Assemble a homemade pita bread, celery root hummus, alfalfa sprouts, pickled green tomato, falafel, yogurt sauce, chill guy hot sauce, and pickled red cabbage."
    },
    {
        name: "Falafel",
        image: "../images/falafel.jpg",
        ingredients: "<ul><li>1 cup dried chickpeas soaked in water overnight</li><li>1 scallion<li>nice big handful of curly parsley</li></li><li>1 tbsp baking powder</li><li>pinch of salt</li><li>1 tbsp cumin</li><li>1 tbsp coriander</li><li>2 tbsp garlic</li><li>1 tbsp ginger</li><li>1/4 onion</li><li>1 lemon</li><li>2 tbsp chili pepper</li><li>pinch of salt</li><li>1 tsp white pep</li></ul>",
        description: "Blast everything in a food processor. Scrape the sides and blast again. Form balls to your desired size and place on a tray. Put the balls into the fridge to set for an hour. Now just fry in a neutral oil until golden brown. <br><br>Yogurt sauce: Combine 3 tbsp dairy free yogurt, pinch of salt, white pep, and coriander, and about a tbsp of lemon juice. Mix that up. <br><br>To finish: Assemble a homemade pita bread, celery root hummus, alfalfa sprouts, pickled green tomato, falafel, yogurt sauce, chill guy hot sauce, and pickled red cabbage."
    },
    {
        name: "Falafel",
        image: "../images/falafel.jpg",
        ingredients: "<ul><li>1 cup dried chickpeas soaked in water overnight</li><li>1 scallion<li>nice big handful of curly parsley</li></li><li>1 tbsp baking powder</li><li>pinch of salt</li><li>1 tbsp cumin</li><li>1 tbsp coriander</li><li>2 tbsp garlic</li><li>1 tbsp ginger</li><li>1/4 onion</li><li>1 lemon</li><li>2 tbsp chili pepper</li><li>pinch of salt</li><li>1 tsp white pep</li></ul>",
        description: "Blast everything in a food processor. Scrape the sides and blast again. Form balls to your desired size and place on a tray. Put the balls into the fridge to set for an hour. Now just fry in a neutral oil until golden brown. <br><br>Yogurt sauce: Combine 3 tbsp dairy free yogurt, pinch of salt, white pep, and coriander, and about a tbsp of lemon juice. Mix that up. <br><br>To finish: Assemble a homemade pita bread, celery root hummus, alfalfa sprouts, pickled green tomato, falafel, yogurt sauce, chill guy hot sauce, and pickled red cabbage."
    },
    {
        name: "Falafel",
        image: "../images/falafel.jpg",
        ingredients: "<ul><li>1 cup dried chickpeas soaked in water overnight</li><li>1 scallion<li>nice big handful of curly parsley</li></li><li>1 tbsp baking powder</li><li>pinch of salt</li><li>1 tbsp cumin</li><li>1 tbsp coriander</li><li>2 tbsp garlic</li><li>1 tbsp ginger</li><li>1/4 onion</li><li>1 lemon</li><li>2 tbsp chili pepper</li><li>pinch of salt</li><li>1 tsp white pep</li></ul>",
        description: "Blast everything in a food processor. Scrape the sides and blast again. Form balls to your desired size and place on a tray. Put the balls into the fridge to set for an hour. Now just fry in a neutral oil until golden brown. <br><br>Yogurt sauce: Combine 3 tbsp dairy free yogurt, pinch of salt, white pep, and coriander, and about a tbsp of lemon juice. Mix that up. <br><br>To finish: Assemble a homemade pita bread, celery root hummus, alfalfa sprouts, pickled green tomato, falafel, yogurt sauce, chill guy hot sauce, and pickled red cabbage."
    },
    {
        name: "Falafel",
        image: "../images/falafel.jpg",
        ingredients: "<ul><li>1 cup dried chickpeas soaked in water overnight</li><li>1 scallion<li>nice big handful of curly parsley</li></li><li>1 tbsp baking powder</li><li>pinch of salt</li><li>1 tbsp cumin</li><li>1 tbsp coriander</li><li>2 tbsp garlic</li><li>1 tbsp ginger</li><li>1/4 onion</li><li>1 lemon</li><li>2 tbsp chili pepper</li><li>pinch of salt</li><li>1 tsp white pep</li></ul>",
        description: "Blast everything in a food processor. Scrape the sides and blast again. Form balls to your desired size and place on a tray. Put the balls into the fridge to set for an hour. Now just fry in a neutral oil until golden brown. <br><br>Yogurt sauce: Combine 3 tbsp dairy free yogurt, pinch of salt, white pep, and coriander, and about a tbsp of lemon juice. Mix that up. <br><br>To finish: Assemble a homemade pita bread, celery root hummus, alfalfa sprouts, pickled green tomato, falafel, yogurt sauce, chill guy hot sauce, and pickled red cabbage."
    },
    {
        name: "Falafel",
        image: "../images/falafel.jpg",
        ingredients: "<ul><li>1 cup dried chickpeas soaked in water overnight</li><li>1 scallion<li>nice big handful of curly parsley</li></li><li>1 tbsp baking powder</li><li>pinch of salt</li><li>1 tbsp cumin</li><li>1 tbsp coriander</li><li>2 tbsp garlic</li><li>1 tbsp ginger</li><li>1/4 onion</li><li>1 lemon</li><li>2 tbsp chili pepper</li><li>pinch of salt</li><li>1 tsp white pep</li></ul>",
        description: "Blast everything in a food processor. Scrape the sides and blast again. Form balls to your desired size and place on a tray. Put the balls into the fridge to set for an hour. Now just fry in a neutral oil until golden brown. <br><br>Yogurt sauce: Combine 3 tbsp dairy free yogurt, pinch of salt, white pep, and coriander, and about a tbsp of lemon juice. Mix that up. <br><br>To finish: Assemble a homemade pita bread, celery root hummus, alfalfa sprouts, pickled green tomato, falafel, yogurt sauce, chill guy hot sauce, and pickled red cabbage."
    },

]