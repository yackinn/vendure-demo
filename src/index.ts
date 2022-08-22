import { bootstrap } from '@vendure/core';
import { join }      from 'path';
import waitOn        from 'wait-on';
import { getConfig } from './vendure-config';

async function localBootstrap() {
  const _config = await getConfig();
  waitOn({ resources: [join(process.cwd(), 'admin-ui/dist')] }).then(found => {
    console.log('wait on found admin ui dist', found);
    bootstrap(_config).catch(err => {
      console.log(err);
    });
  });
}

localBootstrap();

