/**
 * Template Literal:
 * =================
 */


function getMessage() {
    const year = new Date().getFullYear();

    return `This year is ${new Date().getFullYear}`;
}

getMessage();