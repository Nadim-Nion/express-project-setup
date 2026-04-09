import cors from 'cors';
import express, {
  type Application,
  type Request,
  type Response,
} from 'express';

const app: Application = express();

// Parser or Middleware
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Express Project Setup!');
});

export default app;
