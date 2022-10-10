const animals = [
  {
    name: "cat",
    sound: "meow",
    feeding: {
      eat: 2,
      water: 7
    }
  },
  { name: "dog", sound: "woof" }
];

const useAnimals = (animal) => {
  return [
    animal.name,
    () => {
      console.log(animal.sound);
    }
  ];
};

export default animals;
export { useAnimals };
