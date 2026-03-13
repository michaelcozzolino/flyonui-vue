import type { Alignable } from '@/Lib/UseAlignment';

export type BlockQuoteAuthor = string | {
    name:    string;
    avatar?: string;
    title?:  string;
};

export interface BlockQuoteProps extends Alignable {
    /**
     * The author of the block quote.
     * When it is a string it is the author's name, otherwise it can show more data such as an avatar and a title
     */
    author?: BlockQuoteAuthor;
}
