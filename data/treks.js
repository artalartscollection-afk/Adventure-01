const trekData = [
  {
    id: 'roopkund-trek',
    title: 'Roopkund Trek',
    price: 16500,
    duration: '8D / 7N',
    altitude: '16,000 ft',
    difficulty: 'Moderate to Difficult',
    region: 'the Himalayas',
    startPoint: 'Lohajung',
    image: 'img/treks/roopkund.webp',
    gallery: ['img/gallery/roopkund.webp', 'img/gallery/mountain-river.webp', 'img/gallery/himalaya-camp.webp'],
    description: 'The Roopkund Trek in the Himalayas is one of the most iconic Himalayan adventures, famously known for the mystery of the "Skeleton Lake." Tucked away at 16,000 feet within the Nanda Devi Biosphere Reserve, this trek provides a unique blend of eerie legends and profound natural beauty. Trekkers travel through some of the largest high-altitude meadows in Asia, Ali and Bedni Bugyal, which offer front-row seats to the massive Mt. Trishul and Nanda Ghunti peaks. The trail winds through dense forests of oak and rhododendron, eventually ascending into alpine zones where the landscape transforms into a dramatic, rocky wonderland.',
    itinerary: [
      { day: 1, title: 'Basecity to Lohajung', details: 'Approx 300km drive, 10-11 hours through scenic mountain roads.' },
      { day: 2, title: 'Lohajung to Didna Village', details: '7km trek, 5 hours. Experience the lush forest and Neel Ganga River.' },
      { day: 3, title: 'Didna Village to Ali Bedni Bugyal', details: '9km trek, 6 hours. One of the largest high-altitude meadows in Asia.' },
      { day: 4, title: 'Ali Bedni Bugyal to Patar Nachuni', details: '6km trek, 4 hours. Gradual ascent with stunning vistas.' },
      { day: 5, title: 'Patar Nachuni to Bhagwabasa', details: '6km trek via Kaluva Vinayak Temple. Reach the high camp.' },
      { day: 6, title: 'Bhagwabasa to Roopkund & Back', details: '8 hours trek. Reach the mysterious glacial lake.' },
      { day: 7, title: 'Patar Nachuni to Wan/Lohajung', details: '12km trek, 14km drive. Descending through forests.' },
      { day: 8, title: 'Lohajung to Basecity', details: 'Return drive to the capital.' }
    ],
    inclusions: ['Accommodation (Camping/Homestay)', 'Veg Meals', 'Permits', 'Professional Guide', 'Trek Gear'],
    exclusions: ['Personal expenses', 'Personal luggage carrying', 'Emergency evacuation', 'Insurance']
  },
  {
    id: 'ali-bedni-bugyal',
    title: 'Ali Bedni Bugyal',
    price: 10000,
    duration: '6D / 5N',
    altitude: '11,000 ft',
    difficulty: 'Easy to Moderate',
    region: 'the Himalayas',
    startPoint: 'Lohajung',
    image: 'img/treks/ali-bedni.webp',
    gallery: ['img/gallery/valley-flowers.webp', 'img/gallery/sunrise-peak.webp', 'img/gallery/himalaya-camp.webp'],
    description: 'Ali Bedni Bugyal represents the quintessential Himalayan meadow trek, showcasing two of the most sprawling and beautiful high-altitude meadows (bugyals) in the world. Located in the Chamoli district of the Himalayas, this trail is a dream for photographers and nature lovers alike. As you ascend through ancient forests into the wide-open pastures of Ali Bugyal, the horizon is suddenly dominated by the silver-white ramparts of Mt. Trishul and Nanda Ghunti. During the monsoon months, these meadows transform into a vibrant carpet of wildflowers, while the shoulder seasons offer crisp, clear views of the high peaks.',
    itinerary: [
      { day: 1, title: 'Basecity to Lohajung', details: 'Approx 300km drive, 10-11 hours.' },
      { day: 2, title: 'Lohajung to Tolpani', details: '5km trek through dense forest.' }
    ],
    inclusions: ['Homestay/Camping', 'All Meals', 'Forest Permits', 'Guide Services'],
    exclusions: ['Mule/Porter for personal bag']
  },
  {
    id: 'bali-pass-trek',
    title: 'Bali Pass Trek',
    price: 18000,
    duration: '8D / 7N',
    altitude: '16,200 ft',
    difficulty: 'Difficult',
    region: 'the Himalayas',
    startPoint: 'Sankri',
    image: 'img/treks/bali-pass.webp',
    gallery: ['img/gallery/snow-trek.webp', 'img/gallery/mountain-river.webp', 'img/gallery/kedarnath.webp'],
    description: 'Bali Pass is an adrenaline-fueled high-altitude crossover trek that connects the scenic Har Ki Dun valley to the holy site of Yamunotri. It is considered one of the more challenging treks in the region, featuring steep technical climbs, high-altitude passes, and massive snowfields. Along the way, trekkers are rewarded with the stunning beauty of Ruinsara Tal, a pristine alpine lake, and close-up views of the Swargarohini and Bandarpoonch massifs. The final crossing of Bali Pass (16,200 ft) is a trial of endurance that culminates in spectacular panoramic views of the entire Garhwal range.',
    itinerary: [
      { day: 1, title: 'Basecity to Sankri', details: 'Approx 200km drive, 8 hours.' },
      { day: 2, title: 'Sankri to Seema', details: 'Drive to Taluka, then trek to Seema.' },
      { day: 3, title: 'Seema to Rainbasera', details: 'Trek along the Supin river.' },
      { day: 4, title: 'Rainbasera to Ruinsara Tal', details: 'Reach the beautiful alpine lake.' },
      { day: 5, title: 'Ruinsara Tal to Odari', details: 'Trek towards the pass base camp.' },
      { day: 6, title: 'Odari to Bali Pass Base Camp', details: 'Short trek to acclimatize.' },
      { day: 7, title: 'Base Camp to Bali Pass & Lower Dhamni', details: 'Cross the difficult pass.' },
      { day: 8, title: 'Lower Dhamni to Janki Chatti & Basecity', details: 'Descend to Yamunotri and drive back.' }
    ],
    inclusions: ['Accommodation', 'All Meals', 'Permits', 'Guide'],
    exclusions: ['Personal expenses', 'Insurance']
  },
  {
    id: 'gaumukh-tapovan',
    title: 'Gaumukh Tapovan',
    price: 14000,
    duration: '7D / 6N',
    altitude: '14,600 ft',
    difficulty: 'Moderate',
    region: 'the Himalayas',
    startPoint: 'Basecity',
    image: 'img/treks/gaumukh.webp',
    gallery: ['img/gallery/mountain-river.webp', 'img/gallery/sunrise-peak.webp', 'img/gallery/himalaya-camp.webp'],
    description: 'The Gaumukh Tapovan trek is a profound journey to the very source of the holy River Ganges. Starting from the pilgrimage town of Gangotri, the trail takes you deep into the Gangotri National Park, eventually reaching the snout of the massive Gangotri Glacier, known as Gaumukh. Beyond the glacier lies the vast alpine meadow of Tapovan, an area of immense spiritual importance and natural splendor. Here, you find yourself at the feet of the colossal Bhagirathi peaks and the incredibly sharp Shivling peak, often referred to as the "Matterhorn of India." This trek combines rugged glacial terrain with serene, high-altitude meadows.',
    itinerary: [
      { day: 1, title: 'Basecity to Gangotri', details: 'Drive through beautiful valleys.' },
      { day: 2, title: 'Gangotri to Chirbasa', details: 'Trek entering the national park.' },
      { day: 3, title: 'Chirbasa to Bhojbasa', details: 'Short trek through pine forests.' },
      { day: 4, title: 'Bhojbasa to Tapovan via Gaumukh', details: 'Reach the meadow at the base of Shivling peak.' },
      { day: 5, title: 'Explore Tapovan & Return to Bhojbasa', details: 'Sunrise views and descent.' },
      { day: 6, title: 'Bhojbasa to Gangotri', details: 'Trek back to the starting point.' },
      { day: 7, title: 'Gangotri to Basecity', details: 'Return drive.' }
    ],
    inclusions: ['Accommodation', 'Meals', 'Permits', 'Guide'],
    exclusions: ['Personal expenses']
  },
  {
    id: 'kedarkantha-trek',
    title: 'Kedarkantha Trek',
    price: 9500,
    duration: '6D / 5N',
    altitude: '12,500 ft',
    difficulty: 'Easy to Moderate',
    region: 'the Himalayas',
    startPoint: 'Sankri',
    image: 'img/gallery/snow-trek.webp',
    gallery: ['img/gallery/snow-trek.webp', 'img/gallery/himalaya-camp.webp', 'img/gallery/kedarnath.webp'],
    description: 'Kedarkantha is the crown jewel of winter trekking in the Himalayas. Known for its perfect summit climb and breathtaking campsites, it is the ideal trek for those looking to experience the magic of snow-covered pine forests and high-altitude peaks. The summit of Kedarkantha (12,500 ft) offers an unparalleled 360-degree view of the Great Himalayan ranges, including the Swargarohini, Black Peak, and Bandarpoonch mountains. The campsites at Kedarkantha, especially Juda ka Talab, are amongst the most picturesque in the world, with frozen lakes surrounded by towering trees under a star-studded sky.',
    itinerary: [
      { day: 1, title: 'Basecity to Sankri', details: 'Scenic drive through the mountains.' },
      { day: 2, title: 'Sankri to Juda ka Talab', details: 'Trek to the beautiful frozen lake.' },
      { day: 3, title: 'Juda ka Talab to Kedarkantha Base', details: 'Trek through pine forests.' },
      { day: 4, title: 'Base to Summit & Back to Hargaon', details: 'Sunrise summit and spectacular views.' },
      { day: 5, title: 'Hargaon to Sankri', details: 'Descend back to the base village.' },
      { day: 6, title: 'Sankri to Basecity', details: 'Return drive.' }
    ],
    inclusions: ['Accommodation', 'Meals', 'Permits', 'Guide'],
    exclusions: ['Personal expenses']
  },
  {
    id: 'kashmir-great-lakes',
    title: 'Kashmir Great Lakes',
    price: 16000,
    duration: '7D / 6N',
    altitude: '13,750 ft',
    difficulty: 'Moderate',
    region: 'Kashmir',
    startPoint: 'Srinagar',
    image: 'img/treks/kashmir-lakes.webp',
    gallery: ['img/gallery/mountain-river.webp', 'img/gallery/valley-flowers.webp', 'img/gallery/sunrise-peak.webp'],
    description: 'The Kashmir Great Lakes trek is widely regarded as the most beautiful trek in India, offering a visual symphony of seven emerald-blue alpine lakes, sweeping flower-laden meadows, and dramatic high-altitude passes. Every day on this trail reveals a new landscape that feels like it has been plucked straight from a postcard. Trekkers will traverse the vast meadows of Sonamarg, cross the challenging Gadsar and Nichnai passes, and camp besides the pristine waters of Vishansar, Kishansar, and Gangabal lakes. The contrast between the rugged, snow-dusted peaks and the soft, lush greenery of the Kashmir valley creates an unforgettable experience for every adventurer.',
    itinerary: [
      { day: 1, title: 'Srinagar to Sonamarg', details: 'Drive to the base camp.' },
      { day: 2, title: 'Sonamarg to Nichnai', details: 'Trek over the sweeping meadows.' },
      { day: 3, title: 'Nichnai to Vishansar Lake', details: 'Cross Nichnai pass.' },
      { day: 4, title: 'Vishansar to Gadsar', details: 'Cross Gadsar pass, highest point of trek.' },
      { day: 5, title: 'Gadsar to Satsar', details: 'Trek past series of small lakes.' },
      { day: 6, title: 'Satsar to Gangabal', details: 'Cross Zaj Pass to twin lakes.' },
      { day: 7, title: 'Gangabal to Naranag & Srinagar', details: 'Descend to roadhead and drive back.' }
    ],
    inclusions: ['Tents', 'Meals', 'Permits', 'Guide'],
    exclusions: ['Flights', 'Personal expenses']
  },
  {
    id: 'beas-kund-trek',
    title: 'Beas Kund Trek',
    price: 8500,
    duration: '3D / 2N',
    altitude: '12,772 ft',
    difficulty: 'Easy',
    region: 'Himachal',
    startPoint: 'Manali',
    image: 'img/gallery/harki-dun.webp',
    gallery: ['img/gallery/mountain-river.webp', 'img/gallery/himalaya-camp.webp', 'img/gallery/sunrise-peak.webp'],
    description: 'The Beas Kund trek is a short and immensely rewarding adventure that takes you to the very source of the Beas River. Starting from Manali, the trail winds through lush forests of oak and deodar, eventually emerging into the wide-open alpine meadows of Bakarthach. As you reach the emerald waters of Beas Kund, a high-altitude glacial lake at 12,772 ft, you are surrounded by a massive amphitheater of snow peaks including Hanuman Tibba, Ladakhi Peak, and Friendship Peak. This trek provides a remarkable "close-up" experience of the high Himalayas without a month-long commitment.',
    itinerary: [
      { day: 1, title: 'Manali to Solang Valley to Dhundi', details: 'Short drive and trek to the base camp.' },
      { day: 2, title: 'Dhundi to Beas Kund to Dhundi', details: 'Full day trek to the glacial lake.' },
      { day: 3, title: 'Dhundi to Manali', details: 'Return trek and drive.' }
    ],
    inclusions: ['Camping', 'Meals', 'Guide'],
    exclusions: ['Personal gear']
  },
  {
    id: 'hampta-pass-trek',
    title: 'Hampta Pass Trek',
    price: 12000,
    duration: '5D / 4N',
    altitude: '14,100 ft',
    difficulty: 'Moderate',
    region: 'Himachal',
    startPoint: 'Manali',
    image: 'img/gallery/himalaya-camp.webp',
    gallery: ['img/gallery/snow-trek.webp', 'img/gallery/mountain-river.webp', 'img/gallery/kedarnath.webp'],
    description: 'Hampta Pass is famous for being one of the most dramatic crossover treks in the Himalayas. In just a few days, trekkers transition from the lush, green, and vibrant Kullu Valley with its waterfalls and forests into the stark, dry, and starkly beautiful cold desert of Spiti. Crossing the 14,100 ft pass is as thrilling as it is scenic, offering views of the massive Indrasan peak. The journey culminates with a visit to the ethereal Chandratal Lake (The Moon Lake), a high-altitude gem nestled amidst the rugged Spiti peaks. This trek is perfect for adventurers who love diverse landscapes and stark contrasts.',
    itinerary: [
      { day: 1, title: 'Manali to Jobra to Chika', details: 'Drive and trek through forests.' },
      { day: 2, title: 'Chika to Balu ka Ghera', details: 'Trek along the river bed.' },
      { day: 3, title: 'Balu ka Ghera to Siagoru via Hampta Pass', details: 'The pass crossing day.' },
      { day: 4, title: 'Siagoru to Chatru to Chandratal', details: 'Descent and drive to the moon lake.' },
      { day: 5, title: 'Chatru to Manali', details: 'Drive back via Rohtang Pass.' }
    ],
    inclusions: ['Camping', 'Meals', 'Guide', 'Transport'],
    exclusions: ['Personal expenses']
  },
  {
    id: 'goechala-trek',
    title: 'Goechala Trek',
    price: 18500,
    duration: '11D / 10N',
    altitude: '15,100 ft',
    difficulty: 'Difficult',
    region: 'Sikkim',
    startPoint: 'Yuksom',
    image: 'img/gallery/sunrise-peak.webp',
    gallery: ['img/gallery/sunrise-peak.webp', 'img/gallery/mountain-river.webp', 'img/gallery/valley-flowers.webp'],
    description: 'Goechala is Sikkim\'s most legendary trek, taking you deep into the heart of the Khangchendzonga National Park. The trail is renowned for its diverse flora, particularly the vibrant rhododendron forests that explode in color during the spring months. As you reach the high meadows of Dzongri and eventually the Goechala Pass itself (15,100 ft), you\'re granted an intimate, front-row view of the massive Mt. Kanchenjunga—the third highest mountain in the world. Watching the first sunrise light kiss the peaks from the pass is a life-changing experience that every Himalayan trekker dreams of.',
    itinerary: [
      { day: 1, title: 'Arrival at Yuksom', details: 'Acclimatization and briefing.' },
      { day: 2, title: 'Yuksom to Sachen', details: 'Trek through dense forests.' },
      { day: 3, title: 'Sachen to Tshoka', details: 'Steep climb to the Tibetan settlement.' },
      { day: 4, title: 'Tshoka to Dzongri', details: 'Ascent to the high meadows.' }
    ],
    inclusions: ['Permits', 'Meals', 'Guide', 'Camping'],
    exclusions: ['Porterage']
  }
];

const blogData = [
  {
    id: 'ali-bedni-bugyal-guide',
    title: 'Ali Bedni Bugyal Trek Route, Itinerary, Travel Tips',
    date: 'March 10, 2024',
    author: 'Mountain Team',
    image: 'img/blog/ali-bedni.webp',
    excerpt: 'Discover the beauty of the twin meadows Ali and Bedni Bugyal. Here is a complete guide to planning your next adventure.'
  },
  {
    id: 'roopkund-mystery',
    title: 'Roopkund Trekking Guide: Everything You Need to Know',
    date: 'Feb 25, 2024',
    author: 'Mountain Team',
    image: 'img/blog/roopkund.webp',
    excerpt: 'The mystery of the skeleton lake awaits. Learn about the permissions, difficulty, and best time to visit Roopkund.'
  }
];
