import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    //templateUrl: './app/app.component.html' 
    template: `<div>
        <h1>{{ pageHeader }}</h1>
        //<h1>{{ 'Application Heading : ' + appHeading}}</h1>
        //<p> Now I am in {{0*2+2*2*2-0/2}} lecture.</p>
        //<p> My mother name is {{firstName + ' ' + lastName}}.</p>
        //<p> Bangladesh <img src="{{imagePath}}"/> </p>
        //<p> {{accident ? accident : 'This is ternary operator'}}.</p>
        <studentDetails></studentDetails>
        </div> `
})
export class AppComponent {
 
    pageHeader: string = "Student Details"; 
    //appHeading: string = "This is my first angular2 app";
    //firstName: string = "Faisal";
    //lastName: string = "Nuri";
    //imagePath: string = "https://bangladesh.gov.bd/themes/responsive_npf/templates/bangladesh/images/logo_bn.png";
    //accident: string = null;
}  

