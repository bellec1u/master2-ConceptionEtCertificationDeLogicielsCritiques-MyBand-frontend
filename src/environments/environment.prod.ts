export const environment = {
  production: true,
  backend: {
    protocol: 'http',
    host: '127.0.0.1',
    port: '9000',
    endpoints: {
      allPeople: '/api/artists',
      randomPeople: '/api/artists/random',
      onePeople: '/api/artists/:id'
    }
  }
};
