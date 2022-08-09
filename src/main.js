// @ts-check
/* eslint-disable no-restricted-syntax */
/* eslint-disable spaced-comment */
/* eslint-disable no-console */
const people = [
  {
    age: 20,
    city: "서울",
    pet: ["cat", "dog"],
  },
  {
    age: 40,
    city: "부산",
  },
  {
    age: 31,
    city: "대구",
    pet: ["cat", "dog"],
  },
  {
    age: 36,
    city: "서울",
    pet: "dog",
  },
  {
    age: 36,
    city: "서울",
    pet: "dog",
  },
  {
    age: 36,
    city: "서울",
    pet: "dog",
  },
  {
    age: 36,
    city: "서울",
    pet: "dog",
  },
  {
    age: 31,
    city: "대구",
    pet: "dog",
  },
  {
    age: 16,
    city: "부산",
    pet: "dog",
  },
];

//나이 30 미만 사람들의 주거지 도시 구하기
function solveAModern() {
  const allCities = people
    //30미만
    .filter(({ age }) => age < 30)
    //도시 구하기
    .map(({ city }) => city);
  // 중복제거 new Set
  const set = new Set(allCities);
  return Array.from(set);
}

console.log("solveAModern", solveAModern());

//각 도시별로 개와 고양이를 키우는 사람의 수
/** @typedef {Object.<string, Object.<string, number>>} PetsOfCities */
function solveBModern() {
  return (
    people
      .map(({ pet: petOrPets, city }) => {
        const pets =
          (typeof petOrPets === "string" ? [petOrPets] : petOrPets) || [];
        return {
          city,
          pets,
        };
        // 형태 { city: '서울', pets: [ 'cat', 'dog' ] }
      })
      // 배열 병합함수 -.flat()
      // flatMap은 flat, map 합친 것
      //형태 [ '서울', 'cat' ], [ '서울', 'dog' ]
      .flatMap(({ city, pets }) => pets.map((pet) => [city, pet]))
      .reduce((/** @type {PetsOfCities} */ result, [city, pet]) => {
        if (!city || !pet) {
          return result;
        }
        return {
          ...result,
          [city]: {
            ...result[city],
            //수 구하기(이미 있을경우 || 초기값 0) + 1
            [pet]: (result[city]?.[pet] || 0) + 1,
          },
        };
      }, {})
  );
}

console.log("solveBModern", solveBModern());
