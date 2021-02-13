
import emailValidator from 'email-validator';
import passwordValidator from './password-validator';


module.exports = {

    username(username) {
        const realLength = username.trim().length;

        if (realLength === 0) {
            return 'The username is required.'
        } else if (realLength > 25) {
            return 'The username can\'t be longer than 25 characters.'
        } else {
            return null;
        }
    },

    email: (email) => (emailValidator.validate(email)) ? null : 'This is not a valid email.',

    password: (password) => passwordValidator(password), //null if valid else err msg

    birthday: (birthday) => null,

    city: (city) => null //todo : use some service to tell if the city exists

};
