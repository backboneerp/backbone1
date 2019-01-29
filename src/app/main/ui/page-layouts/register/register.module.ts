import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';

import { RegisterComponent } from 'app/main/ui/page-layouts/register/register.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

const routes = [
    {
        path     : 'page-layouts/register',
        component: RegisterComponent
    }
];

@NgModule({
    declarations: [
        RegisterComponent
       
        
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,

        FuseSharedModule,
        
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RegisterModule
{
}
