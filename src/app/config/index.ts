import dotenv from 'dotenv';
import path from 'path';

//C:\Users\HP\OneDrive\Documents\job-tasks\banking-transaction-system-server
/* Our target to add .env after the current working directory */
// C:\Users\HP\OneDrive\Documents\job-tasks\banking-transaction-system-server/.env
dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  node_env: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
};
