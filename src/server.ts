import mongoose from 'mongoose';
import app from './app.js';
import config from './app/config/index.js';

async function main() {
  try {
    await mongoose.connect(config.database_url!);

    app.listen(config.port, () => {
      console.log(`Express Project Setup listening on port ${config.port} 😊`);
    });
  } catch (error) {
    console.error('Error connecting to the database 😢:', error);
  }
}

main();
