import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';



@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, StudentComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }  