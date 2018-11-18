import { Component } from '@angular/core';

import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';

@Component({
    selector   : 'videos',
    templateUrl: './videos.component.html',
    styleUrls  : ['./videos.component.scss']
})
export class VideosComponent
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
