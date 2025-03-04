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
    numSales: 46,
    countInStock: 52,
    description:
      'Catalog Name: Abhisarika Sensational Kurtis Fabric: Crepe Sleeve Length: Three-Quarter Sleeves Pattern: Embroidered Combo of: Single Size : S (Bust Size: 36 in, Size Length: 45 in)  M (Bust Size: 38 in, Size Length: 45 in) L (Bust Size: 40 in, Size Length: 45 in)  XL (Bust Size: 42 in, Size Length: 45 in)  XXL (Bust Size: 44 in, Size Length: 45 in) Easy Returns Available In Case Of Any Issue',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White'],

    reviews: [],
  },
  {
    name: 'Jethawa Fashion Unique Men Kurtas',
    slug: toSlug('Unique Men Kurtas'),
    category: 'Mens Fashion',
    images: ['/images/p5-2', '/images/p5-3'],
    tags: ['new-arrival'],
    isPublished: true,
    price: 459,
    listPrice: 699,
    brand: 'Jethawa Fashion',
    avgRating: 4.1,
    numReviews: 224,
    ratingDistribution: [
      { rating: 5, count: 370 },
      { rating: 4, count: 120 },
      { rating: 3, count: 74 },
      { rating: 2, count: 43 },
      { rating: 1, count: 97 },
    ],
    numSales: 264,
    countInStock: 72,
    description:
      'Catalog Name:Unique Men Kurtas Fabric: Cotton Sleeve Length: Long Sleeves Pattern: Embroidered Combo of: Single Sizes: M(Chest Size: 39 in, Length Size: 40 in, Waist Size: 42 in, Hip Size: 40 in)  L(Chest Size: 41 in, Length Size: 40 in, Waist Size: 34 in, Hip Size: 42 in)  XL(Chest Size: 43 in, Length Size: 40 in, Waist Size: 36 in, Hip Size: 44 in)  Easy Returns Available In Case Of Any Issue',
    sizes: ['M', 'L', 'XL'],
    colors: ['Maroon', 'Yellow', 'Black'],

    reviews: [],
  },
  {
    name: 'Random 2',
    slug: toSlug('r2t'),
    category: 'T-Shirts',
    images: ['/images/p11-1.jpg', '/images/p11-2.jpg'],
    tags: ['new-arrival'],
    isPublished: true,
    price: 21.8,
    listPrice: 0,
    brand: 'Nike',
    avgRating: 4.71,
    numReviews: 7,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 2 },
      { rating: 5, count: 5 },
    ],
    numSales: 9,
    countInStock: 11,
    description:
      'Made with chemicals safer for human health and the environment',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Green', 'Red', 'Black'],

    reviews: [],
  },
  {
    name: 'Random 3',
    slug: toSlug('r3t'),
    category: 'T-Shirts',
    images: ['/images/p11-1.jpg', '/images/p11-2.jpg'],
    tags: ['new-arrival'],
    isPublished: true,
    price: 21.8,
    listPrice: 0,
    brand: 'Nike',
    avgRating: 4.71,
    numReviews: 7,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 2 },
      { rating: 5, count: 5 },
    ],
    numSales: 9,
    countInStock: 11,
    description:
      'Made with chemicals safer for human health and the environment',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Green', 'Red', 'Black'],

    reviews: [],
  },
  {
    name: 'Random 4',
    slug: toSlug('r4t'),
    category: 'T-Shirts',
    images: ['/images/p11-1.jpg', '/images/p11-2.jpg'],
    tags: ['new-arrival'],
    isPublished: true,
    price: 21.8,
    listPrice: 0,
    brand: 'Nike',
    avgRating: 4.71,
    numReviews: 7,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 2 },
      { rating: 5, count: 5 },
    ],
    numSales: 9,
    countInStock: 11,
    description:
      'Made with chemicals safer for human health and the environment',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Green', 'Red', 'Black'],

    reviews: [],
  },
  {
    name: 'Random 5',
    slug: toSlug('r5'),
    category: 'T-Shirts',
    images: ['/images/p11-1.jpg', '/images/p11-2.jpg'],
    tags: ['new-arrival'],
    isPublished: true,
    price: 21.8,
    listPrice: 0,
    brand: 'Nike',
    avgRating: 4.71,
    numReviews: 7,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 2 },
      { rating: 5, count: 5 },
    ],
    numSales: 9,
    countInStock: 11,
    description:
      'Made with chemicals safer for human health and the environment',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Green', 'Red', 'Black'],

    reviews: [],
  },
  {
    name: 'Random 6',
    slug: toSlug('r6'),
    category: 'T-Shirts',
    images: ['/images/p11-1.jpg', '/images/p11-2.jpg'],
    tags: ['new-arrival'],
    isPublished: true,
    price: 21.8,
    listPrice: 0,
    brand: 'Nike',
    avgRating: 4.71,
    numReviews: 7,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 2 },
      { rating: 5, count: 5 },
    ],
    numSales: 9,
    countInStock: 11,
    description:
      'Made with chemicals safer for human health and the environment',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Green', 'Red', 'Black'],

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
    numSales: 29,
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
    numSales: 55,
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
    numSales: 74,
    countInStock: 64,
    description:
      'Product Name: LEOTUDE Mens Tshirts Fabric: Cotton Blend Sleeve Length: Long Sleeves Pattern: Printed Net Quantity (N): 1 Sizes: S(Chest Size: 38 in, Length Size: 27 in)  M (Chest Size: 40 in, Length Size: 28 in)  L (Chest Size: 42 in, Length Size: 29 in)  XL (Chest Size: 44 in, Length Size: 30 in)  XXL (Chest Size: 46 in, Length Size: 30.5 in)  XXXL',
    sizes: ['S','M','L','XL', 'XXL','XXXL'],
    colors: ['Blue', 'Red','Black'],

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
    numSales: 125,
    countInStock: 67,
    description:
      "Checkout this latest Dupatta Sets Product Name: Women's Beautiful Traditional Rayon Printed Kurta Sharara And Net Dupatta Set Fabric: Rayon Sleeve Length: Sleeveless Pattern: Printed Set Type: Kurta with Dupatta and Bottomwear Stitch Type: Stitched Sizes:  S, M, L, XL, XXL Country of Origin: India Easy Returns Available In Case Of Any Issue",
    sizes: ['S','M','L','XL', 'XXL'],
    colors: ['Green', 'Red', 'DarkGreen', 'Maroon', 'Pink', 'Blue','Black'],

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
    numSales: 466,
    description:
      'Product Name: Fashionable Cotton Slub Dijital Print Anarkali Kurti For Women Fabric: Cotton Blend Sleeve Length: Short Sleeves Pattern: Printed Combo of: Single Sizes: XS (Bust Size: 19 in, Size Length: 44 in)  S (Bust Size: 36 in, Size Length: 44 in)  M (Bust Size: 38 in, Size Length: 44 in)  L (Bust Size: 40 in, Size Length: 44 in)  XL (Bust Size: 42 in, Size Length: 44 in)  XXL (Bust Size: 44 in, Size Length: 44 in)  XXXL (Bust Size: 25 in, Size Length: 44 in)  4XL (Bust Size: 26 in, Size Length: 44 in) SIZE CHART- Bust Size- S-36, M-38, L-40,XL-42, XXL-44,3XL-46, 4XL-48, West Size-S-32, M-34, L-36, XL-38, XXL-40, 3XL-42, 4XL-4 ',
    sizes: ['XS','S','M','L','XL', 'XXL','XXXL','4XL'],
    colors: ['Grey', 'White','Pink', 'Yellow', 'Blue', 'Red', 'Green', 'DarkYellow','LightPink'],

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
    numSales: 72,
    description:
      'Catalog Name:Men Skinny Jeans Fabric: Denim Pattern: Dyed/Washed Net Quantity (N): 1 Sizes:  28 (Waist Size: 29 in, Length Size: 41 in, Hip Size: 34 in)  30 (Waist Size: 31 in, Length Size: 41 in, Hip Size: 36 in)  32 (Waist Size: 33 in, Length Size: 41 in, Hip Size: 38 in) Dispatch: 1 Day',
    sizes: ['28', '30', '32'],
    colors: ['Blue'],

    reviews: [],
  },
  {
    name: "Levi's mens 505 Regular Fit Jeans (Also Available in Big & Tall)",
    slug: toSlug(
      "Levi's mens 505 Regular Fit Jeans (Also Available in Big & Tall)"
    ),
    category: 'Jeans',
    brand: "Levi's",
    images: ['/images/p22-1.jpg', '/images/p22-2.jpg'],
    tags: ['featured'],
    isPublished: true,
    price: 59.99,
    listPrice: 69.99,
    avgRating: 4.2,
    numReviews: 10,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    countInStock: 22,
    numSales: 54,
    description:
      'A veritable classic, this 505 is made to have a comfortable look and style.',
    sizes: ['30Wx30L', '34Wx30L', '36Wx30L'],
    colors: ['Blue', 'Grey'],

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
    numSales: 84,
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
    numSales: 169,
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
    numSales: 87,
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
    numSales: 64,
    description:
      'Product Name: Men Denim Jeans Fabric: Denim Pattern: Dyed/WashedNet Quantity (N): 1RASSO Regular Fit Mens Jeans - Crafted from cotton to cater to your comfort demands, this pair of Mid rise jeans from RASSO offers you a fashionable look effortlessly. Sizes: 28(Waist Size: 28 in, Length Size: 42 in, Hip Size: 28 in) 30(Waist Size: 30 in, Length Size: 42 in, Hip Size: 30 32(Waist Size: 32 in), Length Size: 42 in, Hip Size: 32 in) 34(Waist Size: 34 in, Length Size: 42 in, Hip Size: 34 in) 36(Waist Size: 36 in, Length Size: 42 in, Hip Size: 36 in) 38(Waist Size: 38 in, Length Size: 42 in, Hip Size: 38 in) 40(Waist Size: 40 in, Length Size: 42 in, Hip Size: 40 in) 42(Waist Size: 42 in, Length Size: 42 in, Hip Size: 42 in) Country of Origin: India',
  sizes: ['28', '30', '32', '34', '36','38','40','42'],
  colors: ['Blue', 'Dark Blue'],

  reviews: [],
  },
// Watches
{
  name: "Seiko Men's Analogue Watch with Black Dial",
    slug: toSlug("Seiko Men's Analogue Watch with Black Dial"),
      category: 'Wrist Watches',
        brand: 'Seiko',
          images: ['/images/p31-1.jpg', '/images/p31-2.jpg'],
            tags: ['new-arrival'],
              isPublished: true,
                price: 530.0,
                  listPrice: 0,
                    avgRating: 4.71,
                      numReviews: 7,
                        ratingDistribution: [
                          { rating: 1, count: 0 },
                          { rating: 2, count: 0 },
                          { rating: 3, count: 0 },
                          { rating: 4, count: 2 },
                          { rating: 5, count: 5 },
                        ],
                          countInStock: 31,
                            numSales: 48,
                              description:
  'Casing: Case made of stainless steel Case shape: round Case colour: silver Glass: Hardlex Clasp type: Fold over clasp with safety',
    sizes: [],
      colors: [],

        reviews: [],
  },
{
  name: 'SEIKO 5 Sport SRPJ83 Beige Dial Nylon Automatic Watch, Beige, Automatic Watch',
    slug: toSlug(
      'SEIKO 5 Sport SRPJ83 Beige Dial Nylon Automatic Watch, Beige, Automatic Watch'
    ),
      category: 'Wrist Watches',
        brand: 'Seiko',
          images: ['/images/p32-1.jpg', '/images/p32-2.jpg'],
            tags: ['featured'],
              isPublished: true,
                price: 375.83,
                  listPrice: 400,
                    avgRating: 4.2,
                      numReviews: 10,
                        ratingDistribution: [
                          { rating: 1, count: 1 },
                          { rating: 2, count: 0 },
                          { rating: 3, count: 0 },
                          { rating: 4, count: 4 },
                          { rating: 5, count: 5 },
                        ],
                          countInStock: 32,
                            numSales: 48,
                              description:
  'Seiko 5 Sports Collection Inspired by vintage field/aviator style: Automatic with manual winding capability',
    sizes: [],
      colors: [],

        reviews: [],
  },
{
  name: "Casio Men's Heavy Duty Analog Quartz Stainless Steel Strap, Silver, 42 Casual Watch ",
    slug: toSlug(
      "Casio Men's Heavy Duty Analog Quartz Stainless Steel Strap, Silver, 42 Casual Watch"
    ),
      category: 'Wrist Watches',
        brand: 'Casio',
          images: ['/images/p33-1.jpg', '/images/p33-2.jpg'],
            tags: ['best-seller'],
              isPublished: true,
                price: 60.78,
                  listPrice: 0,
                    avgRating: 4,
                      numReviews: 12,
                        ratingDistribution: [
                          { rating: 1, count: 1 },
                          { rating: 2, count: 0 },
                          { rating: 3, count: 2 },
                          { rating: 4, count: 4 },
                          { rating: 5, count: 5 },
                        ],
                          countInStock: 33,
                            numSales: 48,
                              description:
  'The Casio range is growing with this model  MWA-100H-1AVEF. Sporting a stainless steel case with a brushed finish, it will easily withstand all the shocks of everyday life.',
    sizes: [],
      colors: [],

        reviews: [],
  },
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
                            numSales: 106,
                              description:
  'Catalog Name:Classy Men Analog Watches Strap Material: Stainless Steel Case: The Goal Case/Bezel Material: Stainless Steel Clasp Type: Stainless Steel Buckle Date Display: Product Dependent Dial Design: Solid Dial Shape: Round Display Type: Analog Dual Time: No Gps: No Light: No Mechanism: Quartz Power Source: Battery Powered Scratch Resistant: No Shock Resistance: No Water Resistance: No Net Quantity (N): 1 Sizes:  Free Size Dispatch: 1 Day',
    sizes: ['Free Size'],
      colors: ['Black'],

        reviews: [],
  },
{
  name: "Fossil Men's Grant Stainless Steel Quartz Chronograph Watch",
    slug: toSlug("Fossil Men's Grant Stainless Steel Quartz Chronograph Watch"),
      category: 'Wrist Watches',
        brand: 'Fossil',
          images: ['/images/p35-1.jpg', '/images/p35-2.jpg'],
            tags: ['new-arrival', 'featured'],
              isPublished: true,
                price: 171.22,
                  listPrice: 225,
                    avgRating: 3.66,
                      numReviews: 15,
                        ratingDistribution: [
                          { rating: 1, count: 1 },
                          { rating: 2, count: 2 },
                          { rating: 3, count: 3 },
                          { rating: 4, count: 4 },
                          { rating: 5, count: 5 },
                        ],
                          countInStock: 35,
                            numSales: 48,
                              description:
  'Chronograph watch featuring silver- and blue-tone case, blue sunray dial, and silver-tone Roman numeral indices',
    sizes: [],
      colors: ['Blue', 'Black', 'Sliver'],

        reviews: [],
  },

// Sneakers
{
  name: 'adidas Mens Grand Court 2.0 Training Shoes Training Shoes',
    slug: toSlug('adidas Mens Grand Court 2.0 Training Shoes Training Shoes'),
      category: 'Shoes',
        brand: 'adidas',
          images: ['/images/p41-1.jpg', '/images/p41-2.jpg'],
            tags: ['new-arrival'],
              isPublished: true,
                price: 81.99,
                  listPrice: 0,
                    avgRating: 4.71,
                      numReviews: 7,
                        ratingDistribution: [
                          { rating: 1, count: 0 },
                          { rating: 2, count: 0 },
                          { rating: 3, count: 0 },
                          { rating: 4, count: 2 },
                          { rating: 5, count: 5 },
                        ],
                          countInStock: 41,
                            numSales: 48,
                              description:
  'Cloudfoam Comfort sockliner is ultra-soft and plush, with two layers of cushioning topped with soft, breathable mesh',
    sizes: ['8', '9', '10'],
      colors: ['White', 'Black', 'Grey'],

        reviews: [],
  },
{
  name: "ziitop Men's Running Walking Shoes Fashion Sneakers Mesh Dress Shoes Business Oxfords Shoes Lightweight Casual Breathable Work Formal Shoes",
    slug: toSlug(
      "ziitop Men's Running Walking Shoes Fashion Sneakers Mesh Dress Shoes Business Oxfords Shoes Lightweight Casual Breathable Work Formal Shoes"
    ),
      category: 'Shoes',
        brand: 'ziitop',
          images: ['/images/p42-1.jpg', '/images/p42-2.jpg'],
            tags: ['featured'],
              isPublished: true,
                price: 39.97,
                  listPrice: 49.96,
                    avgRating: 4.2,
                      numReviews: 10,
                        ratingDistribution: [
                          { rating: 1, count: 1 },
                          { rating: 2, count: 0 },
                          { rating: 3, count: 0 },
                          { rating: 4, count: 4 },
                          { rating: 5, count: 5 },
                        ],
                          countInStock: 42,
                            numSales: 50,
                              description:
  'Cloudfoam Comfort sockliner is ultra-soft and plush, with two layers of cushioning topped with soft, breathable mesh',
    sizes: ['8', '9', '10'],
      colors: ['Beige', 'Black', 'Grey'],

        reviews: [],
  },
{
  name: 'Skechers mens Summits High Range Hands Free Slip-in Shoes Work shoe',
    slug: toSlug(
      'Skechers mens Summits High Range Hands Free Slip-in Shoes Work shoe'
    ),
      category: 'Shoes',
        brand: 'Skechers',
          images: ['/images/p43-1.jpg', '/images/p43-2.jpg'],
            tags: ['best-seller'],
              isPublished: true,
                price: 99.99,
                  listPrice: 0,
                    avgRating: 4,
                      numReviews: 12,
                        ratingDistribution: [
                          { rating: 1, count: 1 },
                          { rating: 2, count: 0 },
                          { rating: 3, count: 2 },
                          { rating: 4, count: 4 },
                          { rating: 5, count: 5 },
                        ],
                          countInStock: 43,
                            numSales: 72,
                              description:
  'Step into easy-wearing comfort with Skechers Hands Free Slip-ins™: Summits - High Range. Along with our Exclusive Heel Pillow™ holds your foot securely in place, this vegan style features a unique pop-up Skechers Slip-ins™ molded heel panel, a mesh upper with fixed laces',
    sizes: ['8', '9', '10'],
      colors: ['Navy', 'Black', 'Grey'],

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
                            numSales: 72,
                              description:
  'Catalog Name:Classy Women Sneakers Material: Synthetic Sole Material: PVC Fastening & Back Detail: Lace-Up Pattern: Colorblocked Net Quantity (N): 1 Sizes: IND-7, IND-6, IND-8, IND-3, IND-5, IND-4 Dispatch: 2-2 Days',
    sizes: ['IND-8', 'IND-3', 'IND-4', 'IND-5', 'IND-6', 'IND-7'],
      colors: ['Pinkish White'],

        reviews: [],
  },
{
  name: "ASICS Men's GT-2000 13 Running Shoes",
    slug: toSlug("ASICS Men's GT-2000 13 Running Shoes"),
      category: 'Shoes',
        brand: 'ASICS',
          images: ['/images/p45-1.jpg', '/images/p45-2.jpg'],
            tags: ['new-arrival', 'featured'],
              isPublished: true,
                price: 179.95,
                  listPrice: 200,
                    avgRating: 3.66,
                      numReviews: 15,
                        ratingDistribution: [
                          { rating: 1, count: 1 },
                          { rating: 2, count: 2 },
                          { rating: 3, count: 3 },
                          { rating: 4, count: 4 },
                          { rating: 5, count: 5 },
                        ],
                          countInStock: 45,
                            numSales: 64,
                              description:
  "At least 50% of the shoe's main upper material is made with recycled content to reduce waste and carbon emissions",
    sizes: ['8', '9', '10', '11'],
      colors: ['Blue', 'Black', 'Grey'],

        reviews: [],
  },


{
  name: "Aadab Graceful Men Casual Shoes",
    slug: toSlug(
      "Aadab Graceful Men Casual Shoes"
    ),
      category: 'Mens Shoes',
        brand: 'Generic',
          images: ['/images/p46-1.jpg', '/images/p46-2.jpg', '/images/p46-2.jpg'],
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
                            numSales: 48,
                              description:
  'Catalog Name:Aadab Graceful Men Casual Shoes Material: Mesh Sole Material: Pvc Fastening & Back Detail: Lace-Up Sizes: IND-6, IND-7, IND-8, IND-9, IND-10 Easy Returns Available In Case Of Any Issue',
    sizes: ['25', '26', '27', '28'],
      colors: ['Black & White'],

        reviews: [],
  },
]
const reviews = [
  {
    rating: 1,
    title: 'Poor quality',
    comment:
      'Very disappointed. The item broke after just a few uses. Not worth the money.',
  },
  {
    rating: 2,
    title: 'Disappointed',
    comment:
      "Not as expected. The material feels cheap, and it didn't fit well. Wouldn't buy again.",
  },
  {
    rating: 2,
    title: 'Needs improvement',
    comment:
      "It looks nice but doesn't perform as expected. Wouldn't recommend without upgrades.",
  },
  {
    rating: 3,
    title: 'not bad',
    comment:
      'This product is decent, the quality is good but it could use some improvements in the details.',
  },
  {
    rating: 3,
    title: 'Okay, not great',
    comment:
      'It works, but not as well as I hoped. Quality is average and lacks some finishing.',
  },
  {
    rating: 3,
    title: 'Good product',
    comment:
      'This product is amazing, I love it! The quality is top notch, the material is comfortable and breathable.',
  },
  {
    rating: 4,
    title: 'Pretty good',
    comment:
      "Solid product! Great value for the price, but there's room for minor improvements.",
  },
  {
    rating: 4,
    title: 'Very satisfied',
    comment:
      'Good product! High quality and worth the price. Would consider buying again.',
  },
  {
    rating: 4,
    title: 'Absolutely love it!',
    comment:
      'Perfect in every way! The quality, design, and comfort exceeded all my expectations.',
  },
  {
    rating: 4,
    title: 'Exceeded expectations!',
    comment:
      'Fantastic product! High quality, feels durable, and performs well. Highly recommend!',
  },
  {
    rating: 5,
    title: 'Perfect purchase!',
    comment:
      "Couldn't be happier with this product. The quality is excellent, and it works flawlessly!",
  },
  {
    rating: 5,
    title: 'Highly recommend',
    comment:
      "Amazing product! Worth every penny, great design, and feels premium. I'm very satisfied.",
  },
  {
    rating: 5,
    title: 'Just what I needed',
    comment:
      'Exactly as described! Quality exceeded my expectations, and it arrived quickly.',
  },
  {
    rating: 5,
    title: 'Excellent choice!',
    comment:
      'This product is outstanding! Everything about it feels top-notch, from material to functionality.',
  },
  {
    rating: 5,
    title: "Couldn't ask for more!",
    comment:
      "Love this product! It's durable, stylish, and works great. Would buy again without hesitation.",
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
- **Phone:** +91 9322667822
- **Live Chat:** Available on our website from 9 AM to 6 PM (Monday to Friday).

**Head Office**
For corporate or business-related inquiries, reach out to our headquarters:
- **Address:** APC Chhatralay Vallabh Vidyanagar, Anand
- **Phone:** +91 9322667822

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
- **Phone:** +91 9322667822
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
        phone: '+91 9322667822',
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
          daysToDeliver: 5,
          shippingPrice: 30,
          freeShippingMinPrice: 500,
        },
      ],
      defaultDeliveryDate: 'Standard Delivery',


    },
  ],
}

export default data
