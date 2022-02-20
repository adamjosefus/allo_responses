# Allo Reponses for Deno 🦕

Prepared reponse classes for Deno.

## Classes

### `TextResponse`
```ts
const r = new TextResponse('Lorem ipsum');
```

### `JsonResponse`
```ts
const r = new JsonResponse([{ foo: bar }]);
```

### `HtmlResponse`
```ts
const r = new HtmlResponse('<h1>Hello World</h1>');
```

### `FileResponse`
```ts
const r = new FileResponse('/path/to/file.ext');
```
```ts
const file: File = /*...*/;
const r = new FileResponse(file);
```
```ts
const file: Deno.FsFile = /*...*/;
const r = new FileResponse(file);
```

---

## Documentation 📖

Description of all classes and methods with **examples** will found in the [documentation](https://doc.deno.land/https://deno.land/x/allo_responses/mod.ts).

---

Check out other [ours packages 📦](https://deno.land/x?query=allo_)!