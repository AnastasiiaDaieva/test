'use strict';

/**
 *  body-service controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::body-service.body-service');
