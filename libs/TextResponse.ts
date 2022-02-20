/**
 * @copyright Copyright (c) 2022 Adam Josefus
 */


export class TextResponse extends Response {
    constructor(text: string, init?: ResponseInit) {
        super(text, init);

        this.headers.set("Content-Type", "text/plain; charset=utf-8");
    }
}
