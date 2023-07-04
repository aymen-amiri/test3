import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'Aymen',
      email: 'aymenamiri77@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'test',
      email: 'test@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'One Piece - Roronoa Zoro Figure',
      slug: 'zoro-figure',
      category: 'Figures',
      image: '/images/zoro.jpg',
      price: 68,
      countInStock: 5,
      brand: 'Bandai Namco',
      rating: 5,
      numReviews: 10,
      description:
        'Roronoa Zoro, as seen in The Raid on Onigashima arc of the ONE PIECE animated series',
    },
    {
      name: 'Tanajirou Cosplay Costume ',
      slug: 'demonslayer-cosplay',
      category: 'Cosplay',
      image: '/images/tanjiro.jpg',
      price: 45,
      countInStock: 0,
      brand: 'Cosplay heaven',
      rating: 3,
      numReviews: 1,
      description:
        'Our Kamado Tanjirou Cosplay Costume is made of high quality polyester, soft,breathable and comfortable material feels great against your skin.It wont fade, durable',
    },
    {
      name: 'Attack on titan volume 19',
      slug: 'aot-manga',
      category: 'Manga',
      image: '/images/snk.jpg',
      price: 9,
      countInStock: 150,
      brand: 'HajimeIsayama prints',
      rating: 4.5,
      numReviews: 200,
      description:
        'The Survey Corps is engaged in a desperate, final battle to retake Wall Maria and defeat the Titans once and for all. Eren must use his new powers to seal the holes created five years ago in the Shiganshina District gates, not to mention to finally reach the basement of his old home and find what secrets lie hidden there. But the most difficult part of the operation will be surviving whatever clever traps the Colossus Titan, Armored Titan, and Beast Titan have prepared for them! Now that Erwin is gambling with every last human life, who will triumph?',
    },
    {
      name: 'Vagabond Miyamoto Musashi Poster',
      slug: 'vagabond-poster',
      category: 'Posters',
      image: '/images/vagabond.jpg',
      price: 16,
      countInStock: 150,
      brand: 'Posters-sekai',
      rating: 3.5,
      numReviews: 45,
      description:
        'The poster is printed on canvas which is one kind of best material for poster. It is waterproof,moisture proof and high tensile strength.The poster has rich printing color and fine texture.',
    },
  ],
};
export default data;
//679px  x 829px
