/**
 * @copyright Copyright (c) 2022 Adam Josefus
 */


import { readableStreamFromReader } from "https://deno.land/std@0.126.0/streams/mod.ts";


export class FileResponse extends Response {

    constructor(file: string | File | Deno.FsFile, init?: ResponseInit) {
        const body = (f => {
            if (f instanceof File) {
                return f.stream();
            }

            if (f instanceof Deno.FsFile) {
                return readableStreamFromReader(f);
            }

            return readableStreamFromReader(Deno.openSync(f, { read: true }));
        })(file);

        super(body, init);
    }
}
