import { Component, TemplateRef } from "@angular/core";
import { ToastService } from "./toast.service";

@Component({
    selector: 'app-toasts',
    template: `
        <ngb-toast *ngFor="let toast of this.toastService.toasts" 
            [ngClass]="toast.classname" 
            [autohide]="true"
            [delay]="toast.delay || 5000"
            (hidden)="toastService.remove(toast)">
            <ng-template [ngIf]="isTemplate(toast)" [ngIfElse]="text">
                <ng-template [ngTemplateOutlet]="toast.textOrTmpl"></ng-template>
            </ng-template>
            <ng-template #text>
                {{toast.textOrTmpl}}
            </ng-template>
        </ngb-toast>
    `,
    host: {'class': 'toast-container position-fixed top-0 end-0 p-3', 'style': 'z-index: 1200'}
})
export class ToastsContainer {
    constructor(public toastService: ToastService){

    }

    isTemplate(toast: { textOrTmpl: any; }) {
        return toast.textOrTmpl instanceof TemplateRef;
    }
}