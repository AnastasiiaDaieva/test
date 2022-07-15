'use strict';

/**
 * spa-program service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::spa-program.spa-program');
