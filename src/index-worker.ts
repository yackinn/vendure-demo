import { bootstrapWorker } from '@vendure/core';
import { getConfig }       from './vendure-config';

async function bootstrap() {
  const _config = await getConfig();
  bootstrapWorker(_config)
    .then(worker => worker.startJobQueue())
    .catch(err => {
      // tslint:disable-next-line:no-console
      console.log(err);
    });
}

bootstrap();

