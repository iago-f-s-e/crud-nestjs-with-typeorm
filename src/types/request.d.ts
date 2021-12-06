import { IAuthorizedUser } from '@src/modules/common/services/dtos/token-service';
import * as http from 'http';

declare module 'express-serve-static-core' {
  export interface Request extends http.IncomingMessage, Express.Request {
    authorizedUser: IAuthorizedUser;
  }
}
