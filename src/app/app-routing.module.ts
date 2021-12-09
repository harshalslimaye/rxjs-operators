import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BufferCountComponent } from './buffer-count/buffer-count.component';
import { BufferComponent } from './buffer/buffer.component';
import { DefaultIfEmptyComponent } from './default-if-empty/default-if-empty.component';
import { DelayComponent } from './delay/delay.component';
import { EndWithComponent } from './end-with/end-with.component';
import { FilterComponent } from './filter/filter.component';
import { FirstComponent } from './first/first.component';
import { FromComponent } from './from/from.component';
import { HomeComponent } from './home/home.component';
import { IntervalComponent } from './interval/interval.component';
import { LastComponent } from './last/last.component';
import { MapToComponent } from './map-to/map-to.component';
import { MapComponent } from './map/map.component';
import { OfComponent } from './of/of.component';
import { SkipLastComponent } from './skip-last/skip-last.component';
import { SkipUntilComponent } from './skip-until/skip-until.component';
import { SkipWhileComponent } from './skip-while/skip-while.component';
import { SkipComponent } from './skip/skip.component';
import { StartWithComponent } from './start-with/start-with.component';
import { TakeLastComponent } from './take-last/take-last.component';
import { TakeUntilUsecaseComponent } from './take-until-usecase/take-until-usecase.component';
import { TakeUntilComponent } from './take-until/take-until.component';
import { TakeWhileComponent } from './take-while/take-while.component';
import { TakeComponent } from './take/take.component';
import { TimerComponent } from './timer/timer.component';
import { ThrowErrorComponent } from './throw-error/throw-error.component';
import { TimeoutComponent } from './timeout/timeout.component';
import { TimeoutWithComponent } from './timeout-with/timeout-with.component';
import { TimestampComponent } from './timestamp/timestamp.component';
import { TimeIntervalComponent } from './time-interval/time-interval.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'take', component: TakeComponent },
  { path: 'takeUntil', component: TakeUntilComponent },
  { path: 'takeUntilUseCase', component: TakeUntilUsecaseComponent },
  { path: 'takeLast', component: TakeLastComponent },
  { path: 'takeWhile', component: TakeWhileComponent },
  { path: 'skip', component: SkipComponent },
  { path: 'skipWhile', component: SkipWhileComponent },
  { path: 'skipUntil', component: SkipUntilComponent },
  { path: 'skipLast', component: SkipLastComponent },
  { path: 'buffer', component: BufferComponent },
  { path: 'bufferCount', component: BufferCountComponent },
  { path: 'startWith', component: StartWithComponent },
  { path: 'endWith', component: EndWithComponent },
  { path: 'defaultIfEmpty', component: DefaultIfEmptyComponent },
  { path: 'first', component: FirstComponent },
  { path: 'last', component: LastComponent },
  { path: 'of', component: OfComponent },
  { path: 'from', component: FromComponent },
  { path: 'filter', component: FilterComponent },
  { path: 'map', component: MapComponent },
  { path: 'mapTo', component: MapToComponent },
  { path: 'delay', component: DelayComponent },
  { path: 'interval', component: IntervalComponent },
  { path: 'timer', component: TimerComponent },
  { path: 'throwError', component: ThrowErrorComponent },
  { path: 'timeout', component: TimeoutComponent },
  { path: 'timeoutWith', component: TimeoutWithComponent },
  { path: 'timestamp', component: TimestampComponent },
  { path: 'timeInterval', component: TimeIntervalComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
