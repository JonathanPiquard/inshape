

export default function(password) {
    const errMsg = 'The password must contain at least one ';

    if (!hasLowerCase(password)) {
        return errMsg + 'lowercase letter';
    }

    else if (!hasUpperCase(password)) {
        return errMsg + 'uppercase letter';
    }

    else if (!hasSpecialChars(password)) {
        return errMsg + 'special character';
    }

    else if (!hasNumber(password)) {
        return errMsg + 'number';
    }

    else {
        return null; //valid
    }
}


/*
** Helper methods
*/

function hasLowerCase(pw) {
    return (pw.toUpperCase() !== pw);
}

function hasUpperCase(pw) {
    return (pw.toLowerCase() !== pw);
}

function hasSpecialChars(pw) {
    return /[~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(pw);
}

function hasNumber(pw) {
    return /[0-9]/.test(pw);
}
