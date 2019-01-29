import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';

import { RegisterComponent } from 'app/main/ui/page-layouts/register/register.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DomainComponent } from './domain.component';

const routes = [
    {
        path     : 'page-layouts/domain',
        component: DomainComponent
    }
];

@NgModule({
    declarations: [
        DomainComponent
       
        
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
export class DomainModule
{
}
