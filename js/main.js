// DOM selectors
const main = document.getElementById('main')
const nav = document.querySelector('.nav')
const navMenu = document.querySelector('.nav-menu')
const navLogo = document.querySelector('.nav-logo')
const desktopNav = document.querySelector('.desktopnav')
const mobileNav = document.querySelector('.sidenav')
const closeBtn = document.querySelector('.closebtn')
const footer = document.querySelector('#footer')
const youtube = document.querySelector('.youtube')
const recipesSearch = document.querySelector('.recipes-search')

/**
 * Array of recipes
 * Add more recipes by simply adding a recipe {object}
 */
const recipes = [
  {
    id: 0,
    name: 'Falafel',
    image: '../images/falafel.jpg',
    ingredients:
      '<li>1 cup dried chickpeas soaked in water overnight</li><li>1 scallion<li>nice big handful of curly parsley</li></li><li>1 tbsp baking powder</li><li>pinch of salt</li><li>1 tbsp cumin</li><li>1 tbsp coriander</li><li>2 tbsp garlic</li><li>1 tbsp ginger</li><li>1/4 onion</li><li>1 lemon</li><li>2 tbsp chili pepper</li><li>pinch of salt</li><li>1 tsp white pep</li>',
    description:
      'Blast everything in a food processor. Scrape the sides and blast again. Form balls to your desired size and place on a tray. Put the balls into the fridge to set for an hour. Now just fry in a neutral oil until golden brown. <br><br>Yogurt sauce: Combine 3 tbsp dairy free yogurt, pinch of salt, white pep, and coriander, and about a tbsp of lemon juice. Mix that up. <br><br>To finish: Assemble a homemade pita bread, celery root hummus, alfalfa sprouts, pickled green tomato, falafel, yogurt sauce, chill guy hot sauce, and pickled red cabbage.',
    link: 'https://www.youtube.com/watch?v=fGlliNEUFyo',
  },
  {
    id: 1,
    name: 'Onion Bhaji',
    image: '../images/onion-bhaji.jpg',
    ingredients:
      '<li>1/4 cup ginger</li><li>1/4 cup garlic<li>2 cups onions</li></li><li>1 green chili</li><li>1 habanero</li><li>1 cup grated potato</li><li>1 tbsp salt</li><li>1 tsp white pep</li><li>2 tbsp each of curry powder, cumin, coriander, fennel seed, garam masala</li><li>1/4 cup red lentils soaked for 15 minutes</li><li>chickpea flour</li>',
    description:
      'Grate the potato, julienne the onions, and finely chop the ginger, garlic, and chili.  Drain the lentils and combine with your chopped vegetables in a large bowl. Add your spices and just a little splash of water. Now slowly add the chickpea flour in and squeeze the mixture to create a batter like consistency. Throw the mixture in the fridge for an hour to chill. Now shape, fry, and enjoy with a chutney, yogurt sauce, or hot sauce.',
    link: 'https://www.youtube.com/watch?v=I1K9OrPkosE',
  },
  {
    id: 2,
    name: 'Vegan Shakshouka',
    image: '../images/shakshouka.jpg',
    ingredients:
      '<li>1 cup of peeled tomato</li><li>1/2 cup strawberry<li>2 cloves of garlic</li></li><li>2 scallion</li><li>half a lemon</li><li>1 small shallot</li><li>splash of white wine vinegar</li><li>splash of olive oil</li><li>1 chili pepper with seeds</li><li>1 tbsp cumin</li><li>pinch of saffron</li><li>curry powder or turmeric</li><li>half a cube of firm tofu</li><li>little bit of parsley</li><li>salt and white pep</li>',
    description:
      'Chop your vegetables nice and fine. Add olive oil to a cast iron pan and sweat out garlic and shallot. Then add your chili followed by your scallion. Season with cumin, saffron and a pinch of salt and white pep. Now add your chopped tomato. Once the tomato starts to break down add your strawberry. Now add a splash of white wine vinegar and lemon juice. Cook that down a bit and everything should start to break down. If it’s to chunky blast it in a blender or try to break everything up with a wooden spoon in the pan. Now smash up your tofu in a bowl and add curry powder or turmeric. Make a space in the pan for the tofu and cook the tofu briefly. Throw that in a 350 degree oven for about 10 minutes. Add some parsley and scallion garnish. Add sourdough bread to the pan. Eat that right out the pan!',
    link: 'https://www.youtube.com/watch?v=4YXtuWSpI6s',
  },
  {
    id: 3,
    name: 'My Favorite Cocktail',
    image: '../images/my-favorite-cocktail.jpg',
    ingredients:
      '<li>ice</li><li>juice of half a lemon</li><li>half an orange</li><li>two drops of vanilla</li><li>1 tbsp honey</li><li>1 egg white</li><li>two ounces of bourbon</li>',
    description:
      'In a shaker with ice combine the juice of half a lemon, half an orange, two drops of vanilla, 1 tbsp honey, 1 egg white, and two generous ounces of bourbon. Vigorously shake for a minute. Seriously shake it hard af. If you don’t, the honey will stick at the bottom and it will smell like egg. Pour over a giant ice cube in a cocktail glass and garnish with an orange peel.',
    link: 'https://www.youtube.com/watch?v=3aJ9r88i1XU&t=44s',
  },
  {
    id: 4,
    name: 'Duck Breast',
    image: '../images/duck-breast.jpg',
    ingredients:
      '<li>1 tsp salt</li><li>1 tbsp each of clove</li><li>fennel seed</li><li>cinnamon</li><li>star anise</li><li>2 tbsp szechuan peppercorn</li><li>two onions</li><li>oil</li><li>soy sauce</li><li>2 black garlic cloves</li><li>honey or agave</li><li>oyster mushrooms</li><li>enoki mushrooms</li><li>white pep</li><li>splash of beer</li><li>ponzu sauce</li><li>scallion</li>',
    description:
      'Chinese five spice: 1 tsp salt, 1 tbsp each of clove, fennel seed, cinnamon, star anise, and 2 tbsp szechuan peppercorn. Blast these in a mortar and pestle and toast them up or just use pre made five spice powder. <br><br>Charred onion honey with black garlic: Dice two onions, toss with a touch oil, place on a sheet pan with parchment paper and blast in the oven on 400 until black (you can also do this in a cast iron pan and stir frequently). Once blackened, transfer to a blender and add a little soy sauce. You want just enough soy sauce to get the blender going. Now, add in two big black garlic cloves and start drizzling in honey or agave. I don’t have a measurement for this, I just add enough to cut through the soy sauce. It should taste sweet but full of umami. Use a lot of honey! <br><br>For the duck breast: Score the skin and massage the five spice into both sides. Place in a cold non stick pan and put the heat on medium high. Sear for 4-5 minutes or until the skin has rendered and crisped up. Flip it over and sear for another 3-4 minutes or until it is 130-135 (that’s how I like it). Pull it off the pan and let it rest for 5 minutes. <br><br>For the mushrooms. Use the same pan as the duck breast and saute oyster mushrooms in the residual fat. Add some of the Chinese five spice and a pinch of white pep. Once they are slightly sweated down add a handful of enoki mushrooms. Once the fat is absorbed, deglaze with a splash of beer. Cook that down and add a splash of ponzu sauce and cook that down. <br><br>To finish: Slice the breast. Add some of the charred onion honey down in a line and spread it out. Place the breast on top of the honey. Decorate the plate with mushrooms and scallion.',
    link: 'https://www.youtube.com/watch?v=egExKX3kKRc',
  },
  {
    id: 5,
    name: 'Mushroom Pate',
    image: '../images/pate.jpg',
    ingredients:
      '<li>pint of mushrooms of your liking</li><li>2 garlic cloves</li><li>1 small shallot</li><li>1 tbsp rosemary</li><li>cognac</li><li>salt</li><li>white pep</li><li>2 tbsp olive oil</li><li>3 tbsp vegan butter</li><li>1/4 help milk</li>',
    description:
      'Add 2 tbsp olive oil in a hot pan and add shallot and garlic. Sweat them out and add the mushrooms. Season with salt and white pep. Add rosemary and a splash of cognac. Be careful not to scorch your face. Pull the pan off the heat and add the cognac then put it back on the heat and give the pan a flip, it should flame up. Once the mushrooms are nice and soft, discard the rosemary and add everything to a blender. Add 3 tbsp vegan butter and a 1/4 cup of hemp milk. Blast that until smooth and cool down. Serve in a mason jar with some homemade sourdough.',
    link: 'https://www.youtube.com/watch?v=xs86py7219g',
  },
  {
    id: 6,
    name: 'Apple Cider',
    image: '../images/apple-cider.jpg',
    ingredients:
      '<li>4 apples</li><li>1 lemon</li><li>1 orange</li><li>allspice</li><li>cinnamon</li><li>cloves</li><li>ginger</li><li>filtered water</li><li>honey or agave</li>',
    description:
      'Dice apples, lemon, and orange. Combine in a large pot with a handful each of allspice, cinnamon, cloves, a nub of ginger, and enough filtered water to cover by half an inch. Bring to a boil then simmer for 3 hours. Smash them up and simmer for another hour or two. Strain and add some honey or agave to taste. I think it is better to just use the juice of the lemon and orange as it can get bitter from the rind.',
    link: 'https://www.youtube.com/watch?v=302r7Im_RWQ',
  },
  {
    id: 7,
    name: 'Cold Soba Noodle Salad',
    image: '../images/soba-jawn.jpg',
    ingredients:
      '<li>half a cube of firm tofu</li><li>soy sauce</li><li>mirin</li><li>2 tbsp Korean chili flakes</li><li>1 tsp garlic powder</li><li>1 tsp ginger powder</li><li>1 tsp white pep</li><li>rice vinegar</li><li>soba noodles</li><li>sesame oil</li><li>1 scallion</li><li>1 carrot</li><li>half an English cucumber</li><li>1 bell pepper</li><li>1 chili pepper</li><li>cherry tomatoes</li><li>1 lime</li><li>watercress</li><li>1 tbsp chopped lemongrass</li><li>red crushed pepper</li><li>1 tsp brown sugar</li><li>peanut oil</li>',
    description:
      'For the tofu marinade: Half a cube of firm tofu cut into strips, 2 tbsp soy sauce, touch of mirin, 2 tbsp Korean chili flakes, 1 tsp garlic powder, 1 tsp ginger powder, 1 tsp white pep, 1 tsp yuzu rice vinegar. Combine everything and let marinate overnight. <br><br>Cook the soba noodles for 4 or 5 minutes and cool in cold water. Add some sesame oil and mix it up. <br><br>Vegetables: 1 scallion, 1 carrot, half an English cucumber, 1 bell pepper, 1 chili pepper, a few cherry tomatoes, 1 lime, carrot top for garnish, handful of watercress.  Wash and cut these however you’d like to present them. <br><br>For the sauce: 2 tbsp soy sauce, 1 tsp mirin, 2 tsp rice wine vinegar, 1 tbsp chopped lemongrass, pinch of red crushed pepper, and 1 tsp brown sugar. Mix that up! <br><br>Sear your tofu on both sides in a non stick pan with some peanut oil. <br><br>Place your noodles in the bottom of your plate and arrange your vegetables to your liking. Pour the sauce over everything then place your tofu on top.',
    link: 'https://www.youtube.com/watch?v=8eEjEajNEz4',
  },
  {
    id: 8,
    name: 'Duck Rillettes',
    image: '../images/duck-rillettes.jpg',
    ingredients:
      '<li>duck meat</li><li>duck stock</li><li>1 tbsp duck fat</li><li>half a shallot</li><li>bourbon or cognac</li><li>1 tbsp butter</li><li>1 tsp thyme</li><li>salt</li><li>white pep</li><li>whole grain mustard</li><li>crostini</li><li>pickles</li>',
    description:
      'Pick meat from the bones of your duck stock and set aside, (you can also use confit meat) about half a cup. Add 1 tbsp of duck fat to a pan and sweat half of a shallot. Add a generous splash of bourbon or cognac. Flambe the alcohol and add 1-2 tbsp of duck stock. Reduce the liquid to almost nothing. Turn off heat. Place 1 tbsp butter, 1 tsp thyme, pinch of salt and white pepper in the pan. Fold in 1 tbsp of whole grain mustard and duck meat. Transfer to a container and keep in the fridge for at least an hour. Serve cold with crostini and pickles.',
    link: 'https://www.youtube.com/watch?v=K64bQ9Yt5og',
  },
  {
    id: 9,
    name: 'Vegan Challah',
    image: '../images/vegan-challah.jpg',
    ingredients:
      '<li>4 cups bread flowers</li><li>1 1/2 cups warm filtered water</li><li>2 tbsp oat milk</li><li>1 tbsp dry activated yeast</li><li>1 tbsp sugar</li><li>1 tbsp coconut oil</li><li>1 tbsp Jamaican curry powder</li><li>2 tsp salt</li>',
    description:
      'Combine everything in a kitchen aid and knead for 15 minutes. Form a ball and place in an oiled bowl. Wrap with plastic wrap and leave in the fridge overnight. The next day pull out the dough and let it get to room temp (about two hours). Deflate the dough and form a ball and let rest for half an hour covered with a damp towel. Now, portion the dough into three equal parts and roll out into long ropes. If there is tension and the dough doesn’t want to roll out just let it rest for another half hour. So roll them out and watch how to braid them on my video as I can not explain in words and it’s easier to watch. Now cover that and let proof for 1-2 hours depending on the weather. Be careful not to over proof or you will get a very sad looking loaf. Ok so now spray with water and add sesame seeds. Blast in the oven on 400 for 20 minutes and let cool on a rack.',
    link: 'https://www.youtube.com/watch?v=eIt3EjZA73w',
  },
  {
    id: 10,
    name: 'Pita Bread',
    image: '../images/pita-bread.jpg',
    ingredients:
      '<li>2 cups whole wheat</li><li>1 cup AP</li><li>1 tbsp yeast</li><li>pinch of salt</li><li>1 tbsp sugar</li><li>2 tbsp olive oil</li><li>about 1 1/4 cups of warm water</li>',
    description:
      'I only bloom my yeast if I think it is too old. Combine everything to make a shaggy dough and knead for 10 minutes. Form a ball and place it in an oiled bowl with plastic wrap. Wait until it doubles in size. Punch it down and form another ball. Let rest for 30 minutes or to develop more flavor go overnight. Divide it into 8 pieces and form little balls. Lay them out and throw a damp kitchen towel on top and let them proof for an hour. Roll them out on a lightly floured surface. Get a cast iron pan hot AF and sear them on both sides. They will bubble up which creates those cool charred spots.',
    link: 'https://www.youtube.com/watch?v=J0wGUor0StE',
  },
  {
    id: 11,
    name: 'Caramelized Peach with Pomegranate Vinaigrette',
    image: '../images/carmelized-peach.jpg',
    ingredients:
      '<li>Peach</li><li>balsamic vinegar</li><li>brown sugar</li><li>ginger powder</li><li>cinnamon</li><li>white pep</li><li>coriander</li><li>1 tbsp olive oil</li><li>1 1/4 cup pomegranate juice</li><li>1 tbsp lemon juice</li><li>1 tbsp dijon mustard</li><li>watercress</li><li>cherry tomatoes</li><li>almonds</li><li>chiffonade basil</li><li>brie, goat or blue cheese</li>',
    description:
      'Peach marinade: Run your knife around the Peach and twist it until it splits. Push out the seed. In a bowl, combine 3 tbsp balsamic vinegar, a pinch each of brown sugar, ginger powder, cinnamon, white pep, coriander, 1 tbsp olive oil, and the peach. Let rest in the fridge for a few hours. Get a nice hot non stick pan on. Place your marinated peach in the pan skin side up and dump the marinade in the pan. Sear for 30 seconds and throw it into a 350 degree oven for about 10 minutes. <br><br>Dressing: In a blender combine 1/4 cup balsamic vinegar, 1/4 cup pomegranate juice, 1 tbsp lemon juice, 1 tbsp dijon mustard, 1 tsp brown sugar, pinch of salt and white pep. Drizzle about 1 1/4 cup oil in slowly until it emulsifies. <br><br>In a bowl mix a handful of watercress with some of the dressing. Place on a plate with some cherry tomatoes, almonds, chiffonade basil, and add the peach. Some brie, goat, or blue cheese would go great on this as well.',
    link: 'https://www.youtube.com/watch?v=FmUEIJZVGAg',
  },
  {
    id: 12,
    name: 'Pizza Dough',
    image: '../images/pizza.jpg',
    ingredients:
      '<li>2 cups AP or bread flour</li><li>1 tbsp salt</li><li>1 tbsp yeast</li><li>1 tbsp sugar</li><li>2 tbsp olive oil</li><li>about 1 cup warm filtered water</li>',
    description:
      'This is a really simple preparation. I haven’t dove into the pizza world yet. Combine all ingredients, form a shaggy ball, and knead for 10-15 minutes, until it is smooth. Coat the bottom of a bowl with olive oil, place the dough inside, and put a little more olive oil on top. Cover the bowl with plastic wrap and let ferment at room temperature for 24 hours. This method has a distinct fermented taste. Alternatively, you can let the dough sit in the fridge (after doubling in size), for three days. <br><br>I also like using sourdough starter in place of yeast. Try 400g bread flour, 100g whole wheat flour, 360g water, 40g starter, 10g olive oil, 10g sugar and 10g salt.',
    link: 'https://www.youtube.com/watch?v=SyKk9fq1Gtc',
  },
  {
    id: 13,
    name: 'Duck Confit',
    image: '../images/duck-confit.jpg',
    ingredients:
      '<li>salt</li><li>white pep</li><li>orange rind</li><li>garlic</li><li>thyme</li><li>oregano</li><li>rosemary</li><li>sage</li><li>tri colored potatoes</li><li>brussels sprouts</li><li>parsley leaves</li>',
    description:
      'Make a rough mixture of course salt, orange rind, garlic, thyme, oregano, rosemary, and sage. Generously apply mixture to duck legs on all sides, cover, and refrigerate overnight. Remove the salt mixture with a paper towel. Place in a pan and cover completely with duck fat. Cover and bake in a 225 degree oven for 3 hours, then let sit with the cover on at room temp for another hour. Refrigerate and the fat will solidify. Get some of those little tri colored potatoes and cook until tender in duck fat with half a head of garlic and rosemary. Remove fat carefully from the leg. Put a drop of duck fat in a hot pan and sear on both sides. Put in a 350 oven to heat through. Blanch some brussels sprouts in water and chill in an ice bath. Sear brussels in a cast iron pan, season the Brussels with salt and white pep. Place the duck leg in the center of a plate and decorate with the confit potatoes, brussels, and parsley leaves.',
    link: 'https://www.youtube.com/watch?v=SyuaRvYx390',
  },
  {
    id: 14,
    name: 'Dried Spicy Mango',
    image: '../images/dried-spicy-mango.jpg',
    ingredients:
      '<li>mango</li><li>cayenne pepper</li><li>ginger powder</li><li>coriander</li>',
    description:
      'Slice the skin off of one mango. Find the seed and run your knife along it. Do that on all sides then cut into slices. Toss with a generous amount of cayenne pepper, ginger powder, and coriander. Place in a dehydrator for 18-24 hours on 135. Enjoy.',
    link: 'https://www.youtube.com/watch?v=0qCdRWgQe5Y&t=2s',
  },
  {
    id: 15,
    name: 'Veggie Ramen',
    image: '../images/ramen.jpg',
    ingredients:
      '<li>1 egg</li><li>splash of white vinegar</li><li>4 tbsp soy sauce</li><li>1 tbsp mirin</li><li>1 tbsp rice wine vinegar</li><li>2 celery stalks</li><li>3 Korean chives</li><li>1 habanero</li><li>4 cloves of garlic</li><li>knob of ginger</li><li>1/4 onion</li><li>1 lime</li><li>a few leaves of lemon balm</li><li>a stalk of lemongrass</li><li>enoki mushrooms</li><li>ramen noodles</li>',
    description:
      'For the egg: Pour about 3 cups of water in a small pot and bring to simmer not a boil. Put a splash of white vinegar in the water along with a pinch of salt. Cook for 6-7 minutes, chill in an ice bath, and peel. In a ziplock bag combine the egg, soy sauce, mirin, and rice wine vinegar. Let that go overnight in the fridge. <br><br>For the veggie stock: rough chop celery, chives, habanero, garlic, ginger, lemongrass and onion. Sweat the ginger first then go in with onion, garlic, celery, chives, habanero. Add enough water to cover with a splash of white wine vinegar. Bring to a boil and add in the lemon balm. Simmer for an hour and a half then strain. <br><br>To finish: Cook your ramen noodles for 5 minutes and strain. Add your noodles to your bowl, add the stock to cover, cut your egg in half and add the bowl. Garnish with enoki mushrooms, alfalfa sprouts, lemon balm, and borage flower.',
    link: 'https://www.youtube.com/watch?v=ci8Sw0lApvg',
  },
  {
    id: 16,
    name: 'Vegan Spring Rolls',
    image: '../images/vegan-spring-roll.jpg',
    ingredients:
      '<li>firm tofu</li><li>ponzu sauce</li><li>ginger</li><li>garlic</li><li>chili</li><li>half a carrot</li><li>half a cucumber</li><li>one scallion</li><li>red chili</li><li>half a jalapeño</li><li>nori</li><li>rice noodles</li><li>sesame oil</li><li>2 tbsp peanut butter</li><li>2 tbsp soy sauce</li><li>2 tbsp coconut milk</li><li>spring roll wrappers</li>',
    description:
      'Start with a julienne cut of half a block of firm tofu. Marinate overnight with ponzu sauce, ginger, garlic, and chili. Julienne half a carrot, half a cucumber, and one scallion. Circle cut 1/2 of a red chili, half of a jalapeño, and dice some nori. Cook some rice noodles, preferably vermicelli, and rinse under cold water. Add a touch of sesame oil to the noodles when drained so they don’t stick. Now, make your sauce with roughly 2 tbsp each peanut butter, soy sauce, and coconut milk. Add to a blender and blast it on high. Now get some spring roll wrappers and place them in a bowl of cold water for about 30 seconds. Spread that out on a cutting board and assemble your roll. Start with the noodles then the tofu. Throw all of the julienned veggies in with the nori and roll that up!',
    link: 'https://www.youtube.com/watch?v=Kk8dGtFpYV4',
  },
  {
    id: 17,
    name: 'Duck Fried Rice',
    image: '../images/duck-fried-rice.jpg',
    ingredients:
      '<li>salt</li><li>white pep</li><li>5 spice</li><li>1 tbsp lemongrass</li><li>1 tbsp garlic</li><li>1 tbsp ginger</li><li>1 tbsp chili</li><li>a handful of swiss chard</li><li>2 tbsp soy sauce</li><li>rice</li><li>enoki mushroom</li><li>2 eggs</li><li>1 tbsp half & half</li><li>scallion</li><li>alfalfa sprouts</li>',
    description:
      'Sauté scraps from the carcass with salt and 5 spice. Add one tbsp each of lemongrass, garlic, ginger, chili, and a handful swiss chard. Add 2 tbsp of soy sauce. Cook thoroughly then add rice. Divide rice mixture and add a handful of enoki mushroom with a drop of soy on top. Remove mushrooms and transfer rice into a cup. Now make a French omelette with 2 eggs, 1 tbsp half & half, pinch of salt, and a pinch of white pepper. Serve with scallion, enoki mushrooms and alfalfa sprouts.',
    link: 'https://www.youtube.com/watch?v=fCyANCtW_jw',
  },
  {
    id: 18,
    name: 'Lentil Stuffed Cabbage',
    image: '../images/lentils-and-cabbage.jpg',
    ingredients:
      '<li>half an onion</li><li>8 cloves of garlic</li><li>2 tbsp ginger</li><li>1 1/2 cup brown lentils</li><li>1 tbsp dried thyme</li><li>1 tbsp curry powder</li><li>2 tbsp soy sauce</li><li>2 Napa cabbage leaves</li><li>1 tsp white pep</li><li>1 tbsp cumin</li><li>1 tbsp red crushed pep</li><li>pinch of saffron</li><li>3 medium tomatoes</li><li>2 tsp red wine vinegar</li>',
    description:
      'For the lentils: Medium dice 1/4 onion and sweat it in some olive oil. Once sweated add 4 cloves of garlic and about 2 tbsp of chopped ginger. Sauce for a few minutes and add your lentils. Mix that up for about one minute. Now add half a tbsp of dried thyme, curry powder, and pinch of salt. Cover with boiling water, just enough to cover. Now simmer that for about 30 minutes, and mix often. Once most of the liquid is reduced it should be down. Finish with some soy sauce and white pep to taste. <br><br>For the Spicy tomato sauce: Rough chop and sweat the rest of the onion in some olive oil. Then add 4 cloves of garlic and sweat that down. Now spice it up with some white pep, 1/2 tbsp dried thyme, cumin, red crushed pep, and saffron. Incorporate the spices and rough chop tomatoes and add that to the pot. Add red wine vinegar and simmer for about 25-30 minutes on low heat. Finish by blasting it with an emulsion blender or regular blender. <br><br>For the Cabbage: Boil a small pot of water and submerge cabbage leaves until soft (about 2 minutes). Immediately transfer to an ice bath to stop the cooking. <br><br>To finish: Pull out your cabbage leaves and ladle some lentils at the bottom section of the leaf. Roll it up tight and put them on a sheet tray with parchment paper. Bake on 350 for 10 minutes. Ladle some sauce on the bottom of a bowl, place in your cabbage in a neat manner, and garnish with some scallion and borage flower.',
    link: 'https://www.youtube.com/watch?v=vLGumN4c4q0',
  },
  {
    id: 19,
    name: 'Duck Confit Balls',
    image: '../images/duck-balls.jpg',
    ingredients:
      '<li>1 confit duck leg</li><li>1 1/2 shallot</li><li>2 cloves garlic</li><li>rosemary</li><li>small handful of parsley</li><li>small handful of enoki mushrooms</li><li>small handful of oyster mushrooms</li><li>sherry vineger</li><li>oil</li><li>dry vermouth</li><li>lemon</li><li>white pep</li><li>1 tbsp butter</li><li>heavy cream</li><li>duck stock</li><li>flour</li><li>egg</li><li>panko breadcrumbs</li>',
    description:
      'Make the balls. Assemble 1 confit duck leg, 1 shallot, small handful of parsley, small handful each of enoki mushrooms, oyster mushrooms and sherry vinegar. Brunoise and sweat the shallot in some oil then small dice and add the mushrooms. Add a little duck stock and cook that down. Add a splash of sherry vinegar and cook that down. Add in picked duck confit meat and incorporate that. Immediately turn off the heat and add some chopped parsley. Mix that up and put the mixture in the fridge for an hour to cool. Now, make little balls by squeezing the mixture in your hands. Place back in the fridge for two hours. If it is a little loose throw them in the freezer for 2 hours. <br><br>For the cream sauce: Finely dice half a shallot and two cloves of garlic. Saute with some oil until translucent. Add in a handful of oyster mushrooms and cook that for a few minutes. Deglaze with a splash of dry vermouth. Squeeze half a lemon in there with a splash of sherry vinegar. Cook that for a minute and add enough cream to cover the mixture by half an inch. Add about a tbsp of duck stock with a touch of white pepper. Reduce that by half. Add in some parsley and rosemary. Turn off the heat and add 1 tbsp of butter. Mix that up until it’s dissolved and strain the sauce. Now set up a breading station with flour, beaten egg/cream mixture, and blended panko breadcrumbs. Dry hand wet hand, bread those balls and fry until golden brown in some canola oil. <br><br>To finish: Pour the sauce in a bowl and place in your balls. Garnish with parsley leaves.',
    link: 'https://www.youtube.com/watch?v=qTcFn_RngzU',
  },
  {
    id: 20,
    name: 'Eggplant with Potato and Mushroom Sauce',
    image: '../images/eggplant-with-potato.jpg',
    ingredients:
      '<li>1 yukon gold potato</li><li>1 small eggplant</li><li>1 leek</li><li>1 cup red wine</li><li>1 cup mushroom stock</li><li>chili oil</li><li>Chinese five spice</li><li>olive oil</li><li>salt</li>',
    description:
      'Start with your potato flowers. Using a mandolin, thinly slice 14 slices of potato. Coat the slices in peanut oil and some salt and arrange 7 slices in a circular flower, making two flowers. Place on a baking sheet with parchment paper and bake for 40 minutes at 300 degrees.  <br><br>For the eggplant: Using a channel knife, make a zebra out of the eggplant. Cut into 4 slices. Add the slices into a colander and liberally salt them. Let them sit in your sink for about an hour, then rinse. Pat the slices dry and season with Chinese five spice. <br><br>For the sauce: Slice the leek in half lengthwise. Run under cool water to clean. Now rough chop that and sweat in some olive oil in a saucepan. Add your wine and reduce until there is 1 tbsp left. Now add the mushroom stock and reduce by 3/4. <br><br>To finish: Sear the eggplant in some olive oil then bring the heat down and cook for maybe 5 minutes. Strain your sauce and ladle  it in a bowl. Place one eggplant slice in the sauce, put a potato flower on top and do another eggplant potato layer on top. Garnish with scallion and peanuts.',
    link: 'https://www.youtube.com/watch?v=0wncmP2GaYI',
  },
  {
    id: 21,
    name: 'Fire Cider',
    image: '../images/fire-cider.jpg',
    ingredients:
      '<li>1/4 cup ginger</li><li>1/4 cup turmeric</li><li>1/4 cup onion</li><li>1/4 cup horseradish root</li><li>8 gloves of garlic</li><li>1 habanero</li><li>1 lemon</li><li>half an orange</li><li>a few sprigs of rosemary and thyme</li><li>apple cider vinegar</li><li>honey</li>',
    description:
      'Fire cider is bangin’. It has all the good stuff you need for the cold months of the year. One quart will last a long way, unless of course you are making fire bourbon cocktails throughout the winter. <br><br>Rough chop the vegetables, lemon, and orange. Smash them in a quart jar and squeeze the citrus before putting them in. Throw in your herbs and cover the mixture with enough apple cider vinegar to cover. Leave it sit out for a few weeks ( I usually go for about 4-6 weeks. Strain your mixture and add honey. Enjoy especially in late fall/early winter.',
    link: 'https://www.youtube.com/watch?v=SEaIXNTyA4c',
  },
  {
    id: 22,
    name: 'Focaccia',
    image: '../images/focaccia.jpg',
    ingredients:
      '<li>4 cups AP flour</li><li>2 big pinches of salt</li><li>4 tbsp olive oil</li><li>2 handfuls of kale and Swiss chard</li><li>2 tbsp yeast</li><li>1 tbsp sugar</li><li>about 1 cup of water</li><li>some olives</li><li>bunch of parsley</li><li>bunch of rosemary</li><li>2 cloves of garlic</li>',
    description:
      'Blend the kale and Swiss chard with the water. Strain through a fine sieve. I only bloom my yeast if I think it is too old. Combine flour, salt, sugar, yeast, olive oil, and green water to form a dough. Knead that for 10-15 minutes. Grease a bowl with olive oil and place the dough in to sit overnight covered with plastic wrap. The next day coat a sheet pan with olive oil and work the dough out to cover the pan. Let that proof for two hours. In the meantime, make some infused oil by heating up 4 tbsp of olive oil and throwing in some rosemary and garlic. Make sure the oil is not smoking, it shouldn’t burn the garlic. Constantly stir for a few minutes and discard the garlic and rosemary. <br><br>To finish: make dimples all over the dough and stuff in olives, rosemary, and drizzle the infused oil all over the dough. Bake for 15 minutes on 550. Throw some fresh parsley on top before serving.',
    link: 'https://www.youtube.com/watch?v=uftlBt7QcQk',
  },
  {
    id: 23,
    name: 'Mushroom Jerky',
    image: '../images/foraged-jerky.jpg',
    ingredients:
      '<li>chicken of the woods mushrooms</li><li>soy sauce</li><li>mirin</li><li>Yule rice vinegar</li><li>Korean chili flakes</li><li>garlic powder</li><li>white pep</li><li>ginger powder</li>',
    description:
      'Get out there and find yourself some chicken of the woods mushrooms! Cut up your mushrooms and place in a plastic bag. Depending on how big your bag is, just eyeball the following ingredients. Soy sauce, mirin, Yule rice vinegar, Korean chili flakes, garlic powder, white pep, and ginger powder. Marinate overnight. Lay out the mushrooms with all the marinade out on a sheet tray with parchment paper and spread evenly. Bake for 4 - 4 1/2 hours in a 200 degree oven. Optionally, use a dehydrator on 135 for about 5 hours.',
    link: 'https://www.youtube.com/watch?v=cJ0FL-VngH4',
  },
  {
    id: 24,
    name: 'Gatorade',
    image: '../images/gatorade.jpg',
    ingredients:
      '<li>2 lemons</li><li>about 3 1/4 cups water</li><li>2 tbsp agave</li><li>about 1 1/2 tsp salt</li><li>nub of ginger</li><li>nub of fresh turmeric</li>',
    description:
      'Makes 1 quart <br><br>My partner introduced this refreshment to me. It’s so clean and refreshing. I could drink this all day. Especially when violently hungover.  <br><br>Fill your jar with the water, lemon juice, salt, and honey. Grate the ginger and turmeric over a strainer and use a spoon to push the remains through (you only need a little bit of juice). Dry shake vigorously to dilute the agave and salt. Add ice and shake again.',
    link: 'https://www.youtube.com/watch?v=a86oLA_sGm4&t=1s',
  },
  {
    id: 25,
    name: 'Leftover Soup',
    image: '../images/leftover-soup.jpg',
    ingredients:
      '<li>carrot</li><li>onion</li><li>garlic</li><li>ginger</li><li>chili</li><li>parsley stem</li><li>1 pint coconut milk</li><li>1 pint of water</li><li>lil bit of lemon balm</li><li>1 cup green cabbage</li><li>half cube of tofu</li><li>1 chili for garnish</li><li>1 scallion</li><li>basil</li><li>chili oil</li>',
    description:
      'This is a great way to use up your veggies. I just eyeballed the ingredients for the stock. <br><br>Start with the stock. Saute the carrot, onion, garlic, ginger, and chili in olive oil for a few minutes. Add in your parsley stems. Now add the coconut milk, water, and lemon balm. Bring to a boil then simmer for an hour. In a separate pot, saute the cabbage with some olive oil and salt. Once it starts shrinking add the cubed tofu. Now when your broth is ready, strain it and add to the cabbage/tofu mixture. Garnish with chili, scallion, basil, and chili oil. You can also save the strained vegetables and puree with a little bit of the broth to make a thicker soup.',
    link: 'https://www.youtube.com/watch?v=dLXQ6OAik7U',
  },
  {
    id: 26,
    name: 'Duck Fat Fries with Black Garlic Mayonnaise',
    image: '../images/duckfat-fries.jpg',
    ingredients:
      '<li>1 egg yolk</li><li>1 tbsp of dijon</li><li>half the juice of a lemon</li><li>pinch of salt</li><li>pinch of white pep</li><li>2 black garlic cloves</li><li>about a cup of oil</li><li>Idaho potatoes</li><li>duck fat</li>',
    description:
      'Start with the mayo: Add 1 egg yolk to a bowl. Put in 1 tbsp of dijon, half the juice of a lemon, pinch of salt and white pep. Dice up 2 black garlic cloves finely and add to the bowl. Whisk and slowly add in oil, about a cup. You can do this in a food processor too.  <br><br>Batonnet some Idaho potatoes with the skin on and place in a bowl with running water. Wait until the water runs clear. Drain and dry completely. Put enough duck fat in a pan or pot to cover the fries. Make sure they are covered and put the heat on medium. Gradually turn the heat up slowly, about every 5-7 minutes until on high heat. This process should take about 30 minutes. Once crispy, remove to a paper towel and season with salt and white pep.',
    link: 'https://www.youtube.com/watch?v=38cAXLhSMbU',
  },
  {
    id: 27,
    name: 'Brussels Sprout Kimchi',
    image: '../images/brussels-sprout-kimchi.jpg',
    ingredients:
      '<li>a little more than 3 cups Brussels sprouts</li><li>salt</li><li>kimchi paste</li>',
    description:
      'Get a little more than 3 cups of cleaned and halved Brussels sprouts. Liberally salt them in a bowl and massage every 30 minutes for 2-3 hours or until they start to release moisture. Rinse briefly and add some kimchi paste. Mix and smash into a glass pint jar. Every day for 5 days smash down the brussels. Good to go.',
    link: 'https://www.youtube.com/watch?v=aUBXmFlmr_o&t=91s',
  },
  {
    id: 28,
    name: 'Gnocchi',
    image: '../images/gnocchi.jpg',
    ingredients:
      '<li>3 Russet potatoes (about a quart after they are peeled and smashed)</li><li>1 quart AP flour</li><li>2 eggs</li><li>a nice handful of chopped rosemary</li><li>2 tbsp salt</li><li>1 tbsp white pepper</li>',
    description:
      'Start by cooking your potatoes. Cover potatoes in a pot with water and bring to a boil. Bring the heat down to a simmer and cook for about 40 minutes or until tender with a fork. Drain, cool, and peel the skins. Use a potato ricer or a fork to smash up the potatoes until they are smooth. Add to a bowl and incorporate your flour, eggs, salt, and white pepper. Form a ball and start to knead for a few minutes then form a ball. Portion the dough into 4 sections and roll each out into a long cylinder with your hands. Now cut into little bite size portions. Use a fork or a gnocchi board to mark them. This recipe makes a lot! These are good to keep around in the freezer.',
    link: 'https://www.youtube.com/watch?v=CnfHJdslR2U',
  },
  {
    id: 29,
    name: 'Guacamole',
    image: '../images/guacamole.jpg',
    ingredients:
      '<li>1 avocado</li><li>1/4 of an onion</li><li>2 garlic cloves</li><li>2 stems of Mexican oregano</li><li>2 cilantro stems</li><li>2 rainbow swiss chard stems</li><li>pinch of salt</li><li>pinch of white pepper</li><li>splash of olive oil</li><li>splash of tequila</li>',
    description:
      'Instead of just smashing everything together, I like to make my guac look more presentable. By doing a fine dice or brunoise on the vegetables you get something a little more appealing to the eye. <br><br>Get your knife skills together. Brunoise the vegetables and avocado keeping everything separate. Take the leaves off the oregano and cilantro (dice the cilantro stems) and finely chop the herbs. Now place the avocado down first and decorate everything else around it to your liking. Put a little splash of tequila and olive oil on top. Sprinkle some salt and white pep to finish.',
    link: 'https://www.youtube.com/watch?v=3aRiVsuQsTg',
  },
  {
    id: 30,
    name: 'Jamaican Beef Patty',
    image: '../images/jamaican-beef-patty.jpg',
    ingredients:
      '<li>2 cup AP flour</li><li>salt</li><li>1 egg</li><li>2 tbsp Jamaican curry powder (or turmeric powder)</li><li>4 oz butter</li><li>enough water to form a dough</li><li>1 scotch bonnet or habanero finely diced with seeds</li><li>1/4 ginger finely diced</li><li>1/4 onion finely diced</li><li>1/4 allspice smashed with mortar and pestle</li><li>1 tbsp crushed red pepper</li><li>1 tbsp onion powder</li><li>1 tbsp ginger powder</li><li>1 tbsp garlic salt</li><li>2 tbsp dried thyme</li><li>1 tsp white pepper</li><li>10 oz ground beef</li><li>1 1/2 cup beef stock</li><li>coconut oil</li>',
    description:
      'For the dough: 2 cups AP flour, 1 tbsp salt, 1 egg, 2 tbsp Jamaican curry powder (or Turmeric powder), 4 oz butter, and  enough water to form a dough. <br><br>For the filling: 1 scotch bonnet or habanero finely diced with seeds, 1/4 cup garlic finely diced, 1/4 ginger finely diced, 1/4 onion finely diced, 1/4 allspice smashed with a mortar and pestle, 1 tbsp red crushed pepper, 1 tbsp onion powder, 1 tbsp ginger powder, 1 tbsp garlic salt, 2 tbsp dried thyme, 1 tsp white pepper, pinch of salt, 10 oz ground beef, 1 1/2 cup beef stock, and some coconut oil. <br><br>Start by making the dough. Add your flour, salt, egg, and curry powder to a mixing bowl. Mix first with a wooden spoon then switch to your hand to add the butter. Work the butter into dough gently. Slowly add cold water until a shaggy dough is formed. Now knead it on a lightly floured surface for 10 minutes. Wrap in plastic and let it chill out in the fridge for about an hour. <br><br>Now sweat out garlic, ginger, and onion in the coconut oil. Once sweated, add the ground beef. Mix everything up evenly and start to season. Add garlic salt, white pep, garlic powder, ginger powder, onion powder, dried thyme, all spice, red crushed pepper, and a pinch of salt. Now add your habanero and scallion. Once the beef is browned add your beef stock, turn the heat up until it boils and bring down to a simmer. Reduce the stock almost completely. <br><br>Pull out your dough. Lightly flour a clean surface and give it a quick knead, form a ball, and roll it out very thin. Use a cookie cutter or a plastic pint container to cut out circles. Pull out your circles and roll up the residual dough and repeat. Use some water and dampen the edges of the dough circles. Place some of your filling in the middle. Fold the dough over into a half moon and seal the edges with a fork. Finish with a little egg wash on top and throw them in a 350 degree oven for about a half hour.',
    link: 'https://www.youtube.com/watch?v=tWizrHrG1wk',
  },
  {
    id: 31,
    name: 'Kimchi',
    image: '../images/kimchi.jpg',
    ingredients:
      "<li>1 large Napa cabbage</li><li>half of a large Vidalia onion</li><li>10 cloves of garlic</li><li>about a quarter cup of ginger</li><li>3 scallions</li><li>1 stick lemongrass</li><li>2 cups Korean chili flakes</li><li>a few more chili's (optional)</li><li>2 cups water</li><li>2 tbsp sugar</li><li>some flour</li><li>salt</li><li>a little fish sauce</li><li>1 carrot julienned into 3 inch strips</li><li>a few julienned radishes of your liking</li>",
    description:
      "Makes 2 quarts. <br><br>Kimchi is one of my favorite things to have in my fridge. It’s always there! <br><br>Cut 1 large Napa cabbage into six pieces. Rinse in a large container and add a generous amount of salt. Massage every 20-30 minutes for 3 hours. You will start to see the cabbage break down and release a lot of moisture. After that, bring to a boil two cups of water, two tbsp sugar, and enough flour to make a paste (add a little at a time), let cool. Meanwhile, in a food processor, combine onion, garlic, ginger, scallion, chili (if using) and lemongrass. Blast that, throw it in a bowl and add the cooled paste with the Korean chili flakes, carrot, and radish. Rinse the cabbage, add your spicy vegetable paste with a few dashes of fish sauce to the rinsed cabbage and massage it deeply with love. Now, smash the mixture into 2 quart jars, really pushing the cabbage forcefully. You may have to discard some liquid rising to the top but definitely save this as it is a very good marinade or can be used to cook things like eggs or tofu. You want to leave about an inch from the top of the jar to kimchi. Now put a lid on top of the quart containers but do not screw it on, leaving some airflow. Also, put the container on something like a half sheet pan or plate. Some liquid may start to overflow but save it for that marinade! I typically let my kimchi sit out at room temp for at least 4 days. This all depends on the weather and humidity of the environment you’re in. You will be able to see the fermentation process begin from bubbles at the top of the jar. I do like to give a stir/push everyday. Once you’re getting that funky kimchi smell, you're good to go! Kimchi stays good forever.",
    link: 'https://www.youtube.com/watch?v=Eg7SYuFo-H8',
  },
  {
    id: 32,
    name: 'Tofu with Enoki Mushroom',
    image: '../images/tofu-with-mushroom.jpg',
    ingredients:
      '<li>half a cube of tofu cut into medium cubes</li><li>1/2 cup AP flour</li><li>pinch of garlic powder</li><li>salt</li><li>white pep</li><li>1 cup canola oil</li><li>1 lotus root</li><li>1 pack of enoki mushrooms</li><li>2 tbsp soy sauce</li><li>1 tbsp mirin</li><li>1 tbsp rice wine vinegar</li><li>about 2 tbsp garlic</li><li>about 2 tbsp ginger</li><li>about 2 tbsp scallion</li><li>1 chili pepper</li>',
    description:
      'Season the flour with salt, white pep, and garlic powder. Fry in canola oil at 350 degrees. Fry until nice and golden brown. Place on a paper towel and add a pinch of salt. Cut 4 slices of lotus root and fry in the same oil. When golden brown, put them with the tofu and salt. Now saute the ginger, garlic, scallion, and chili until sweated. Add the mushrooms, followed by the soy sauce, mirin, and rice wine vinegar. Carefully fold the mushrooms keeping them together as best as possible. Once the liquid is reduced by half you are ready to plate.  <br><br>To finish: Place the mushrooms in the center of the plate. Surround the mushrooms with the tofu and lotus root. Garnish with scallion, jalapeño, sesame seeds, and pickled red cabbage.',
    link: 'https://www.youtube.com/watch?v=9YDsJoALoec',
  },
  {
    id: 33,
    name: 'Venison',
    image: '../images/venison.jpg',
    ingredients:
      '<li>venison filet</li><li>1 1/2 red wine</li><li>olive oil</li><li>thyme</li><li>garlic</li><li>salt</li><li>pepper</li><li>carrot</li><li>potato</li><li>butter</li><li>shallot</li><li>oyster mushrooms</li>',
    description:
      'I made this staying at an airbnb in the Catskill mountains using some incredible local products. Start by marinating the venison filet. Add about a cup and a half of red wine to a hot pan and flambe the alcohol off and cook for 2-3 minutes. Let cool and pour over the filet. Add some olive oil, thyme, garlic, salt and pep. Let marinate overnight. The next day, slice some carrot and potato into circles, toss with olive oil, thyme, salt and pep. Lay some parchment paper on a sheet tray, spread them out and bake for 30 minutes on 350. Pull out venison and allow it to get to room temp. Add olive oil and a chunk of butter to a pan. Wait till the butter sizzles and add the filet. Get a nice sear and flip it. Now add some of the thyme and garlic from the marinade and start to baste it for 2 minutes. Let it go for about another 2 minutes and it should be around medium rare. Remove from the pan and let it rest for 5 minutes and start your sauce. Using the same pan, add some shallot and oyster mushrooms. Saute for 2 minutes and add enough red wine and leftover marinade to cover and reduce by half. Now, kill the heat and add another chunk of butter and mix till it dissolves. Slice your steak against the grain and plate.',
    link: 'https://www.youtube.com/watch?v=zDnADul48uc&t=195s',
  },
  {
    id: 34,
    name: 'Vegan Paella',
    image: '../images/vegan-paella.jpg',
    ingredients:
      '<li>half a Vidalia onion finely diced</li><li>2 cloves garlic finely diced</li><li>1 poblano pepper</li><li>pinch of saffron</li><li>1 tbsp Hungarian paprika</li><li>1 tbsp cayenne pepper</li><li>1/2 chill guy tomato sauce</li><li>1 cup brown rice</li><li>1 lemon</li><li>1 pack soy chorizo</li><li>2 cups water</li><li>2 sprigs rosemary</li><li>salt</li><li>white pep</li><li>olive oil</li>',
    description:
      'Start by sweating onion and garlic in a generous amount of olive oil. Add the poblano and saffron. Then go in with the rice and toast slightly. Add in the tomato sauce, paprika, and season with salt, cayenne, and white pep. Throw in the package of soy chorizo. Add water, rosemary, and lemon juice. Bring to a boil then down to a simmer for 30-40 minutes stirring occasionally. Serve with crusty bread.',
    link: 'https://www.youtube.com/watch?v=hLBzt-Cz2Qs',
  },
  {
    id: 35,
    name: 'Fermented Hot Sauce',
    image: '../images/fermented-hot-sauce.jpg',
    ingredients:
      '<li>half a mango peeled and sliced</li><li>2 cups hot pepper of your choosing</li><li>2 tbsp allspice</li><li>2 tbsp cardamom</li><li>2 tbsp sugar</li><li>2 tbsp salt</li>',
    description:
      'Combine all ingredients in a glass quart jar and fill with warm filtered water. Give it a shake and put the lid on tight.  Let the jar sit out at room temp, burping it everyday. After about a week you should see some bubbles forming and a grey tone to the brine. This is an indicator that it is ready but I typically go another week. It depends on climate and sugar content in the ingredients. I make hot sauce every couple of weeks, constantly changing up the flavor profile and observing the fermentation process. <br><br>To finish: Strain and reserve the brine. Remove the allspice and cardamom. In a blender, add your peppers and one clove of garlic (you can also put the garlic in at the very beginning of the ferment). Add a little bit of the brine and turn the blender on, gradually turning the speed up. Be careful not to add too much brine or it will become a broth as opposed to a nice viscous sauce. Now just strain that mixture through a fine sieve or chinois. Pour that into a bottle and you’re good.',
    link: 'https://www.youtube.com/watch?v=QgR1NUcHKzI',
  },
  {
    id: 36,
    name: 'Fire Cider Cocktail',
    image: '../images/fire-cider-cocktail.jpg',
    ingredients:
      '<li>2 generous oz bourbon</li><li>1 oz fresh orange juice</li><li>1 oz fire cider</li><li>splash of lemon seltzer</li><li>an orange twist</li>',
    description:
      'Combine everything besides the seltzer and orange twist in a shaker with ice. Vigorously shake and pour over a giant ice cube in a glass. Finish with a splash of seltzer and an orange twist.',
    link: 'https://www.youtube.com/watch?v=aGMjCzdhv28',
  },
  {
    id: 37,
    name: 'Beet Burger',
    image: '../images/beet-burger.jpg',
    ingredients:
      '<li>1 cup water</li><li>1 tbsp yeast</li><li>1 tbsp sugar</li><li>1 tbsp coconut oil</li><li>1 tbsp oat milk</li><li>3 cup bread flour</li><li>salt</li><li>white pep</li><li>1 tbsp turmeric</li><li>1 large beet</li><li>2 cloves garlic</li><li>2 shallots</li><li>about 1/4 cup of cooked pinto beans</li><li>a few beet root stems</li><li>3/4 cup of oats</li><li>1/2 cup flour</li><li>1/2 cup bread crumbs</li><li>cumin</li><li>coriander</li><li>chili flakes</li><li>oregano</li><li>half a cube of silken tofu</li><li>white wine vinegar</li><li>pinch of rosemary</li><li>2 tbsp dijon mustard</li><li>juice of a lemon</li><li>2 tsp nutritional yeast</li><li>tbsp oat milk</li><li>vegetable oil</li>',
    description:
      'For the bun: 1 cup water, 1 tbsp yeast, 1 tbsp sugar, 1 tbsp coconut oil, 1 tbsp oat milk, 3 cups bread flour, pinch of salt, and 1 tbsp turmeric. <br><br>Bloom your yeast in the water and sugar. Add flour, salt, turmeric, coconut oil, and oat milk in a bowl. Add your yeasty water and mix to form a dough. Knead for 10 minutes. Let the dough double in size for about an hour (depending on your climate). Once doubled, roll the dough out into a log and cut into 6 even portions. Form each portion into a ball and let proof for another hour with a damp towel on top. Once they have almost doubled, bake on 400 degrees for about 20 minutes. <br><br>For the burger mixture: 1 large beet, 2 cloves of garlic, 1 small shallot, about 1/4 cup of cooked pinto beans, a few beet root stems, 3/4 cup of oats, 1/2 cup flour, 1/2 cup bread crumbs, pinch of salt, white pep, cumin, coriander, chili flakes,  and oregano. <br><br>Finely chop your raw beet or use a grater. To a blender, add beet, garlic, shallot, beans, beet stem, oats, flour, and breadcrumbs. Pulse until everything is broken down and kind of resembles raw ground beef. Now transfer to a bowl and season with salt, white pep, cumin, coriander, chili flakes, and oregano. Mix that well and let it chill in the fridge for an hour or two. <br><br>Vegan Mayo: While the beet mixture is chilling make yourself some vegan mayo. In a blender combine half a cube of silken tofu, splash of white wine vinegar, half a shallot, pinch of rosemary, 1 tbsp dijon mustard, juice of half a lemon, 2 tsp nutritional yeast, and a pinch of salt and white pep. Blast that! <br><br>Vegan salad dressing: Now make a salad dressing. In a blender, combine half a shallot, 1 tbsp oat milk, 1 tbsp dijon mustard, splash of lemon juice, and 1/4 cup white wine vinegar. Blast that and slowly drizzle 3/4 cup of vegetable oil. Season with a touch of salt and white pep. <br><br>Form the beet mixture into a burger and sear in a cast iron pan with some oil. Toast your bun, add your mayo, burger, and enjoy with a salad and your homemade dressing.',
    link: 'https://www.youtube.com/watch?v=lo44wqGyy3A',
  },
  {
    id: 38,
    name: 'Lamb with Cherry Reduction and Celery Root Pureé',
    image: '../images/lamb.jpg',
    ingredients:
      '<li>1 rack of lamb</li><li>1 cup red wine of your choice</li><li>some sprigs of rosemary</li><li>4 cloves garlic</li><li>half a shallot</li><li>1/2 cup beef or lamb stock</li><li>1 cup pitted cherries blended and strained, or cherry juice</li><li>6 oz butter</li><li>1 celery root</li><li>salt</li><li>white pepper</li>',
    description:
      'I made this when I realized I had a cherry tree in my backyard. If you can’t find celery root, I like roasting potatoes with Morrocan seasoning. <br><br>Clean your lamb rack by cutting off the cap of fat. Then “french” the fat in between the ribs. <br><br>For the marinade: Add red wine to a pot and bring to a boil then simmer and reduce by more than half. This will cook off the alcohol so it doesn’t break down the lamb. Let cool and pour over your clean lamb rack in a container. Add some sprigs of rosemary and 4 smashed garlic cloves. Throw it in your fridge over night. The next day start by cutting the top and bottom off the celery root. Get some foil and put a small sprinkle of salt down with the rosemary. Place the celery root on top of the herb salt and do the same on the top. Cook for 2 1/2 hours on 350 or until tender with a knife. While that is cooling, make your sauce. Dice shallot and combine with the wine marinade. Reduce wine by half, add stock, reduce that by half, add cherry juice, reduce that by half. Take off heat and stir in butter. Adjust seasoning. Now unwrap your celery root and trim the skin. Cut into small dice and add to a blender with 2 oz of butter and seasoning. You may need a dash of water to get it going. Cut your individual lamb chops. I like to grill the lamb over charcoal but a grill is cool. Cook to your liking and serve with the pureé swooped on the plate, criss cross the chops, give it some sauce, and garnish with cherries, mint, and parsley.',
    link: 'https://www.youtube.com/watch?v=8QiR86RCw9c',
  },
  {
    id: 39,
    name: 'Ginger Beer',
    image: '../images/ginger-beer.jpg',
    ingredients:
      '<li>water</li><li>sugar</li><li>ginger</li><li>ginger tea</li>',
    description:
      "Pour 2 cups of water in a glass mason jar. Add 2 tbsp of sugar in the jar along with 2 tbsp of grated ginger with the skin on. Mix and leave out at room temperature with a loose lid or cheese cloth. 24 hours later add 2 tbsp grated ginger with skin and 2 tbsp sugar. Repeat this process for 4-7 days or until you see bubbles at the top of the water and a change in color. Now, brew a batch of ginger tea with a big handful of fresh skin on ginger, sugar, and 2 quarts of filtered water. The amounts here are to your liking. I go with 3/4 cup sugar and a huge handful of ginger! Steep that for 15-20 minutes and cool completely. Add the juice of two lemons and 1/2 cup of the ginger bug (you don't have to strain). Transfer into a growler (I like using two 32 oz guys) with a locking lid and let sit out at room temperature for three days. It is very important to burp the growlers once a day. Slowly and I mean slowly open the cap once a day to let the gas out. After three days transfer in your fridge and enjoy.  There is enough ginger bug to make three batches. I have had success leaving it in the fridge without feeding and it works fine.",
    link: 'https://www.youtube.com/watch?v=0aGaKTUooZ8',
  },
  {
    id: 40,
    name: 'Sesame Noodles',
    image: '../images/sesame-noodles.jpg',
    ingredients:
      '<li>2 cloves black garlic</li><li>small handful dried oyster mushrooms</li><li>1 jalapeño</li><li>1 fresno chili</li><li>2 scallion</li><li>small handful diced and peeled ginger</li><li>1 tbsp soy sauce</li><li>1 tbsp ponzu</li><li>1 tbsp sesame oil</li><li>1 tbsp rice wine vinegar</li><li>1 tbsp sesame seed</li><li>1 tbsp sugar</li><li>noodles of your choice</li>',
    description:
      "This is an extremely easy dish that I make all the time. Saute black garlic, mushrooms, half the jalapeño, half the Fresno, the green part of the scallions, and ginger all at once. Once everyone is happy add the liquids. I just eyeball it but it's probably about a tbsp each. Reduce that by half and add some cooked noodles to the pan, along with a splash of the pasta water. Mix it up and serve. Garnish with the other half of peppers, toasted sesame seeds, and the white part of the scallion.",
    link: 'https://www.youtube.com/watch?v=dyiQPuBx0us',
  },
  {
    id: 41,
    name: 'Chill Guy Bread',
    image: '../images/chill-guy-bread.jpg',
    ingredients:
      '<li>2 cloves black garlic</li><li>small handful dried oyster mushrooms</li><li>1 jalapeño</li><li>1 fresno chili</li><li>2 scallion</li><li>small handful diced and peeled ginger</li><li>1 tbsp soy sauce</li><li>1 tbsp ponzu</li><li>1 tbsp sesame oil</li><li>1 tbsp rice wine vinegar</li><li>1 tbsp sesame seed</li><li>1 tbsp sugar</li><li>noodles of your choice</li>',
    description:
      "This is an extremely easy dish that I make all the time. Saute black garlic, mushrooms, half the jalapeño, half the Fresno, the green part of the scallions, and ginger all at once. Once everyone is happy add the liquids. I just eyeball it but it's probably about a tbsp each. Reduce that by half and add some cooked noodles to the pan, along with a splash of the pasta water. Mix it up and serve. Garnish with the other half of peppers, toasted sesame seeds, and the white part of the scallion.",
    link: 'https://www.youtube.com/watch?v=vPphb-FaVWc',
  },
  {
    id: 42,
    name: 'Curry Cauliflower',
    image: '../images/curry-cauliflower.jpg',
    ingredients:
      '<li>1/2 head cauliflower</li><li>4 tbsp coconut oil</li><li>Jamaican curry powder</li>',
    description:
      'Heat up your coconut oil in a non stick/oven proof pan. Coat the cauliflower with curry powder over the oil and place in the pan. Incorporate the oil all over the cauliflower. Sear for 1 minute and place in a 425 degree oven for 20 minutes.',
    link: 'https://www.youtube.com/watch?v=8NKq1EQ1FlI',
  },
  {
    id: 43,
    name: 'Chill Guy Tortellini',
    image: '../images/tortellini.jpg',
    ingredients:
      '<li>250 grams semolina flour</li><li>125 grams water</li><li>2 cloves garlic</li><li>handful of chopped and washed leeks</li><li>5 baby portabella mushrooms</li><li>half a shallot</li><li>handful of spinach</li><li>1 lemon</li><li>red wine vinegar</li><li>vegan mozzarella</li><li>2 tbsp vegan butter</li><li>olive oil</li><li>small handful oregano</li><li>red crushed pep</li><li>small handful cashews</li><li>chill guy tomato sauce</li><li>salt</li><li>white pep</li>',
    description:
      'Dump the semolina on a clean work surface and make a well. Slowly incorporate the water and form a dough. Knead 10 minutes or until smooth and springy to the touch. Let sit for 20 minutes covered. <br><br>Start the filling with sautéing chopped garlic and leeks in 1 tbsp vegan butter and 1 tbsp olive oil. Add the mushrooms, followed by oregano, a splash of red wine vinegar, and lemon juice. Season with salt and white pep and blast in a blender. Make the sauce with 1 tbsp vegan butter, 1 tbsp olive oil, and diced shallot. Sweat that, then add mushrooms. Season and add some cashews, followed by about half a cup of chill guy tomato sauce (see Shakshouka). Cook down for a few minutes and blast in a blender. Transfer that back into your pan so you can heat it up later. Now roll out your dough and pass it through a pasta machine twice through the thickest setting, then once through the next two thinner settings. Portion the dough with a ring mold. Fill each circle with 1 tsp of the filling and a little chunk of vegan mozzarella. Wet the edges and fold into a chill guy tortellini. Bring some salty water to a boil and drop them in for 1-2 minutes. Serve with the reheated sauce.',
    link: 'https://www.youtube.com/watch?v=w7VfiEugC1A',
  },
  {
    id: 44,
    name: 'Vegan Fruit Tart',
    image: '../images/vegan-fruit-tartlet.jpg',
    ingredients:
      '<li>3 2 1 crust</li><li>1 cup flour</li><li>1/2v.butter</li><li>1/4 cup oat milk</li><li>2 tbsp sugar</li><li>1 cup cashew</li><li>1/2 cup water</li><li>1 tbsp honey</li><li>1 tsp vanilla</li><li>half a lemon zest</li><li>pinch of salt</li><li>chocolate</li>',
    description:
      '3 2 1 crust. 1 cup flour, 1/2 cup vegan butter, 1/4 cup oat milk, and 2 tbsp sugar. Mix everything by hand smashing the butter. Then add milk, form a bowl, and refrigerate overnight or in the freezer for 2 hours. <br><br>Cashew cream. I cup cashew, 1/2 cup water, 1 tbsp honey, 1 tsp vanilla, half a lemon zest, and pinch of salt. Blast on high and chill in the fridge. <br><br>Roll out the crust and use a ring mold to portion. Place in a greased muffin rack. Preheat the oven at 400 and bake for 10-12 minutes and cool. Melt chocolate and pour in then cool. Add cashew cream, granola, and layer fruit.',
    link: 'https://www.youtube.com/watch?v=cQ5mTSd5oEo',
  },
  {
    id: 45,
    name: 'Chickpea Pancake',
    image: '../images/chickpea-pancake.jpg',
    ingredients:
      '<li>1 cup chickpea flour</li><li>1 1/2 cup water</li><li>1 jalapeño finely diced</li><li>1/2 onion finely diced</li><li>1 small head broccoli (top part only, save stem for something else)</li><li>1/2 tbsp cumin seed</li><li>1/2 tbsp coriander</li><li>1/2 tbsp garlic powder</li><li>1/2 tbsp ginger powder</li><li>1/2 tbsp cayenne</li><li>1/2 tbsp paprika</li><li>1 tsp baking powder</li><li>1 tsp salt</li><li>1 tbsp vegan butter</li><li>1 tsp white pep</li>',
    description:
      '1 cup chickpea flour,  1 1/2 cup water, 1 jalapeño finely diced, 1/2 onion finely diced, 1 small head broccoli (top part only, save stem for something else), 1/2 tbsp each cumin seed, coriander, garlic powder, ginger powder, cayenne, paprika, 1 tsp baking powder, 1 tsp salt and white pep. <br><br>Heat a non stick pan with 1 tbsp vegan butter. Mix everything in a bowl. Wait till the butter sizzles and add a ladle or two of the batter. Cook till golden brown and flip. Cook for another 2 or so minutes, garnish with scallion, agave, and enjoy.',
    link: 'https://www.youtube.com/watch?v=PFdd_tq9JX0',
  },
]

// Load first page of recipes with pagination if user is on "Recipes" page
if (document.URL.includes('recipes')) {
  showPage(recipes, 1)
  addPagination(recipes)
}

/**
 * Open navigation based on user click
 */
function openNav() {
  mobileNav.style.width = '100%'
  main.style.marginRight = '100%'
  footer.style.display = 'none'

  if (youtube) {
    youtube.style.display = 'none'
  }

  navLogo.style.display = 'none'
  navMenu.style.display = 'none'
}

/**
 * Close navigation based on user click
 */
function closeNav() {
  mobileNav.style.width = '0'
  main.style.marginRight = '0'
  footer.style.display = 'block'

  if (youtube) {
    youtube.style.display = 'block'
  }

  navLogo.style.display = 'block'
}

/**
 * Close navigation based on window resize
 */
function closeNavOnWindowResize() {
  if (window.innerWidth < 768) {
    navMenu.style.display = 'block'
    desktopNav.style.display = 'none'
  } else if (window.innerWidth >= 768) {
    navMenu.style.display = 'none'
    desktopNav.style.display = 'flex'
    closeNav()
  }
}

/**
 * Change nav background to black on scroll
 */
function blackNavOnScroll() {
  const top = window.scrollY

  if (top === 0) {
    nav.style.backgroundColor = 'initial'
  } else if (top > 0) {
    nav.style.backgroundColor = '#131416'
  }
}

/**
 * Search for recipes dynamically as user types
 * @param {object} object - event
 */
function searchRecipes(e) {
  const eTargetValue = e.target.value.toLowerCase()

  let recipeArr = recipes.filter((recipe) => {
    const recipeName = recipe.name.toLowerCase()
    return recipeName.includes(eTargetValue)
  })

  showPage(recipeArr, 1)
  addPagination(recipeArr)
}

/**
 * Add pagination buttons based on page load and search results
 * @param {object} object - list of recipes from recipes.js
 */
function addPagination(list) {
  const numOfPaginationBtns = Math.ceil(list.length / 9)
  const linkList = document.querySelector('.link-list')
  linkList.innerHTML = ''

  for (let i = 1; i <= numOfPaginationBtns; i++) {
    linkList.insertAdjacentHTML(
      'beforeend',
      `
        <li>
          <button type="button">${i}</button>
        </li>`
    )
  }

  if (linkList.firstElementChild) {
    const firstLiItem = linkList.firstElementChild.firstElementChild
    firstLiItem.classList.add('active')

    // If there is only one pagination button, and it is clicked, reload the page
    firstLiItem.addEventListener('click', () => {
      window.location.reload()
    })
  }

  linkList.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      const linkListButtons = document.querySelectorAll('li button')
      const pageNumber = e.target.textContent

      for (let i = 0; i < linkListButtons.length; i++) {
        linkListButtons[i].classList.remove('active')
        e.target.classList.add('active')
        showPage(recipes, +pageNumber)
      }
    }
  })
}

/**
 * Page is 1 by default and list is the data array of students.
 * @param {object} object - list
 * @param {number} number - page
 */
function showPage(list, page) {
  const startIndex = page * 9 - 9
  const endIndex = page * 9
  const studentList = document.querySelector('.recipes-img')
  studentList.innerHTML = ''

  for (let i = 0; i < list.length; i++) {
    if (i >= startIndex && i < endIndex) {
      studentList.insertAdjacentHTML(
        'beforeend',
        `
          <div class="featured-img-pic">
            <div class="recipe-container">
              <a href="#">
                <img alt=${list[i].name} src=${list[i].image} width="4032" height="3024">
              </a>
              <div class="recipe-overlay">
                <div class="recipe-overlay-text">
                  <p>${list[i].name}</p>
                  <div class="recipe-buttons">
                    <a href="#">
                      <button class="recipe-button" data-index=${list[i].id}>Recipe</button>
                    </a>
                    <a href=${list[i].link} target="_blank">
                      <button class="recipe-button">Video</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <span class="recipe">${list[i].name}</span>
          </div>
        `
      )
    }
  }

  const recipeButton = document.querySelectorAll('.recipe-button')
  recipeButton.forEach((button) => {
    button.addEventListener('click', displayRecipe)
  })

  return studentList
}

/**
 * Display recipe to recipe.html without changing to a new page
 * @param {object} object - event
 */
function displayRecipe(e) {
  const dataIndex = e.target.getAttribute('data-index')

  // Change header picture to thumbnail of recipe clicked
  const hero = document.querySelector('.hero')
  const heroTitle = hero.firstElementChild.firstElementChild
  hero.style.backgroundImage = `url(${recipes[dataIndex].image})`
  heroTitle.innerHTML = `${recipes[dataIndex].name}`

  // Create HTML for recipe based on which recipe was clicked
  const recipesDiv = document.querySelector('.recipes')

  // Change classes and create a recipe-desc sass component
  recipesDiv.innerHTML = `
    <h2 class="featured-recipe-title">${recipes[dataIndex].name}</h2>
    <ul class="featured-recipe-ingredients">${recipes[dataIndex].ingredients}</ul>
    <p class="featured-recipe-description">${recipes[dataIndex].description}</p>
    <input class="go-back" type="button" value="Go Back" onClick="window.location.reload()">
  `
}

// open nav
navMenu.addEventListener('click', openNav)

// close nav
window.addEventListener('resize', closeNavOnWindowResize)

// close nav
closeBtn.addEventListener('click', () => {
  closeNav()
  navMenu.style.display = 'block'
})

// change nav styling when scrolling
window.addEventListener('scroll', blackNavOnScroll)

// search for recipes while typing
if (recipesSearch) {
  recipesSearch.addEventListener('keyup', searchRecipes)
}

// display recipe
const recipeButton = document.querySelectorAll('.recipe-button')
recipeButton.forEach((button) => {
  button.addEventListener('click', displayRecipe)
})
