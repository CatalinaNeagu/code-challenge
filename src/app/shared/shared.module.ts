import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsModalRef, ModalModule } from 'ngx-bootstrap/modal';

import { ModalComponent } from './modal/modal.component';
import { ModalService } from './services/shared-modal.service';

@NgModule({
  imports: [
    CommonModule,
    ModalModule.forRoot(),
  ],
  declarations: [
    ModalComponent,
  ],
  entryComponents: [
    ModalComponent,
  ],
  exports: [
    ModalComponent
  ],
  providers: [
    BsModalRef,
  ],
})

export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: [ModalService]
    };
  }
}
