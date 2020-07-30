import { AfterViewInit, Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import 'jquery';
import 'bootstrap';

import { Subject } from 'rxjs';

import { BsModalRef } from 'ngx-bootstrap/modal';

import { User } from 'src/app/contacts/interfaces/user';
import { IDynamicModalContent } from '../interfaces/dynamic-modal-content';
declare var $: any;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent implements OnInit, AfterViewInit {
  public loading: boolean;
  public onClose: Subject<boolean>;
  header: string;
  modalId: string;
  component: any;
  modalElement: any;
  @ViewChild('modalContent', { static: true, read: ViewContainerRef })
  viewContainerRef: ViewContainerRef;
  componentRef: any;
  user: User;
  config: any;
  data: any;
  submitCallback: (arg: any) => void;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private bsModalRef: BsModalRef
    ) {}

  ngOnInit() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.component);
    this.componentRef = this.viewContainerRef.createComponent(componentFactory);
    this.onClose = new Subject<boolean>();
    this.loading = false;
  }

  ngAfterViewInit(): void {
    console.log('pt Robert', this.bsModalRef);
    setTimeout(() => console.log('user', this.user), 5000);
    this.modalElement = $('#' + this.modalId);
    this.modalElement.modal('show');
  }

  close(): void {
    this.onClose.next(false);
    (this.componentRef.instance as IDynamicModalContent).submit(this.submitCallback);
    this.modalElement.modal('hide');
  }
}
