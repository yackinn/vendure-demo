import { NgModule }          from '@angular/core';
import { RouterModule }      from '@angular/router';
import { SharedModule }      from '@vendure/admin-ui/core';
import { SnippetsComponent } from './snippets.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: SnippetsComponent,
        data: { breadcrumb: 'Greeter' },
      }
    ])
  ],
  declarations: [SnippetsComponent],
})
export class SnippetsModule {}

// "start:dev:server": "yarn nodemon --ext ts --watch './src' --exec \"ts-node ./src/index\"",
//         "start:dev:admin-ui": "yarn nodemon --ext ts --watch '' --exec \"ts-node src/compile-admin-ui.ts\"",
