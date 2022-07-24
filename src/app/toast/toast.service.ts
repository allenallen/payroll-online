import { Injectable, TemplateRef } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ToastService {
    toasts: any[] = [];

    show(textOrTmpl: string | TemplateRef<any>, options:any = {}) {
        console.log(textOrTmpl);
        this.toasts.push({textOrTmpl, ...options});
    }

    remove(toast: string | TemplateRef<any>) {
        this.toasts = this.toasts.filter(t => t !== toast);
    }

    clear() {
        this.toasts.splice(0, this.toasts.length);
    }
}