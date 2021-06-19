const mongoose = require('mongoose');
const Fam = mongoose.model('Family');

module.exports = {
    familiesPDF,
    familiesList,
    familiesCreate,
    familiesReadOne,
    familiesUpdateOne,
    familiesDeleteOne
};

