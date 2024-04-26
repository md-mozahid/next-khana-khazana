const recipes = [
  {
    name: 'Morning Bliss Café',
    description:
      "Start your day with our delightful breakfast and brunch options at Morning Bliss Café. From fluffy pancakes to hearty omelets, we've got something for everyone to enjoy!",
    author: 'John Doe',
    activeTime: '20 mins',
    totalTime: '1 hour',
    thumbnail: 'https://source.unsplash.com/-YHSwy6uqvk/300x160',
    image: 'https://source.unsplash.com/random/800x600?recipe',
    category: 'Breakfast & Brunch',
    serves: 0,
    rating: 3,
    steps: [
      'Preheat the oven to 350°F (175°C).',
      'Prepare the chocolate cake batter according to the package instructions.',
      'Grease individual ramekins and fill them halfway with the cake batter.',
      'Place a piece of chocolate in the center of each ramekin.',
      'Cover the chocolate with more cake batter until the ramekins are three-quarters full.',
      'Bake for 12-15 minutes, or until the edges are set but the center is still slightly jiggly.',
      'Remove from the oven and let cool for a few minutes.',
    ],
  },
  {
    name: 'Sunrise Bites Kitchen',
    description:
      'Indulge in the flavors of the morning sun at Sunrise Bites Kitchen. Our brunch menu features mouthwatering dishes crafted with fresh, locally sourced ingredients.',
    author: 'John Doe',
    activeTime: '20 mins',
    totalTime: '1 hour',
    thumbnail: 'https://source.unsplash.com/jUPOXXRNdcA/300x160',
    image: 'https://source.unsplash.com/random/800x600?recipe',
    category: 'Breakfast & Brunch',
    serves: 3,
    rating: 5,
    steps: [
      'Preheat the oven to 350°F (175°C).',
      'Prepare the chocolate cake batter according to the package instructions.',
      'Grease individual ramekins and fill them halfway with the cake batter.',
      'Place a piece of chocolate in the center of each ramekin.',
      'Cover the chocolate with more cake batter until the ramekins are three-quarters full.',
      'Bake for 12-15 minutes, or until the edges are set but the center is still slightly jiggly.',
      'Remove from the oven and let cool for a few minutes.',
    ],
  },
  {
    name: 'Brunch Haven Delights',
    description:
      "Discover a haven of delicious brunch delights at our cozy spot. From classic favorites to unique creations, there's something for every palate at Brunch Haven Delights.",
    author: 'John Doe',
    activeTime: '20 mins',
    totalTime: '1 hour',
    thumbnail: 'https://source.unsplash.com/jUPOXXRNdcA/300x160',
    image: 'https://source.unsplash.com/random/800x600?recipe',
    category: 'Breakfast & Brunch',
    serves: 2,
    rating: 4,
    steps: [
      'Preheat the oven to 350°F (175°C).',
      'Prepare the chocolate cake batter according to the package instructions.',
      'Grease individual ramekins and fill them halfway with the cake batter.',
      'Place a piece of chocolate in the center of each ramekin.',
      'Cover the chocolate with more cake batter until the ramekins are three-quarters full.',
      'Bake for 12-15 minutes, or until the edges are set but the center is still slightly jiggly.',
      'Remove from the oven and let cool for a few minutes.',
    ],
  },
  {
    name: 'Rise & Dine Eatery',
    description:
      'Rise and shine with the mouthwatering offerings at Rise & Dine Eatery. Our breakfast menu features a variety of savory and sweet options to kickstart your day.',
    author: 'John Doe',
    activeTime: '20 mins',
    totalTime: '1 hour',
    thumbnail: 'https://source.unsplash.com/SxTlB4fde9Q/300x160',
    image: 'https://source.unsplash.com/random/800x600?recipe',
    category: 'Breakfast & Brunch',
    serves: 6,
    rating: 1,
    steps: [
      'Preheat the oven to 350°F (175°C).',
      'Prepare the chocolate cake batter according to the package instructions.',
      'Grease individual ramekins and fill them halfway with the cake batter.',
      'Place a piece of chocolate in the center of each ramekin.',
      'Cover the chocolate with more cake batter until the ramekins are three-quarters full.',
      'Bake for 12-15 minutes, or until the edges are set but the center is still slightly jiggly.',
      'Remove from the oven and let cool for a few minutes.',
    ],
  },
  {
    name: 'Breakfast Oasis Junction',
    description:
      'Escape to a breakfast oasis at Breakfast Oasis Junction. Dive into a world of delectable morning treats and refreshing beverages to fuel your day ahead.',
    author: 'John Doe',
    activeTime: '20 mins',
    totalTime: '1 hour',
    thumbnail: 'https://source.unsplash.com/MNtag_eXMKw/300x160',
    image: 'https://source.unsplash.com/random/800x600?recipe',
    category: 'Breakfast & Brunch',
    serves: 0,
    rating: 3,
    steps: [
      'Preheat the oven to 350°F (175°C).',
      'Prepare the chocolate cake batter according to the package instructions.',
      'Grease individual ramekins and fill them halfway with the cake batter.',
      'Place a piece of chocolate in the center of each ramekin.',
      'Cover the chocolate with more cake batter until the ramekins are three-quarters full.',
      'Bake for 12-15 minutes, or until the edges are set but the center is still slightly jiggly.',
      'Remove from the oven and let cool for a few minutes.',
    ],
  },
  {
    name: 'Chocolate Lava Cake',
    description:
      "Indulge in the rich and decadent goodness of our Chocolate Lava Cake. With a warm, gooey center that oozes out with every bite, it's a dessert lover's dream come true. Served with a scoop of vanilla ice cream for the perfect balance of flavors.",
    author: 'Alice Smith',
    activeTime: '15 mins',
    totalTime: '35 mins',
    thumbnail: 'https://source.unsplash.com/Yr4n8O_3UPc/300x160',
    image: 'https://source.unsplash.com/random/800x600?recipe',
    category: 'Dessert',
    serves: 6,
    rating: 3,
    steps: [
      'Preheat the oven to 350°F (175°C).',
      'Prepare the chocolate cake batter according to the package instructions.',
      'Grease individual ramekins and fill them halfway with the cake batter.',
      'Place a piece of chocolate in the center of each ramekin.',
      'Cover the chocolate with more cake batter until the ramekins are three-quarters full.',
      'Bake for 12-15 minutes, or until the edges are set but the center is still slightly jiggly.',
      'Remove from the oven and let cool for a few minutes.',
      'Carefully invert each ramekin onto a plate.',
      'Serve warm with a scoop of vanilla ice cream.',
    ],
  },
  {
    name: 'Classic New York Cheesecake',
    description:
      "Treat yourself to a slice of heaven with our Classic New York Cheesecake. Made with creamy, velvety cheesecake filling on a buttery graham cracker crust, it's a timeless dessert that never fails to delight the taste buds.",
    author: 'Michael Johnson',
    activeTime: '25 mins',
    totalTime: '6 hours',
    thumbnail: 'https://source.unsplash.com/jivmv9hE6bM/300x160',
    image: 'https://source.unsplash.com/random/800x600?recipe',
    category: 'Dessert',
    serves: 8,
    rating: 3,
    steps: [
      'Preheat the oven to 325°F (160°C).',
      'In a mixing bowl, combine graham cracker crumbs, sugar, and melted butter.',
      'Press the mixture into the bottom of a springform pan.',
      'In another bowl, beat cream cheese until smooth.',
      'Add sugar, eggs, sour cream, and vanilla extract, and beat until well combined.',
      'Pour the filling over the crust in the springform pan.',
      'Bake for 55-60 minutes, or until the edges are set but the center is still slightly jiggly.',
      'Turn off the oven and let the cheesecake cool in the oven with the door closed for 1 hour.',
      'Remove from the oven and refrigerate for at least 4 hours or overnight.',
      'Serve chilled, optionally topped with fruit compote or whipped cream.',
    ],
  },
  {
    name: 'Strawberry Shortcake',
    description:
      "Delight in the freshness of ripe strawberries and fluffy whipped cream atop a light and airy shortcake biscuit. Our Strawberry Shortcake is a refreshing and satisfying dessert that's perfect for any occasion, whether it's a summer picnic or a cozy evening treat.",
    author: 'Emily Davis',
    activeTime: '20 mins',
    totalTime: '40 mins',
    thumbnail: 'https://source.unsplash.com/tzl1UCXg5Es/300x160',
    image: 'https://source.unsplash.com/random/800x600?recipe',
    category: 'Dessert',
    serves: 6,
    rating: 3,
    steps: [
      'Preheat the oven to 425°F (220°C).',
      'In a mixing bowl, combine flour, sugar, baking powder, and salt.',
      'Cut in cold butter until the mixture resembles coarse crumbs.',
      'Stir in milk just until moistened.',
      'Drop dough by spoonfuls onto a baking sheet.',
      'Bake for 12-15 minutes or until golden brown.',
      'Let cool on a wire rack.',
      'Slice the shortcakes in half horizontally.',
      'Top each bottom half with sliced strawberries and whipped cream.',
      'Replace the top halves and serve immediately.',
    ],
  },
  {
    name: 'Tiramisu',
    description:
      'Transport yourself to the cafes of Italy with our exquisite Tiramisu. Layers of espresso-soaked ladyfingers and creamy mascarpone cheese, dusted with cocoa powder, create a harmonious blend of flavors that is simply irresistible.',
    author: 'Sophia Martinez',
    activeTime: '30 mins',
    totalTime: '4 hours',
    thumbnail: 'https://source.unsplash.com/6G98hiCJETA/300x160',
    image: 'https://source.unsplash.com/random/800x600?recipe',
    category: 'Dessert',
    serves: 8,
    rating: 3,
    steps: [
      'Brew strong coffee or espresso and let it cool.',
      'In a mixing bowl, beat egg yolks and sugar until thick and pale.',
      'Add mascarpone cheese and beat until smooth.',
      'In another bowl, beat egg whites until stiff peaks form.',
      'Gently fold the egg whites into the mascarpone mixture.',
      'Quickly dip ladyfingers into the cooled coffee and arrange them in a single layer in the bottom of a dish.',
      'Spread half of the mascarpone mixture over the ladyfingers.',
      'Repeat layers with remaining ladyfingers and mascarpone mixture.',
      'Cover and refrigerate for at least 4 hours or overnight.',
      'Before serving, dust with cocoa powder.',
    ],
  },
  {
    name: 'Chocolate Lava Cake',
    description:
      "Indulge in the rich and decadent goodness of our Chocolate Lava Cake. With a warm, gooey center that oozes out with every bite, it's a dessert lover's dream come true. Served with a scoop of vanilla ice cream for the perfect balance of flavors.",
    author: 'Alice Smith',
    activeTime: '15 mins',
    totalTime: '35 mins',
    thumbnail: 'https://source.unsplash.com/_0JpjeqtSyg/300x160',
    image: 'https://source.unsplash.com/random/800x600?recipe',
    category: 'Dessert',
    serves: 6,
    rating: 3,
    steps: [
      'Preheat the oven to 350°F (175°C).',
      'Prepare the dessert batter according to the recipe instructions.',
      'Pour the batter into greased ramekins.',
      'Place a piece of chocolate in the center of each ramekin.',
      'Bake for 12-15 minutes until the edges are set but the center is still soft.',
      'Let cool for a few minutes before serving. Enjoy!',
    ],
  },
  {
    name: 'Classic New York Cheesecake',
    description:
      "Treat yourself to a slice of heaven with our Classic New York Cheesecake. Made with creamy, velvety cheesecake filling on a buttery graham cracker crust, it's a timeless dessert that never fails to delight the taste buds.",
    author: 'Michael Johnson',
    activeTime: '25 mins',
    totalTime: '6 hours',
    thumbnail: 'https://source.unsplash.com/-YHSwy6uqvk/300x160',
    image: 'https://source.unsplash.com/random/800x600?recipe',
    category: 'Dessert',
    serves: 8,
    rating: 3,
    steps: [
      'Preheat the oven to 325°F (160°C).',
      'Mix graham cracker crumbs, sugar, and melted butter. Press onto the bottom of a springform pan.',
      'In a large bowl, beat cream cheese until smooth. Add sugar, eggs, sour cream, and vanilla. Beat until creamy.',
      'Pour filling over the crust. Bake for 55-60 minutes until the center is almost set.',
      'Cool on a wire rack for 10 minutes. Carefully run a knife around the edge to loosen. Cool for 1 hour more.',
      'Refrigerate overnight. Serve chilled and enjoy!',
    ],
  },
  {
    name: 'Strawberry Shortcake',
    description:
      "Delight in the freshness of ripe strawberries and fluffy whipped cream atop a light and airy shortcake biscuit. Our Strawberry Shortcake is a refreshing and satisfying dessert that's perfect for any occasion, whether it's a summer picnic or a cozy evening treat.",
    author: 'Emily Davis',
    activeTime: '20 mins',
    totalTime: '40 mins',
    thumbnail: 'https://source.unsplash.com/jUPOXXRNdcA/300x160',
    image: 'https://source.unsplash.com/random/800x600?recipe',
    category: 'Dessert',
    serves: 6,
    rating: 3,
    steps: [
      'Preheat oven to 425°F (220°C).',
      'In a bowl, mix flour, sugar, baking powder, and salt. Cut in butter until mixture resembles coarse crumbs.',
      'Stir in milk until dough forms. Drop by spoonfuls onto an ungreased baking sheet.',
      'Bake 12-15 minutes or until golden brown. Cool.',
      'Cut shortcakes horizontally. Fill with strawberries and whipped cream. Serve and enjoy!',
    ],
  },
  {
    name: 'Tiramisu',
    description:
      'Transport yourself to the cafes of Italy with our exquisite Tiramisu. Layers of espresso-soaked ladyfingers and creamy mascarpone cheese, dusted with cocoa powder, create a harmonious blend of flavors that is simply irresistible.',
    author: 'Sophia Martinez',
    activeTime: '30 mins',
    totalTime: '4 hours',
    thumbnail: 'https://source.unsplash.com/aGjP08-HbYY/300x160',
    image: 'https://source.unsplash.com/random/800x600?recipe',
    category: 'Dessert',
    serves: 8,
    rating: 3,
    steps: [
      'Brew strong coffee or espresso and let it cool.',
      'In a mixing bowl, beat egg yolks and sugar until thick and pale.',
      'Add mascarpone cheese and beat until smooth.',
      'In another bowl, beat egg whites until stiff peaks form.',
      'Gently fold the egg whites into the mascarpone mixture.',
      'Quickly dip ladyfingers into the cooled coffee and arrange them in a single layer in the bottom of a dish.',
      'Spread half of the mascarpone mixture over the ladyfingers.',
      'Repeat layers with remaining ladyfingers and mascarpone mixture.',
      'Cover and refrigerate for at least 4 hours or overnight.',
      'Before serving, dust with cocoa powder.',
    ],
  },
  {
    name: 'Rise & Shine Pancakes',
    description:
      "Start your day right with our fluffy and delicious Rise & Shine Pancakes. Served with your choice of maple syrup, fresh berries, or whipped cream, it's the perfect breakfast treat to fuel your morning.",
    author: 'Chef Michael Johnson',
    activeTime: '15 mins',
    totalTime: '30 mins',
    thumbnail: 'https://source.unsplash.com/SxTlB4fde9Q/300x160',
    image: 'https://source.unsplash.com/random/800x600?recipe',
    category: 'Breakfast & Brunch',
    serves: 4,
    rating: 3,
    steps: [
      'In a large bowl, whisk together flour, sugar, baking powder, and salt.',
      'In a separate bowl, mix together milk, melted butter, and eggs.',
      'Combine wet and dry ingredients until just mixed. Let batter rest for 5 minutes.',
      'Heat a non-stick skillet or griddle over medium heat. Pour 1/4 cup of batter for each pancake.',
      'Cook until bubbles form on the surface, then flip and cook until golden brown.',
      'Serve hot with your favorite toppings.',
    ],
  },
  {
    name: 'Sunrise Omelette',
    description:
      "Brighten up your morning with our Sunrise Omelette. Made with fluffy eggs, sautéed vegetables, and melted cheese, it's a hearty and satisfying breakfast option that will leave you feeling energized for the day ahead.",
    author: 'Chef Emily Davis',
    activeTime: '10 mins',
    totalTime: '20 mins',
    thumbnail: 'https://source.unsplash.com/MNtag_eXMKw/300x160',
    image: 'https://source.unsplash.com/random/800x600?recipe',
    category: 'Breakfast & Brunch',
    serves: 2,
    rating: 3,
    steps: [
      'In a bowl, beat eggs with salt and pepper.',
      'Heat butter in a skillet over medium heat. Add vegetables and cook until softened.',
      'Pour beaten eggs into the skillet and cook until the edges start to set.',
      'Sprinkle cheese over one half of the omelette. Fold the other half over the filling.',
      'Cook for another minute until the cheese is melted and the eggs are cooked through.',
      'Slide the omelette onto a plate and serve hot.',
    ],
  },
  {
    name: 'Morning Glory Muffins',
    description:
      "Our Morning Glory Muffins are packed with wholesome ingredients like carrots, apples, and raisins, making them the perfect grab-and-go breakfast or snack option. Moist, flavorful, and nutritious, they're sure to brighten up your day!",
    author: 'Chef Sophia Martinez',
    activeTime: '20 mins',
    totalTime: '40 mins',
    thumbnail: 'https://source.unsplash.com/Yr4n8O_3UPc/300x160',
    image: 'https://source.unsplash.com/random/800x600?recipe',
    category: 'Breakfast & Brunch',
    serves: 12,
    rating: 3,
    steps: [
      'Preheat oven to 350°F (175°C). Line muffin tin with paper liners.',
      'In a large bowl, combine flour, sugar, baking soda, cinnamon, and salt.',
      'In another bowl, whisk together eggs, oil, and vanilla extract.',
      'Stir in grated carrots, diced apples, raisins, and chopped nuts.',
      'Add wet ingredients to dry ingredients and stir until just combined.',
      'Divide batter evenly among muffin cups.',
      'Bake for 20-25 minutes or until a toothpick inserted into the center comes out clean.',
      'Cool in the pan for 5 minutes, then transfer to a wire rack to cool completely.',
    ],
  },
  {
    name: 'Berry Blast Smoothie Bowl',
    description:
      "Kickstart your morning with our refreshing Berry Blast Smoothie Bowl. Made with a blend of mixed berries, banana, and yogurt, and topped with crunchy granola and fresh fruit, it's a nutritious and delicious way to fuel your day.",
    author: 'Chef Alice Smith',
    activeTime: '10 mins',
    totalTime: '10 mins',
    thumbnail: 'https://source.unsplash.com/jivmv9hE6bM/300x160',
    image: 'https://source.unsplash.com/random/800x600?recipe',
    category: 'Breakfast & Brunch',
    serves: 2,
    rating: 3,
    steps: [
      'In a blender, combine mixed berries, banana, yogurt, and honey. Blend until smooth.',
      'Pour the smoothie into bowls.',
      'Top with granola, sliced bananas, fresh berries, and a drizzle of honey.',
      'Serve immediately and enjoy!',
    ],
  },
  {
    name: 'Sunrise Breakfast Burrito',
    description:
      "Start your day with our hearty Sunrise Breakfast Burrito. Loaded with scrambled eggs, crispy bacon, melted cheese, and fresh salsa, all wrapped up in a warm tortilla, it's the perfect on-the-go breakfast option.",
    author: 'Chef Michael Johnson',
    activeTime: '15 mins',
    totalTime: '25 mins',
    thumbnail: 'https://source.unsplash.com/tzl1UCXg5Es/300x160',
    image: 'https://source.unsplash.com/random/800x600?recipe',
    category: 'Breakfast & Brunch',
    serves: 2,
    rating: 3,
    steps: [
      'In a skillet, cook bacon until crispy. Remove and set aside.',
      'In the same skillet, scramble eggs until cooked through. Season with salt and pepper.',
      'Warm tortillas in the skillet or microwave.',
      'Divide scrambled eggs, bacon, cheese, and salsa among the tortillas.',
      'Fold the sides of each tortilla over the filling, then roll up tightly.',
      'Serve immediately and enjoy!',
    ],
  },
  {
    name: 'Oasis Breakfast Bowl',
    description:
      "Fuel your morning with our nutritious Oasis Breakfast Bowl. Packed with protein-rich ingredients like quinoa, avocado, eggs, and spinach, it's a wholesome and satisfying way to start your day.",
    author: 'Chef Emily Davis',
    activeTime: '20 mins',
    totalTime: '30 mins',
    thumbnail: 'https://source.unsplash.com/6G98hiCJETA/300x160',
    image: 'https://source.unsplash.com/random/800x600?recipe',
    category: 'Breakfast & Brunch',
    serves: 2,
    rating: 3,
    steps: [
      'Cook quinoa according to package instructions.',
      'In a skillet, sauté spinach until wilted. Season with salt and pepper.',
      'Poach or fry eggs to your liking.',
      'Assemble bowls by dividing cooked quinoa, sautéed spinach, sliced avocado, and eggs.',
      'Season with additional salt and pepper if desired.',
      'Serve warm and enjoy!',
    ],
  },
  {
    name: 'Oasis Omelette',
    description:
      "Our Oasis Omelette is a flavorful combination of eggs, mushrooms, spinach, and cheese. Light and fluffy with a creamy filling, it's a satisfying breakfast option that will keep you energized throughout the morning.",
    author: 'Chef Sophia Martinez',
    activeTime: '10 mins',
    totalTime: '20 mins',
    thumbnail: 'https://source.unsplash.com/_0JpjeqtSyg/300x160',
    image: 'https://source.unsplash.com/random/800x600?recipe',
    category: 'Breakfast & Brunch',
    serves: 2,
    rating: 3,
    steps: [
      'In a bowl, beat eggs until frothy. Season with salt and pepper.',
      'Heat butter in a skillet over medium heat. Add mushrooms and cook until softened.',
      'Add spinach and cook until wilted.',
      'Pour beaten eggs into the skillet and cook until the edges start to set.',
      'Sprinkle cheese over one half of the omelette. Fold the other half over the filling.',
      'Cook for another minute until the cheese is melted and the eggs are cooked through.',
      'Slide the omelette onto a plate and serve hot.',
    ],
  },
  {
    name: 'Oasis Acai Bowl',
    description:
      "Treat yourself to our refreshing Oasis Acai Bowl. Made with blended acai berries, banana, and mixed berries, and topped with granola, coconut flakes, and fresh fruit, it's a nutritious and delicious breakfast option.",
    author: 'Chef Alice Smith',
    activeTime: '10 mins',
    totalTime: '10 mins',
    thumbnail: 'https://source.unsplash.com/hWzPY35YnDQ/300x160',
    image: 'https://source.unsplash.com/random/800x600?recipe',
    category: 'Breakfast & Brunch',
    serves: 2,
    rating: 3,
    steps: [
      'In a blender, combine acai berries, banana, mixed berries, and almond milk. Blend until smooth.',
      'Pour the smoothie into bowls.',
      'Top with granola, coconut flakes, sliced banana, and fresh berries.',
      'Drizzle with honey if desired.',
      'Serve immediately and enjoy!',
    ],
  },
  {
    name: 'Oasis Breakfast Wrap',
    description:
      "Our Oasis Breakfast Wrap is a convenient and delicious way to enjoy breakfast on the go. Filled with scrambled eggs, turkey sausage, cheese, and salsa, all wrapped up in a warm tortilla, it's a satisfying meal that's perfect for busy mornings.",
    author: 'Chef Jessica Thompson',
    activeTime: '10 mins',
    totalTime: '15 mins',
    thumbnail: 'https://source.unsplash.com/1ZihgphXkw4/300x160',
    image: 'https://source.unsplash.com/random/800x600?recipe',
    category: 'Breakfast & Brunch',
    serves: 2,
    rating: 3,
    steps: [
      'In a skillet, cook turkey sausage until browned and cooked through. Remove and set aside.',
      'In the same skillet, scramble eggs until cooked through. Season with salt and pepper.',
      'Warm tortillas in the skillet or microwave.',
      'Divide scrambled eggs, cooked turkey sausage, shredded cheese, and salsa among the tortillas.',
      'Fold the sides of each tortilla over the filling, then roll up tightly.',
      'Serve immediately and enjoy!',
    ],
  },
]

const getAllRecipes = () => {
  return recipes
}

const getPhotoById = (id) => {
  return photos.find((photo) => photo.id === id)
}

export { getAllRecipes, getPhotoById }
