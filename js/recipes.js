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
    {
        name: "Apple Cider",
        image: "../images/apple-cider.jpg",
        ingredients: "<li>4 apples</li><li>1 lemon</li><li>1 orange</li><li>allspice</li><li>cinnamon</li><li>cloves</li><li>ginger</li><li>filtered water</li><li>honey or agave</li>",
        description: "Dice apples, lemon, and orange. Combine in a large pot with a handful each of allspice, cinnamon, cloves, a nub of ginger, and enough filtered water to cover by half an inch. Bring to a boil then simmer for 3 hours. Smash them up and simmer for another hour or two. Strain and add some honey or agave to taste. I think it is better to just use the juice of the lemon and orange as it can get bitter from the rind."
    },
    {
        // Soba Jawn?
        name: "Cold Soba Noodle Salad",
        image: "../images/soba-jawn.jpg",
        ingredients: "<li>half a cube of firm tofu</li><li>soy sauce</li><li>mirin</li><li>2 tbsp Korean chili flakes</li><li>1 tsp garlic powder</li><li>1 tsp ginger powder</li><li>1 tsp white pep</li><li>rice vinegar</li><li>soba noodles</li><li>sesame oil</li><li>1 scallion</li><li>1 carrot</li><li>half an English cucumber</li><li>1 bell pepper</li><li>1 chili pepper</li><li>cherry tomatoes</li><li>1 lime</li><li>watercress</li><li>1 tbsp chopped lemongrass</li><li>red crushed pepper</li><li>1 tsp brown sugar</li><li>peanut oil</li>",
        description: "For the tofu marinade: Half a cube of firm tofu cut into strips, 2 tbsp soy sauce, touch of mirin, 2 tbsp Korean chili flakes, 1 tsp garlic powder, 1 tsp ginger powder, 1 tsp white pep, 1 tsp yuzu rice vinegar. Combine everything and let marinate overnight. <br><br>Cook the soba noodles for 4 or 5 minutes and cool in cold water. Add some sesame oil and mix it up. <br><br>Vegetables: 1 scallion, 1 carrot, half an English cucumber, 1 bell pepper, 1 chili pepper, a few cherry tomatoes, 1 lime, carrot top for garnish, handful of watercress.  Wash and cut these however you’d like to present them. <br><br>For the sauce: 2 tbsp soy sauce, 1 tsp mirin, 2 tsp rice wine vinegar, 1 tbsp chopped lemongrass, pinch of red crushed pepper, and 1 tsp brown sugar. Mix that up! <br><br>Sear your tofu on both sides in a non stick pan with some peanut oil. <br><br>Place your noodles in the bottom of your plate and arrange your vegetables to your liking. Pour the sauce over everything then place your tofu on top."
    },
    {
        // double check 
        name: "Duck Rillettes",
        image: "../images/duck-rillettes.jpg",
        ingredients: "<li>duck meat</li><li>duck stock</li><li>1 tbsp duck fat</li><li>half a shallot</li><li>bourbon or cognac</li><li>1 tbsp butter</li><li>1bsp thyme</li><li>salt</li><li>white pep</li><li>whole grain mustard</li><li>crostini</li><li>pickles</li>",
        description: "Pick meat from the bones of your duck stock and set aside, (you can also use confit meat) about half a cup. Add 1 tbsp of duck fat to a pan and sweat half of a shallot. Add a generous splash of bourbon or cognac. Flambe the alcohol and add 1-2 tbsp of duck stock. Reduce the liquid to almost nothing. Turn off heat. Place 1 tbsp butter, 1 tbsp thyme, pinch of salt and white pepper in the pan. Fold in 1 tbsp of whole grain mustard and duck meat. Transfer to a container and keep in the fridge for at least an hour. Serve cold with crostini and pickles."
    },
    {
        name: "Vegan Challah",
        image: "../images/vegan-challah.jpg",
        ingredients: "<li>4 cups bread flowers</li><li>1 1/2 cups filtered water</li><li>2 tbsp oat milk</li><li>1 tbsp dry activated yeast</li><li>1 tbsp sugar</li><li>1 tbsp coconut oil</li><li>1 tbsp Jamaican curry powder</li>",
        description: "I only bloom my yeast if I think it is too old. Combine everything in a kitchen aid and knead for 15 minutes. Form a ball and place in an oiled bowl. Wrap with plastic wrap and leave in the fridge overnight. The next day pull out the dough and let it get to room temp (about two hours). Deflate the dough, form a ball and let rest for half an hour covered with a damp towel. Now, portion the dough into three equal parts and roll out into long ropes. If there is tension and the dough doesn’t want to roll out just let it rest for another half hour. So, roll them out and watch how to braid them on my video as I can not explain in words and it’s easier to watch. Now cover that and let proof for 1-2 hours depending on the weather. Be careful not to over proof or you will get a very sad looking loaf. Ok, so now spray with water and add sesame seeds. Blast the oven on 400 for 20 minutes and let cool on a rack."
    },
    {
        name: "Pita Bread",
        image: "../images/pita-bread.jpg",
        ingredients: "<li>2 cups whole wheat</li><li>1 cup AP</li><li>1 tbsp yeast</li><li>pinch of salt</li><li>1 tbsp sugar</li><li>2 tbsp olive oil</li><li>about 1 1/4 cups of warm water</li>",
        description: "I only bloom my yeast if I think it is too old. Combine everything to make a shaggy dough and knead for 10 minutes. Form a ball and place it in an oiled bowl with plastic wrap. Wait until it doubles in size. Punch it down and form another ball. Let rest for 30 minutes or to develop more flavor go overnight. Divide it into 8 pieces and form little balls. Lay them out and throw a damp kitchen towel on top and let them proof for an hour. Roll them out on a lightly floured surface. Get a cast iron pan hot AF and sear them on both sides. They will bubble up which creates those cool charred spots."
    },
    {
        name: "Caramelized Peach with Pomegranate Vinaigrette",
        image: "../images/carmelized-peach.jpg",
        ingredients: "<li>Peach</li><li>balsamic vinegar</li><li>brown sugar</li><li>ginger powder</li><li>cinnamon</li><li>white pep</li><li>coriander</li><li>1 tbsp olive oil</li><li>1 1/4 cup pomegranate juice</li><li>1 tbsp lemon juice</li><li>1 tbsp dijon mustard</li><li>watercress</li><li>cherry tomatoes</li><li>almonds</li><li>chiffonade basil</li><li>brie, goat or blue cheese</li>",
        description: "Peach marinade: Run your knife around the Peach and twist it until it splits. Push out the seed. In a bowl, combine 3 tbsp balsamic vinegar, a pinch each of brown sugar, ginger powder, cinnamon, white pep, coriander, and 1 tbsp olive oil. Let rest in the fridge for a few hours. Get a nice hot non stick pan on. Place your peach skin side up and dump the marinade in the pan. Sear for 30 seconds and throw it into a 350 degree oven for about 10 minutes. <br><br>Dressing: In a blender combine 1/4 cup balsamic vinegar, 1/4 cup pomegranate juice, 1 tbsp lemon juice, 1 tbsp dijon mustard, 1 tsp brown sugar, pinch of salt and white pep. Drizzle about 1 1/4 cup oil in slowly until it emulsifies. <br><br>In a bowl mix a handful of watercress with some of the dressing. Place on a plate with some cherry tomatoes, almonds, chiffonade basil, and add the peach. Some brie, goat, or blue cheese would go great on this as well."
    },
    {
        name: "Pizza Dough",
        image: "../images/pizza.jpg",
        ingredients: "<li>2 cups AP or bread flour</li><li>1 tbsp salt</li><li>1 tbsp yeast</li><li>1 tbsp sugar</li><li>2 tbsp olive oil</li><li>about 1 cup of filtered water</li>",
        description: "Combine all ingredients, form a shaggy ball, and knead for 10 minutes. Coat the bottom of a bowl with olive oil and place the dough inside. Cover the bowl with plastic wrap and let ferment at room temperature for 24 hours."
    },
    {
        name: "Duck Confit",
        image: "../images/duck-confit.jpg",
        ingredients: "<li>salt</li><li>white pep</li><li>orange rind</li><li>garlic</li><li>thyme</li><li>oregano</li><li>rosemary</li><li>sage</li><li>tri colored potatoes</li><li>brussels sprouts</li><li>parsley leaves</li>",
        description: "Make a rough mixture of course salt, orange rind, garlic, thyme, oregano, rosemary, and sage. Generously apply mixture to duck legs on all sides, cover, and refrigerate overnight. Remove the salt mixture with a paper towel. Place in a pan and cover completely with duck fat. Cover and bake in a 225 degree oven for 3 hours, then let sit with the cover on at room temp for another hour. Refrigerate and the fat will solidify. Get some of those little tri colored potatoes and cook until tender in duck fat with half a head of garlic and rosemary. Remove fat carefully from the leg. Put a drop of duck fat in a hot pan and sear on both sides. Put in a 350 oven to heat through. Blanch some brussels sprouts in water and chill in an ice bath. Sear brussels in a cast iron pan, season the Brussels with salt and white pep. Place the duck leg in the center of a plate and decorate with the confit potatoes, brussels, and parsley leaves."
    },
    {
        name: "Dried Spicy Mango",
        image: "../images/dried-spicy-mango.jpg",
        ingredients: "<li>mango</li><li>cayenne pepper</li><li>ginger powder</li><li>coriander</li>",
        description: "Slice the skin off of one mango. Find the seed and run your knife along it. Do that on all sides then cut into slices. Toss with a generous amount of cayenne pepper, ginger powder, and coriander. Place in a dehydrator for 18-24 hours on 135. Enjoy."
    },
    {
        name: "Veggie Ramen",
        image: "../images/ramen.jpg",
        ingredients: "<li>1 egg</li><li>splash of white vinegar</li><li>4 tbsp soy sauce</li><li>1 tbsp mirin</li><li>1 tbsp rice wine vinegar</li><li>2 celery stalks</li><li>3 Korean chives</li><li>1 habanero</li><li>4 cloves of garlic</li><li>knob of ginger</li><li>1/4 onion</li><li>1 lime</li><li>a few leaves of lemon balm</li><li>a stalk of lemongrass</li><li>enoki mushrooms</li><li>ramen noodles</li>",
        description: "For the egg: Pour about 3 cups of water in a small pot and bring to simmer not a boil. Put a splash of white vinegar in the water along with a pinch of salt. Cook for 6-7 minutes, chill in an ice bath, and peel. In a ziplock bag combine the egg, soy sauce, mirin, and rice wine vinegar. Let that go overnight in the fridge. <br><br>For the veggie stock: rough chop celery, chives, habanero, garlic, ginger, lemongrass and onion. Sweat the ginger first then go in with onion, garlic, celery, chives, habanero. Add enough water to cover with a splash of white wine vinegar. Bring to a boil and add in the lemon balm. Simmer for an hour and a half then strain. <br><br>To finish: Cook your ramen noodles for 5 minutes and strain. Add your noodles to your bowl, add the stock to cover, cut your egg in half and add the bowl. Garnish with enoki mushrooms, alfalfa sprouts, lemon balm, and borage flower."
    },
    {
        name: "Vegan Spring Rolls",
        image: "../images/vegan-spring-roll.jpg",
        ingredients: "<li>firm tofu</li><li>ponzu sauce</li><li>ginger</li><li>garlic</li><li>chili</li><li>half a carrot</li><li>half a cucumber</li><li>one scallion</li><li>red chili</li><li>half a jalapeño</li><li>nori</li><li>rice noodles</li><li>sesame oil</li><li>2 tbsp peanut butter</li><li>2 tbsp soy sauce</li><li>2 tbsp coconut milk</li><li>spring roll wrappers</li>",
        description: "Start with a julienne cut of half a block of firm tofu. Marinate overnight with ponzu sauce, ginger, garlic, and chili. Julienne half a carrot, half a cucumber, and one scallion. Circle cut 1/2 of a red chili, half of a jalapeño, and dice some nori. Cook some rice noodles, preferably vermicelli, and rinse under cold water. Add a touch of sesame oil to the noodles when drained so they don’t stick. Now, make your sauce with roughly 2 tbsp each peanut butter, soy sauce, and coconut milk. Add to a blender and blast it on high. Now get some spring roll wrappers and place them in a bowl of cold water for about 30 seconds. Spread that out on a cutting board and assemble your roll. Start with the noodles then the tofu. Throw all of the julienned veggies in with the nori and roll that up!"
    },
    {
        name: "Duck Fried Rice",
        image: "../images/duck-fried-rice.jpg",
        ingredients: "<li>salt</li><li>white pep</li><li>5 spice</li><li>1 tbsp lemongrass</li><li>1 tbsp garlic</li><li>1 tbsp ginger</li><li>1 tbsp chili</li><li>a handful of swiss chard</li><li>2 tbsp soy sauce</li><li>rice</li><li>enoki mushroom</li><li>2 eggs</li><li>1 tbsp half & half</li><li>scallion</li><li>alfalfa sprouts</li>",
        description: "Sauté scraps from the carcass with salt and 5 spice. Add one tbsp each of lemongrass, garlic, ginger, chili, and a handful swiss chard. Add 2 tbsp of soy sauce. Cook thoroughly then add rice. Divide rice mixture and add a handful of enoki mushroom with a drop of soy on top. Remove mushrooms and transfer rice into a cup. Now make a French omelette with 2 eggs, 1 tbsp half & half, pinch of salt, and a pinch of white pepper. Serve with scallion, enoki mushrooms and alfalfa sprouts."
    },
    // ADD THE REST OF THE RECIPES //
    {
        name: "Lentil Stuffed Cabbage",
        image: "../images/lentils-and-cabbage.jpg",
        ingredients: "<li>half an onion</li><li>8 cloves of garlic</li><li>2 tbsp ginger</li><li>1 1/2 cup brown lentils</li><li>1 tbsp dried thyme</li><li>1 tbsp curry powder</li><li>2 tbsp soy sauce</li><li>2 Napa cabbage leaves</li><li>1 tsp white pep</li><li>1 tbsp cumin</li><li>1 tbsp red crushed pep</li><li>pinch of saffron</li><li>3 medium tomatoes</li><li>2 tsp red wine vinegar</li>",
        description: "For the lentils: Medium dice 1/4 onion and sweat it in some olive oil. Once sweated add 4 cloves of garlic and about 2 tbsp of chopped ginger. Sauce for a few minutes and add your lentils. Mix that up for about one minute. Now add half a tbsp of dried thyme, curry powder, and pinch of salt. Cover with boiling water, just enough to cover. Now simmer that for about 30 minutes, and mix often. Once most of the liquid is reduced it should be down. Finish with some soy sauce and white pep to taste. <br><br>For the Spicy tomato sauce: Rough chop and sweat the rest of the onion in some olive oil. Then add 4 cloves of garlic and sweat that down. Now spice it up with some white pep, 1/2 tbsp dried thyme, cumin, red crushed pep, and saffron. Incorporate the spices and rough chop tomatoes and add that to the pot. Add red wine vinegar and simmer for about 25-30 minutes on low heat. Finish by blasting it with an emulsion blender or regular blender. <br><br>For the Cabbage: Boil a small pot of water and submerge cabbage leaves until soft (about 2 minutes). Immediately transfer to an ice bath to stop the cooking. <br><br>To finish: Pull out your cabbage leaves and ladle some lentils at the bottom section of the leaf. Roll it up tight and put them on a sheet tray with parchment paper. Bake on 350 for 10 minutes. Ladle some sauce on the bottom of a bowl, place in your cabbage in a neat manner, and garnish with some scallion and borage flower."
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