import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TakeComponent } from './take/take.component';
import { HomeComponent } from './home/home.component';
import { TakeUntilComponent } from './take-until/take-until.component';
import { TakeUntilUsecaseComponent } from './take-until-usecase/take-until-usecase.component';
import { TakeLastComponent } from './take-last/take-last.component';
import { TakeWhileComponent } from './take-while/take-while.component';
import { SkipComponent } from './skip/skip.component';
import { SkipWhileComponent } from './skip-while/skip-while.component';
import { SkipUntilComponent } from './skip-until/skip-until.component';
import { SkipLastComponent } from './skip-last/skip-last.component';
import { BufferComponent } from './buffer/buffer.component';
import { BufferCountComponent } from './buffer-count/buffer-count.component';
import { StartWithComponent } from './start-with/start-with.component';
import { EndWithComponent } from './end-with/end-with.component';
import { DefaultIfEmptyComponent } from './default-if-empty/default-if-empty.component';
import { FirstComponent } from './first/first.component';
import { LastComponent } from './last/last.component';
import { OfComponent } from './of/of.component';
import { FromComponent } from './from/from.component';
import { MapComponent } from './map/map.component';
import { FilterComponent } from './filter/filter.component';
import { MapToComponent } from './map-to/map-to.component';
import { DelayComponent } from './delay/delay.component';
import { IntervalComponent } from './interval/interval.component';
import { TimerComponent } from './timer/timer.component';
import { ThrowErrorComponent } from './throw-error/throw-error.component';
import { CatchErrorComponent } from './catch-error/catch-error.component';
import { TimeoutComponent } from './timeout/timeout.component';
import { TimeoutWithComponent } from './timeout-with/timeout-with.component';
import { TimestampComponent } from './timestamp/timestamp.component';
import { TimeIntervalComponent } from './time-interval/time-interval.component';

@NgModule({
  declarations: [
    AppComponent,
    TakeComponent,
    HomeComponent,
    TakeUntilComponent,
    TakeUntilUsecaseComponent,
    TakeLastComponent,
    TakeWhileComponent,
    SkipComponent,
    SkipWhileComponent,
    SkipUntilComponent,
    SkipLastComponent,
    BufferComponent,
    BufferCountComponent,
    StartWithComponent,
    EndWithComponent,
    DefaultIfEmptyComponent,
    FirstComponent,
    LastComponent,
    OfComponent,
    FromComponent,
    MapComponent,
    FilterComponent,
    MapToComponent,
    DelayComponent,
    IntervalComponent,
    TimerComponent,
    ThrowErrorComponent,
    CatchErrorComponent,
    TimeoutComponent,
    TimeoutWithComponent,
    TimestampComponent,
    TimeIntervalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
