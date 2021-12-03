import { NestFactory } from '@nestjs/core';
import { Modules } from '@src/modules';

import * as Settings from '../settings';

export async function bootstrap() {
  const app = await NestFactory.create(Modules);

  await app.listen(Settings.PORT, '0.0.0.0', () => {
    console.log('******************************');
    console.log(`Server running on port: ${Settings.PORT}`);
    console.log('******************************');
  });
}
