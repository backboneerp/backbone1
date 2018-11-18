import { Component } from '@angular/core';

import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';

@Component({
    selector   : 'functional_support',
    templateUrl: './functional_support.component.html',
    styleUrls  : ['./functional_support.component.scss']
})
export class Functional_supportComponent
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
