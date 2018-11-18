import { Component } from '@angular/core';

import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';

@Component({
    selector   : 'learn',
    templateUrl: './learn.component.html',
    styleUrls  : ['./learn.component.scss']
})
export class LearnComponent
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
