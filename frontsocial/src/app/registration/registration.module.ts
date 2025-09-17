// Angular Imports
import { NgModule } from '@angular/core';
import { RegistrationRoutingModule } from './registration-routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// This Module's Components
import { Registration } from './registration';

@NgModule({
    imports: [
        RegistrationRoutingModule,
        FormsModule,
        CommonModule
    ],
    declarations: [
        Registration,
    ]
})
export class RegistrationModule {

}