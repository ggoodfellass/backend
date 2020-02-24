 'use strict';
module.exports = (app) => {
 let flightDetailsCtrl = require('../controllers/flightDetailsController');

  app
    .route('/flight-details')
    .post(flightDetailsCtrl.create);

  app
    .route('/flight-details')
    .get(flightDetailsCtrl.index);

  app
    .route('/flight-details/:id')
    .patch(flightDetailsCtrl.update);

  app
    .route('/flight-details/:id')
    .get(flightDetailsCtrl.show);

  app
    .route('/flight-details/:id')
    .delete(flightDetailsCtrl.delete);
};
