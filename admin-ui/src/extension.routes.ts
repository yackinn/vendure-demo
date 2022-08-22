export const extensionRoutes = [  {
    path: 'extensions/rest-api',
    loadChildren: () => import('./extensions/ae04b3207045bee453c639e050430b9ffe3d2b09c47b5e057904cbef84133c5e/snippets.module').then(m => m.SnippetsModule),
  }];
