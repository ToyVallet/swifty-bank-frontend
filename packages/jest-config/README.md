## Jest Config 사용하기

1. 필요 packages의 package.json의 DevDependency에 `"@swifty/jest-config": "*"`을 추가합니다.

2. 패키지의 root 폴더에 `jest.config.js` 파일을 다음과 같이 작성합니다.

   ```js
   // Just importing the config from jsconfig workspace and exporting it
   const sharedConfig = require("@swifty/jest-config");
   const config = {
     ...sharedConfig,
   };
   module.exports = config;
   ```

3. 패키지의 root 폴더에 tsconfig.jest.json을 생성하고 다음과 같이 ts 설정을 추가합니다.

   ```json
   {
     "extends": "@swifty/typescript-config/nextjs.json",
     "compilerOptions": {
       "jsx": "react-jsx"
     }
   }
   ```

4. 해당 패키지의 Dev Dependency에 `ts-jest`를 설치합니다.
