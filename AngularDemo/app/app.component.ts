import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    //templateUrl: './app/app.component.html' 
    template: `<div>
        <h1>{{ pageHeader }}</h1>
        <studentDetails></studentDetails>
        </div> `
})
export class AppComponent {
 
    pageHeader: string = "Student Details"; 
    //appHeading: string = "This is my first angular2 app"; 
    
}  

