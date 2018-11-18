import { Component } from '@angular/core';

import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';

@Component({
    selector   : 'developer_support',
    templateUrl: './developer_support.component.html',
    styleUrls  : ['./developer_support.component.scss']
})
export class Developer_supportComponent
{
    /**
     * Constructor
     *
     * @param {FuseSidebarService} _fuseSidebarService
     */
    constructor(
        private _fuseSidebarService: FuseSidebarService
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle sidebar
     *
     * @param name
     */
    toggleSidebar(name): void
    {
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    }
}
