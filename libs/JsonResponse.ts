/**
 * @copyright Copyright (c) 2022 Adam Josefus
 */


export class JsonResponse extends Response {
    constructor(data: unknown, init?: ResponseInit, prettyPrint?: boolean) {
        const body = (() => {
            if (prettyPrint) return JSON.stringify(data, null, 2);
            return JSON.stringify(data);
        })();

        super(body, init);

        this.headers.set("Content-Type", "application/json; charset=utf-8");
    }
}
