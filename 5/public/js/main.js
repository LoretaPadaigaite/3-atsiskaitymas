"use strict";
const people = [
    {
        name: 'Dainius',
        surname: 'Gerulaitis',
        sex: 'male',
        age: 50,
        income: 1200,
        married: false,
        hasCar: false,
    },
    {
        name: 'Veronika',
        surname: 'Petrikytė',
        sex: 'female',
        age: 42,
        income: 1300,
        married: false,
        hasCar: true,
    },
    {
        name: 'Kazys',
        surname: 'Binkis',
        sex: 'male',
        age: 19,
        income: 0,
        married: false,
        hasCar: false,
    },
    {
        name: 'Danielius',
        surname: 'Grybauskas',
        sex: 'male',
        age: 30,
        income: 2400,
        married: true,
        hasCar: true,
    },
    {
        name: 'Viktorija',
        surname: 'Grybauskienė',
        sex: 'female',
        age: 26,
        income: 1200,
        married: true,
        hasCar: true,
    },
    {
        name: 'Daiva',
        surname: 'Stankevičienė',
        sex: 'female',
        age: 68,
        income: 364,
        married: false,
        hasCar: false,
    },
];
console.groupCollapsed('1. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {name: string, surname: string} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą');
{
    const personToIdentity = ({ name, surname }) => {
        return { name, surname };
    };
    const identities = people.map(personToIdentity);
    console.table(people);
    console.table(identities);
}
console.groupEnd();
console.groupCollapsed('2. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {married: boolean, hasCar: boolean} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą.');
{
    const selectTaskProps = ({ married, hasCar }) => ({
        married: Boolean(married),
        hasCar: Boolean(hasCar),
    });
    const result = people.map(selectTaskProps);
    console.table(people);
    console.table(result);
}
console.groupEnd();
console.groupCollapsed('3. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
{
    const selectTaskProps = ({ name, surname, sex }) => ({
        name, surname, sex
    });
    const result = people.map(selectTaskProps);
    console.table(people);
    console.table(result);
}
console.groupEnd();
console.groupCollapsed('4. Suformuokite visų vyrų masyvą');
{
    const isMale = ({ sex }) => sex === 'male';
    const males = people.filter(isMale);
    console.table(people);
    console.table(males);
}
console.groupEnd();
console.groupCollapsed('5. Suformuokite visų moterų masyvą');
{
    const isFemale = ({ sex }) => sex === 'female';
    const females = people.filter(isFemale);
    console.table(people);
    console.table(females);
}
console.groupEnd();
console.groupCollapsed('6. Suformuokite objektų masyvą su žmonių vardais ir pavardėm, kurie turi mašinas');
{
    const personHasCar = ({ hasCar }) => Boolean(hasCar);
    const createIdentity = ({ name, surname }) => ({ name, surname });
    const peopleWithCars = people.filter(personHasCar);
    const indentities = peopleWithCars.map(createIdentity);
    console.log(people);
    console.log(indentities);
}
console.groupEnd();
console.groupCollapsed('7. Suformuokite objektų masyvą iš žmonių kurie yra susituokę');
{
    const marriedReducer = (result, person) => {
        if (person.married)
            result.push(person);
        return result;
    };
    const marriedPeople = people.reduce(marriedReducer, []);
    console.log(people);
    console.log(marriedPeople);
}
console.groupEnd();
console.groupCollapsed('8. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
{
    const groupCarOwnersBySexReducer = (result, person) => {
        if (!person.hasCar)
            return result;
        if (!result[person.sex])
            result[person.sex] = 0;
        result[person.sex] = result[person.sex] + 1;
        return result;
    };
    const groupedPeopleBySex = people.reduce(groupCarOwnersBySexReducer, {});
    console.table(people);
    console.log(groupedPeopleBySex);
}
console.groupEnd();
console.groupCollapsed('9. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
{
    const convertToBritish = ({ income, ...person }) => {
        const result = { ...person };
        if (income)
            result.salary = income;
        return result;
    };
    const britishPeople = people.map(convertToBritish);
    console.table(people);
    console.table(britishPeople);
}
console.groupEnd();
console.groupCollapsed('10. Suformuokite žmonių masyvą, kuriame nebūtų lyties, vardo ir pavardės');
{
    const createAnonymous = ({ name, surname, sex, ...anonPerson }) => anonPerson;
    const anonymousPeople = people.map(createAnonymous);
    console.table(people);
    console.table(anonymousPeople);
}
console.groupEnd();
console.groupCollapsed('11. Suformuokite žmonių masyvą, kuriame "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
{
    const createFullnamePerson = ({ name, surname, ...rest }) => ({
        ...rest,
        fullname: name + ' ' + surname
    });
    const fullnamePeople = people.map(createFullnamePerson);
    console.table(people);
    console.table(fullnamePeople);
}
console.groupEnd();
//# sourceMappingURL=main.js.map