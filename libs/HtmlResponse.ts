/**
 * @copyright Copyright (c) 2022 Adam Josefus
 */


export class HtmlResponse extends Response {
    constructor(text: string, init?: ResponseInit) {
        super(text, init);

        this.headers.set("Content-Type", "text/html; charset=utf-8");
    }
}
