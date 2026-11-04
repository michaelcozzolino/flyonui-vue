import type { Icon }           from '@/UI/Customization';
import type { InputTextProps } from '@/UI/Forms';

export interface StrongPasswordRule {
    /** The description of the rule, that can be shown in the ruleset if specified */
    text?: string;

    /** A function to validate the rule for a specific password, returns true if valid, false otherwise */
    validate: (password: string) => boolean;
}

export interface StrongPasswordRules {
    /** The rules for the strong password */
    rules: StrongPasswordRule[];

    /** Whether to show the rule checklist below the strength indicator. */
    show: boolean;
}

export interface InputPasswordProps extends Omit<InputTextProps, 'type' | 'icon' | 'list'> {
    /** The icon to show when the password is hidden and shown */
    icon?: { on: Icon; off: Icon };

    /** If specified, the component will show a set of dynamic segments to define the strength of the password */
    isStrong?: {
        /** A positive segment count, or the labels ordered from the weakest to the strongest. */
        levels: number | string[];

        /** The rules properties for the strong password */
        rules: StrongPasswordRules;
    };
}
