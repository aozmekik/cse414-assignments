const express = require('express');
const router = express.Router();


const ctrlFamilies = require('../controllers/families');
const ctrlLocations = require('../controllers/locations');


// families
router
    .route('/families')
    .post(auth, ctrlFamilies.familiesList)

router
    .route('/families/create')
    .post(auth, ctrlFamilies.familiesCreate);

router
    .route('/families/:familyid')
    .get(auth, ctrlFamilies.familiesReadOne)
    .put(auth, ctrlFamilies.familiesUpdateOne)
    .delete(auth, ctrlFamilies.familiesDeleteOne);


// locations
router
    .route('/locations/cities')
    .get(auth, ctrlLocations.citiesList);

router
    .route('/locations/towns/:cityid')
    .get(auth, ctrlLocations.townsList);

router
    .route('/locations/districts/:townid')
    .get(auth, ctrlLocations.districtsList);

router
    .route('/locations/streets/:districtid')
    .get(auth, ctrlLocations.streetsList);


module.exports = router;