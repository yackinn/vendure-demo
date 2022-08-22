// compile-admin-ui.ts
import { compileUiExtensions } from '@vendure/ui-devkit/compiler';
import { Extension }           from '@vendure/ui-devkit/compiler/types';
import * as path               from 'path';
import { snippetUiExtension }  from './plugins/snippets/ui/ui-extensions';

const extensions: Extension[] = [
  snippetUiExtension
];

export function customAdminUi(
  options: { recompile: boolean; devMode: boolean }
) {
  const compiledAppPath = path.join(process.cwd(), 'admin-ui');

  if (options.recompile) {
    return compileUiExtensions({
      outputPath: compiledAppPath,
      extensions,
      devMode: options.devMode,
      additionalProcessArguments: ['--watch', "--verbose"]
    });
  }
  else {
    return {
      path: path.join(compiledAppPath, 'dist'),
    };
  }
}

// command line code
if (require.main === module) {
  customAdminUi({ recompile: true, devMode: true })
    .compile?.()
    .then(() => {
      process.exit(0);
    });
}

