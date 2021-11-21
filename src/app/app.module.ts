import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoCardComponent } from './to-do-card/to-do-card.component';
import {FormsModule} from '@angular/forms';
import { BoldDirective } from './directives/bold/bold.directive';
import { TitlePipe } from './pipes/title/title.pipe';
import { AddToDoComponent } from './add-to-do/add-to-do.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ToDoCardComponent,
    BoldDirective,
    TitlePipe,
    AddToDoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
