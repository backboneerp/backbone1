import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MatButtonModule,MatTabsModule,MatToolbarModule,MatMenuModule,MatDividerModule,MatIconModule,MatListModule,MatFormFieldModule,MatExpansionModule,MatGridListModule,MatCardModule, MatInputModule} from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseDemoModule } from '@fuse/components/demo/demo.module';

import { CardedFullWidth1Component } from 'app/main/ui/page-layouts/carded/full-width-1/full-width-1.component';
import { CardedFullWidth2Component } from 'app/main/ui/page-layouts/carded/full-width-2/full-width-2.component';
import { CardedFullWidthTabbed1Component } from 'app/main/ui/page-layouts/carded/full-width-tabbed-1/full-width-tabbed-1.component';
import { CardedFullWidthTabbed2Component } from 'app/main/ui/page-layouts/carded/full-width-tabbed-2/full-width-tabbed-2.component';
import { CardedLeftSidebar1Component } from 'app/main/ui/page-layouts/carded/left-sidebar-1/left-sidebar-1.component';
import { CardedLeftSidebar2Component } from 'app/main/ui/page-layouts/carded/left-sidebar-2/left-sidebar-2.component';
import { CardedLeftSidebarTabbed1Component } from 'app/main/ui/page-layouts/carded/left-sidebar-tabbed-1/left-sidebar-tabbed-1.component';
import { CardedLeftSidebarTabbed2Component } from 'app/main/ui/page-layouts/carded/left-sidebar-tabbed-2/left-sidebar-tabbed-2.component';
import { CardedRightSidebar1Component } from 'app/main/ui/page-layouts/carded/right-sidebar-1/right-sidebar-1.component';
import { CardedRightSidebar2Component } from 'app/main/ui/page-layouts/carded/right-sidebar-2/right-sidebar-2.component';
import { CardedRightSidebarTabbed1Component } from 'app/main/ui/page-layouts/carded/right-sidebar-tabbed-1/right-sidebar-tabbed-1.component';
import { CardedRightSidebarTabbed2Component } from 'app/main/ui/page-layouts/carded/right-sidebar-tabbed-2/right-sidebar-tabbed-2.component';
import { SimpleFullWidth1Component } from 'app/main/ui/page-layouts/simple/full-width-1/full-width-1.component';
import { SimpleFullWidthTabbed1Component } from 'app/main/ui/page-layouts/simple/full-width-tabbed-1/full-width-tabbed-1.component';
import { SimpleLeftSidebar1Component } from 'app/main/ui/page-layouts/simple/left-sidebar-1/left-sidebar-1.component';
import { SimpleLeftSidebar2Component } from 'app/main/ui/page-layouts/simple/left-sidebar-2/left-sidebar-2.component';
import { SimpleLeftSidebar3Component } from 'app/main/ui/page-layouts/simple/left-sidebar-3/left-sidebar-3.component';
import { SimpleLeftSidebar4Component } from 'app/main/ui/page-layouts/simple/left-sidebar-4/left-sidebar-4.component';
import { SimpleRightSidebar1Component } from 'app/main/ui/page-layouts/simple/right-sidebar-1/right-sidebar-1.component';
import { SimpleRightSidebar2Component } from 'app/main/ui/page-layouts/simple/right-sidebar-2/right-sidebar-2.component';
import { SimpleRightSidebar3Component } from 'app/main/ui/page-layouts/simple/right-sidebar-3/right-sidebar-3.component';
import { SimpleRightSidebar4Component } from 'app/main/ui/page-layouts/simple/right-sidebar-4/right-sidebar-4.component';
import { BlankComponent } from 'app/main/ui/page-layouts/blank/blank.component';
import { ContactComponent } from 'app/main/ui/page-layouts/contact/contact.component';
import { HomeComponent } from 'app/main/ui/page-layouts/home/home.component';
import { PricingComponent } from 'app/main/ui/page-layouts/pricing/pricing.component';
import { SupportComponent } from 'app/main/ui/page-layouts/support/support.component';
import { AboutComponent } from 'app/main/ui/page-layouts/about/about.component';
import { LearnComponent } from 'app/main/ui/page-layouts/learn/learn.component';
import { FooterComponent } from 'app/main/ui/page-layouts/footer/footer.component';
import { PaymentComponent } from 'app/main/ui/page-layouts/payment/payment.component';
import { Functional_supportComponent } from 'app/main/ui/page-layouts/functional_support/functional_support.component';
import { Server_supportComponent } from 'app/main/ui/page-layouts/server_support/server_support.component';
import { Developer_supportComponent } from 'app/main/ui/page-layouts/developer_support/developer_support.component';
import { AgricultureComponent } from 'app/main/ui/page-layouts/agriculture/agriculture.component';
import { VideosComponent } from 'app/main/ui/page-layouts/videos/videos.component';
import { RetailComponent } from 'app/main/ui/page-layouts/retail/retail.component';
import { DistributionComponent } from 'app/main/ui/page-layouts/distribution/distribution.component';
import { EducationComponent } from 'app/main/ui/page-layouts/education/education.component';
import { ServicesComponent } from 'app/main/ui/page-layouts/services/services.component';
import { Non_profitComponent } from 'app/main/ui/page-layouts/non_profit/non_profit.component';

import { FuseSidebarModule } from '@fuse/components';
import { ProfileAboutComponent } from 'app/main/pages/profile/tabs/about/about.component';
import { ManufacturingComponent } from './manufacturing/manufacturing.component';



const routes: Routes = [
    
    // Carded
    {
        path     : 'page-layouts/carded/full-width-1',
        component: CardedFullWidth1Component
    },
    {
        path     : 'page-layouts/carded/full-width-2',
        component: CardedFullWidth2Component
    },
    {
        path     : 'page-layouts/carded/full-width-tabbed-1',
        component: CardedFullWidthTabbed1Component
    },
    {
        path     : 'page-layouts/carded/full-width-tabbed-2',
        component: CardedFullWidthTabbed2Component
    },
    {
        path     : 'page-layouts/carded/left-sidebar-1',
        component: CardedLeftSidebar1Component
    },
    {
        path     : 'page-layouts/carded/left-sidebar-tabbed-1',
        component: CardedLeftSidebarTabbed1Component
    },
    {
        path     : 'page-layouts/carded/left-sidebar-2',
        component: CardedLeftSidebar2Component
    },
    {
        path     : 'page-layouts/carded/left-sidebar-tabbed-2',
        component: CardedLeftSidebarTabbed2Component
    },
    {
        path     : 'page-layouts/carded/right-sidebar-1',
        component: CardedRightSidebar1Component
    },
    {
        path     : 'page-layouts/carded/right-sidebar-tabbed-1',
        component: CardedRightSidebarTabbed1Component
    },
    {
        path     : 'page-layouts/carded/right-sidebar-2',
        component: CardedRightSidebar2Component
    },
    {
        path     : 'page-layouts/carded/right-sidebar-tabbed-2',
        component: CardedRightSidebarTabbed2Component
    },
    // Simple
    {
        path     : 'page-layouts/simple/full-width-1',
        component: SimpleFullWidth1Component
    },
    {
        path     : 'page-layouts/simple/full-width-tabbed-1',
        component: SimpleFullWidthTabbed1Component
    },
    {
        path     : 'page-layouts/simple/left-sidebar-1',
        component: SimpleLeftSidebar1Component
    },
    {
        path     : 'page-layouts/simple/left-sidebar-2',
        component: SimpleLeftSidebar2Component
    },
    {
        path     : 'page-layouts/simple/left-sidebar-3',
        component: SimpleLeftSidebar3Component
    },
    {
        path     : 'page-layouts/simple/left-sidebar-4',
        component: SimpleLeftSidebar4Component
    },
    {
        path     : 'page-layouts/simple/right-sidebar-1',
        component: SimpleRightSidebar1Component
    },
    {
        path     : 'page-layouts/simple/right-sidebar-2',
        component: SimpleRightSidebar2Component
    },
    {
        path     : 'page-layouts/simple/right-sidebar-3',
        component: SimpleRightSidebar3Component
    },
    {
        path     : 'page-layouts/simple/right-sidebar-4',
        component: SimpleRightSidebar4Component
    },
    // Blank
    {
        path     : 'page-layouts/blank',
        component: BlankComponent
    },
    //BackboneERP
    {
        path     : 'page-layouts/home',
        component: HomeComponent
    },
    {
        path     : 'page-layouts/pricing',
        component: PricingComponent
    },
    {
        path     : 'page-layouts/support',
        component: SupportComponent
    },
    {
        path     : 'page-layouts/contact',
        component: ContactComponent
    },
    {
        path     : 'page-layouts/about',
        component: AboutComponent
    },
    {
        path     : 'page-layouts/learn',
        component: LearnComponent
    },
    {
        path     : 'page-layouts/footer',
        component: FooterComponent
    },
    {
        path     : 'page-layouts/payment',
        component: PaymentComponent
    },
    {
        path     : 'page-layouts/functional_support',
        component: Functional_supportComponent
    },
    {
        path     : 'page-layouts/server_support',
        component: Server_supportComponent
    },
    {
        path     : 'page-layouts/developer_support',
        component: Developer_supportComponent
    },
    {
        path     : 'page-layouts/videos',
        component: VideosComponent
    },
    {
        path     : 'page-layouts/agriculture',
        component: AgricultureComponent
    },
    {
        path     : 'page-layouts/distribution',
        component: DistributionComponent
    },
    {
        path     : 'page-layouts/manufacturing',
        component: ManufacturingComponent
    },
    {
        path     : 'page-layouts/education',
        component: EducationComponent
    },
    {
        path     : 'page-layouts/services',
        component: ServicesComponent
    },
    {
        path     : 'page-layouts/retail',
        component: RetailComponent
    },
    {
        path     : 'page-layouts/non_profit',
        component: Non_profitComponent
    },
];

@NgModule({
    declarations: [
        CardedFullWidth1Component,
        CardedFullWidth2Component,
        CardedFullWidthTabbed1Component,
        CardedFullWidthTabbed2Component,
        CardedLeftSidebar1Component,
        CardedLeftSidebar2Component,
        CardedLeftSidebarTabbed1Component,
        CardedLeftSidebarTabbed2Component,
        CardedRightSidebar1Component,
        CardedRightSidebar2Component,
        CardedRightSidebarTabbed1Component,
        CardedRightSidebarTabbed2Component,
        SimpleFullWidth1Component,
        SimpleFullWidthTabbed1Component,
        SimpleLeftSidebar1Component,
        SimpleLeftSidebar2Component,
        SimpleLeftSidebar3Component,
        SimpleLeftSidebar4Component,
        SimpleRightSidebar1Component,
        SimpleRightSidebar2Component,
        SimpleRightSidebar3Component,
        SimpleRightSidebar4Component,
        BlankComponent,
        ContactComponent,
        HomeComponent,
        PricingComponent,
        SupportComponent,
        LearnComponent,
        FooterComponent,
        AboutComponent,
        PaymentComponent,
        Developer_supportComponent,
        Server_supportComponent,
        Functional_supportComponent,
        VideosComponent,
        
        ServicesComponent,
        RetailComponent,
        EducationComponent,
        Non_profitComponent,
        AgricultureComponent,
        ManufacturingComponent,
        DistributionComponent,

    
       
    
       
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatIconModule,
        MatTabsModule,
        MatCardModule,
        MatMenuModule,
        MatToolbarModule,
        MatGridListModule,
        MatListModule,
        MatDividerModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,

        FuseSidebarModule,
        FuseSharedModule,
        FuseDemoModule
    ]
})
export class UIPageLayoutsModule
{
}
