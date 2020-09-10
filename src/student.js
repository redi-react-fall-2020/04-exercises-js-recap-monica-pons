// Exercise 1
// return the sorted list depending on the paramaters
// sortBy can be 'name' or 'role'
// sortDirection can be 'asc' or 'desc'
// Make a shallow copy of the array before sorting it!
const sortMembers = (team, sortBy, sortDirection) => {
  const arrayCopy = [...team];
  arrayCopy.sort((a, b) => {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    var roleA = a.role.toUpperCase(); // ignore upper and lowercase
    var roleB = b.role.toUpperCase(); // ignore upper and lowercase
    if (sortBy === "name" && sortDirection === "asc") {
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    } else if (sortBy === "name" && sortDirection === "desc") {
      if (nameA < nameB) {
        return 1;
      }
      if (nameA > nameB) {
        return -1;
      }
      // names must be equal
      return 0;
    } else {
      if (roleA < roleB) {
        return -1;
      }
      if (roleA > roleB) {
        return 1;
      }
      // names must be equal
      return 0;
    }
  });

  return arrayCopy;
};

// Exercise 2
const getStudents = (team) => {
  // return all members who are students
  return team;
};
const getTeachers = (team) => {
  // return all members who are teachers
  return team;
};

// Exercise 3
const getMemberAnimalsWithUrls = (member) => {
  // return an array of objects where each object has the following shape:
  // { name: ANIMAL_NAME, url: ANIMAL_IMAGE_URL }
  // You can create the url by using this url and replacing filling in the animal name:
  // https://www.randomlists.com/img/animals/ANIMAL_NAME.jpg
  return [];
};

// Exercise 4
const getAnimals = (team) => {
  // return an array of all animals that exist on all members
  // Do not include duplicate animals
  return [];
};

// Exercise 5
const filterByAnimal = (team, animal) => {
  // only return members who are friends with the animal
  return team;
};

export {
  sortMembers,
  getStudents,
  getTeachers,
  getMemberAnimalsWithUrls,
  getAnimals,
  filterByAnimal,
};
