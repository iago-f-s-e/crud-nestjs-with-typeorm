import { User } from '@src/modules/database/entities/user';
import * as http from 'http';

declare module 'express-serve-static-core' {
  export interface Request extends http.IncomingMessage, Express.Request {
    user: User;
  }
}
