 'use strict';
module.exports = function(app) {
 let flightDetailsCtrl = require('../controllers/flightDetailsController');

  app
    .route('/flight-details')
    .post(flightDetailsCtrl.create);

  app
    .route('/flight-details')
    .get(flightDetailsCtrl.show);

  app
    .route('/flight-details/:id')
    .patch(flightDetailsCtrl.update);

  // app
  //   .route('/flight-details/:id')
  //   .put(flightDetailsCtrl.update);

  // app
  //   .route('/flight-details/:id')
  //   .delete(flightDetailsCtrl.delete);
};
