const personalInformation = {
    firstName: 'Maryjane',
    lastName: 'Chukelu',
    city: 'Abuja',
    state: 'FCT',
    zipCode: 12345
};
const {firstName: fn, lastName: ln} = personalInformation;

console.log(`${fn} ${ln}`);