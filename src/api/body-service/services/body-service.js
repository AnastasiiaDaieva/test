'use strict';

/**
 * body-service service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::body-service.body-service');
