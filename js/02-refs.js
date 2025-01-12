const user = {
  firstName: 'Anastasiia',
  lastName: 'Medved',
};

const userCopy = user;

console.log('user:', user);
console.log('userCopy:', userCopy);

userCopy.firstName = 'Lois';

console.log('user:', user);
console.log('userCopy:', userCopy);
