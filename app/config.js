const config = {
  port: process.env.PORT || 3002,
  databaseUrl: process.env.MONGODB_URI || 'baza danych',
  JwtSecret: process.env.JWT_SECRET || 'secret'
};

export default config;
