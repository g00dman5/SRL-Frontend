const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (comMod) => (componentModule) => {
  comMod(null, componentModule.default);
};

export default function createRoutes() {

  return [
  {
   path: '/',
   name: 'Home',
   getComponent(nextState, cb) {
     import('containers/Home')
       .then(loadModule(cb))
       .catch(errorLoading);
    },
  },

  {
   path: '/about',
   name: 'About',
   getComponent(nextState, cb) {
     import('containers/About')
       .then(loadModule(cb))
       .catch(errorLoading);
    },
  },

  {
   path: '/shop',
   name: 'Shop',
   getComponent(nextState, cb) {
     import('containers/Shop')
       .then(loadModule(cb))
       .catch(errorLoading);
    },
  },

  {
   path: '/tournament',
   name: 'Tournament',
   getComponent(nextState, cb) {
     import('containers/Tournament')
       .then(loadModule(cb))
       .catch(errorLoading);
    },
  },

  {
   path: '/',
   name: 'TheCloud',
   getComponent(nextState, cb) {
     import('containers/TheCloud')
       .then(loadModule(cb))
       .catch(errorLoading);
    },
  },

  {
   path: '/contact',
   name: 'Contact',
   getComponent(nextState, cb) {
     import('containers/Contact')
       .then(loadModule(cb))
       .catch(errorLoading);
    },
  },

  {
   path: '*',
   name: 'notfound',
   getComponent(nextState, comMod) {
     import('containers/NotFoundPage')
       .then(loadModule(comMod))
       .catch(errorLoading);
     },
    },
  ];
}
