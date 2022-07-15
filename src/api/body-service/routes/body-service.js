'use strict';

/**
 * body-service router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::body-service.body-service');
