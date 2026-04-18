# How to reproduce issue

- node version : 24.15.0
- pnpm version : 10.33.0
- nx version : 22.6.5

Then in a bash terminal :

```bash
alex@ubuntu-gnu-linux-24-04-3:~/nx/workspace (main *)$ nx serve app

> nx run @workspace/app:build

> webpack-cli build --node-env=production

ERROR in ../../libs/lib/src/index.ts
[tsl] ERROR
      TS6059: File '/home/alex/nx/workspace/libs/lib/src/index.ts' is not under 'rootDir' '/home/alex/nx/workspace/apps/app/src'. 'rootDir' is expected to contain all source files.
  The file is in the program because:
    Root file specified for compilation
  File is CommonJS module because 'package.json' was not found

ERROR in ../../libs/lib/src/lib/lib.module.ts
[tsl] ERROR
      TS6059: File '/home/alex/nx/workspace/libs/lib/src/lib/lib.module.ts' is not under 'rootDir' '/home/alex/nx/workspace/apps/app/src'. 'rootDir' is expected to contain all source files.
  The file is in the program because:
    Root file specified for compilation
  File is CommonJS module because 'package.json' was not found

webpack compiled with 2 errors (a18e973ec98b204c)

———————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————

 NX   Cancelled running target serve for project @workspace/app (1s)


alex@ubuntu-gnu-linux-24-04-3:~/nx/workspace (main *)$
```
