module.exports = [
  'strapi::errors',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  //'strapi::security',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefault: true,
        directives: {
          "connect-src": ["'self'",'https:'],
          "img-src": ["'self'", "data:", "blob:", "https://res.cloudinary.com/"],
          "media-src": ["'self'", "data:", "blob:"],
          upgradeInsecureRequests: null,
        }
      }
    }
  },
];
