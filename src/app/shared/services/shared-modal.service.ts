import { ComponentFactoryResolver, ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { BsModalService } from 'ngx-bootstrap/modal';


@Injectable({
  providedIn: 'root'
})
export class ModalService {
  viewRefs = new Map<ViewContainerRef, ComponentRef<ModalComponent>>();

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private modalService: BsModalService,
  ) {}

  createModal(id: string, header: string, viewContainerRef: ViewContainerRef, component, config) {
    if (this.viewRefs.has(viewContainerRef)) {
      viewContainerRef.clear();
      this.viewRefs.delete(viewContainerRef);
    }
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ModalComponent);
    const componentRef = viewContainerRef.createComponent(componentFactory);
    (componentRef.instance as ModalComponent).modalId = id;
    (componentRef.instance as ModalComponent).header = header;
    (componentRef.instance as ModalComponent).component = component;
    console.log('componentRef', componentRef);
    console.log('component', component);
    this.viewRefs.set(viewContainerRef, componentRef);
    console.log('config', config);
    return this.modalService.show(componentRef);
  }
}
