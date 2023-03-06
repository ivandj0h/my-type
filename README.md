# My Type

```bash
On Progress of Development!!
```

## Description

`My Type` is [Typescript](https://www.typescriptlang.org/) project that i was created to learn how to build an api using `TypeScript`.

### 1. Installation & Configuration

to `Install` TypeScript, simply :

- Go to  [Typescript](https://www.typescriptlang.org/) website and follow the instruction, but make sure you already have [nodejs](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) already installed on your machine.
- Setup `ts-node` on your local computer `npm i -g ts-node`
- Install `Code Runner` extension, if you're using [vscode](https://code.visualstudio.com/)
- Then in `vscode` open `settings.json` and add this two lines :

    ```json
    "code-runner.clearPreviousOutput": true,
    "code-runner.showExecutionMessage": false,
    "editor.minimap.enabled": true,
    ```

- Then run `tsc -init` to generate configuration file (`tsconfig.json`)

    for this project i use code below on `tsconfig`, here they are :

    ```json
    {
    "compilerOptions": {
        "target": "es2015",
        "module": "commonjs",
        "declaration": true,
        "outDir": "./dist",
        "strict": true,
        "noUnusedLocals": true,
        "noUnusedParameters": true,
        "esModuleInterop": true,
        "skipLibCheck": true,
        "forceConsistentCasingInFileNames": true
    },
    "include": ["src/**/*"],
    "exclude": ["node_modules"]
    }

    ```

### 2. Folder Structure

Here is the folder Structure of this `My Type` Project :

<pre>
my-type  
    ├── dist/
    ├── src/  
    │   ├── modules  
    │   │   ├── variables.ts  
    │   ├── app.ts  
    ├── index.ts
    ├── package.json
    ├── .markdownlint.json
    └── tsconfig.json
</pre>

## Author

[ivandjoh]()  
[delvin]()
