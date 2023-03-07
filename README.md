# My Type

```bash
On Progress of Development
```

## Description

`My Type` is [Typescript](https://www.typescriptlang.org/) project that i was created to learn the Basics of `TypeScript` and how it works.  
In this `Repo` you can find such as :  

- Arrays  
- Enum
- Tupple
- Unknown
- etc

### 1. Installation & Configuration

To Develop this project from scratch, you have to do several steps below :  

- Open `Terminal` or `Command Prompt`
- Type `npm init -y`  
- You can Install TypeScript as `dev dependencies` by running this command `npm install typescript --save-dev` and followed by adding `npm install @types/node --save-dev` (is because of use typescript)  
or you can `Install` TypeScript Globally on your Machine by following these steps :  

    - Go to  [Typescript](https://www.typescriptlang.org/) website and follow the instruction, but make sure you already have [nodejs](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) already installed on your machine  
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
            "target": "es5",
            "module": "commonjs",
            "declaration": true,
            "allowJs": true,
            "rootDir": "",
            "outDir": "./dist",
            "strict": true,
            "noUnusedLocals": true,
            "noImplicitAny": true,
            "noUnusedParameters": true,
            "esModuleInterop": true,
            "skipLibCheck": true,
            "forceConsistentCasingInFileNames": true
            }
        }
        ```  

    - to watch for changes to our code and automatically restart when a file is changed, you need another `Package` name `Nodemon`.  
    you can install it as `dev dependencies` by typing `npm install --save-dev ts-node nodemon`  
    - Next Create file `nodemon.json` in your project root and add folowing `script` :  

        ```javascript
        {
            "watch": ["*"],
            "ext": ".ts,.js",
            "ignore": [],
            "exec": "npx ts-node ./index.ts"
        }
        ```

### 2. Folder Structure

Here is the folder Structure of this `My Type` Project, this Structure will be update when i add new file on it

<pre>
my-type  
    ├── dist/
    ├── src/  
    │   ├── modules  
    │   │   ├── arrays.ts  
    │   │   ├── variables.ts  
    │   ├── app.ts  
    ├── .gitignore
    ├── .markdownlint.json
    ├── index.ts
    ├── nodemon.json
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── tsconfig.json
</pre>

### 3. Running The Project

Before running the project, make sure you modify the `package.json` file by add this script below :  

```javascript
    {
        ...
        "start:dev": "npx nodemon",
        ...
    }
```

After added those script, then you can type  

```javascript
npm run start:dev
```  

on your `terminal` or `command prompt`  

### 4. Build The Project

In order to clean and compile the project for production, we can add a build script.  
you can use `rimraf`, a cross-platform tool that acts like the `rm -rf` command, and to install `rimraf` just typing `npm install --save-dev rimraf` and add this line into your `package.json` :

```javascript
    {
        ...
        "build": "rimraf ./build && tsc",
        ...
    }
```

Now you can run :

```javascript
npm run build
```

`rimraf` will remove our old build folder before the TypeScript compiler emits new code to dist

### 5. Production startup script

In order to start the app in `Production`, all we need to do is run the build command first, and then execute the compiled JavaScript at `dist/index.js`

You can add this line in your `package.json` file :

```javascript
    {
        ...
        "start": "npm run build && node build/index.js"
        ...
    }
```

That's it!!
Happy coding...

## Credits

Version :   
**`1.0.0-alpha`**  
Authors :  
**[ivandjoh](https://ivandjoh.com)**  
**[delvin](https://ivandjoh.com)**
