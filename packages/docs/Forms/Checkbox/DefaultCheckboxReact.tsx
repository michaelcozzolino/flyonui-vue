/** @jsxImportSource react */
import type { CheckboxElement } from 'flyonui-web-components/react';
import type { ReactElement }    from 'react';
import { useState }             from 'react';

export default function DefaultCheckboxReact(): ReactElement {
    const [isChecked, setIsChecked] = useState(true);

    return (
        <>
            <fo-checkbox
                ref={(checkbox: CheckboxElement | null): void => {
                    if (checkbox !== null) {
                        checkbox.modelValue = isChecked;
                    }
                }}
                model-value
                label="Checked"
                onupdate:modelValue={(event: CustomEvent<[boolean]>): void => {
                    setIsChecked(event.detail[0]);
                }}
            />
        </>
    );
}
