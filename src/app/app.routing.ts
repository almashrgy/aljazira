import {Routes , RouterModule} from "@angular/router";
import {HomeComponent} from './aljazira-header/home.component'
import {AboutusComponent} from './aljazira-header/aboutus.component'

const APP_ROUTES: Routes= [
  {path: ''        ,component: HomeComponent},
  {path: 'AboutUs',component: AboutusComponent}
];
export const routing = RouterModule.forRoot(APP_ROUTES);
