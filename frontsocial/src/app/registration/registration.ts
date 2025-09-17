import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: false,
  templateUrl: './registration.html',
  styleUrl: './registration.scss'
})
export class Registration {

  constructor(private router: Router) { }

    ngOnInit(): void {
        // throw new Error('Method not implemented.');
    }

    onSubmit(form:any){
        console.log(form.value)
    }

    openLoginPage(){
        this.router.navigateByUrl("");
    }
}
