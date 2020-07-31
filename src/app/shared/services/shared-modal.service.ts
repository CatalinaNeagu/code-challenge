import { Injectable } from '@angular/core';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Injectable()
export class SharedModalService {

    constructor(
        private bsModalService: BsModalService
    ) { }

    public bsModalRef: BsModalRef;

    public showModal(component: any, config: any) {
        return this.bsModalService.show(component, config);
    }
}
