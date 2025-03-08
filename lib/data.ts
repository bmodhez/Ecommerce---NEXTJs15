import { Data, IProductInput, IUserInput } from '@/types'
import { toSlug } from './utils'
import bcrypt from 'bcryptjs'
import { i18n } from '@/i18n-config'

const users: IUserInput[] = [
  {
    name: 'Bhavin M',
    email: 'modhbhavin05@gmail.com',
    password: bcrypt.hashSync('Bhavin@123', 5),
    role: 'Admin',
    address: {
      fullName: 'Bhavin Modh',
      street: 'APC Chhatralay',
      city: 'Anand',
      province: 'Gujarat',
      postalCode: '388120',
      country: 'India',
      phone: '9322667822',
    },
    paymentMethod: 'Cash On Delivery',
    emailVerified: false,
  }

]

const products: IProductInput[] = [

  {
    name: 'Classic Fashionable Women Tops & Tunics',
    slug: toSlug('Classic Fashionable Women Tops & Tunics'),
    category: 'Womens Fashion',
    brand: 'Ganesh Fashion',
    images: ['/images/p17-1.jpg', '/images/p17-2.jpg', '/images/p17-3.jpg', '/images/p17-4.jpg', '/images/p17-5.jpg'],
    tags: ['best-seller', 'todays-deal'],
    isPublished: true,
    price: 399,
    listPrice: 579,
    avgRating: 4.18,
    numReviews: 47,
    ratingDistribution: [
      { rating: 5, count: 450 },
      { rating: 4, count: 94 },
      { rating: 3, count: 32 },
      { rating: 2, count: 14 },
      { rating: 1, count: 10 },
    ],
    countInStock: 76,
    numSales: 0,
    description:
      'Catalog Name:Classic Fashionable Women Tops & Tunics Fabric: Polycotton Sleeve Length: Three-Quarter Sleeves Pattern: Printed Net Quantity (N): 1 Sizes: S (Bust Size: 36 in, Length Size: 28 in)  M (Bust Size: 38 in, Length Size: 28 in)  L (Bust Size: 40 in, Length Size: 28 in)  XL (Bust Size: 42 in, Length Size: 28 in)  XXL (Bust Size: 44 in, Length Size: 28 in)  XXXL (Bust Size: 46 in, Length Size: 28 in)  4XL (Bust Size: 48 in, Length Size: 28 in)  5XL (Bust Size: 50 in, Length Size: 28 in)  Dispatch: 1 Day ',
    sizes: ['S', 'M', 'L','XL','XXL','XXXL','4XL','5XL'],
    colors: ['Orange', 'Pink', 'Green','Red'],

    reviews: [],
  },
  {
    name: 'Adrika Petite Women Kurta Sets',
    slug: toSlug('Adrika Petite Women Kurta Sets'),
    category: 'Womens Fashion',
    brand: 'Bhavins Collection',
    images: ['/images/p18-1.jpg', '/images/p18-2.jpg', '/images/p18-3.jpg'],
    tags: ['best-seller', 'todays-deal'],
    isPublished: true,
    price: 449,
    listPrice: 599,
    avgRating: 4.28,
    numReviews: 47,
    ratingDistribution: [
      { rating: 5, count: 7016 },
      { rating: 4, count: 4260 },
      { rating: 3, count: 2515 },
      { rating: 2, count: 822 },
      { rating: 1, count: 176 },
    ],
    countInStock: 66,
    numSales: 0,
    description:
      'Catalog Name: Adrika Petite Women Kurta Sets Kurta Fabric: Rayon Bottomwear Fabric: Rayon Fabric: Rayon Sleeve Length: Three-Quarter Sleeves Set Type: Kurta With Bottomwear Bottom Type: Pants Pattern: Embroidered Net Quantity (N): Single Sizes:  L (Bust Size: 40 in, Shoulder Size: 14 in, Kurta Waist Size: 36 in, Kurta Length Size: 44 in, Bottom Waist Size: 36 in, Bottom Hip Size: 44 in, Bottom Length Size: 38 in)  XL (Bust Size: 42 in, Shoulder Size: 15 in, Kurta Waist Size: 38 in, Kurta Length Size: 44 in, Bottom Waist Size: 38 in, Bottom Hip Size: 46 in, Bottom Length Size: 38 in)  XXL (Bust Size: 44 in, Shoulder Size: 15 in, Kurta Waist Size: 40 in, Kurta Length Size: 44 in, Bottom Waist Size: 44 in, Bottom Hip Size: 45 in, Bottom Length Size: 38 in)  XXXL (Bust Size: 44 in, Shoulder Size: 17 in, Kurta Waist Size: 44 in, Kurta Length Size: 44 in, Bottom Waist Size: 44 in, Bottom Hip Size: 48 in, Bottom Length Size: 38 in)  Dispatch: 2 Days ',
    sizes: ['L','XL','XXL','XXXL'],
    colors: ['Red'],

    reviews: [],
  },

  {
    name: 'Abhisarika Superior Women Kurta Sets',
    slug: toSlug('Abhisarika Superior Women Kurta Sets'),
    category: 'Womens Fashion',
    brand: 'Balaji Closet',
    images: ['/images/p20-1.jpg', '/images/p20-2.jpg', '/images/p20-3.jpg' , '/images/p20-4.jpg'],
    tags: ['best-seller', 'todays-deal'],
    isPublished: true,
    price: 719,
    listPrice: 859,
    avgRating: 4.48,
    numReviews: 180,
    ratingDistribution: [
      { rating: 5, count: 7016 },
      { rating: 4, count: 1243 },
      { rating: 3, count: 453 },
      { rating: 2, count: 256 },
      { rating: 1, count: 78 },
    ],
    countInStock: 66,
    numSales: 0,
    description:
      'Catalog Name:Abhisarika Superior Women Kurta Sets Kurta Fabric: Viscose Rayon Bottomwear Fabric: Viscose Fabric: Chanderi Cotton Sleeve Length: Three-Quarter Sleeves Set Type: Kurta With Dupatta And Bottomwear Bottom Type: Salwar Pattern: Printed Net Quantity (N): Single Sizes:  S (Bust Size: 36 in, Shoulder Size: 14 in, Kurta Waist Size: 32 in, Kurta Hip Size: 38 in, Kurta Length Size: 44 in, Bottom Waist Size: 28 in, Bottom Hip Size: 30 in, Bottom Length Size: 39 in, Duppatta Length Size: 2.2 in)  M (Bust Size: 38 in, Shoulder Size: 14 in, Kurta Waist Size: 34 in, Kurta Hip Size: 40 in, Kurta Length Size: 44 in, Bottom Waist Size: 30 in, Bottom Hip Size: 32 in, Bottom Length Size: 39 in, Duppatta Length Size: 2.2 in)  L (Bust Size: 40 in, Shoulder Size: 15 in, Kurta Waist Size: 36 in, Kurta Hip Size: 42 in, Kurta Length Size: 44 in, Bottom Waist Size: 32 in, Bottom Hip Size: 34 in, Bottom Length Size: 39 in, Duppatta Length Size: 2.2 in)  XL (Bust Size: 42 in, Shoulder Size: 15 in, Kurta Waist Size: 38 in, Kurta Hip Size: 44 in, Kurta Length Size: 42 in, Bottom Waist Size: 34 in, Bottom Hip Size: 36 in, Bottom Length Size: 39 in, Duppatta Length Size: 2.2 in)  XXL (Bust Size: 44 m, Shoulder Size: 16 m, Kurta Waist Size: 40 m, Kurta Hip Size: 46 m, Kurta Length Size: 42 m, Bottom Waist Size: 36 m, Bottom Hip Size: 38 m, Bottom Length Size: 39 m, Duppatta Length Size: 2.2 m)  Dispatch: 2 Days ',
    sizes: ['S','M','L','XL','XXL'],
    colors: ['Red'],

    reviews: [],
  },

  {
    name: 'Aagam Pretty Women Kurta Sets',
    slug: toSlug('Aagam Pretty Women Kurta Sets'),
    category: 'Womens Fashion',
    brand: 'DETACH',
    images: ['/images/p19-1.jpg', '/images/p19-2.jpg', '/images/p19-3.jpg', '/images/p19-4.jpg'],
    tags: ['best-seller', 'todays-deal'],
    isPublished: true,
    price: 679,
    listPrice: 899,
    avgRating: 4.24,
    numReviews: 1240,
    ratingDistribution: [
      { rating: 5, count: 1468 },
      { rating: 4, count: 757 },
      { rating: 3, count: 350 },
      { rating: 2, count: 139 },
      { rating: 1, count: 76 },
    ],
    countInStock: 66,
    numSales: 0,
    description:
      'Catalog Name: Aagam Pretty Women Kurta Sets Kurta Fabric: Cotton Bottomwear Fabric: Cotton Fabric: Cotton Sleeve Length: Three-Quarter Sleeves Set Type: Kurta With Dupatta And Bottomwear Bottom Type: Pants Pattern: Printed Net Quantity (N): Single Sizes:  XXS, XS, S (Bust Size: 36 in, Shoulder Size: 13.5 in, Kurta Waist Size: 34 in, Kurta Length Size: 42 in, Bottom Waist Size: 30 in, Bottom Length Size: 39 in)  M (Bust Size: 38 in, Shoulder Size: 14 in, Kurta Waist Size: 36 in, Kurta Length Size: 42 in, Bottom Waist Size: 32 in, Bottom Length Size: 39 in)  L (Bust Size: 40 in, Shoulder Size: 14.5 in, Kurta Waist Size: 38 in, Kurta Length Size: 42 in, Bottom Waist Size: 34 in, Bottom Length Size: 39 in)  XL (Bust Size: 42 in, Shoulder Size: 15 in, Kurta Waist Size: 40 in, Kurta Length Size: 42 in, Bottom Waist Size: 36 in, Bottom Length Size: 39 in)  XXL (Bust Size: 44 in, Shoulder Size: 15.5 in, Kurta Waist Size: 42 in, Kurta Length Size: 42 in, Bottom Waist Size: 38 in, Bottom Length Size: 39 in)  XXXL Dispatch: 2 Days',
    sizes: ['XXS','XS','S','M','L','XL','XXL','XXXL'],
    colors: ['Blue'],

    reviews: [],
  },
  
  {
    name: 'Abhisarika Sensational Kurtis',
    slug: toSlug('Abhisarika Sensational Kurtis'),
    category: 'Womens Fashion',
    images: ['/images/p11-1.jpg', '/images/p11-2.jpg', '/images/p11-3.jpg', '/images/p11-4.jpg'],
    tags: ['new-arrival'],
    isPublished: true,
    price: 299,
    listPrice: 419,
    brand: 'Abhisarika',
    avgRating: 3.94,
    numReviews: 89,
    ratingDistribution: [
      { rating: 5, count: 25 },
      { rating: 4, count: 5 },
      { rating: 3, count: 9 },
      { rating: 2, count: 4 },
      { rating: 1, count: 7 },
    ],
    numSales: 0,
    countInStock: 52,
    description:
      'Catalog Name: Abhisarika Sensational Kurtis Fabric: Crepe Sleeve Length: Three-Quarter Sleeves Pattern: Embroidered Combo of: Single Size : S (Bust Size: 36 in, Size Length: 45 in)  M (Bust Size: 38 in, Size Length: 45 in) L (Bust Size: 40 in, Size Length: 45 in)  XL (Bust Size: 42 in, Size Length: 45 in)  XXL (Bust Size: 44 in, Size Length: 45 in) Easy Returns Available In Case Of Any Issue',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White'],

    reviews: [],
  },

  {
    name: 'Classy Fashionista Men Shirts',
    slug: toSlug('Classy Fashionista Men Shirts'),
    category: 'Mens Fashion',
    images: ['/images/p27-1.jpg', '/images/p27-2.jpg', '/images/p27-3.jpg', '/images/p27-4.jpg', '/images/p27-5.jpg', '/images/p27-6.jpg', '/images/p27-7.jpg', '/images/p27-8.jpg', '/images/p27-9.jpg'],
    tags: ['new-arrival'],
    isPublished: true,
    price: 479,
    listPrice: 799,
    brand: 'UV Fashion',
    avgRating: 3.94,
    numReviews: 89,
    ratingDistribution: [
      { rating: 5, count: 25 },
      { rating: 4, count: 6 },
      { rating: 3, count: 7 },
      { rating: 2, count: 4 },
      { rating: 1, count: 2 },
    ],
    numSales: 0,
    countInStock: 52,
    description:
      'Catalog Name: Classy Fashionista Men Shirts Fabric: Cotton Sleeve Length: Long Sleeves Pattern: Solid Net Quantity (N): 1 Sizes: M (Chest Size: 30 in, Length Size: 28 in)  L (Chest Size: 32 in, Length Size: 29 in)  XL (Chest Size: 34 in, Length Size: 30 in)  Dispatch: 2 Days',
    sizes: ['M', 'L', 'XL'],
    colors: ['Red', 'DarkGreen','DarkBlue','Black'],

    reviews: [],
  },

  {
    name: 'STI Mens Tshirts (Pack of 2)',
    slug: toSlug('STI Mens Tshirts'),
    category: 'Mens Fashion',
    images: ['/images/p51-1.jpg','/images/p51-2.jpg', '/images/p51-3.jpg', '/images/p51-4.jpg', '/images/p51-5.jpg'],
    tags: ['new-arrival'],
    isPublished: true,
    price: 399,
    listPrice: 649,
    brand: 'STI',
    avgRating: 4.26,
    numReviews: 629,
    ratingDistribution: [
      { rating: 5, count: 894 },
      { rating: 4, count: 223 },
      { rating: 3, count: 129 },
      { rating: 2, count: 55 },
      { rating: 1, count: 165 },
    ],
    numSales: 0,
    countInStock: 72,
    description:
      'Catalog Name:STI Mens Tshirts Fabric: Polyester Sleeve Length: Product Dependent Pattern: Printed Net Quantity (N): 2 Sizes: S (Chest Size: 36 in, Length Size: 27 in)  M (Chest Size: 38 in, Length Size: 27.5 in)  L (Chest Size: 40 in, Length Size: 28 in)  XL (Chest Size: 42 in, Length Size: 28.5 in)  XXL (Chest Size: 44 in, Length Size: 29 in)  Dispatch: 2 Days',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Yellow & Blue', 'Yellow & Red'],

    reviews: [],
  },
  {
    name: 'Banita Pretty Women Kurta Sets',
    slug: toSlug('Banita Pretty Women Kurta Sets'),
    category: 'Womens Fashion',
    images: ['/images/p7-1.jpg', '/images/p7-2.jpg', '/images/p7-3.jpg', '/images/p7-4.jpg'],
    tags: ['new-arrival'],
    isPublished: true,
    price: 499,
    listPrice: 799,
    brand: 'Banita',
    avgRating: 4.31,
    numReviews: 1736,
    ratingDistribution: [
      { rating: 1, count: 209 },
      { rating: 2, count: 118 },
      { rating: 3, count: 449 },
      { rating: 4, count: 1130 },
      { rating: 5, count: 2194 },
    ],
    numSales: 0,
    countInStock: 64,
    description:
      'Catalog Name:Banita Pretty Women Kurta Sets Kurta Fabric: Rayon Bottomwear Fabric: Rayon Fabric: Rayon Sleeve Length: Three-Quarter Sleeves Set Type: Kurta With Bottomwear Bottom Type: Pants Pattern: Printed  Net Quantity (N): Pack Of 2 Sizes:  S (Bust Size: 36 in, Shoulder Size: 14 in, Kurta Waist Size: 32 in, Kurta Length Size: 44 in, Bottom Waist Size: 32 in, Bottom Hip Size: 38 in, Bottom Length Size: 38 in)   M (Bust Size: 38 in, Shoulder Size: 14 in, Kurta Waist Size: 34 in, Kurta Hip Size: 40 in, Kurta Length Size: 44 in, Bottom Waist Size: 28 in, Bottom Hip Size: 32 in, Bottom Length Size: 38 in)   L (Bust Size: 40 in, Shoulder Size: 15 in, Kurta Waist Size: 36 in, Kurta Hip Size: 42 in, Kurta Length Size: 44 in, Bottom Waist Size: 36 in, Bottom Hip Size: 34 in, Bottom Length Size: 38 in)   XL (Bust Size: 42 in, Shoulder Size: 15 in, Kurta Waist Size: 38 in, Kurta Hip Size: 44 in, Kurta Length Size: 44 in, Bottom Waist Size: 30 in, Bottom Hip Size: 36 in, Bottom Length Size: 38 in)  XXL (Bust Size: 44 in, Shoulder Size: 16 in, Kurta Waist Size: 40 in, Kurta Hip Size: 10 in, Kurta Length Size: 44 in, Bottom Waist Size: 44 in, Bottom Hip Size: 38 in, Bottom Length Size: 38 in)  Dispatch: 2 Days',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Green', 'Red', 'Black'],

    reviews: [],
  },
  {
    name: 'Aishani Petite Women Kurta Sets',
    slug: toSlug('Aishani Petite Women Kurta Sets'),
    category: 'Womens Fashion',
    images: ['/images/p10-1.jpg', '/images/p10-2.jpg', '/images/p10-3.jpg', '/images/p10-4.jpg', '/images/p10-5.jpg', '/images/p10-6.jpg', '/images/p10-7.jpg', '/images/p10-8.jpg'],
    tags: ['new-arrival'],
    isPublished: true,
    price: 399,
    listPrice: 429,
    brand: 'Aishani Petite',
    avgRating: 4.16,
    numReviews: 113,
    ratingDistribution: [
      { rating: 1, count: 25 },
      { rating: 2, count: 19 },
      { rating: 3, count: 47 },
      { rating: 4, count: 60 },
      { rating: 5, count: 137 },
    ],
    numSales: 0,
    countInStock: 67,
    description:
      'Catalog Name: Aishani Petite Women Kurta Sets Kurta Fabric: Cotton Blend Bottomwear Fabric: Cotton Blend Fabric: No Dupatta Sleeve Length: Three-Quarter Sleeves Set Type: Kurta With Bottomwear Bottom Type: Pants Pattern: Printed Net Quantity (N): Single Sizes:  XXS, XS, S (Bust Size: 36 in, Shoulder Size: 14 in, Kurta Waist Size: 32 in, Kurta Length Size: 44 in)  M (Bust Size: 38 in, Shoulder Size: 14 in, Kurta Waist Size: 34 in, Kurta Length Size: 44 in)  L (Bust Size: 40 in, Shoulder Size: 15 in, Kurta Waist Size: 36 in, Kurta Length Size: 44 in)  XL (Bust Size: 42 in, Shoulder Size: 15 in, Kurta Waist Size: 38 in, Kurta Length Size: 44 in)  XXL (Bust Size: 44 in, Shoulder Size: 16 in, Kurta Waist Size: 40 in, Kurta Length Size: 44 in)  XXXL, 4XL, 5XL, 6XLDispatch: 1 Day',
    sizes: ['XXS', 'XS','S','M', 'L', 'XL', 'XXL','XXXL','4XL','5XL','6XL'],
    colors: ['Pink', 'Blue', 'Yellow'],

    reviews: [],
  },
  {
    name: 'Alisha Ensemble Women Kurta Sets',
    slug: toSlug('Alisha Ensemble Women Kurta Sets'),
    category: 'Womens Fashion',
    images: ['/images/p9-1.jpg', '/images/p9-2.jpg','/images/p9-3.jpg'],
    tags: ['new-arrival'],
    isPublished: true,
    price: 499,
    listPrice: 769,
    brand: 'Alisha',
    avgRating: 4.31,
    numReviews: 9623,
    ratingDistribution: [
      { rating: 1, count: 2039 },
      { rating: 2, count: 1174 },
      { rating: 3, count: 4262 },
      { rating: 4, count: 9028 },
      { rating: 5, count: 13090 },
    ],
    numSales: 0,
    countInStock: 65,
    description:
      'Kurta Fabric: Rayon Bottomwear Fabric: Rayon Fabric: Rayon Sleeve Length: Three-Quarter Sleeves Set Type: Kurta With Bottomwear Bottom Type: Palazzos Pattern: Printed Net Quantity (N): Single Sizes:  XS, S (Bust Size: 36 in, Shoulder Size: 12 in, Kurta Waist Size: 32 in, Kurta Length Size: 50 in, Bottom Waist Size: 32 in, Bottom Hip Size: 34 in, Bottom Length Size: 38 in)  M (Bust Size: 38 in, Shoulder Size: 13 in, Kurta Waist Size: 34 in, Kurta Length Size: 50 in, Bottom Waist Size: 34 in, Bottom Hip Size: 36 in, Bottom Length Size: 38 in)  L (Bust Size: 40 in, Shoulder Size: 14 in, Kurta Waist Size: 36 in, Kurta Length Size: 50 in, Bottom Waist Size: 36 in, Bottom Hip Size: 38 in, Bottom Length Size: 38 in)  XL (Bust Size: 42 in, Shoulder Size: 15 in, Kurta Waist Size: 38 in, Kurta Length Size: 50 in, Bottom Waist Size: 38 in, Bottom Hip Size: 40 in, Bottom Length Size: 38 in)  XXL (Bust Size: 44 in, Shoulder Size: 16 in, Kurta Waist Size: 40 in, Kurta Length Size: 50 in, Bottom Waist Size: 40 in, Bottom Hip Size: 42 in, Bottom Length Size: 38 in)  Dispatch: 1 Day',
    sizes: ['XS','S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Blue'],

    reviews: [],
  },
  {
    name: 'Asha Fabrics Trendy Voguish Women Kurta Sets',
    slug: toSlug('Asha Fabrics Trendy Voguish Women Kurta Sets'),
    category: 'Womens Fashion',
    images: ['/images/p8-1.jpg', '/images/p8-2.jpg','/images/p8-3.jpg'],
    tags: ['new-arrival'],
    isPublished: true,
    price: 599,
    listPrice: 999,
    brand: 'Asha Fabrics',
    avgRating: 4.61,
    numReviews: 25430,
    ratingDistribution: [
      { rating: 1, count: 3227 },
      { rating: 2, count: 1375 },
      { rating: 3, count: 5427 },
      { rating: 4, count: 17581 },
      { rating: 5, count: 37750 },
    ],
    numSales: 0,
    countInStock: 71,
    description:
      'Kurta Fabric: Rayon Fabric: Rayon Bottomwear Fabric: Rayon Sleeve Length: Three-Quarter Sleeves Pattern: Printed Set Type: Kurta with Dupatta and Bottomwear Stitch Type: Stitched Net Quantity (N): Single Sizes:  M (Bust Size: 38 in, Top Length Size: 42 in, Bottom Waist Size: 36 in, Bottom Length Size: 46 in, Dupatta Length Size: 2.1 in, Shoulder Size: 14 in)  XL (Bust Size: 42 in, Top Length Size: 42 in, Bottom Waist Size: 16 in, Bottom Length Size: 46 in, Dupatta Length Size: 2.1 in, Shoulder Size: 14 in)  XXL (Bust Size: 14 in, Top Length Size: 46 in, Bottom Waist Size: 40 in, Bottom Length Size: 46 in, Dupatta Length Size: 2.1 in, Shoulder Size: 15 in)  XXXL (Bust Size: 15 in, Top Length Size: 14 in, Bottom Waist Size: 14 in, Bottom Length Size: 46 in, Dupatta Length Size: 2.1 in, Shoulder Size: 14 in)  Dispatch: 1 Day',
    sizes: ['M', 'XL', 'XXL', 'XXXL'],
    colors: ['Purple'],

    reviews: [],
  },
  {
    name: 'Aagyeyi Ensemble Kurtis',
    slug: toSlug('Aagyeyi Ensemble Kurtis'),
    category: 'Womens Fashion',
    images: [
      '/images/p12-1.jpg',
      '/images/p12-2.jpg',
      '/images/p12-3.jpg',
    ],
    tags: ['featured'],
    isPublished: true,
    price: 319,
    listPrice: 449,
    brand: 'Aagyeyi',
    avgRating: 3.84,
    numReviews: 1064,
    ratingDistribution: [
      { rating: 1, count: 23 },
      { rating: 2, count: 13 },
      { rating: 3, count: 98 },
      { rating: 4, count: 265 },
      { rating: 5, count: 467 },
    ],
    numSales: 0,
    countInStock: 12,
    description:
      'Catalog Name: Aagyeyi Ensemble Kurtis Fabric: Crepe Pattern: Printed Combo of: Single Sizes: S (Bust Size: 36 in, Size Length: 44 in)  M (Bust Size: 38 in, Size Length: 44 in)  L (Bust Size: 40 in, Size Length: 44 in)  XL (Bust Size: 42 in, Size Length: 44 in)  XXL (Bust Size: 44 in, Size Length: 44 in)  Easy Returns Available In Case Of Any Issue ',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black & White'],

    reviews: [],
  },
  {
    name: "Men Typography Round Neck Cotton Blend Pink T-Shirt K",
    slug: toSlug('Men Typography Round Neck Cotton Blend Pink T-Shirt K'),
    category: 'Mens Fashion',
    brand: 'H.K Creations',
    images: ['/images/p13-1.jpg', '/images/p13-2.jpg','/images/p13-3.jpg','/images/p13-4.jpg','/images/p13-5.jpg','/images/p13-6.jpg','/images/p13-7.jpg','/images/p13-8.jpg',],
    tags: ['best-seller'],
    isPublished: true,
    price: 449,
    listPrice: 599,
    avgRating: 3.72,
    numReviews: 43,
    ratingDistribution: [
      { rating: 5, count: 48 },
      { rating: 4, count: 22 },
      { rating: 3, count: 17 },
      { rating: 2, count: 8 },
      { rating: 1, count: 22 },
    ],
    numSales: 0,
    countInStock: 63,
    description:
      'The Jerzees long sleeve t-shirt is made with dri-power technology that wicks away moisture to keep you cool and dry throughout your day. We also included a rib collar and cuffs for added durability, and a lay-flat collar for comfort. If you are looking for a versatile shirt that you can wear throughout the transitioning seasons, then look no further.',
    sizes: ['XL', 'XXL'],
    colors: ['Green', 'White'],

    reviews: [],
  },
  {
    name: 'LEOTUDE Mens Tshirts',
    slug: toSlug(
      'LEOTUDE Mens Tshirts'
    ),
    category: 'Mens Fashion',
    brand: 'LEOTUDE',
    images: ['/images/p14-1.jpg', '/images/p14-2.jpg', '/images/p14-3.jpg', '/images/p14-4.jpg', '/images/p14-5.jpg', '/images/p14-6.jpg'],
    tags: ['todays-deal'],
    isPublished: true,
    price: 399,
    listPrice: 496,
    avgRating: 3.85,
    numReviews: 1146,
    ratingDistribution: [
      { rating: 5, count: 2526 },
      { rating: 4, count: 979 },
      { rating: 3, count: 672 },
      { rating: 2, count: 368 },
      { rating: 1, count: 734 },
    ],
    numSales: 0,
    countInStock: 64,
    description:
      'Product Name: LEOTUDE Mens Tshirts Fabric: Cotton Blend Sleeve Length: Long Sleeves Pattern: Printed Net Quantity (N): 1 Sizes: S(Chest Size: 38 in, Length Size: 27 in)  M (Chest Size: 40 in, Length Size: 28 in)  L (Chest Size: 42 in, Length Size: 29 in)  XL (Chest Size: 44 in, Length Size: 30 in)  XXL (Chest Size: 46 in, Length Size: 30.5 in)  XXXL',
    sizes: ['S','M','L','XL', 'XXL','XXXL'],
    colors: ['Blue', 'Red','Black'],

    reviews: [],
  },
  {
    name: 'Zivapez Fashionable Cotton Slub Dijital Print Anarkali Kurti For Women',
    slug: toSlug('Zivapez Fashionable Cotton Slub Dijital Print Anarkali Kurti For Women'),
    category: 'Womens Fashion',
    brand: 'Zivapez',
    images: ['/images/p16-1.jpg', '/images/p16-2.jpg', '/images/p16-3.jpg', '/images/p16-4.jpg', '/images/p16-5.jpg', '/images/p16-6.jpg', '/images/p16-7.jpg', '/images/p16-8.jpg', '/images/p16-9.jpg', '/images/p16-10.jpg', '/images/p16-11.jpg'],
    tags: ['best-seller', 'todays-deal'],
    isPublished: true,
    price: 329,
    listPrice: 499,
    avgRating: 4.26,
    numReviews: 38418,
    ratingDistribution: [
      { rating: 5, count: 59765 },
      { rating: 4, count: 38331 },
      { rating: 3, count: 18371 },
      { rating: 2, count: 4638 },
      { rating: 1, count: 8563 },
    ],
    countInStock: 76,
    numSales: 0,
    description:
      'Product Name: Fashionable Cotton Slub Dijital Print Anarkali Kurti For Women Fabric: Cotton Blend Sleeve Length: Short Sleeves Pattern: Printed Combo of: Single Sizes: XS (Bust Size: 19 in, Size Length: 44 in)  S (Bust Size: 36 in, Size Length: 44 in)  M (Bust Size: 38 in, Size Length: 44 in)  L (Bust Size: 40 in, Size Length: 44 in)  XL (Bust Size: 42 in, Size Length: 44 in)  XXL (Bust Size: 44 in, Size Length: 44 in)  XXXL (Bust Size: 25 in, Size Length: 44 in)  4XL (Bust Size: 26 in, Size Length: 44 in) SIZE CHART- Bust Size- S-36, M-38, L-40,XL-42, XXL-44,3XL-46, 4XL-48, West Size-S-32, M-34, L-36, XL-38, XXL-40, 3XL-42, 4XL-4 ',
    sizes: ['XS','S','M','L','XL', 'XXL','XXXL','4XL'],
    colors: ['Grey', 'White','Pink', 'Yellow', 'Blue', 'Red', 'Green', 'DarkYellow','LightPink'],

    reviews: [],
  },
  {
    name: "Women's Beautiful Traditional Rayon Printed Kurta Sharara And Net Dupatta Set",
    slug: toSlug(
      "Women's Beautiful Traditional Rayon Printed Kurta Sharara And Net Dupatta Set"
    ),
    category: 'Womens Fashion',
    brand: ' 395 BRAND CLOTH',
    images: ['/images/p15-1.jpg', '/images/p15-2.jpg','/images/p15-3.jpg','/images/p15-4.jpg','/images/p15-5.jpg','/images/p15-6.jpg','/images/p15-7.jpg'],
    tags: ['new-arrival', 'featured'],
    isPublished: true,
    price: 549,
    listPrice: 729,
    avgRating: 3.94,
    numReviews: 687,
    ratingDistribution: [
      { rating: 5, count: 1267 },
      { rating: 4, count: 467 },
      { rating: 3, count: 263 },
      { rating: 2, count: 122 },
      { rating: 1, count: 312 },
    ],
    numSales: 0,
    countInStock: 67,
    description:
      "Checkout this latest Dupatta Sets Product Name: Women's Beautiful Traditional Rayon Printed Kurta Sharara And Net Dupatta Set Fabric: Rayon Sleeve Length: Sleeveless Pattern: Printed Set Type: Kurta with Dupatta and Bottomwear Stitch Type: Stitched Sizes:  S, M, L, XL, XXL Country of Origin: India Easy Returns Available In Case Of Any Issue",
    sizes: ['S','M','L','XL', 'XXL'],
    colors: ['Green', 'Red', 'DarkGreen', 'Maroon', 'Pink', 'Blue','Black'],

    reviews: [],
  },
  {
    name: 'Classy Designer Women Jeans',
    slug: toSlug('Classy Designer Women Jeans'),
    category: 'Womens Fashion',
    brand: 'Bhavins Collection',
    images: ['/images/p22-1.jpg', '/images/p22-2.jpg', '/images/p22-3.jpg', '/images/p22-4.jpg', '/images/p22-5.jpg'],
    tags: ['best-seller', 'todays-deal'],
    isPublished: true,
    price: 399,
    listPrice: 549,
    avgRating: 4.16,
    numReviews: 57,
    ratingDistribution: [
      { rating: 5, count: 150 },
      { rating: 4, count: 40 },
      { rating: 3, count: 32 },
      { rating: 2, count: 14 },
      { rating: 1, count: 26 },
    ],
    countInStock: 76,
    numSales: 0,
    description:
      'Catalog Name: Classy Designer Women Jeans Fabric: Denim Surface Styling: Product Dependent Net Quantity (N): 1 Sizes: 26, 28, 30, 32, 34, 36, 38, 40 Dispatch: 2 Days',
    sizes: ['28', '30', '32'],
    colors: ['Blue', 'Dark Blue'],

    reviews: [],
  },

  // Jeans
  {
    name: 'Men Skinny Jeans',
    slug: toSlug('Men Skinny Jeans'),
    category: 'Mens Fashion',
    brand: 'Plane-Men-Royal',
    images: ['/images/p21-1.jpg', '/images/p21-2.jpg','/images/p21-3.jpg'],
    tags: ['new-arrival'],
    isPublished: true,
    price: 399,
    listPrice: 539,
    avgRating: 4.11,
    numReviews: 2030,
    ratingDistribution: [
      { rating: 5, count: 2725 },
      { rating: 4, count: 1132 },
      { rating: 3, count: 671 },
      { rating: 2, count: 242 },
      { rating: 1, count: 514 },
    ],
    countInStock: 64,
    numSales: 0,
    description:
      'Catalog Name:Men Skinny Jeans Fabric: Denim Pattern: Dyed/Washed Net Quantity (N): 1 Sizes:  28 (Waist Size: 29 in, Length Size: 41 in, Hip Size: 34 in)  30 (Waist Size: 31 in, Length Size: 41 in, Hip Size: 36 in)  32 (Waist Size: 33 in, Length Size: 41 in, Hip Size: 38 in) Dispatch: 1 Day',
    sizes: ['28', '30', '32'],
    colors: ['Blue'],

    reviews: [],
  },
  {
    name: 'Classy Elegant Women Jeans',
    slug: toSlug('Classy Elegant Women Jeans'),
    category: 'Womens Fashion',
    brand: 'Trendy Fashions',
    images: ['/images/p23-1.jpg', '/images/p23-2.jpg','/images/p23-3.jpg'],
    tags: ['best-seller'],
    isPublished: true,
    price: 249,
    listPrice: 389,
    avgRating: 3.9,
    numReviews: 577,
    ratingDistribution: [
      { rating: 5, count: 914 },
      { rating: 4, count: 411 },
      { rating: 3, count: 276 },
      { rating: 2, count: 165 },
      { rating: 1, count: 287 },
    ],
    countInStock: 64,
    numSales: 0,
    description:
      'Catalog Name: Classy Elegant Women Jeans Fabric: Denim Net Quantity (N): 1 Sizes: 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, XS Dispatch: 1 Day',
    sizes: ['24', '26', '28','30','32','XS','34','36','38','40','42'],
    colors: ['Blue'],

    reviews: [],
  },
  {
    name: "Trendy Women Fancy Cargo Pant",
    slug: toSlug(
      "Trendy Women Fancy Cargo Pant"
    ),
    category: 'Womens Fashion',
    brand: 'Modern Jeans',
    images: ['/images/p24-1.jpg', '/images/p24-2.jpg', '/images/p24-3.jpg', '/images/p24-4.jpg'],
    tags: ['todays-deal'],
    isPublished: true,
    price: 399,
    listPrice: 599,
    avgRating: 4.26,
    numReviews: 2784,
    ratingDistribution: [
      { rating: 5, count: 3742 },
      { rating: 4, count: 2077 },
      { rating: 3, count: 1078 },
      { rating: 2, count: 312 },
      { rating: 1, count: 612 },
    ],
    countInStock: 48,
    numSales: 0,
    description:
      'Product Name: Trandy Women Fancy Cargo Pant Fabric: Cotton Blend Surface Styling: Tie-Ups Net Quantity (N): 1 Sizes: 26 (Waist Size: 26 in, Length Size: 32 in)  28 (Waist Size: 28 in, Length Size: 32 in)  30 (Waist Size: 30 in, Length Size: 32 in)  32 (Waist Size: 32 in, Length Size: 32 in)  34 (Waist Size: 34 in, Length Size: 32 in) ',
    sizes: ['26', '28', '30', '32', '34'],
    colors: ['Whitish Cream', 'Brown', 'Cream'],

    reviews: [],
  },
  {
    name: 'Men Cotton Blend Jeans',
    slug: toSlug('Men Cotton Blend Jeans'),
    category: 'Mens Fashion',
    brand: 'Oxe Jeans',
    images: ['/images/p25-1.jpg', '/images/p25-2.jpg', '/images/p25-3.jpg', '/images/p25-4.jpg'],
    tags: ['new-arrival', 'featured'],
    isPublished: true,
    price: 459,
    listPrice: 599,
    avgRating: 3.97,
    numReviews: 7036,
    ratingDistribution: [
      { rating: 5, count: 11095 },
      { rating: 4, count: 4327 },
      { rating: 3, count: 2956 },
      { rating: 2, count: 1215 },
      { rating: 1, count: 2563 },
    ],
    countInStock: 65,
    numSales: 0,
    description:
      'Product Name: Men Cotton Blend Jeans Fabric: Cotton Blend Pattern: Dyed/Washed Net Quantity (N): 1 Sizes:  28 (Waist Size: 29 in, Length Size: 42 in, Hip Size: 35 in)  30 (Waist Size: 31 in, Length Size: 42 in, Hip Size: 37 in)  32 (Waist Size: 33 in, Length Size: 42 in, Hip Size: 39 in)  34 (Waist Size: 35 in, Length Size: 42 in, Hip Size: 40 in)  Country of Origin: India',
    sizes: ['28', '30', '32','34'],
    colors: ['Blue'],

    reviews: [],
  },
  {
    name: 'Men Denim Jeans',
    slug: toSlug('Men Denim Jeans'),
    category: 'Mens Fashion',
    brand: 'Denim',
    images: ['/images/p26-1.jpg', '/images/p26-2.jpg', '/images/p26-3.jpg', '/images/p26-4.jpg'],
    tags: ['best-seller', 'todays-deal'],
    isPublished: true,
    price: 599,
    listPrice: 899,
    avgRating: 3.93,
    numReviews: 1360,
    ratingDistribution: [
      { rating: 5, count: 1805 },
      { rating: 4, count: 951 },
      { rating: 3, count: 625 },
      { rating: 2, count: 253 },
      { rating: 1, count: 471 },
    ],
    countInStock: 76,
    numSales: 0,
    description:
      'Product Name: Men Denim Jeans Fabric: Denim Pattern: Dyed/WashedNet Quantity (N): 1RASSO Regular Fit Mens Jeans - Crafted from cotton to cater to your comfort demands, this pair of Mid rise jeans from RASSO offers you a fashionable look effortlessly. Sizes: 28(Waist Size: 28 in, Length Size: 42 in, Hip Size: 28 in) 30(Waist Size: 30 in, Length Size: 42 in, Hip Size: 30 32(Waist Size: 32 in), Length Size: 42 in, Hip Size: 32 in) 34(Waist Size: 34 in, Length Size: 42 in, Hip Size: 34 in) 36(Waist Size: 36 in, Length Size: 42 in, Hip Size: 36 in) 38(Waist Size: 38 in, Length Size: 42 in, Hip Size: 38 in) 40(Waist Size: 40 in, Length Size: 42 in, Hip Size: 40 in) 42(Waist Size: 42 in, Length Size: 42 in, Hip Size: 42 in) Country of Origin: India',
  sizes: ['28', '30', '32', '34', '36','38','40','42'],
  colors: ['Blue', 'Dark Blue'],

  reviews: [],
  },
// Watches

{
  name: 'MoveFlex Men Analog Watches',
    slug: toSlug(
      'Classy Men Analog Watches'
    ),
      category: 'Wrist Watches',
        brand: 'MoveFlex',
          images: ['/images/p34-1.jpg', '/images/p34-2.jpg', '/images/p34-3.jpg'],
            tags: ['todays-deal'],
              isPublished: true,
                price: 199,
                  listPrice: 399,
                    avgRating: 3.95,
                      numReviews: 837,
                        ratingDistribution: [
                          { rating: 5, count: 1287 },
                          { rating: 4, count: 416 },
                          { rating: 3, count: 340 },
                          { rating: 2, count: 219 },
                          { rating: 1, count: 590 },
                        ],
                          countInStock: 46,
                            numSales: 0,
                              description:
  'Catalog Name:Classy Men Analog Watches Strap Material: Stainless Steel Case: The Goal Case/Bezel Material: Stainless Steel Clasp Type: Stainless Steel Buckle Date Display: Product Dependent Dial Design: Solid Dial Shape: Round Display Type: Analog Dual Time: No Gps: No Light: No Mechanism: Quartz Power Source: Battery Powered Scratch Resistant: No Shock Resistance: No Water Resistance: No Net Quantity (N): 1 Sizes:  Free Size Dispatch: 1 Day',
    sizes: ['Free Size'],
      colors: ['Black'],

        reviews: [],
  },
// Sneakers
{
  name: 'Obelite Modern Trendy Men Casual Shoes',
    slug: toSlug('Obelite Modern Trendy Men Casual Shoes'),
      category: 'Mens Shoes',
        brand: 'Obelite',
          images: ['/images/p50-1.jpg', '/images/p50-2.jpg', '/images/p50-3.jpg', '/images/p50-4.jpg'],
            tags: ['new-arrival'],
              isPublished: true,
                price: 449,
                  listPrice: 749,
                    avgRating: 3.9,
                      numReviews: 464,
                        ratingDistribution: [
                          { rating: 1, count: 313 },
                          { rating: 2, count: 130 },
                          { rating: 3, count: 166 },
                          { rating: 4, count: 181 },
                          { rating: 5, count: 720 },
                        ],
                          countInStock: 71,
                            numSales: 0,
                              description:
  'Material: Mesh Sole Material: Pvc Fastening & Back Detail: Lace-Up Sizes: IND-6, IND-7, IND-8, IND-9, IND-10 Easy Returns Available In Case Of Any Issue ',
    sizes: ['IND-6', 'IND-7', 'IND-8' ,'IND-9', 'IND-10'],
      colors: ['White & Green'],

        reviews: [],
  },
{
  name: "Magnolia Men's Mid top Ankle Sneakers White Colour (Pack Of 1)",
    slug: toSlug(
      "Magnolia Men's Mid top Ankle Sneakers White Colour (Pack Of 1)"
    ),
      category: 'Mens Shoes',
        brand: 'Magnolia',
          images: ['/images/p49-1.jpg', '/images/p49-2.jpg','/images/p49-3.jpg','/images/p49-4.jpg','/images/p49-5.jpg','/images/p49-6.jpg'],
            tags: ['featured'],
              isPublished: true,
                price: 499,
                  listPrice: 899,
                    avgRating: 4.1,
                      numReviews: 142,
                        ratingDistribution: [
                          { rating: 1, count: 80 },
                          { rating: 2, count: 20 },
                          { rating: 3, count: 34 },
                          { rating: 4, count: 66 },
                          { rating: 5, count: 214 },
                        ],
                          countInStock: 62,
                            numSales: 0,
                              description:
  'Product Name: Mens Mid top Ankle Sneakers White Colour (Pack Of 1) Material: Syntethic Leather Sole Material: PVC Pattern: Striped Fastening & Back Detail: Lace-Up Net Quantity (N): 1 Sole: AIRMIX Closure: Lace-Up Heel Height: 1 inches Shoe Width: Medium Material: Premium Synthetic Upper Mid Top Ankle Sneakers For Men Lifestyle : Perfect For Casual , Outdoor & Every Day Purpose Highly Cushioned footed which you can wear them all day long without any kind of discomfort or uneasiness Disclaimer: Color may slightly vary due to different screen resolutions Care Instructions: Clean your Shoe using a brush to remove loose surface dirt Sizes: IND-6, IND-8, IND-9, IND-10 Country of Origin: India Easy Returns Available In Case Of Any Issue ',
    sizes: ['IND-6', 'IND-8', 'IND-9','IND-10'],
      colors: ['White', 'Black'],

        reviews: [],
  },
{
  name: 'Saucy Belle Original Luxury Branded Fashionable Mens Casual Shoes',
    slug: toSlug(
      'Relaxed Trendy Men Casual Shoes'
    ),
      category: 'Mens Shoes',
        brand: 'Saucy Belle',
          images: ['/images/p47-1.jpg', '/images/p47-2.jpg','/images/p47-3.jpg','/images/p47-4.jpg','/images/p47-5.jpg'],
            tags: ['best-seller'],
              isPublished: true,
                price: 499,
                  listPrice: 649,
                    avgRating: 4.24,
                      numReviews: 128,
                        ratingDistribution: [
                          { rating: 1, count: 63 },
                          { rating: 2, count: 21 },
                          { rating: 3, count: 54 },
                          { rating: 4, count: 67 },
                          { rating: 5, count: 257 },
                        ],
                          countInStock: 43,
                            numSales: 0,
                              description:
  'Catalog Name:Relaxed Trendy Men Casual Shoes Material: Denim Sole Material: Rubber Fastening & Back Detail: Lace-Up Sizes: IND-6, IND-7, IND-8, IND-9, IND-10 Easy Returns Available In Case Of Any Issue',
    sizes: ['24.5', '25', '25.5','26','27'],
      colors: ['Black&White'],

        reviews: [],
  },
{
  name: "Layasa New Women's Stylish Casual Sports Sneakers",
    slug: toSlug(
      'Classy Women Sneakers'
    ),
      category: 'Womens Shoes',
        brand: 'Layasa',
          images: ['/images/p44-1.jpg', '/images/p44-2.jpg', '/images/p44-3.jpg', '/images/p44-4.jpg'],
            tags: ['todays-deal'],
              isPublished: true,
                price: 599,
                  listPrice: 799,
                    avgRating: 4.4,
                      numReviews: 8259,
                        ratingDistribution: [
                          { rating: 1, count: 13113 },
                          { rating: 2, count: 5830 },
                          { rating: 3, count: 2711 },
                          { rating: 4, count: 899 },
                          { rating: 5, count: 1840 },
                        ],
                          countInStock: 89,
                            numSales: 0,
                              description:
  'Catalog Name:Classy Women Sneakers Material: Synthetic Sole Material: PVC Fastening & Back Detail: Lace-Up Pattern: Colorblocked Net Quantity (N): 1 Sizes: IND-7, IND-6, IND-8, IND-3, IND-5, IND-4 Dispatch: 2-2 Days',
    sizes: ['IND-8', 'IND-3', 'IND-4', 'IND-5', 'IND-6', 'IND-7'],
      colors: ['Pinkish White'],

        reviews: [],
  },
{
  name: "Casual Lifestyle Shoes For Men with Soft Cushioned Insole",
    slug: toSlug("Casual Trendy Sports Shoes"),
      category: 'Mens Shoes',
        brand: 'Styleon',
          images: ['/images/p48-1.jpg', '/images/p48-2.jpg','/images/p48-3.jpg','/images/p48-4.jpg','/images/p48-5.jpg'],
            tags: ['new-arrival', 'featured'],
              isPublished: true,
                price: 499,
                  listPrice: 749,
                    avgRating: 4.26,
                      numReviews: 33,
                        ratingDistribution: [
                          { rating: 1, count: 9 },
                          { rating: 2, count: 4 },
                          { rating: 3, count: 8 },
                          { rating: 4, count: 8 },
                          { rating: 5, count: 43 },
                        ],
                          countInStock: 45,
                            numSales: 0,
                              description:
  "Catalog Name: Trendy Sports Shoes Material: Mesh | Sole Material: EVA | Fastening & Back Detail: Lace-Up | Pattern: Colorblocked | Net Quantity (N): 1 Sizes:  IND-6 (Foot Length Size: 25 cm)  IND-7 (Foot Length Size: 26 cm)  IND-8 (Foot Length Size: 27 cm)  IND-9 (Foot Length Size: 28 cm)  IND-10 (Foot Length Size: 29 cm)  Dispatch: 2 Days",
    sizes: ['25', '26', '27', '28','29'],
      colors: ['White'],

        reviews: [],
  },

{
  name: "Aadab Graceful Men Casual Shoes",
    slug: toSlug(
      "Aadab Graceful Men Casual Shoes"
    ),
      category: 'Mens Shoes',
        brand: 'Generic',
          images: ['/images/p46-1.jpg', '/images/p46-2.jpg', '/images/p46-3.jpg'],
            tags: ['best-seller', 'todays-deal'],
              isPublished: true,
                price: 499,
                  listPrice: 659,
                    avgRating: 3.97,
                      numReviews: 16,
                        ratingDistribution: [
                          { rating: 1, count: 30 },
                          { rating: 2, count: 7 },
                          { rating: 3, count: 8 },
                          { rating: 4, count: 2 },
                          { rating: 5, count: 9 },
                        ],
                          countInStock: 46,
                            numSales: 0,
                              description:
  'Catalog Name: Aadab Graceful Men Casual Shoes Material: Mesh Sole Material: Pvc Fastening & Back Detail: Lace-Up Sizes: IND-6, IND-7, IND-8, IND-9, IND-10 Easy Returns Available In Case Of Any Issue',
    sizes: ['25', '26', '27', '28'],
      colors: ['Black & White'],

        reviews: [],
  },

  {
    name: "Classy Modern Formal Men Shirts",
      slug: toSlug(
        "Classy Modern Formal Men Shirts"
      ),
        category: 'Mens Fashion',
          brand: 'Sky Global',
            images: ['/images/p28-1.jpg', '/images/p28-2.jpg', '/images/p28-3.jpg', '/images/p28-4.jpg', '/images/p28-5.jpg', '/images/p28-6.jpg', '/images/p28-7.jpg'],
              tags: ['best-seller', 'todays-deal'],
                isPublished: true,
                  price: 489,
                    listPrice: 759,
                      avgRating: 4.17,
                        numReviews: 316,
                          ratingDistribution: [
                            { rating: 1, count: 303 },
                            { rating: 2, count: 191 },
                            { rating: 3, count: 302 },
                            { rating: 4, count: 438 },
                            { rating: 5, count: 1277 },
                          ],
                            countInStock: 76,
                              numSales: 0,
                                description:
    'Catalog Name: Classy Modern Men Shirts Fabric: Cotton Sleeve Length: Product Dependent Pattern: Solid Net Quantity (N): 1 Sizes: M (Chest Size: 40 in, Length Size: 28.5 in)  L (Chest Size: 42 in, Length Size: 29 in)  XL (Chest Size: 44 in, Length Size: 30 in)  XXL (Chest Size: 47 in, Length Size: 30.5 in)  Dispatch: 1 Day',
      sizes: ['M', 'L', 'XL', 'XXL'],
        colors: ['Black','Grey','Green','Blue','DarkBlue'
        ],
  
          reviews: [],
    },

    {
      name: "Pretty Fashionable Men Shirts",
        slug: toSlug(
          "Pretty Fashionable Men Shirts"
        ),
          category: 'Mens Fashion',
            brand: 'FEBDEX FASHION',
              images: ['/images/p31-1.jpg', '/images/p31-2.jpg', '/images/p31-3.jpg', '/images/p31-4.jpg', '/images/p31-5.jpg', '/images/p31-6.jpg', '/images/p31-7.jpg', '/images/p31-8.jpg', '/images/p31-9.jpg', '/images/p31-10.jpg'],
                tags: ['best-seller', 'todays-deal'],
                  isPublished: true,
                    price: 489,
                      listPrice: 759,
                        avgRating: 4.17,
                          numReviews: 1267,
                            ratingDistribution: [
                              { rating: 1, count: 474 },
                              { rating: 2, count: 947 },
                              { rating: 3, count: 540 },
                              { rating: 4, count: 974 },
                              { rating: 5, count: 2058 },
                            ],
                              countInStock: 76,
                                numSales: 0,
                                  description:
      'Catalog Name: Pretty Fashionable Men Shirts Fabric: Cotton Sleeve Length: Long Sleeves Pattern: Solid Net Quantity (N): 1 Sizes: M (Chest Size: 38 in, Length Size: 28 in)  L (Chest Size: 40 in, Length Size: 28.5 in)  XL (Chest Size: 42 in, Length Size: 29 in)  XXL (Chest Size: 44 in, Length Size: 29.5 in)  Dispatch: 1 Day ',
        sizes: ['M', 'L', 'XL', 'XXL'],
          colors: ['LightGreen','DarkGreen','Pink','White','Orange','DarkBlue','LightBlue','SkyBlue','Red'
          ],
    
            reviews: [],
      },  

      {
        name: "Erica's Fancy Sensational Men Shirts",
          slug: toSlug(
            "Erica's Fancy Sensational Men Shirts"
          ),
            category: 'Mens Fashion',
              brand: 'HKG Enterprises',
                images: ['/images/p29-1.jpg', '/images/p29-2.jpg', '/images/p29-3.jpg', '/images/p29-4.jpg', '/images/p29-5.jpg', '/images/p29-6.jpg', '/images/p29-7.jpg'],
                  tags: ['best-seller', 'todays-deal'],
                    isPublished: true,
                      price: 499,
                        listPrice: 699,
                          avgRating: 3.97,
                            numReviews: 1267,
                              ratingDistribution: [
                                { rating: 1, count: 228 },
                                { rating: 2, count: 152 },
                                { rating: 3, count: 297 },
                                { rating: 4, count: 449 },
                                { rating: 5, count: 950 },
                              ],
                                countInStock: 76,
                                  numSales: 0,
                                    description:
        'Catalog Name:Fancy Sensational Men Shirts Fabric: Cotton Sleeve Length: Long Sleeves Pattern: Printed Net Quantity (N): 1 Sizes: M (Chest Size: 40 in, Length Size: 28.5 in)  L (Chest Size: 42 in, Length Size: 29 in)  XL (Chest Size: 44 in, Length Size: 30 in)  XXL (Chest Size: 47 in, Length Size: 30.5 in)  XXXL (Chest Size: 49 in, Length Size: 32 in)   Dispatch: 1 Day',
          sizes: ['M', 'L','XL', 'XXL','XXXL'],
            colors: ['White','Grey','Pink','Blue','DarkBlue'
            ],
      
              reviews: [],
        }, 

        {
          name: "Luxury Crown Urbane Ravishing Men Shirts",
            slug: toSlug(
              "Luxury Crown Urbane Ravishing Men Shirts"
            ),
              category: 'Mens Fashion',
                brand: 'Luxury Crown',
                  images: ['/images/p30-1.jpg', '/images/p30-2.jpg', '/images/p30-3.jpg'],
                    tags: ['best-seller', 'todays-deal'],
                      isPublished: true,
                        price: 459,
                          listPrice: 599,
                            avgRating: 3.96,
                              numReviews: 124,
                                ratingDistribution: [
                                  { rating: 1, count: 16 },
                                  { rating: 2, count: 8 },
                                  { rating: 3, count: 15 },
                                  { rating: 4, count: 25 },
                                  { rating: 5, count: 47 },
                                ],
                                  countInStock: 76,
                                    numSales: 0,
                                      description:
          'Catalog Name:Urbane Ravishing Men Shirts Fabric: Cotton Silk Sleeve Length: Long Sleeves Pattern: Printed Net Quantity (N): 1 Sizes: S (Chest Size: 36 in, Length Size: 27.5 in)  M (Chest Size: 38 in, Length Size: 29 in)  L (Chest Size: 40 in, Length Size: 29.5 in)  XL (Chest Size: 41 in, Length Size: 30 in)  XXL (Chest Size: 42 in, Length Size: 30.5 in)   Dispatch: 1 Day',
            sizes: ['S','M', 'L','XL', 'XXL'],
              colors: ['Cyan'
              ],
        
                reviews: [],
          }, 


]
const reviews = [
  {
    rating: 5,
    title: 'Highly recommend!', // Good
    comment:
      'This is exactly what I was looking for. Great quality, perfect fit, and it looks fantastic. A must-have!',
  },
  {
    rating: 2,
    title: 'Not worth the price', // Bad
    comment:
      "Disappointed with the quality. It looks decent in pictures, but in reality, it's flimsy and poorly made. Definitely wouldn't recommend.",
  },
  {
    rating: 4,
    title: 'Happy with my purchase', // Good
    comment:
      'Good quality and fair price. It met my expectations, and I might buy another one in the future.',
  },
  {
    rating: 1,
    title: 'Terrible quality, waste of money', // Bad
    comment:
      'Absolutely horrible. The product fell apart within days. The material is cheap, and the stitching is poor. Avoid at all costs.',
  },
  {
    rating: 3,
    title: 'Decent but not great', // Neutral
    comment:
      "It's an okay product. The design is nice, but the build quality isn't the best. Not terrible, but also not something I'd repurchase.",
  },
  {
    rating: 5,
    title: 'Best purchase ever!', // Good
    comment:
      "I’m so impressed with this product! It's everything I hoped for and more. Definitely worth every penny.",
  },
  {
    rating: 2,
    title: 'Could be better', // Bad
    comment:
      "It's not completely useless, but it has too many flaws. The size runs small, and the material feels uncomfortable.",
  },
  {
    rating: 4,
    title: 'Great buy!', // Good
    comment:
      'Very satisfied with the quality. The product is well-made and does exactly what I needed it to do.',
  },
  {
    rating: 3,
    title: 'Not bad for the price', // Neutral
    comment:
      'This product is fine if you’re looking for something affordable. Just don’t expect premium quality.',
  },
  {
    rating: 5,
    title: 'Fantastic product!', // Good
    comment:
      "Can't find a single flaw. The quality, design, and functionality are all top-notch. Absolutely love it!",
  },
  {
    rating: 1,
    title: 'Worst product ever!', // Bad
    comment:
      'Do not buy this. The stitching is weak, and it broke after two washes. A total waste of money.',
  },
  {
    rating: 3,
    title: 'Average experience', // Neutral
    comment:
      'Does the job, but I expected more. It’s neither great nor terrible, but for the price, I expected higher quality.',
  },
  {
    rating: 4,
    title: 'Met expectations', // Good
    comment:
      'Solid purchase! Feels durable, and the design is nice. A few minor improvements could make it perfect.',
  },
  {
    rating: 5,
    title: 'Absolutely love it!', // Good
    comment:
      "This product exceeded my expectations! It's high-quality, stylish, and super comfortable. Would definitely buy again.",
  },
  {
    rating: 2,
    title: 'Not as expected', // Bad
    comment:
      "The material is too thin, and it doesn't feel durable. I regret buying this, not what I hoped for.",
  },
]

const data: Data = {
  users,
  products,
  reviews,
  webPages: [
    {
      title: 'About Us',
      slug: 'about-us',
      content: `Welcome to Trendora, your trusted destination for quality products and exceptional service. Our journey began with a mission to bring you the best shopping experience by offering a wide range of products at competitive prices, all in one convenient platform.

At Trendora, we prioritize customer satisfaction and innovation. Our team works tirelessly to curate a diverse selection of items, from everyday essentials to exclusive deals, ensuring there's something for everyone. We also strive to make your shopping experience seamless with fast shipping, secure payments, and excellent customer support.

As we continue to grow, our commitment to quality and service remains unwavering. Thank you for choosing Trendora — we look forward to being a part of your journey and delivering value every step of the way.`,
      isPublished: true,
    },
    {
      title: 'Contact Us',
      slug: 'contact-us',
      content: `We’re here to help! If you have any questions, concerns, or feedback, please don’t hesitate to reach out to us. Our team is ready to assist you and ensure you have the best shopping experience.

**Customer Support**
For inquiries about orders, products, or account-related issues, contact our customer support team:
- **Email:** mailtrendora@gmail.com
- **Phone:** +91 9322667822 (Whatsapp)
- **Live Chat:** Available on our website from 9 AM to 6 PM (Monday to Friday).

**Head Office**
For corporate or business-related inquiries, reach out to our headquarters:
- **Address:** APC Chhatralay Vallabh Vidyanagar, Anand
- **Phone:** +91 9322667822 (Whatsapp)

We look forward to assisting you! Your satisfaction is our priority.
`,
      isPublished: true,
    },
    {
      title: 'Help',
      slug: 'help',
      content: `Welcome to Trendora's Help Center! We're here to assist you with any questions or concerns you may have while shopping with us. Whether you need help with orders, account management, or product inquiries, this page provides all the information you need to navigate our platform with ease.

**Placing and Managing Orders**
Placing an order is simple and secure. Browse our product categories, add items to your cart, and proceed to checkout. Once your order is placed, you can track its status through your account under the "My Orders" section. If you need to modify or cancel your order, please contact us as soon as possible for assistance.

**Shipping and Returns**
We offer a variety of shipping options to suit your needs, including standard and express delivery. For detailed shipping costs and delivery timelines, visit our Shipping Policy page. If you're not satisfied with your purchase, our hassle-free return process allows you to initiate a return within the specified timeframe. Check our Returns Policy for more details.

**Account and Support**
Managing your account is easy. Log in to update your personal information, payment methods, and saved addresses. If you encounter any issues or need further assistance, our customer support team is available via email, live chat, or phone. Visit our Contact Us page for support hours and contact details.`,
      isPublished: true,
    },
    {
      title: 'Privacy Policy',
      slug: 'privacy-policy',
      content: `We value your privacy and are committed to protecting your personal information. This Privacy Notice explains how we collect, use, and share your data when you interact with our services. By using our platform, you consent to the practices described herein.

We collect data such as your name, email address, and payment details to provide you with tailored services and improve your experience. This information may also be used for marketing purposes, but only with your consent. Additionally, we may share your data with trusted third-party providers to facilitate transactions or deliver products.

Your data is safeguarded through robust security measures to prevent unauthorized access. However, you have the right to access, correct, or delete your personal information at any time. For inquiries or concerns regarding your privacy, please contact our support team.`,
      isPublished: true,
    },
    {
      title: 'Conditions of Use',
      slug: 'conditions-of-use',
      content: `Welcome to Trendora. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions. These terms govern your use of our platform, including browsing, purchasing products, and interacting with any content or services provided. You must be at least 18 years old or have the consent of a parent or guardian to use this website. Any breach of these terms may result in the termination of your access to our platform.

We strive to ensure all product descriptions, pricing, and availability information on our website are accurate. However, errors may occur, and we reserve the right to correct them without prior notice. All purchases are subject to our return and refund policy. By using our site, you acknowledge that your personal information will be processed according to our privacy policy, ensuring your data is handled securely and responsibly. Please review these terms carefully before proceeding with any transactions.
`,
      isPublished: true,
    },
    {
      title: 'Customer Service',
      slug: 'customer-service',
      content: `At Trendora, our customer service team is here to ensure you have the best shopping experience. Whether you need assistance with orders, product details, or returns, we are committed to providing prompt and helpful support.

If you have questions or concerns, please reach out to us through our multiple contact options:
- **Email:** mailtrendora@gmail.com
- **Phone:** +91 9322667822 (Whatsapp)
- **Live Chat:** Available on our website for instant assistance

We also provide helpful resources such as order tracking, product guides, and FAQs to assist you with common inquiries. Your satisfaction is our priority, and we’re here to resolve any issues quickly and efficiently. Thank you for choosing Trendora!`,
      isPublished: true,
    },
    {
      title: 'Returns Policy',
      slug: 'returns-policy',
      content: 'Returns Policy Content',
      isPublished: true,
    },
    {
      title: 'Careers',
      slug: 'careers',
      content: 'careers Content',
      isPublished: true,
    },
    {
      title: 'Blog',
      slug: 'blog',
      content: 'Blog Content',
      isPublished: true,
    },
    {
      title: 'Sell Products',
      slug: 'sell',
      content: `Sell Products Content`,
      isPublished: true,
    },
    {
      title: 'Become Affiliate',
      slug: 'become-affiliate',
      content: 'Become Affiliate Content',
      isPublished: true,
    },
    {
      title: 'Advertise Your Products',
      slug: 'advertise',
      content: 'Advertise Your Products',
      isPublished: true,
    },
    {
      title: 'Shipping Rates & Policies',
      slug: 'shipping',
      content: 'Shipping Rates & Policies',
      isPublished: true,
    },
  ],
  headerMenus: [
    {
      name: "Today's Deal",
      href: '/search?tag=todays-deal',
    },
    {
      name: 'New Arrivals',
      href: '/search?tag=new-arrival',
    },
    {
      name: 'Featured Products',
      href: '/search?tag=featured',
    },
    {
      name: 'Best Sellers',
      href: '/search?tag=best-seller',
    },
    {
      name: 'Browsing History',
      href: '/#browsing-history',
    },
    {
      name: 'Customer Service',
      href: '/page/customer-service',
    },
    {
      name: 'About Us',
      href: '/page/about-us',
    },
    {
      name: 'Help',
      href: '/page/help',
    },
  ],
  carousels: [
    {
      title: 'Most Popular Shoes For Sale',
      buttonCaption: 'Shop Now',
      image: '/images/banner3.jpg',
      url: '/search?category=Mens Shoes',
      isPublished: true,
    },
    {
      title: 'Best Sellers in T-Shirts',
      buttonCaption: 'Shop Now',
      image: '/images/banner1.jpg',
      url: '/search?category=Mens Fashion',
      isPublished: true,
    },
    {
      title: 'Best Deals on Wrist Watches',
      buttonCaption: 'See More',
      image: '/images/banner2.jpg',
      url: '/search?category=Wrist Watches',
      isPublished: true,
    },
  ],
  settings: [
    {
      common: {
        freeShippingMinPrice: 500,
        isMaintenanceMode: false,
        defaultTheme: 'Light',
        defaultColor: 'Gold',
        pageSize: 9,
      },
      site: {
        name: 'Trendora',
        description:
          'Trendora is a Ecommerce website',
        keywords: 'Trendora, Clothing, Fashion, Trendy Wear, Online Shopping',
        url: 'https://trendora.vercel.app',
        logo: '/icons/logo.png',
        slogan: 'Style for less, confidence for more.',
        author: 'Bhavin Modh',
        copyright: '2025, trendora.com, Inc. or its affiliates',
        email: 'modhbhavin05@gmail.com',
        address: 'Anand Vallabh Vidyanagar',
        phone: '+91 9322667822 (Whatsapp)',
      },
      carousels: [
        {
          title: 'Most Popular Shoes For Sale',
          buttonCaption: 'Shop Now',
          image: '/images/banner3.jpg',
          url: '/search?category=Mens Shoes',
        },
        {
          title: 'Best Sellers in T-Shirts',
          buttonCaption: 'Shop Now',
          image: '/images/banner1.jpg',
          url: '/search?category=Mens Fashion',
        },
        {
          title: 'Best Deals on Wrist Watches',
          buttonCaption: 'See More',
          image: '/images/banner2.jpg',
          url: '/search?category=Wrist Watches',
        },
      ],
      availableLanguages: i18n.locales.map((locale) => ({
        code: locale.code,
        name: locale.name,
      })),
      defaultLanguage: 'en-US',
      availableCurrencies: [

        { name: 'Indian Rupee', code: 'INR', symbol: '₹', convertRate: 1 },

      ],
      defaultCurrency: 'INR',
      availablePaymentMethods: [
        { name: 'Cash On Delivery', commission: 0 },
      ],
      defaultPaymentMethod: 'Cash On Delivery',
      availableDeliveryDates: [
        {
          name: 'Standard Delivery',
          daysToDeliver: 5,
          shippingPrice: 0,
          freeShippingMinPrice: 0,
        },
        {
          name: 'Priority Processing',
          daysToDeliver: 8,
          shippingPrice: 0,
          freeShippingMinPrice: 200,
        },
      ],
      defaultDeliveryDate: 'Standard Delivery',


    },
  ],
}

export default data
