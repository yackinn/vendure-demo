import { AdminUiExtension } from '@vendure/ui-devkit/compiler';
import { join }             from 'path';
import { SnippetsModule }   from './snippets.module';

export const snippetUiExtension: AdminUiExtension = {
  extensionPath: join(__dirname),
  ngModules: [
    {
      type: 'lazy',
      route: 'rest-api',
      ngModuleFileName: 'snippets.module.ts',
      ngModuleName: 'SnippetsModule',
    }
  ],
};
