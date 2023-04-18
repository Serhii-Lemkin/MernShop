import bcrypt from 'bcryptjs';
import faker from 'faker';

const data = {
  products: [],
  users: [
    {
      name: 'Admin',
      email: 'admin@example.com',
      password: bcrypt.hashSync('12345'),
      _id: '64379be3274e949864ae7779',
      __v: 0,
      createdAt: '2023-04-13T06:06:27.929Z',
      updatedAt: '2023-04-13T06:06:27.929Z',
    },
  ],
};

const images = [
  'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/2697786/pexels-photo-2697786.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/3259584/pexels-photo-3259584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/3819969/pexels-photo-3819969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/1738641/pexels-photo-1738641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/4195527/pexels-photo-4195527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/2876659/pexels-photo-2876659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/14603818/pexels-photo-14603818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/5222605/pexels-photo-5222605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/2942361/pexels-photo-2942361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/13595109/pexels-photo-13595109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/6605208/pexels-photo-6605208.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/6375547/pexels-photo-6375547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/2708981/pexels-photo-2708981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/2218384/pexels-photo-2218384.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/4040586/pexels-photo-4040586.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/9878255/pexels-photo-9878255.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/2849742/pexels-photo-2849742.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/3766113/pexels-photo-3766113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/380954/pexels-photo-380954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/3801990/pexels-photo-3801990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/5280439/pexels-photo-5280439.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/3428498/pexels-photo-3428498.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/165971/pexels-photo-165971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/1999463/pexels-photo-1999463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/2880732/pexels-photo-2880732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/4090216/pexels-photo-4090216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/6044846/pexels-photo-6044846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/2258083/pexels-photo-2258083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/2220328/pexels-photo-2220328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/276566/pexels-photo-276566.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/4162551/pexels-photo-4162551.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/159438/android-tv-game-controller-game-controller-video-game-controller-android-game-controller-159438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/10599435/pexels-photo-10599435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/12719131/pexels-photo-12719131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
];

const shuffledImages = images.sort(() => Math.random() - 0.5);

for (let i = 0; i < 50; i++) {
  let titleRandom = faker.commerce.productName();
  let tokenRandom = faker.datatype.uuid();
  let newTitle = false;
  let newToken = false;
  while (true) {
    if ((newTitle === newToken) === true) break;
    if (!newTitle) {
      titleRandom = faker.commerce.productName();
      for (let i = 0; i < data.length; i++) {
        if (data[i].products.title === titleRandom) {
          newTitle = false;
        }
      }
      newTitle = true;
    }
    if (!newToken) {
      let tokenRandom = faker.datatype.uuid();
      for (let i = 0; i < data.length; i++) {
        if (data[i].products.token === tokenRandom) {
          newTitle = false;
        }
      }
      newTitle = true;
    }
  }

  data.products.push({
    title: titleRandom,
    price: faker.commerce.price(),
    description: faker.commerce.productDescription(),
    category: faker.commerce.department(),
    image: shuffledImages[i],
    countInStock: Math.floor(Math.random() * 21),
    token: tokenRandom,
    brand: faker.commerce.productAdjective(),
    rating: {
      rate: faker.datatype.number({ min: 0, max: 5 }),
      count: faker.datatype.number(),
    },
  });
}

export default data;
