const fs = require('fs');

/* Word bank */
const shortPhrases = ["A Brisket a Tasket", "A Day Latte", "Above Bored", "Absalom", "Acacia Saint", "Acapulco Gold", "Achilles", "Acorn Palace", "Aesthetic Bug", "Affecté", "Affluential", "After Giggle", "Aftertizer", "Aglaya", "Ahui", "Al Fresco", "Alcohol & Archery", "Alephant", "Alluvia", "American Whey", "Amygdala Lounge", "Anacho", "Anavenetro", "Angel Walk", "Anivet", "Anixang", "Anocha", "Antimatter", "Aquacine", "Aquafire", "Aquasseur", "Aquazure", "Aquoavo", "Arctica", "Armadillo Debutante", "Armadillo Plates", "Aroma Borealis", "Aromastotle", "Arotiaka", "Artvark", "AstroCoffee", "Atomic Coffee", "Atomic Donut", "Attila Taco", "Attila the Honey Bee", "Augrés", "Aura Imploring Alice", "Avalunch", "Baba Rum", "Bacon Dump", "Bagel Bandit", "Bagel Brain", "Bagel Palace", "Balkan Beef", "Ball Lightning", "Bambi Planet", "Bamboolong", "Banana Cabana", "Bandits", "Bandwidth and Bagels", "Banjo Pancake", "Bapoon", "Bar Flight", "Bard Breath", "Bard’s Bench", "Barn Baby Burn", "BBQ Force", "Bear Claws and Bagels", "bEarth", "Bee Salt", "Beef Blackout", "Beef Bowl Buddha", "Beef Bowl Knoll", "Beef Burden", "Beef Easy", "Beef Storm", "Beefbelly", "BeefShock", "Beer Bunker", "Beer in Mind", "Before Coffee", "Bela Bite", "Belagossi", "Bella Figala", "Bella’s", "Belle’ Pepper", "Belly-flop Buffet", "Beluga Bandit", "Beluga Banjo", "Beluga Joe’s", "Benephisto", "Bengal Bagel", "Bennie’s Fishery", "Bid and Ask", "Big Bottom Beefworks", "Big Juicy", "BigWay", "Bindewald’s Kitchen", "Bing Bang’s", "Bingo Binge", "Bingo Bingo", "Birmingham Sandwiches", "Bitter Plaid", "Black Velvet Mauve", "Blan-Diego’s", "Bleached Peach", "Bleeko", "Blind Carbos", "Blink Tank", "Bloat", "Blooming Maguey", "Bloomsbury Pie", "Blue Ball", "Blue Horizon", "Bluez", "Bob Cratchett", "Bob Mutton", "Boil Head", "Boo", "BoozeBelly", "Boozo", "Bourbon Bliss", "Bovine Oligarchy", "Bowl and Bladder", "Boy", "Bravo", "Brewed Attitude", "Brewsome Tuscon", "Bring it!", "Broadway Imperative", "Broadway Wellborne", "Brood Coffee", "Brunchilli", "Buddha Bait", "Buddha Bite", "Buddha Bowl", "Buddha Bread", "Buddha My", "Buffalo Roman", "Bug Gloss", "Bugdance", "Bulldog and Crotch", "Bulljuice", "Burger Glory", "Burnt Offerings", "Butter", "Butter and Grace", "Butter Butt", "Butter", " Grace and Gamble", "Buttercut", "ButterFish", "Buzz Factory",
  "Cabooze", "CactiCoffee", "Cafe Biz", "Cafe Brood", "Cafe Constant", "Cafe Conundrum", "Cafe de Vivre", "Cafe Debutant", "Cafe Elmo", "Cafe Fin", "Cafe Foam", "Cafe Happenstance", "Cafe Inc.", "Cafe Kundalini", "Cafe Lectern", "Cafe Lunch", "Cafe Nate", "Cafe Neitsche", "Cafe Niche", "Cafe Plutarch", "Cafe Response", "Cafe Stuff’t", "Cafe TM", "Cafe Visual", "Caffeine Conscience", "Caffeine Conscious", "Caffeine Serene", "Caffeine Wall", "Caffeinspiration", "Cajun Trapper", "Cajun-Sation", "Call it Green", "Caloria", "Campers", "Candy Ask", "Candy Candy!", "Candy Palanquin", "Canton Silk", "Capers", "Capricorn", "Captain Fennel", "Captain Sincerity", "Carbo Lode", "Carnal Cafe", "Carnal Sanders", "Carnivore Heaven", "Carnivortex", "Carrot Smiles", "Caruso", "Carver’s Cut", "Cash", "Cash Cow", "Cattle on Fire", "Cattle Prod", "Celery Dreams", "Celeste", "Celestial Pudding", "Cellular Cafe", "Central Pork", "Chalk and Stars", "Chap and Spur", "Chateau Low-blow", "Chaucer’s Choice", "Cheeky", "Cheese Picnic", "CheeseQuest", "Cheeze Panic", "Chen On Soso", "Chernobyl", "Chevre", "Chew", "Chez Castaway", "Chez Kicks", "Chez Maggie", "Chez Moi", "Chez Naïveté", "Chez Too", "Chiggers", "Chin Chin", "Chipotle Power", "Chocolate Bondage", "Chocolate Mussolini", "Chomsky", "Choo Choo", "Chorus", "Christian Cuisine", "Chrysalida", "Chung King Chow Down", "Chunk City", "Churros Welcome", "Ciao Beefeater", "Ciao Buddha", "Ciàobama", "Cinesanct", "Circula", "City of Fish", "Civil Libation", "Clam Chop", "Clarko", "Class Wire", "Classio", "Clobbered!", "Clovis and Charley", "Clown School", "Club Guru", "Club Hell Yea", "Club Soba", "Club Soma", "Clutch", "Coash", "Coffee Beacon", "Coffee By Appointment", "Coffee Cat", "Coffee Cobbler", "Coffee Conundrum", "Coffee Corral", "Coffee Cousins", "Coffee Farm", "Coffee Galaxy", "Coffee King", "Coffee Korner", "Coffee Lodge", "Coffee Matrix", "Coffee Menagerie", "Coffee Oasis", "Coffee Panache", "Coffee Patch", "Coffee Planet", "Coffee Ranch", "Coffee RoundUp", "Coffee Science", "Coffee Squad", "Coffee Time", "Coffee Trip", "Coffee Tsunami", "Coffee Universe", "Coffee Vibe", "Coffee World", "Coffee Zone", "Coffee-Go-Round", "Coffeeplosion", "Coffee’s Ready!", "Coffeescape", "Colony Clutch", "Coma Tostada", "Comfidant", "Comgo", "Comnivorous", "Complete Meat", "Compost Office",
  "Concorsica", "Condimantra", "Conduit", "Coney Island Minibars", "Confection Detection", "Confection Direction", "Constant Cafe", "Constant Coffee", "Constant Taco", "Cool Tofu", "Cooper’s Hunan", "Corepan", "Corn Dog Social", "Corn Husk Cafe", "Corndog House", "Corn-Fed Beef Bowl", "Cornpone Castle", "Cosmetallic", "Could Be Worse", "Counter Coutier", "Countless Ours", "Coup de Veal", "Cowtown", "Crab and Kitten", "Crab and Prawn", "Crabernacle", "Crab-ola", "Crush Station", "Crustacean Prince", "Crustacia", "Crustatia", "Crux Tux", "C-Theory", "Cthulhu’s Kitchen", "Cubi", "Culinary Desert", "Culinary Oriental Cuisine", "Cup and Chaucer", "Curb Appeal", "Curly Fries", "Curmudgeon Cafe", "Cut Fastball", "Cyclonica", "Dag Nabbit", "Dandelar", "Dandelar’s", "Dandelion Greens", "Darvane", "Dear Meat", "Delicatessen Style", "Derail", "Dervish", "Desert Drips", "Devil’s Laundromat", "Digging my Truffles", "Digital Planet", "Dijon Bomb", "Dim Summit", "Dimple’s", "Dingo", "Dirty Laundry", "Diseasia", "Dizé", "Django", "Django’s", "Doc Hollandaise", "Doctor Coffee", "Dogtown", "Dolly Random", "Domina", "Donut Babe", "Donut District", "Dostoevsky", "Dot Candy", "Dot Compadre", "Dote", "Double Felix", "Double Jump", "Dream Cafe", "Dreamia", "Drive Vibe", "Drunken Conundrum", "Dude Raunch", "Dumpty’s", "Dune Drops", "Dutch Oven Gretel", "Ear Roast", "Earthpure", "Earth’s Salad", "Easy Bake", "Easy Beef", "Easy Speak", "Eat Underground", "Echo Shack", "eee Cummings", "Electric Furrytown", "Electric Waffle", "Electroasis", "Elemantra", "Elemaunt", "Elephant Walk", "Eleven Seconds", "Elita", "Elpro", "eMantis", "Emeril Van Morrison", "Empirica", "Emptia", "Encino", "Endozilla", "Enigma on Rye", "Enjola", "Enrondezvous", "Ensanada", "Epicurious George", "Epstein’s Bar and Grill", "Equity", "Eros", "Escargot", "Escargot-Go", "Esco Bar", "Esplendidos", "Espressia", "Et Tu New Brew", "Eternia", "Exhibit E", "Exiand", "Exit Matter", "ExoPlanet", "Exospace", "Exploded Shank", "Exposa", "Fabricante", "Fabriquat", "Facade", "Fantasy Pot Luck", "Far Away Feast", "Far Horizons", "Faster Faster Chicken Soup", "Faster Fries!", "Fat Boy", "Fatbelly", "Father Chutney", "Father’s Art School", "Feast West", "Feast West Fusion", "Fed Candy", "FeedBag", "Felice", "Fennel Magic", "Feral", "Fertilia", "Fever", "Fez", "Fiber", "Fiddler’s Fig",
  "Figure Lean", "Fink", "Fish Eye", "Fish Matrix", "Fish", " Fat and the Otter", "Fishland", "Fishstomp", "Five Bubbies", "Five O’clock Shadow", "Flambeau’s", "Flambo", "Flambo’s", "Flame Thrower Grill", "Flame Thrower’s Grill", "Flameboyant Grill", "Flange", "Flatúla", "Flew Z", "Flip Out", "Floq", "Floss and Joes", "FlotSam’s Club", "Flybar", "Flying Chaucer", "Flying Horse", "Flying Monk", "Flying Noodle", "Flying Potato", "Flying Tortoise", "Flypaper", "Fo Lita", "Folsom Bobs", "Food Caulk", "Food Chaingang", "Food Dump", "Food Frolic", "Food Haus", "Food Prompt", "Food Storm", "Foodbowl", "FoodBug", "FoodBuggy", "Fork and Dagger", "Forna", "Fort Angus", "Fort Potato", "Fran Scene", "Freakin’ Planet", "Freeze Factor", "Frelika", "Fresh Flesh", "Friendly Fire", "Fringe Factory", "Froggy Bottom", "Frolique", "Fruit Not Fries!", "Fudgement Day", "Fuel for Thought", "Funky Chicken Soup", "Fusion Historia", "Future Foods", "Future Freeze", "Fuzzy Logic", "G2-También", "Gage and Desoto", "Garden Burger Variety", "Gas Shack", "Gator Taters", "Gee Spotty", "GeekChicken", "Gelatinous Orb", "Gelatosphere", "Gene Poulet", "Genome", "Geos", "Get Ya Green Leafies", "Giggle’s", "Giotto Gelato", "Glassando", "Glassinni", "Global Gobble", "Globula", "Glossy Trotsky", "Gnome Clone", "Gnu Grounds", "Goat and Guru", "Godka", "Godzilla Pizza", "Gogol", "Goin’ South", "Goin’ to the Roadhouse", "Goldielox and Onion", "Good Dog", " Bad Dog", "Gorganic", "Gorge Us", "Gracie", "Grain Oil Ya", "Grand Scale", "Granola Fantasy Canteen", "Gray Bar", "Greaseland", "Greedy Fries and Plugs", "Green-T", "Grill to Chill", "Grits and Grace", "Grits and Greetings", "Grounds Zero", "Grunion Rum", "Guilt", "Guns & Booze", "Guru", "Guru Cricket", "Guru Planet", "Guru Smile", "Guru Too", "Hack Scene", "Half Full", "Half Life", "Haloed Grounds", "Ham Licker", "Hambone", "Hambone Martian", "Hamburger Centrifuge", "Harbin Jour", "Hash Browns and New Grounds", "Hashed Browns and New Grounds", "Hat & Goiter", "Head Cheese Head", "Healthy Stance", "Hegel’s Bagels", "Hell’s BBQ", "Herb’s Mintal Institution", "Hercules Jerky", "Here 24", "Here’s the Beef", "Hey Buddha!", "Hi Que", "HighTee", "Highway Ribbery", "Hindenburger", "Homeroom Cafe", "Horizon Sky", "Horse & Jockey", "Hot Box", "Hot Dogma", "Hot Pot", "Hot Potty", "Hot Sour and Soar", "Hot Trotsky",
  "HotSpot", "House of Chedder", "Housedown", "Howzit Go Inn", "Humburger", "Humvegain’t", "Humvegan", "Humvegan’s Hamburger Centrifuge", "Hungry Head", "Hunky Hurry", "Hurdle", "Icarus", "Ice Can", "Idetica", "Ignia", "Illustrioso", "Imperial Fire", "In Ovation", "In That Vein", "In Your Space Coffee", "Independent Pickle", "Indian Summer", "Information Aged Cheese", "inHeat", "Interknack", "Internet Bubbly", "Internet Eternity", "Into the Blueberry Holes", "Iron Bone", "Isosphere", "Italian Ice Ice Baby!", "Ivridse", "Jack the Ripper’s", "Jack.", "Jackie Diamonds", "Jalapeño Fire Waltz", "Janga Java", "Javaddiction", "Jaws", "Jeff Davis Pie", "Jelly Roll Deli", "Jellybird", "JellyBone", "Jellyfish Java", "Jen & Barry’s", "Jetsam’s Club", "Jezebel’s Joint", "Jezebel’s Juice", "Jocks and Mobsters", "Johnny Coffeebean", "Judgment Day Cafe", "Juggernaut Cafe", "Juggler’s Jig", "Juice Caboose", "Juice Jones", "Juice Knowledge", "Juice Monster", "Jujuba", "Juke London", "Juliet’s Balcony", "Julio", "Jump Jack", "Jumpstack", "Jumpstart", "Jupiter Trolley", "Jupitor Place", "Jurassic Pork", "Jute Box", "Jute Joint", "Kaku", "Karma Lhoke", "Kettlepop", "Kettletop", "Kick the Beckett", "Kilroy", "Kimono Open", "Kinetica", "King Chard", "Kiss a Donut", "Kitch Kids", "Kitchen Caboodle", "Kitty City", "Kitty McQueen", "Kiwi Herman", "Kiwi Sea", "KMG365", "Koffee", "Koffee Kat", "Krill", "Kugel’s", "Kuldip", "Kundalini’s", "La Bonne Terre", "La Concuna", "La Liz", "La Loopy", "La Zilla", "Lambastica", "Lardé", "Latte Bloomers", "Latté Prey", "Lavadome", "Lawton’s Village", "Lazy Fair", "Le Bistro de Vivre", "Le Gall", "Le Gallerie du Coq", "Le Petit Chef", "Leaf and Stalk", "Leather and Chrome", "Lectra", "Left and Right Burger", "Left Blank", "Letterback", "Leucrid", "Libida", "Life Source", "Lilly Jet Moonbeam", "Lily’s Pad", "Limozen", "Linger Foods", "Linguini Lust", "Lip Frog", "Liquid Ambassador", "Liquid Kitty", "Liquid Radiant", "Little Dostoevsky", "Little Mussolini", "Lizzie Borden’s", "Loaf Around", "Loca Mocha", "Local Motive", "Lolita Proud", "Looping Buddha", "Loopy Tuna", "Lord Chuby Cheeks", "Lord Martini", "Lost In Pizza", "Lotus Boogie", "Lotuscany", "Lounge Potato", "Love Me Rwanda", "Lox and Bandwidth", "L-Spot", "Lunch Rumi", "Lunchpad", "Lunchpod", "Lustrio", "Lyria", "Lyricalia", "Mad Beef",
  "Madam Curry", "Magma", "Magma Radiant", "Magnemo", "Maguey", "Mammy’s Yammys", "Mangelica", "Mango Mango", "Mantiquilla", "Mantis", "Mantro", "Maple Thor", "Mardi Grub", "Martha’s Rump Roast", "Marvane", "Masquerade", "Matre Deviant", "Matre Devious", "Mauve Lava", "Mauve Rocket", "Max Diablo’s", "Max Five", "Maximum Sandwich", "Mazaltov Cocktail", "McStarbucs", "Me First Cafe", "Meat Bomb", "Meat Wagon", "Meaty Boy", "Megall", "Melting Spot", "Memnonia", "Menthol", "Meow", "Meow Meow", "Meshugga Inn", "microVerse", "Milk Machine", "Millennarita", "Millennium Sandwich", "Mind Music", "Minga", "Mini Bar", "Minsk Meat", "Mint Dynasty", "Mississippi Burnin’ B.B.Q", "Mister", "Misty August Morning", "Mixers", "Mocha Loco", "Molten Tacos", "Mom’s", "Mondo Bocci", "Mongerfish", "Monisphere", "Montauk Mantra", "Mood Alter", "Moose Toe", "Moral Cowboy", "Moreganic", "Mosher", "Mother Cabrini", "Mother Flickers’ Hot Spot", "Mountain Edge", "Mr. Beans", "Mr. Demeanor’s", "Mr. Juice", "Multiple Cake", "Muscle Bar", "Mute Burger", "Mutton Chops", "My Bad", "Mystic Zilla", "Nada", "Naked Lunch", "Namedness", "Nanna Banana", "Nasdaquiri", "Nastenka", "Ndoor", "Neau Whirled", "Nectar", "Nectarine", "Neitsche Bagel", "Neitsche Bandwidth", "Neitsche Burger", "Neitsche Forest", "Neon", "Nerd", "Net Exit", "Neteria", "Netplosion", "Netur", "Neuroma", "Neutrino", "New Orlean’s Lean or New Cuisine", "New Whirled", "New York Cab", "Nibbles", "Nob Hill", "Nolo Contendre", "Norse", " Shout", " Eat & Wet", "North Quark", "Nose Music", "Nosh On", "Nosh on the Net", "Nosh Online", "Nostrilé", "Nouveau Ruckus", "Nuance", "Nuxa", "Nylon Prawn", "Obeko", "Octopus Garden", "Oedipus", "Of Corsica", "Of Mice and Mein", "Okra Winfry’s Southern Saucepan", "Okratecture", "Old Men Eat Cookies", "Olive Me", "On Golden Prawn", "On High", "On the Bar B", "On the Que", "On The Wagon", "Onazi", "One For the Road Hog", "onFire", "Onion Corporated", "Opt In", "Opticon", "Optique", "Optyk", "Or Chard", "Orb", "Orbean", "Orbeania", "Orchestrata", "Organic Cannibal", "Oronoko", "Oscillation", "Osmosis", "Oswego", "Ou Are Tu", "Oulu", "Oulu Bar", "Oulu Rocinante", "Outer Granola", "Outer Monrovia", "Ouzo Confuzo", "Ovation", "Overchurros", "Oxymagnet", "Oy Vegas", "Ozean", "Ozwall", "Paella Machine", "Paint By Numbers", "Pan Ash", "Panache", "Pang Meringue",
  "Panier Gourmet", "Pantry Planet", "Papa Jambalaya", "Papa Tart", "PaperPlastic", "Parabolic Chicken", "Partyclub", "Parvenu Porkchop", "Pass the Thyme", "Passion Palace", "Passion Pork", "Pasta la Vista", "Pastor Pizza", "Peace Meal", "Peacemeal", "PeacePipe", "Pearlessa", "Peek-A-Boo Pork", "Peer", "Peerless Dulcinea", "Pelé Monty", "Penny Arcane", "Pepperboard", "Performunch", "Peril", "Perk and Peak", "Perk n’ Smirk", "Perplexia", "Pesto Quest", "Phaedra", "Phallus’ Restaurant", "Phat Cat", "Phat City", "Phat Kettle ‘O Prawns", "Phat Transient", "Phatsie", "Pheast", "Pheast West", "Pheromonia", "Phlesh", "Phleshy", "Phobia", "Pick and Shovel", "Pickin’ & Lickin’ Chicken", "Pig and Flamethrower", "Pigzart", "Pilz", "Ping Pang", "Pipeline Internet Cafe", "Pippin", "Pirate School", "Pizza Cardinal", "Pizza Experience", "Pizzazilla", "Planet Reno", "Planet Right", "Plasti", "Plastic Planet", "Plastique", "Plato’s Crave", "Plethora", "Plexi Koogle", "Plonk", "Plum and Bone", "Plumb Bum", "Podium", "Podunk Express", "Poetry Jail", "Poifect", "Pol Pot Pizza", "Pomme de Terre de Salon", "Pomme Juan", "Poochies", "Popcorn Born", "Pork Digest", "Porque", "Port O’ Prawn", "Posh Omen", "Possum Cafe", "Potata Pathos", "Potato Constant", "Potato Pathos", "Poultry in Motion", "PowerPotato", "PowerPrawn", "Prawn and Pretzel", "Prawn Daddy", "Prawn Ghetto", "Prawn Grotto", "Prawn Kiss", "Prawn Logic", "Prawn Love", "Prawn Panic", "Prawn Perfect", "Prawn Phreak", "Prawn Power!", "Prawn Shop", "Prawn Song", "Prawn to Own", "Prawn Tong", "Prawn Utopia", "Prawnbroker", "Prawnosis", "Prawnscape", "Prawntastic", "PrawnTilly’s", "Prawnto-Go", "Prawntosaurus", "Prawnzi Scheme", "Pray for Latté", "Precious Potato", "Pre-fab Burritos", "PreSlicely", "Prism", "Prosperity Cafe", "Psychic Pizza", "Psycho Kitty", "Psychotrone", "Pudding Queen", "Pulze", "Puppet Show", "Purb", "Qiao", "Qimonk", "Qoolqi", "Qot", "Que", "Que It Up", "Que West", "Quencha", "Questionable Behaivor", "Quetzal Logic", "Quick Licks", "Quickie Lickie", "Quincy Jonestown", "Quintavi", "Quiza", "Quizmo", "Quizmu", "Qule", "Rabbit Lounge", "Rabid Rabbit", "Radiant Earth", "Radiant Fresh", "Radio Certainty", "Railroadies", "Raja", "Ranch Arson", "Rancho Django", "Rancho One Bowl", "Razz Barney", "Read and Feed", "Rebuy Steak", "Red Nerve", "Red Rice and Beanery", "Repo",
  "Rest In Pizza", "Retro", "Retro Cocoa", "Retro Plum", "Retro Ready", "Retro Rococo", "Revenue", "Rib Rage", "Rined and Dined", "Riot Grrill", "Rippers", "Road Krill", "Road Rage Truck Stop", "Roadkill Penguin", "Rockyard", "Rococo", "Romeo Mauve", "Romuelle", "Roosterville", "Rough Age", "Round the World Coffee", "Royal Lush", "Rubber Slapjack", "Ruby Suite", "Rummy’s", "Rump", "Rump’s", "Runt and Rove", "Saguaro", "Salsa Closet", "Salud!", "Salvador", "Samopolis", "Samsam", "Sandu", "Sara Soda", "Sasskatchy!", "Satiance", "Sausage", "Sausage Machine", "Save the Date", "Savoree", "Scaffold", "Scarlet O’Hara’s House of Pies", "Scene Serene", "Scrap Opera", "Sea Edge", "Sea Quinn", "Sea Windsor", "Seafood Seranade", "SeaSky", "Sea-Sought", "Sequin", "Serendipity", "Seven Scentric", "Sevére", "Shakedown", "Shame Bait", "Shangrilatte", "Share Reef", "Sheepsville", "Shellac and Hammock", "Shitaki", "Shoots and Spears", "Silkia", "Silver of Mine", "Simply Gorge Us", "Sindrome", "Sinus", "Skinny’s Drive Inn", "Slam Banjo", "SlapJack", "Slashed Chicken", "Slingshot", "Slope", "Slow & Pulpy", "Slow Kitchen", "Slush Fund", "Smash Pop", "Smoochy Goochy Bar", "Snack-A-Poo", "Snail", " Slug and Roach", "Snappers", "Snark Bite", "Snatch Shacks", "So So Toboso", "Sobriety Checkpoint", "Soda Fonze", "Soft Shark", "Sonata Fast", "Soprano", "Soul Depot", "Soul Kitch", "Soul Kitsch", "Soul Massage", "Soul Potato", "Soup Du Tour", "Soup Opera", "Souper Bowl", "Soup-In", "Souprise", "South Mouth", "South Mouth Southern Mash", "South South South", "Souther Proper", "Southern Mash", "Southern Soy", "Space Pizza Initiative", "Spam and Deliver", "Spamo", "Spanish Harem", "Spavin", "Sphere", "Spillway Tavern", "Splice", "Splinter", "Splinx", "Sponge", "Sponge Puff", "Sponge Taco", "Spontaneous Combustion", "Spoonbeam", "Spooncake", "Squish", "Stand By Your Manicotti", "Star Sixty Nine", "Station House", "Steak And Eddy’s", "Steak And Shake", "Steak Out", "Stone’s Throw", "Storybook Omelette", "Strip Drag", "Stucco", "Stud Fee", "Stuff Your Face", "Sub Groupie", "Subterfuse", "Subterfusion", "Sugar and Price", "Sugar and Slice", "Sugar Dog", "Sugar Maestro", "Sugarpine", "Summer of Prawns", "Sunbright Swallow", "Sunsight", "Super Ciao", "Surf and Scarf", "Sushi Logic", "Sushi Spam", "Sustenza", "SUVegan", "Swap Meat", "Sweet Beat",
  "Sweet Home AlabaMama’s Cookin’", "Swift Pickles", "Swing Bing", "Swingle", "Symbiotica", "Symphonics", "Taco Bail", "Taco Bale", "Taco Bear", "Taco Boil", "Taco Forest", "Taco Hell", "Taco Logic", "Tail of the Snail", "Talendula", "Tandoori Vittles", "Tango Bango", "Tango Latté", "Tank Full", "Tarmac", "Taste Makes Waist", "Taste Tease", "Taxi Dance", "Taz", "Té Tango", "Teaky Freaky", "Tele-Taco", "Ten Percent Down", "Tequila Mockingbird", "Terrago", "Terrapod", "Tersanki", "Thai Cheetos", "Thalia", "Thanksgiving Pheast", "The 4AM Club", "The American Corn Dog Council", "The Backyard Chef", "The Bagel Barn", "The Bald Trumpet", "The Bar B Quest", "The Beef Plank", "The Bid and Ask", "The Bid and the Ask", "The Big Smoothie", "The Bind", "The Bison Wipe", "The Blackened Gridle", "The Blue Pig", "The Bovine", "The Brime", "The Cajun’s Kitchen", "The Carolina Kitch-Inn", "The Catfish Cathouse", "The Chickery", "The Chute", "The Circus", "The Coal Tender", "The Coffee Funnel", "The Coffee Grind", "The Coffee Institute", "The Coffee Pipe", "The Columner Pad", "The Crawfish Cantina", "The Crazy Crawfish", "The Crumbery", "The Crustacean", "The Dapper Mongoose", "The Defense Department", "The Dining Car", "The Dollop", "The Easy Seed", "The Employee Lounge", "The Enchanted Garden", "The Existential Buddhist", "The Featured Artichoke", "The Flight", "The Flightless Bird", "The French Loaf", "The Germ Pot", "The Glassy Eye", "The Go Lucky", "The Handle Bar", "The Hole in One", "The Hoof and Snout", "The Hum and Tush Inn", "The In Road Cafe", "The Jambalaya Joint", "The Jasmine", "The Jolt", "The Jones", "The Joy of Prawns", "The Land of Meat", "The Latvian Cat", "The Lemonade Stand", "The Light Stuff", "The Lilly Pod", "The Lollytart", "The Lunch", "The Lunchroom", "The Magnificent Muffuletta", "The Maine Ingredient", "The Mardi Gras Menu", "The Master Flan", "The Meat Gallery", "The Mocha", "The Mouth Piece", "The Mug Shot", "The Nervous Tick", "The Nine", "The One-Up", "The Orb", "The Organic Cannibal", "The Oz", "The Panda Factory", "The Paper Dragon", "The Pope’s Nose", "The Potato Constant", "The Practical Pig", "The Prawn and Pig", "The Prawn and the Poi", "The Prawn Shop", "The Prawns Age", "The Rail Yard", "The Ramen Shamen", "The Raspy Magpie", "The reBAR", "The Rib Implosion", "the Rig", "The Robillet Roadhouse",
  "The Royal Tease", "The Running Monk", "The Sacrificial Clam", "The Salad Factory", "The Salsa Closet", "The Salsa Project", "The Salty Pigeon", "The Sanguine", "The Scallion Galleon", "The Sedge", "The Shank and Maror", "The Source", "The Southern Spread", "The Spigot", "The Spinach Armada", "The Spirit", "The Sports Barge", "The Spring", "The Stir", "The Stool Pigeon", "The Straight and Narrow", "The Swine Flew", "The Texas Coleslaw Massacre", "The Thermal Underground", "The Thirsty Leech", "The Tidal Maximum", "The Tie and Spike", "The Truck Stops Here", "The Tumbler and the Twist", "The Vegetable Factory", "The Velvet Snail", "The Wedge", "The Wellborne", "The West Blank", "Thirst ‘n Howl", "Thought For Food", "Thread the Noodle", "Tiblisi", "Tickle’s", "Tiki Taco", "Tildé", "Time For Coffee", "Time Squares", "Ting Tang’s", "Tivondra", "Todd’s May Hall", "Toggle", "Tokyo Yo", "Tomatofish", "Tom’s Ton ‘O Prawns", "Tone Taco", "Tongue in Chic", "Tonque", "Too Chez", "Topeeka Bound", "Topper", "Torpor Ritz", "Tort Resort", "Tostada Mondata", "Tostada Oblongata", "Towering Baba", "Toxix", "Track 9", "Trademark Cafe", "Trasola", "Triage", "Troché", "Troll your own", "Trollery", "Trophyplex", "Tropican-do", "Tropicandy", "Tropicava", "Tropolis", "Trout Alley", "True Faux", "Tsunami Tsandwich", "Tsunamia", "Tucson’s Cantina", "Tuesday’s Chicken", "Tuna Bar", "Tuna World", "Tunnel of Coffee", "Turduck and Cover", "Turkey Biscotti", "Turnabout", "Turnling", "Turnpike", "Tuva", "Twiist", "Uberlux", "UberPrawn", "Umbria", "Umpa Lava", "Uncle Bulgaria", "Undown", "Uni Bar", "Unit Socrates", "Up Gusty", "Uppsalami", "UpsZcale", "Urna", "Vacua", "Vagraunt", "Valpreal", "Van Winkles", "Vanity Fare", "Varmetta", "Varqua", "Vegan Cool", "Veggie Frown", "VegiGate", "Vegone", "Vegoon", "Venetia", "Venetian Sack", "Venial Sin", "Vilnius", "Viperia", "Virgil and Stardust", "Vitamin Seed", "Viune", "Vizia", "Vodka", "Voodoo Vat", "Voodude Ranch", "Voodulce", "Vortex Mex", "Waffle Stomper", "Wanton Won Ton", "Wasabi Fresh", "Wasabi Good", "Wasabi Happy", "Wasabi Junction", "Water Back", "Waugh Waugh Waugh", "Web Wash", "Where it’s At Shack", "Whip and Throttle", "Whisper Cafe", "White Dove", "Wig", "Wire House", "Wok of the Ages", "Wolf and Chaser", "Wolfgang", "Word Salad", "Work Flirt", "Wren", "Xiix", "Xth", "Y2 Kiki", "Y2K-O",
  "Yakima Burger", "Yangtze Doodle", "Yearlove", "Yellow Horse", "Yes Sir Rotisserie", "Yo Yo Tokyo", "Yo Yo’s Place", "Yogurt Transformation", "You’ve Got Prawns!", "Yuppie Slum", "Yurture", "Zamora", "Zasu", "Zen BBQ", "Zen Shin", "Zenka", "Zenlighten", "Zentia", "Zentricity", "Zilencio", "Zilla", "Zilla Place", "Zillaberry", "Zilladelphia", "Zilla’s Scents of Cheese", "Zinaidia", "Zinful", "Zolarity", "Zonia", "Zoo Lulu", "Zoo Stew", "Zounds", "Zuke", "Zulu", "Zutros"];

const words = ['regret', 'curve', 'level', 'secret', 'classy', 'handsome', 'middle', 'trousers', 'smell', 'six', 'quirky', 'motion', 'miniature', 'stroke', 'moldy', 'manage', 'clear', 'statuesque', 'squeamish', 'rude', 'deadpan', 'frightening', 'gun', 'windy', 'slave', 'bikes', 'macabre', 'living', 'follow', 'typical', 'difficult', 'apathetic', 'badge', 'handy', 'test', 'cheer', 'chalk', 'close', 'cloudy', 'brother', 'scrawny', 'skirt', 'line', 'cars', 'colossal', 'jazzy', 'aggressive', 'part', 'fail', 'freezing', 'superb', 'remain', 'arrest', 'elderly', 'territory', 'perform', 'evasive', 'sponge', 'cut', 'store', 'sense', 'industry', 'relation', 'lackadaisical', 'pipe', 'abrupt', 'camp', 'preserve', 'fluttering', 'gaping', 'arm', 'match', 'society', 'tan', 'tall', 'drop', 'copy', 'groan', 'weather', 'chin', 'cactus', 'phobic', 'untidy', 'highfalutin', 'new', 'glistening', 'comb', 'witty', 'unsightly', 'ceaseless', 'callous', 'crime', 'longing', 'selective', 'vacuous', 'bubble', 'whimsical', 'men', 'relax', 'beginner', 'delirious', 'ubiquitous', 'cellar', 'rinse', 'poke', 'godly', 'ink', 'dance', 'railway', 'kettle', 'bloody', 'advise', 'resonant', 'tomatoes', 'soup', 'rain', 'grandmother', 'like', 'thing', 'card', 'shaky', 'stone', 'finger', 'utopian', 'exuberant', 'clean', 'crown', 'parched', 'adventurous', 'lucky', 'great', 'branch', 'flower', 'absurd', 'fix', 'savory', 'glib', 'gate', 'ticket', 'attack', 'protest', 'ring', 'wide - eyed', 'elfin', 'kiss', 'slim', 'zany', 'hurt', 'rainy', 'cemetery', 'eight', 'dull', 'increase', 'taste', 'thaw', 'flavor', 'blink', 'children', 'brass', 'day', 'outrageous', 'throat', 'embarrassed', 'unused', 'interrupt', 'pin', 'phone', 'education', 'crowded', 'curious', 'reduce', 'plant', 'respect', 'memory', 'jail', 'agreement', 'play', 'paint', 'rob', 'pricey', 'wonder', 'cracker', 'sick', 'eggnog', 'obey', 'canvas', 'hook', 'roof', 'merciful', 'automatic', 'tedious', 'beds', 'airplane', 'exotic', 'habitual', 'open', 'special', 'jobless', 'debonair', 'punishment', 'continue', 'unequal', 'billowy', 'wistful', 'applaud', 'humorous', 'saw', 'train', 'load', 'eager', 'kitty', 'insurance', 'snake', 'picayune', 'discreet', 'bike', 'planes', 'ignorant', 'pancake', 'undress', 'juvenile', 'innate', 'transport', 'kindly', 'scrub', 'spare', 'river', 'risk', 'apparel', 'type', 'laughable', 'endurable', 'book', 'famous', 'soothe', 'linen', 'ladybug', 'abusive', 'arch', 'poison', 'decisive', 'fierce', 'obeisant', 'whip', 'impartial', 'cry', 'equal', 'extra - small', 'side', 'alcoholic', 'married', 'shut', 'listen', 'creepy', 'metal',
  'proud', 'yard', 'pickle', 'sofa', 'smash', 'team', 'brush', 'toothbrush', 'judicious', 'foamy', 'back', 'juice', 'nutty', 'mellow', 'misty', 'sign', 'acrid', 'curved', 'tender', 'nail', 'outgoing', 'repulsive', 'name', 'ask', 'building', 'birds', 'watch', 'bewildered', 'feeble', 'caption', 'free', 'absorbing', 'stale', 'tremendous', 'stiff', 'guide', 'branch', 'energetic', 'hideous', 'try', 'spectacular', 'good', 'needless', 'warm', 'food', 'fish', 'spicy', 'calculate', 'limping', 'beneficial', 'dolls', 'sweater', 'writer', 'defiant', 'superficial', 'suit', 'whip', 'limit', 'giant', 'decorate', 'arrange', 'move', 'produce', 'dinner', 'pat', 'fireman', 'cheerful', 'adaptable', 'debt', 'representative', 'downtown', 'share', 'torpid', 'gifted', 'room', 'seat', 'grieving', 'deafening', 'reason', 'announce', 'van', 'dusty', 'drown', 'taboo', 'rural', 'peel', 'sink', 'ignore', 'marked', 'extra - large', 'rabbit', 'lowly', 'order', 'innocent', 'gullible', 'tap', 'awake', 'shiver', 'rule', 'amuse', 'trail', 'garrulous', 'imagine', 'object', 'bow', 'interfere', 'melted', 'shop', 'impulse', 'horse', 'space', 'cautious', 'fairies', 'flawless', 'imminent', 'telling', 'window', 'condemned', 'lunch', 'cushion', 'partner', 'swing', 'scratch', 'loose', 'synonymous', 'expand', 'languid', 'modern', 'exciting', 'agonizing', 'fabulous', 'admire', 'ajar', 'rescue', 'alive', 'basketball', 'taste', 'winter', 'texture', 'far - flung', 'subdued', 'talk', 'fanatical', 'summer', 'gaudy', 'actually', 'shock', 'fruit', 'crazy', 'drawer', 'dinosaurs', 'camera', 'straw', 'pear', 'owe', 'overwrought', 'trite', 'jail', 'harm', 'scatter', 'curve', 'loaf', 'moor', 'reign', 'ski', 'damp', 'earth', 'pen', 'change', 'clear', 'borrow', 'retire', 'use', 'wish', 'cap', 'noiseless', 'mundane', 'tramp', 'account', 'home', 'frequent', 'tacky', 'real', 'request', 'kittens', 'step', 'pail', 'wealth', 'interest', 'clammy', 'door', 'magic', 'pretend', 'edge', 'unkempt', 'exultant', 'preach', 'toe', 'books', 'bent', 'twist', 'piquant', 'incompetent', 'potato', 'sour', 'ratty', 'wicked', 'enormous', 'trust', 'milk', 'seed', 'sharp', 'eggs', 'burst', 'fat', 'rush', 'raise', 'noxious', 'intend', 'aboard', 'reply', 'skate', 'foot', 'tank', 'waiting', 'sedate', 'charming', 'shake', 'impolite', 'command', 'slimy', 'wood', 'tree', 'breathe', 'ruin', 'park', 'greedy', 'mark', 'disagreeable', 'hammer', 'tight', 'babies', 'drip', 'desk', 'strap', 'price', 'wasteful', 'guiltless', 'momentous', 'month', 'charge', 'rejoice', 'cherry', 'corn', 'cough', 'mint', 'internal', 'broken', 'remember', 'hesitant', 'spark', 'workable',
  'rot', 'medical', 'nifty', 'chivalrous', 'wrist', 'furry', 'enjoy', 'happen', 'hallowed', 'appear', 'cover', 'fearless', 'jeans', 'agree', 'ill - fated', 'uptight', 'cover', 'fallacious', 'shiny', 'uttermost', 'breakable', 'squalid', 'cold', 'unarmed', 'funny', 'half', 'competition', 'disarm', 'berserk', 'pump', 'dispensable', 'zesty', 'frighten', 'condition', 'run', 'instinctive', 'spooky', 'harbor', 'race', 'flock', 'unnatural', 'flow', 'yummy', 'ashamed', 'tiresome', 'seal', 'vivacious', 'aboriginal', 'miss', 'swanky', 'verdant', 'keen', 'throne', 'few', 'market', 'hollow', 'direction', 'best', 'night', 'action', 'gentle', 'rice', 'picture', 'snow', 'house', 'abortive', 'property', 'rabbits', 'bottle', 'obtainable', 'fall', 'finger', 'bashful', 'wriggle', 'develop', 'bomb', 'fair', 'quill', 'psychotic', 'improve', 'spiky', 'prose', 'adamant', 'rate', 'work', 'cuddly', 'approval', 'rustic', 'add', 'cherries', 'lake', 'beef', 'year', 'leg', 'animal', 'reproduce', 'murder', 'unique', 'interest', 'tie', 'well - made', 'double', 'brick', 'ground', 'rabid', 'yielding', 'soft', 'icicle', 'puzzling', 'stew', 'art', 'book', 'knowing', 'spy', 'odd', 'tub', 'erratic', 'kneel', 'watery', 'pine', 'cup', 'thank', 'plant', 'nine', 'hop', 'wiggly', 'crate', 'fill', 'lighten', 'skip', 'cool', 'disgusted', 'comfortable', 'domineering', 'worm', 'true', 'robust', 'complete', 'lock', 'maniacal', 'daughter', 'brawny', 'meaty', 'strong', 'ocean', 'fit', 'wink', 'therapeutic', 'hose', 'trace', 'carve', 'mountainous', 'tail', 'destruction', 'march', 'powerful', 'battle', 'optimal', 'cows', 'delicate', 'control', 'scarf', 'flashy', 'imperfect', 'soak', 'brake', 'trade', 'pink', 'tense', 'mind', 'premium', 'high', 'position', 'salty', 'furniture', 'subtract', 'grate', 'actor', 'peace', 'dad', 'trees', 'jolly', 'magnificent', 'flower', 'cake', 'white', 'silk', 'glamorous', 'bustling', 'general', 'authority', 'drop', 'hate', 'strengthen', 'symptomatic', 'bushes', 'mixed', 'play', 'tasty', 'power', 'liquid', 'awful', 'exchange', 'scientific', 'grin', 'cable', 'accessible', 'ban', 'zealous', 'hungry', 'drab', 'bath', 'ill', 'approve', 'rambunctious', 'minister', 'old', 'anger', 'neat', 'air', 'psychedelic', 'rightful', 'lethal', 'turn', 'five', 'license', 'gabby', 'stuff', 'imaginary', 'illustrious', 'guttural', 'start', 'basin', 'bitter', 'rigid', 'necessary', 'pleasure', 'fertile', 'ten', 'racial', 'surprise', 'radiate', 'look', 'crabby', 'tiny', 'efficacious', 'feeling', 'guess', 'aloof', 'wail', 'protect', 'childlike', 'support', 'calculator', 'suggest', 'gruesome', 'letter', 'sea',
  'cause', 'right', 'electric', 'riddle', 'top', 'splendid', 'word', 'abrasive', 'early', 'heal', 'playground', 'knit', 'aromatic', 'carry', 'tasteless', 'miscreant', 'ambiguous', 'desire', 'satisfying', 'houses', 'toothpaste', 'flag', 'hand', 'melt', 'violent', 'jewel', 'water', 'hands', 'orange', 'versed', 'trick', 'flimsy', 'question', 'chief', 'tongue', 'exist', 'recess', 'overflow', 'gamy', 'legal', 'secretary', 'pedal', 'class', 'argue', 'fumbling', 'deserted', 'touch', 'seemly', 'bizarre', 'count', 'repair', 'sisters', 'sound', 'pinch', 'nimble', 'healthy', 'earthy', 'theory', 'deceive', 'distribution', 'sleep', 'wander', 'spiders', 'known', 'drunk', 'husky', 'physical', 'film', 'float', 'vein', 'temper', 'smoke', 'smell', 'appreciate', 'serve', 'breezy', 'moon', 'scene', 'whisper', 'excuse', 'quicksand', 'things', 'reaction', 'stream', 'carpenter', 'hair', 'sail', 'expert', 'righteous', 'meal', 'swift', 'grip', 'car', 'telephone', 'boiling', 'stupid', 'file', 'neighborly', 'whistle', 'experience', 'entertain', 'narrow', 'sprout', 'robin', 'vacation', 'open', 'pretty', 'slope', 'well to do', 'dysfunctional', 'sudden', 'pray', 'rainstorm', 'pan', 'literate', 'numberless', 'terrific', 'remarkable', 'search', 'enter', 'prepare', 'materialistic', 'omniscient', 'natural', 'land', 'instruct', 'stain', 'fretful', 'governor', 'cheat', 'lavish', 'surround', 'abiding', 'please', 'morning', 'deep', 'machine', 'plan', 'hammer', 'government', 'majestic', 'dry', 'bomb', 'hurried', 'weigh', 'tightfisted', 'gigantic', 'list', 'salt', 'distinct', 'short', 'leather', 'detailed', 'frightened', 'grumpy', 'tense', 'explode', 'bubble', 'wire', 'toad', 'suit', 'unite', 'capricious', 'question', 'abnormal', 'week', 'chemical', 'nut', 'orange', 'impossible', 'talented', 'string', 'encouraging', 'economic', 'sack', 'heat', 'lip', 'uninterested', 'trade', 'magical', 'spotless', 'club', 'unwieldy', 'squeak', 'wry', 'recondite', 'minor', 'strip', 'steady', 'identify', 'flap', 'release', 'bless', 'record', 'talk', 'hum', 'uncle', 'poor', 'wash', 'ear', 'material', 'stocking', 'sordid', 'goofy', 'boundless', 'water', 'complain', 'defective', 'profuse', 'ray', 'divide', 'purpose', 'fascinated', 'hand', 'back', 'thirsty', 'ordinary', 'bury', 'bells', 'girls', 'pour', 'functional', 'balance', 'station', 'aback', 'slow', 'fluffy', 'cabbage', 'zippy', 'diligent', 'blush', 'cent', 'knot', 'transport', 'beam', 'blow', 'pack', 'crook', 'dog', 'tug', 'lumpy', 'afford', 'second - hand', 'military', 'hall', 'astonishing', 'behave', 'rapid', 'honey', 'cats', 'strange', 'admit', 'flagrant',
  'halting', 'doubtful', 'screw', 'teeny - tiny', 'detail', 'truck', 'mature', 'sky', 'lamp', 'abaft', 'quilt', 'claim', 'waggish', 'box', 'wrong', 'contain', 'yarn', 'supply', 'clap', 'mass', 'super', 'enchanted', 'hilarious', 'puffy', 'wacky', 'observe', 'fine', 'library', 'crash', 'fast', 'shrill', 'didactic', 'hope', 'abandoned', 'graceful', 'quiet', 'screw', 'assorted', 'faithful', 'dreary', 'important', 'grape', 'knowledgeable', 'attend', 'amused', 'outstanding', 'supreme', 'woman', 'chubby', 'abstracted', 'worthless', 'horses', 'probable', 'apologise', 'doubt', 'fold', 'snatch', 'bright', 'hour', 'sincere', 'whispering', 'late', 'lively', 'substance', 'sound', 'nest', 'help', 'long - term', 'view', 'fresh', 'zonked', 'shade', 'shelf', 'digestion', 'wing', 'loutish', 'dam', 'join', 'axiomatic', 'polish', 'trouble', 'end', 'pig', 'private', 'pets', 'one', 'dime', 'dizzy', 'trot', 'buzz', 'whistle', 'cave', 'wash', 'certain', 'blind', 'quince', 'train', 'present', 'substantial', 'wealthy', 'fence', 'tease', 'vase', 'mask', 'woozy', 'little', 'glossy', 'confuse', 'lock', 'spring', 'shrug', 'language', 'adhesive', 'waste', 'receptive', 'north', 'brave', 'thoughtful', 'obsolete', 'painful', 'work', 'smile', 'escape', 'spiffy', 'serious', 'fear', 'harass', 'ultra', 'earn', 'joyous', 'thread', 'dirt', 'sheep', 'tasteful', 'pop', 'guarded', 'cloth', 'knock', 'spill', 'drag', 'jumbled', 'illegal', 'capable', 'cattle', 'tricky', 'glorious', 'terrible', 'accept', 'need', 'separate', 'brown', 'testy', 'embarrass', 'star', 'blood', 'face', 'frail', 'quiver', 'raspy', 'tangy', 'grotesque', 'disgusting', 'vigorous', 'afraid', 'use', 'weight', 'wave', 'public', 'sigh', 'muddled', 'political', 'elegant', 'voiceless', 'compare', 'oranges', 'waves', 'introduce', 'laugh', 'history', 'waste', 'basket', 'tame', 'plug', 'want', 'reading', 'plough', 'absorbed', 'pull', 'parcel', 'organic', 'destroy', 'abashed', 'bore', 'avoid', 'rotten', 'belief', 'offend', 'faulty', 'sock', 'lonely', 'dust', 'board', 'suggestion', 'male', 'stupendous', 'useful', 'dangerous', 'toy', 'well - off', 'page', 'green', 'jaded', 'drum', 'join', 'obtain', 'stare', 'mend', 'shirt', 'black', 'damaging', 'warlike', 'rely', 'befitting', 'lyrical', 'stop', 'hapless', 'roomy', 'easy', 'holiday', 'muddle', 'penitent', 'redundant', 'frogs', 'breath', 'polite', 'volcano', 'rain', 'panoramic', 'teeth', 'smart', 'mourn', 'uncovered', 'grey', 'man', 'walk', 'pointless', 'jar', 'cute', 'invention', 'passenger', 'cluttered', 'pocket', 'like', 'skin', 'sneaky', 'steer', 'cooing', 'road', 'bump', 'makeshift', 'homely',
  'haunt', 'petite', 'sleepy', 'notebook', 'tickle', 'cagey', 'remind', 'unadvised', 'caring', 'judge', 'dry', 'heartbreaking', 'shape', 'chilly', 'dynamic', 'beg', 'nest', 'creator', 'large', 'tough', 'bouncy', 'umbrella', 'store', 'grubby', 'voracious', 'decorous', 'advertisement', 'delightful', 'hospital', 'field', 'receive', 'minute', 'cross', 'point', 'stamp', 'bare', 'wild', 'believe', 'overrated', 'light', 'hang', 'reflect', 'rail', 'nappy', 'seashore', 'inexpensive', 'concentrate', 'cakes', 'spiritual', 'lace', 'reward', 'oil', 'visitor', 'hook', 'knife', 'detect', 'title', 'tired', 'eye', 'quack', 'guard', 'scandalous', 'spoon', 'warn', 'needle', 'increase', 'willing', 'mighty', 'bed', 'amuck', 'average', 'thunder', 'crib', 'fuzzy', 'alert', 'cause', 'group', 'quaint', 'decay', 'sneeze', 'wind', 'regular', 'town', 'inform', 'sidewalk', 'snails', 'unbiased', 'unbecoming', 'grade', 'save', 'print', 'bored', 'gusty', 'lacking', 'rub', 'rock', 'neck', 'stage', 'bawdy', 'rake', 'panicky', 'prick', 'onerous', 'abject', 'tame', 'balance', 'flowery', 'unruly', 'wise', 'crowd', 'guitar', 'permit', 'broad', 'ugliest', 'trip', 'examine', 'dead', 'division', 'doctor', 'combative', 'sugar', 'boat', 'sack', 'industrious', 'monkey', 'bell', 'harsh', 'hissing', 'push', 'mine', 'tour', 'confess', 'refuse', 'toothsome', 'doll', 'jagged', 'bumpy', 'near', 'rhythm', 'nondescript', 'womanly', 'icy', 'ducks', 'wobble', 'wipe', 'army', 'kaput', 'boast', 'brash', 'happy', 'value', 'ahead', 'powder', 'unwritten', 'land', 'yoke', 'same', 'statement', 'clumsy', 'rings', 'attract', 'lively', 'friendly', 'acceptable', 'ants', 'delay', 'ship', 'dislike', 'knot', 'mean', 'disagree', 'hard', 'cast', 'historical', 'friends', 'upbeat', 'marry', 'look', 'lettuce', 'spray', 'compete', 'meddle', 'lush', 'slow', 'daffy', 'pushy', 'tumble', 'demonic', 'gleaming', 'boil', 'chop', 'naive', 'deer', 'stitch', 'heady', 'bucket', 'measure', 'agreeable', 'paltry', 'worry', 'argument', 'shy', 'hospitable', 'story', 'record', 'first', 'blot', 'aftermath', 'end', 'collect', 'arithmetic', 'switch', 'old - fashioned', 'expensive', 'pie', 'perfect', 'sturdy', 'spoil', 'connection', 'profit', 'flight', 'wandering', 'unhealthy', 'damaged', 'toys', 'suppose', 'scarecrow', 'nervous', 'secretive', 'undesirable', 'overjoyed', 'glow', 'yell', 'soda', 'tidy', 'crush', 'moan', 'jittery', 'addicted', 'various', 'crack', 'future', 'grass', 'plane', 'fold', 'laborer', 'concern', 'rebel', 'vegetable', 'accidental', 'colour', 'kindhearted', 'periodic', 'tenuous', 'dependent', 'employ', 'tearful', 'infamous', 'succeed', 'separate',
  'scale', 'ablaze', 'blue', 'valuable', 'sort', 'island', 'queue', 'vessel', 'scorch', 'wait', 'tin', 'dress', 'nod', 'unusual', 'rock', 'ethereal', 'tray', 'overt', 'grain', 'coil', 'mountain', 'tempt', 'dramatic', 'ossified', 'earthquake', 'laugh', 'spot', 'brief', 'stereotyped', 'juicy', 'meat', 'iron', 'boundary', 'move', 'wet', 'youthful', 'calendar', 'notice', 'previous', 'ball', 'disturbed', 'calculating', 'wide', 'injure', 'realise', 'silent', 'point', 'growth', 'snow', 'attack', 'sloppy', 'wine', 'fork', 'stay', 'consider', 'melodic', 'wrathful', 'elbow', 'development', 'pollution', 'coil', 'lie', 'chess', 'launch', 'purring', 'unknown', 'tip', 'kick', 'bear', 'quarter', 'unsuitable', 'route', 'fancy', 'person', 'cowardly', 'fantastic', 'pigs', 'call', 'arrogant', 'wool', 'tart', 'degree', 'knee', 'many', 'nauseating', 'baseball', 'untidy', 'slip', 'correct', 'desert', 'dirty', 'wanting', 'conscious', 'interesting', 'test', 'foolish', 'fowl', 'lovely', 'plantation', 'can', 'obsequious', 'underwear', 'troubled', 'straight', 'reminiscent', 'dream', 'pick', 'two', 'attempt', 'baby', 'warm', 'mug', 'closed', 'decision', 'range', 'effect', 'suck', 'scary', 'pencil', 'plate', 'coast', 'used', 'ritzy', 'abhorrent', 'long', 'bat', 'silent', 'grandiose', 'harmonious', 'oatmeal', 'servant', 'mate', 'better', 'humor', 'way', 'engine', 'angry', 'descriptive', 'tested', 'dock', 'shallow', 'haircut', 'force', 'fool', 'spark', 'marvelous', 'bruise', 'precious', 'upset', 'settle', 'shock', 'birthday', 'nasty', 'crow', 'spurious', 'thin', 'brainy', 'chase', 'sheet', 'skinny', 'thirsty', 'excited', 'annoyed', 'love', 'low', 'stir', 'airport', 'round', 'country', 'coal', 'grease', 'recognise', 'irate', 'fry', 'bat', 'concerned', 'gray', 'stamp', 'noise', 'bolt', 'mark', 'shade', 'chunky', 'colorful', 'intelligent', 'changeable', 'judge', 'lopsided', 'grateful', 'business', 'juggle', 'shave', 'level', 'succinct', 'lamentable', 'steam', 'unfasten', 'excellent', 'delight', 'parsimonious', 'helpful', 'resolute', 'cute', 'selection', 'welcome', 'trick', 'far', 'tiger', 'tent', 'smash', 'analyse', 'trip', 'confused', 'scold', 'unlock', 'relieved', 'solid', 'heat', 'madly', 'greasy', 'fearful', 'unable', 'shivering', 'curl', 'dapper', 'roasted', 'expect', 'squirrel', 'mother', 'busy', 'color', 'alluring', 'discover', 'dear', 'guarantee', 'left', 'shop', 'volleyball', 'lame', 'exclusive', 'drain', 'moaning', 'chance', 'songs', 'snore', 'scissors', 'volatile', 'flood', 'clip', 'time', 'creature', 'wish', 'devilish', 'acoustic', 'last', 'twist', 'activity', 'bead', 'turn', 'last', 'check',
  'pause', 'vast', 'simplistic', 'feigned', 'aware', 'duck', 'dust', 'office', 'nonstop', 'anxious', 'trains', 'bag', 'clover', 'possessive', 'gratis', 'clean', 'kiss', 'permissible', 'camp', 'irritating', 'spade', 'sore', 'teeny', 'fasten', 'woebegone', 'questionable', 'four', 'provide', 'yawn', 'ice', 'offbeat', 'birth', 'fax', 'flesh', 'roll', 'remove', 'cart', 'return', 'form', 'religion', 'rule', 'steep', 'mushy', 'crack', 'cough', 'advice', 'ruddy', 'coach', 'company', 'plants', 'educated', 'deliver', 'coordinated', 'faint', 'acidic', 'current', 'donkey', 'grandfather', 'snakes', 'possible', 'vague', 'mute', 'rhetorical', 'coach', 'pizzas', 'massive', 'protective', 'fixed', 'whine', 'hug', 'glove', 'murky', 'alarm', 'dogs', 'ludicrous', 'complete', 'thick', 'paddle', 'violet', 'rough', 'bounce', 'stem', 'note', 'shoes', 'care', 'scattered', 'craven', 'need', 'wrap', 'incredible', 'egg', 'queen', 'heap', 'complex', 'tooth', 'mice', 'wretched', 'weak', 'quickest', 'invite', 'quiet', 'hateful', 'adjoining', 'learned', 'handsomely', 'belligerent', 'tow', 'practise', 'stitch', 'existence', 'cloistered', 'floor', 'amazing', 'weary', 'school', 'pale', 'ripe', 'evanescent', 'useless', 'animated', 'request', 'deserve', 'repeat', 'smoke', 'spell', 'cheap', 'unpack', 'sail', 'bathe', 'delicious', 'sad', 'visit', 'inquisitive', 'third', 'voyage', 'allow', 'travel', 'smiling', 'wall', 'shoe', 'fear', 'reflective', 'mine', 'unaccountable', 'sniff', 'turkey', 'possess', 'tire', 'placid', 'greet', 'worried', 'coat', 'farm', 'learn', 'paper', 'burn', 'scream', 'aquatic', 'burly', 'whirl', 'describe', 'friend', 'trucks', 'mammoth', 'gather', 'trouble', 'curly', 'fire', 'slippery', 'quarrelsome', 'pathetic', 'money', 'decide', 'invent', 'appliance', 'uneven', 'spiteful', 'homeless', 'bite', 'boorish', 'cure', 'hate', 'vanish', 'amount', 'rare', 'crawl', 'uppity', 'committee', 'credit', 'dare', 'love', 'defeated', 'start', 'giraffe', 'utter', 'name', 'forgetful', 'flowers', 'communicate', 'connect', 'cultured', 'shelter', 'place', 'time', 'part', 'x - ray', 'multiply', 'lazy', 'null', 'frame', 'square', 'border', 'elite', 'daily', 'found', 'simple', 'suspect', 'thinkable', 'acid', 'joke', 'vulgar', 'challenge', 'science', 'writing', 'push', 'voice', 'pumped', 'heavy', 'arrive', 'harmony', 'prefer', 'hobbies', 'envious', 'force', 'post', 'measure', 'nerve', 'oafish', 'maid', 'screeching', 'quartz', 'mindless', 'wary', 'safe', 'vest', 'extend', 'hysterical', 'lumber', 'tremble', 'income', 'frog', 'zephyr', 'tacit', 'swim', 'silver', 'horrible', 'health', 'annoy', 'wreck', 'fang', 'locket',
  'familiar', 'fact', 'rhyme', 'system', 'sable', 'mix', 'bleach', 'plausible', 'gainful', 'pull', 'idiotic', 'sore', 'gold', 'wholesale', 'hard to find', 'toes', 'blushing', 'disillusioned', 'truthful', 'opposite', 'snobbish', 'celery', 'painstaking', 'friction', 'ambitious', 'poised', 'stop', 'maddening', 'observation', 'romantic', 'place', 'berry', 'empty', 'hellish', 'channel', 'mailbox', 'even', 'nose', 'helpless', 'promise', 'stimulating', 'satisfy', 'prickly', 'oven', 'attractive', 'chickens', 'distance', 'huge', 'handle', 'immense', 'knotty', 'accurate', 'achiever', 'subsequent', 'erect', 'rat', 'damage', 'meeting', 'futuristic', 'pump', 'successful', 'spotty', 'rose', 'jealous', 'regret', 'sticky', 'young', 'jam', 'hole', 'thought', 'royal', 'tranquil', 'numerous', 'number', 'sparkle', 'trap', 'ruthless', 'foregoing', 'high - pitched', 'fire', 'full', 'boring', 'hat', 'bright', 'honorable', 'incandescent', 'lean', 'productive', 'sin', 'scribble', 'geese', 'obese', 'match', 'ghost', 'groovy', 'hypnotic', 'well - groomed', 'kind', 'hot', 'pass', 'threatening', 'plucky', 'hushed', 'step', 'scarce', 'giddy', 'fly', 'bulb', 'angle', 'eyes', 'fancy', 'stormy', 'design', 'jam', 'alert', 'luxuriant', 'crayon', 'abounding', 'curvy', 'bone', 'labored', 'inconclusive', 'pot', 'payment', 'false', 'sip', 'rod', 'stretch', 'act', 'event', 'show', 'attach', 'explain', 'porter', 'amusing', 'dark', 'grab', 'likeable', 'drink', 'holistic', 'elastic', 'spot', 'eminent', 'faded', 'malicious', 'plant', 'vengeful', 'circle', 'sister', 'sulky', 'quick', 'hot', 'own', 'terrify', 'past', 'alike', 'collar', 'slip', 'battle', 'bang', 'chew', 'plot', 'careless', 'annoying', 'smelly', 'alleged', 'replace', 'grip', 'thankful', 'oval', 'slap', 'change', 'signal', 'furtive', 'son', 'long', 'frantic', 'thundering', 'front', 'program', 'sticks', 'adjustment', 'understood', 'oceanic', 'instrument', 'report', 'excite', 'petite', 'thumb', 'unit', 'awesome', 'root', 'occur', 'veil', 'different', 'self', 'elated', 'impress', 'next', 'hill', 'lick', 'silky', 'fog', 'rich', 'deranged', 'bait', 'festive', 'tangible', 'yam', 'bit', 'sweet', 'meek', 'peck', 'cat', 'deeply', 'naughty', 'sand', 'shame', 'carriage', 'normal', 'draconian', 'spotted', 'box', 'ragged', 'unequaled', 'disapprove', 'nosy', 'lewd', 'error', 'wound', 'puny', 'striped', 'encourage', 'jellyfish', 'suffer', 'mess up', 'cobweb', 'wiry', 'three', 'kick', 'wheel', 'offer', 'hover', 'care', 'direful', 'magenta', 'empty', 'hydrant', 'ancient', 'milky', 'snail', 'memorise', 'beautiful', 'grouchy', 'watch', 'towering', 'song', 'fragile',
  'gaze', 'loving', 'flat', 'whole', 'pies', 'coherent', 'roll', 'order', 'mere', 'squeeze', 'scent', 'nonchalant', 'bad', 'smile', 'church', 'common', 'size', 'scare', 'influence', 'hope', 'scrape', 'level', 'mouth', 'example', 'dress', 'lying', 'hanging', 'cumbersome', 'reject', 'invincible', 'afternoon', 'death', 'horn', 'jelly', 'party', 'temporary', 'label', 'efficient', 'icky', 'squealing', 'able', 'support', 'boy', 'cannon', 'button', 'nostalgic', 'treatment', 'acoustics', 'receipt', 'wilderness', 'fuel', 'shaggy', 'letters', 'muscle', 'nebulous', 'motionless', 'scintillating', 'war', 'smoggy', 'rifle', 'nutritious', 'clam', 'puzzled', 'sophisticated', 'selfish', 'apparatus', 'flash', 'teaching', 'street', 'trashy', 'gorgeous', 'popcorn', 'legs', 'cruel', 'observant', 'offer', 'zebra', 'aunt', 'plastic', 'addition', 'bite - sized', 'belong', 'aspiring', 'zoom', 'insidious', 'pet', 'courageous', 'stingy', 'base', 'wakeful', 'man', 'form', 'sleet', 'crooked', 'educate', 'bird', 'measly', 'finicky', 'barbarous', 'soap', 'loud', 'somber', 'prevent', 'obnoxious', 'plain', 'staking', 'disappear', 'kill', 'milk', 'quizzical', 'matter', 'jump', 'low', 'knowledge', 'jog', 'calm', 'reach', 'peep', 'absent', 'silly', 'zipper', 'parallel', 'obedient', 'verse', 'plastic', 'choke', 'pastoral', 'flame', 'thoughtless', 'sun', 'flippant', 'discussion', 'victorious', 'big', 'cub', 'punish', 'marble', 'precede', 'steel', 'wave', 'nation', 'tick', 'wrestle', 'perpetual', 'smooth', 'tawdry', 'cook', 'auspicious', 'peaceful', 'sparkling', 'paste', 'zoo', 'suspend', 'cheese', 'abundant', 'eatable', 'mom', 'girl', 'sneeze', 'mitten', 'itchy', 'include', 'scared', 'idea', 'puncture', 'skillful', 'walk', 'nippy', 'sweltering', 'cream', 'rampant', 'dazzling', 'blade', 'hurry', 'noisy', 'key', 'head', 'imported', 'shocking', 'insect', 'face', 'expansion', 'twig', 'quixotic', 'zinc', 'brake', 'macho', 'enchanting', 'produce', 'wooden', 'overconfident', 'behavior', 'fortunate', 'inject', 'press', 'clever', 'wren', 'head', 'discovery', 'bee', 'exercise', 'sassy', 'mysterious', 'disastrous', 'filthy', 'consist', 'obscene', 'wrench', 'jumpy', 'bedroom', 'steadfast', 'ad hoc', 'surprise', 'ugly', 'tax', 'hunt', 'punch', 'butter', 'wax', 'cow', 'stretch', 'live', 'square', 'dusty', 'needy', 'flaky', 'driving', 'chicken', 'treat', 'afterthought', 'pest', 'drain', 'truculent', 'divergent', 'bridge', 'cooperative', 'messy', 'amusement', 'small', 'copper', 'rest', 'answer', 'enthusiastic', 'purple', 'soggy', 'snotty', 'table', 'women', 'careful', 'tendency', 'determined', 'number', 'aberrant',
  'itch', 'present', 'bake', 'standing', 'lunchroom', 'giants', 'jump', 'nice', 'venomous', 'entertaining', 'rub', 'ready', 'guide', 'mist', 'hulking', 'stick', 'squash', 'squeal', 'responsible', 'irritate', 'stranger', 'boot', 'pleasant', 'depend', 'glue', 'blue - eyed', 'fetch', 'dashing', 'earsplitting', 'frame', 'red', 'zip', 'touch', 'attraction', 'note', 'ill - informed', 'sign', 'wonderful', 'adorable', 'yak', 'female', 'curtain', 'thrill', 'vagabond', 'structure', 'black - and - white', 'equable', 'fade', 'loss', 'stomach', 'available', 'cynical', 'stove', 'humdrum', 'glass', 'second', 'comparison', 'cycle', 'depressed', 'heavenly', 'yellow'];

const preference = ['Meat', 'Seafood', 'Vegetarian', 'Vegan'];
const pricing = ['Cheap', 'Moderate', 'Expensive'];
const pricesCheap = ['3.99', '4.99', '9.99', '12.99'];
const pricesModerate = ['14.99', '19.99', '24.99', '29.99'];
const pricesExpensive = ['34.99', '49.99', '79.99', '99.99'];
const culture = ['European', 'Asian', 'N American', 'S American', 'Fusion'];
const mealTime = ['Breakfast', 'Lunch', 'Dinner'];
const mealType = ['Starter', 'Entree', 'Dessert'];
const city = ['Los Angeles', 'San Francisco', 'New York', 'Chicago', 'San Jose', 'Houston', 'Miami'];
/* ends */

/* Restaurant Table */
const restaurantHeader = 'rest_id,rest_name,city_name,country_style,budget\n';
const menuHeader = "id,meal_time,food_name,food_preference,food_price,meal_type,photo_url,rest_id\n";
const foodPreferenceHeader = 'id,rest_id,menu_id,rest_name,food_name\n';
const pricingHeader = 'id,rest_id,rest_name,food_name\n';
const CountryStyleCityMealTimeMealTypeHeader = "id,rest_id,rest_name\n";
/* ends */

/* for tables: restaurant, pref, pricing, city, time, meal type */
var randomNum = (max) => Math.floor(Math.random() * Math.floor(max));
var rest_name = () => shortPhrases[randomNum(1555)] + ' ' + words[randomNum(2643)];
var city_name = () => city[randomNum(7)];
var country_style = () => culture[randomNum(4)]
/* ends */

/* for tables: menu, pref */
var meal_time = () => mealTime[randomNum(3)];
var food_name = () => words[randomNum(2643)] + ' ' + words[randomNum(2643)] + ' ' + words[randomNum(2643)];
var food_preference = () => preference[randomNum(4)];
var food_price_cat = () => pricing[randomNum(3)]
let find_food_price = (priceCategory) => {
  if (priceCategory === 'Cheap') {
    return pricesCheap[randomNum(4)];
  } else if (priceCategory === 'Moderate') {
    return pricesModerate[randomNum(4)];
  } else if (priceCategory === 'Expensive') {
    return pricesExpensive[randomNum(4)];
  };
};
var meal_type = () => mealType[randomNum(3)]
var photo_url = (num) => `https://s3-us-west-1.amazonaws.com/hr-fec-proj/SDC+Images+Complete/image${num}.jpeg`
var select_rest_id = () => `${randomNum(7)}`
/* ends */

/* help functions */
//var cWS = (directory, entry) => fs.appendFileSync(directory, entry);
var cWS = (directory, options) => fs.createWriteStream(directory, options);
var count = 1
var counter = () => {
  if (count % 100000 === 0) {
    console.log('current count: ', count)
  };
};
var photoUrl = (num) => `https://s3-us-west-1.amazonaws.com/hr-fec-proj/SDC+Images+Complete/image${num}.jpeg`
var imageCounter = 1
var imageCounterReset = function() {
  if (imageCounter < 1000) {
    imageCounter++;
  } else {
    imageCounter = 1;
  };
};

/*data to be written*/
var restTableData = restaurantHeader
var menuTableData = menuHeader
var foodPrefSeafoodData = foodPreferenceHeader
var foodPrefMeatData = foodPreferenceHeader
var foodPrefVeganData = foodPreferenceHeader
var foodPrefVegetarianData = foodPreferenceHeader
var pricingCheapData = pricingHeader
var pricingModData = pricingHeader
var pricingExpData = pricingHeader
var styleAsianData = CountryStyleCityMealTimeMealTypeHeader
var styleEuropeanData = CountryStyleCityMealTimeMealTypeHeader
var styleNAData = CountryStyleCityMealTimeMealTypeHeader
var styleSAData = CountryStyleCityMealTimeMealTypeHeader
var cityLAData = CountryStyleCityMealTimeMealTypeHeader
var citySFData = CountryStyleCityMealTimeMealTypeHeader
var cityNYData = CountryStyleCityMealTimeMealTypeHeader
var cityChiData = CountryStyleCityMealTimeMealTypeHeader
var citySJData = CountryStyleCityMealTimeMealTypeHeader
var cityHouData = CountryStyleCityMealTimeMealTypeHeader
var cityMiaData = CountryStyleCityMealTimeMealTypeHeader
var mealTimeBF = CountryStyleCityMealTimeMealTypeHeader
var mealTimeLunch = CountryStyleCityMealTimeMealTypeHeader
var mealTimeDinner = CountryStyleCityMealTimeMealTypeHeader
var mealTypeStarter = CountryStyleCityMealTimeMealTypeHeader
var mealTypeEntree = CountryStyleCityMealTimeMealTypeHeader
var mealTypeDessert = CountryStyleCityMealTimeMealTypeHeader
/* ends */



var restaurantTableGenerator = (dataAmt) => {

  var menuTableDataCount = 1
  var foodPrefSeafoodDataCount = 1
  var foodPrefMeatDataCount = 1
  var foodPrefVeganDataCount = 1
  var foodPrefVegetarianDataCount = 1
  var pricingCheapDataCount = 1
  var pricingModDataCount = 1
  var pricingExpDataCount = 1
  var styleAsianDataCount = 1
  var styleEuropeanDataCount = 1
  var styleNADataCount = 1
  var styleSADataCount = 1
  var cityLADataCount = 1
  var citySFDataCount = 1
  var cityNYDataCount = 1
  var cityChiDataCount = 1
  var citySJDataCount = 1
  var cityHouDataCount = 1
  var cityMiaDataCount = 1
  var mealTimeBFCount = 1
  var mealTimeLunchCount = 1
  var mealTimeDinnerCount = 1
  var mealTypeStarterCount = 1
  var mealTypeEntreeCount = 1
  var mealTypeDessertCount = 1

  var restMenuGenRecord = 1 //limits menu generation for each restaurant by 10
  var restMenuGenTracker = (amt) => {
    if (restMenuGenRecord <= amt) {
      restMenuGenRecord += 1
    } else {
      restMenuGenRecord = 1
    }
  }

  for (let i = 0; i < dataAmt; i++) {

    var restaurantName = rest_name();
    var cityName = city_name();
    var countryStyle = country_style();
    var genMealTime //= meal_time();
    var genFoodName //= food_name();
    var genFoodPref //= food_preference();
    var genFoodPriceCat //= food_price_cat();
    var genFoodPrice //= find_food_price(genFoodPriceCat);
    var genMealType //= meal_type();

    
    
    for (let i = 0; i < 10; i++) {
      imageCounterReset();
      
      /* change data */
      genFoodName = food_name();
      genMealTime = meal_time();
      genFoodPref = food_preference();
      genFoodPriceCat = food_price_cat();
      genFoodPrice = find_food_price(genFoodPriceCat);
      genMealType = meal_type();
      
      menuTableData = menuTableData.concat(`(${menuTableDataCount},` + `'${genMealTime}'` + "," + `'${genFoodName}'` + "," + `'${genFoodPref}'` + "," + `'${genFoodPrice}'` + "," + `'${genMealType}'` + "," + `'${photoUrl(imageCounter)}'` + "," + `'${restMenuGenRecord}'),` + "\n"); //for csv data gen (menu & rest)
      //menuTableData = menuTableData.concat(`${menuTableDataCount},` + genMealTime + "," + genFoodName + "," + genFoodPref + "," + genFoodPrice + "," + genMealType + "," + photoUrl(imageCounter) + "," + restMenuGenRecord + "\n"); //for regular data gen


      if (genFoodPref === 'Seafood') { 
        foodPrefSeafoodData = foodPrefSeafoodData.concat(`${foodPrefSeafoodDataCount},` + `${count},` + `${menuTableDataCount},` + restaurantName + ',' + genFoodName + '\n');
        foodPrefSeafoodDataCount += 1;
      } else if (genFoodPref === 'Meat') {
        foodPrefMeatData = foodPrefMeatData.concat(foodPrefMeatDataCount + "," + `${count},` + `${menuTableDataCount},` + restaurantName + "," + genFoodName + "\n");
        foodPrefMeatDataCount += 1;
      } else if (genFoodPref === 'Vegan') {
        foodPrefVeganData = foodPrefVeganData.concat(foodPrefVeganDataCount + "," + `${count},` + `${menuTableDataCount},` + restaurantName + "," + genFoodName + "\n");
        foodPrefVeganDataCount += 1;
      } else if (genFoodPref === 'Vegetarian') {
        foodPrefVegetarianData = foodPrefVegetarianData.concat(foodPrefVegetarianDataCount + ',' + `${count},` + `${menuTableDataCount},` + restaurantName + ',' + genFoodName + '\n');
        foodPrefVegetarianDataCount += 1;
      } 
      if (genFoodPriceCat === "Cheap") {
        pricingCheapData = pricingCheapData.concat(`${pricingCheapDataCount},` + `${count},` + `${restaurantName},` + " " + genFoodName + "\n");
        pricingCheapDataCount += 1;
      } else if (genFoodPriceCat === "Moderate") {
        pricingModData = pricingModData.concat(`${pricingModDataCount},` + `${count},` + `${restaurantName},` + " " + genFoodName + "\n");
        pricingModDataCount += 1;
      } else if (genFoodPriceCat === "Expensive") {
        pricingExpData = pricingExpData.concat(`${pricingExpDataCount},` + `${count},` + `${restaurantName},` + " " + genFoodName + "\n");
        pricingExpDataCount += 1;
      }
      if (countryStyle === 'Asian') {
        styleAsianData = styleAsianData.concat(styleAsianDataCount + ',' + `${count},` + restaurantName + '\n');
        styleAsianDataCount += 1;
      } else if (countryStyle === 'European') {
        styleEuropeanData = styleEuropeanData.concat(styleEuropeanDataCount + ',' + `${count},` + restaurantName + '\n');
        styleEuropeanDataCount += 1;
      } else if (countryStyle === 'N American') {
        styleNAData = styleNAData.concat(styleNADataCount + ',' + `${count},` + restaurantName + '\n');
        styleNADataCount += 1;
      } else if (countryStyle === 'S American') {
        styleSAData = styleSAData.concat(styleSADataCount + ',' + `${count},` + restaurantName + '\n');
        styleSADataCount += 1;
      }
      if (cityName === 'Los Angeles') { 
        cityLAData = cityLAData.concat(cityLADataCount + ',' + `${count},` + restaurantName + '\n');
        cityLADataCount += 1;
      } else if (cityName === 'San Francisco') {
        citySFData = citySFData.concat(citySFDataCount + ',' + `${count},` + restaurantName + '\n');
        citySFDataCount += 1;
      } else if (cityName === 'New York') {
        cityNYData = cityNYData.concat(cityNYDataCount + ',' + `${count},` + restaurantName + '\n');
        cityNYDataCount += 1;
      } else if (cityName === 'Chicago') {
        cityChiData = cityChiData.concat(cityChiDataCount + ',' + `${count},` + restaurantName + '\n');
        cityChiDataCount += 1;
      } else if (cityName === 'San Jose') {
        citySJData = citySJData.concat(citySJDataCount + ',' + `${count},` + restaurantName + '\n');
        citySJDataCount += 1;
      } else if (cityName === 'Houston') {
        cityHouData = cityHouData.concat(cityHouDataCount + ',' + `${count},` + restaurantName + '\n');
        cityHouDataCount += 1;
      } else if (cityName === 'Miami') {
        cityMiaData = cityMiaData.concat(cityMiaDataCount + ',' + `${count},` + restaurantName + '\n');
        cityMiaDataCount += 1;
      };
      if (genMealTime === 'Breakfast') {
        mealTimeBF = mealTimeBF.concat(mealTimeBFCount + ',' + `${count},` + restaurantName + '\n');
        mealTimeBFCount += 1;
      } else if (genMealTime === 'Lunch') {
        mealTimeLunch = mealTimeLunch.concat(mealTimeLunchCount + ',' + `${count},` + restaurantName + '\n');
        mealTimeLunchCount += 1;
      } else if (genMealTime === 'Dinner') {
        mealTimeDinner = mealTimeDinner.concat(mealTimeDinnerCount + ',' + `${count},` + restaurantName + '\n');
        mealTimeDinnerCount += 1;
      };
      if (genMealType === 'Starter') { //'Starter', 'Entree', 'Dessert'
        mealTypeStarter = mealTypeStarter.concat(mealTypeStarterCount + ',' + `${count},` + restaurantName + '\n');
        mealTypeStarterCount += 1;
      } else if (genMealType === 'Entree') {
        mealTypeEntree = mealTypeEntree.concat(mealTypeEntreeCount + ',' + `${count},` + restaurantName + '\n');
        mealTypeEntreeCount += 1;
      } else if (genMealType === 'Dessert') {
        mealTypeDessert = mealTypeDessert.concat(mealTypeDessertCount + ',' + `${count},` + restaurantName + '\n');
        mealTypeDessertCount += 1;
      };
      menuTableDataCount += 1;
    };
    restMenuGenTracker(dataAmt);
    restTableData = restTableData.concat(`(${count},` + `'${restaurantName}'` + "," + `'${cityName}'` + "," + `'${countryStyle}'` + "," + `'${genFoodPriceCat}'),` + "\n");
    //restTableData = restTableData.concat(`${count},` + restaurantName + "," + cityName + "," + countryStyle + "," + genFoodPriceCat + "\n"); //csv gen (for rest & menu)

    count += 1

    if (count % 200 === 0){
      console.log(count);
      cWS('./PostgreSQL/restTableData.txt', {flags: 'a'}).end(restTableData);
      cWS('./PostgreSQL/menuTableData.txt', {flags: 'a'}).end(menuTableData);
      cWS('./PostgreSQL/foodPrefSeafoodData.txt', {flags: 'a'}).end(foodPrefSeafoodData);
      cWS('./PostgreSQL/foodPrefMeatData.txt', {flags: 'a'}).end(foodPrefMeatData);
      cWS('./PostgreSQL/foodPrefVeganData.txt', {flags: 'a'}).end(foodPrefVeganData);
      cWS('./PostgreSQL/foodPrefVegetarianData.txt', {flags: 'a'}).end(foodPrefVegetarianData);
      cWS('./PostgreSQL/pricingCheapData.txt', {flags: 'a'}).end(pricingCheapData);
      cWS('./PostgreSQL/pricingModData.txt', {flags: 'a'}).end(pricingModData);
      cWS('./PostgreSQL/pricingExpData.txt', {flags: 'a'}).end(pricingExpData);
      cWS('./PostgreSQL/styleAsianData.txt', {flags: 'a'}).end(styleAsianData);
      cWS('./PostgreSQL/styleEuropeanData.txt', {flags: 'a'}).end(styleEuropeanData);
      cWS('./PostgreSQL/styleNAData.txt', {flags: 'a'}).end(styleNAData);
      cWS('./PostgreSQL/styleSAData.txt', {flags: 'a'}).end(styleSAData);
      cWS('./PostgreSQL/cityLAData.txt', {flags: 'a'}).end(cityLAData);
      cWS('./PostgreSQL/citySFData.txt', {flags: 'a'}).end(citySFData);
      cWS('./PostgreSQL/cityNYData.txt', {flags: 'a'}).end(cityNYData);
      cWS('./PostgreSQL/cityChiData.txt', {flags: 'a'}).end(cityChiData);
      cWS('./PostgreSQL/citySJData.txt', {flags: 'a'}).end(citySJData);
      cWS('./PostgreSQL/cityHouData.txt', {flags: 'a'}).end(cityHouData);
      cWS('./PostgreSQL/cityMiaData.txt', {flags: 'a'}).end(cityMiaData);
      cWS('./PostgreSQL/mealTimeBF.txt', {flags: 'a'}).end(mealTimeBF);
      cWS('./PostgreSQL/mealTimeLunch.txt', {flags: 'a'}).end(mealTimeLunch);
      cWS('./PostgreSQL/mealTimeDinner.txt', {flags: 'a'}).end(mealTimeDinner);
      cWS('./PostgreSQL/mealTypeStarter.txt', {flags: 'a'}).end(mealTypeStarter);
      cWS('./PostgreSQL/mealTypeEntree.txt', {flags: 'a'}).end(mealTypeEntree);
      cWS('./PostgreSQL/mealTypeDessert.txt', {flags: 'a'}).end(mealTypeDessert);
      restTableData = '';
      menuTableData = '';
      foodPrefSeafoodData = '';
      foodPrefMeatData = '';
      foodPrefVeganData = '';
      foodPrefVegetarianData = '';
      pricingCheapData = '';
      pricingModData = '';
      pricingExpData = '';
      styleAsianData = '';
      styleEuropeanData = '';
      styleNAData = '';
      styleSAData = '';
      cityLAData = '';
      citySFData = '';
      cityNYData = '';
      cityChiData = '';
      citySJData = '';
      cityHouData = '';
      cityMiaData = '';
      mealTimeBF = '';
      mealTimeLunch = '';
      mealTimeDinner = '';
      mealTypeStarter = '';
      mealTypeEntree = '';
      mealTypeDessert = '';
    }
  }
}

restaurantTableGenerator(1000);
