"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.pageHeader = "Student Details";
        this.appHeading = "This is my first angular2 app";
        this.firstName = "Faisal";
        this.lastName = "Nuri";
        this.imagePath = "https://bangladesh.gov.bd/themes/responsive_npf/templates/bangladesh/images/logo_bn.png";
        this.accident = null;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            //templateUrl: './app/app.component.html' 
            template: "<div>\n        <h1>{{ pageHeader }}</h1>\n        <h1>{{ 'Application Heading : ' + appHeading}}</h1>\n        <p> Now I am in {{0*2+2*2*2-0/2}} lecture.</p>\n        <p> My mother name is {{firstName + ' ' + lastName}}.</p>\n        <p> Bangladesh <img src=\"{{imagePath}}\"/> </p>\n        <p> {{accident ? accident : 'This is ternary operator'}}.</p>\n        <studentDetails></studentDetails>\n        </div> "
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map