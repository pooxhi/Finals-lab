import { Routes } from '@angular/router';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

export const routes: Routes = [
    {path : 'template', component : TemplateDrivenComponent},
    {path : 'reactive', component : ReactiveFormComponent},
    {path : 'validation', component : FormValidationComponent}

    
];
