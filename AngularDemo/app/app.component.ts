import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html' 
    //template: '<div>    Title: {{ appTitle }}<br />    </div>'
})
export class AppComponent {
 
    appTitle: string = "Hello World!"; 
    appHeading: string = "This is my first angular2 app"; 
    
}  

