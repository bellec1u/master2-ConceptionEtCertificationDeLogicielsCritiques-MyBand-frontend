export const environment = {
  production: true,
  backend: {
    protocol: 'http',
    host: '0.0.0.0',
    port: '4443',
    endpoints: {
      allBand: '/api/band',
      oneBand: '/api/band',
      allInstrument: '/api/instrument',
      oneInstument: '/api/instrument',
      allArtist: '/api/user',
      oneArtist: '/api/user/:id'
    }
  }
};
