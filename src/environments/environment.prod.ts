export const environment = {
  production: true,
  backend: {
    protocol: 'http',
    host: '0.0.0.0',
    port: '4443',
    endpoints: {
      allBand: '/api/band',
      oneBand: '/api/band/:id',
      allInstrument: '/api/instrument',
      oneInstument: '/api/instrument/:id',
      allArtist: '/api/user',
      oneArtist: '/api/user/:id',
      allResearch: '/api/research',
      oneResearch: '/api/research/:id'
    }
  }
};
