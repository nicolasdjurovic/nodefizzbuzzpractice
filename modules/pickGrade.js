var gradeForStudent = Math.round(Math.random() * 20);

module.exports = {
    gradeForStudent,
    getTheWord() {
        switch (gradeForStudent) {
            case 8:
                return "an";
                break;
            default:
                return "a";
                break;
        }
    }
}