import { Component } from "@angular/core";

@Component({
    selector: 'studentDetails',
    templateUrl: 'app/student/student.component.html'
})

export class StudentComponent {
    firstName: string = "Sakil";
    lastName: string = "Chowdhury";
    sclass: number = 2;
    section: string = "F";
    rollNumber: number = 56;
}