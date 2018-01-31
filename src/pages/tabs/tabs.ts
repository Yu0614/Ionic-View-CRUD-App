import { Component } from '@angular/core';

import { ChartPage } from '../chart/chart';
import { NewsPage } from '../news/news';
import { CalendarPage } from '../calendar/calendar';
import { PortfollioPage } from '../portfollio/portfollio';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ChartPage;
  tab2Root = NewsPage;
  tab3Root = CalendarPage;
  tab4Root = PortfollioPage;

  constructor() {

  }
}
