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
    FirstComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
