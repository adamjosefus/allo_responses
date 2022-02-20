/**
 * @copyright Copyright (c) 2022 Adam Josefus
 */


export class HtmlResponse extends Response {
    constructor(html: string, init?: ResponseInit) {
        super(html, init);

        this.headers.set("Content-Type", "text/html; charset=utf-8");
    }
}
