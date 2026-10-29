import type { AfterViewInit, OnDestroy }                                 from '@angular/core';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, inject, signal } from '@angular/core';

type CheckboxElement = HTMLElement & { modelValue: boolean };

@Component({
    selector: 'flyonui-angular-checkbox-example',
    standalone: true,
    schemas:    [CUSTOM_ELEMENTS_SCHEMA],
    template: `
        <fo-checkbox model-value
                     [modelValue]="isChecked()"
                     label="Checked"
        >
        </fo-checkbox>
    `,
})
export default class DefaultCheckboxAngular implements AfterViewInit, OnDestroy {
    readonly isChecked = signal(true);
    private readonly hostElement: ElementRef<HTMLElement> = inject(ElementRef);
    private checkbox:             CheckboxElement | undefined = undefined;

    private readonly onModelValueUpdate = (event: Event): void => {
        this.isChecked.set((event as CustomEvent<[boolean]>).detail[0]);
    };

    ngAfterViewInit(): void {
        const checkbox = this.hostElement.nativeElement.querySelector<CheckboxElement>('fo-checkbox');

        if (checkbox === null) {
            throw new Error('checkbox not found.');
        }

        this.checkbox = checkbox;
        checkbox.addEventListener('update:modelValue', this.onModelValueUpdate);
    }

    ngOnDestroy(): void {
        this.checkbox?.removeEventListener('update:modelValue', this.onModelValueUpdate);
    }
}
