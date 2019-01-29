import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';

import { RegisterComponent } from 'app/main/ui/page-layouts/register/register.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Add_buildingComponent } from './add_building.component';

const routes = [
    {
        path     : 'page-layouts/add_building',
        component: Add_buildingComponent
    }
];

@NgModule({
    declarations: [
        Add_buildingComponent
       
        
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
export class Add_buildingModule
{
}
