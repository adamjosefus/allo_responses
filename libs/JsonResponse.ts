/**
 * @copyright Copyright (c) 2022 Adam Josefus
 */


export class JsonResponse extends Response {
    constructor(text: string, init?: ResponseInit) {
        super(text, init);

        this.headers.set("Content-Type", "application/json; charset=utf-8");
    }
}
