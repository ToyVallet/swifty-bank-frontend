# Swifty 프로젝트 프론트엔드 레포지토리

Swifty 프로젝트의 프론트엔드 레포지토리입니다.
모노레포를 사용하고 있으며, [Turborepo](https://turbo.build/repo/docs/)를 사용하고 있습니다.

### Apps and Packages

- `swifty-bank`: 핀테크 뱅킹서비스
- `@swifty/ui`: 공통 UI 컴포넌트 라이브러리
- `@swifty/hooks`: 공통 React Hooks 라이브러리
- `@swifty/eslint-config`: `eslint` 설정
- `@swifty/typescript-config`: 모노레포 전체에 적용되는`tsconfig.json` 파일들
- `@swifty/jest-config`: test를 위한 jest 설정을 다룹니다.

### package 설치

패키지 설치 명령어는 다음과 같이 입력합니다.

```bash
yarn workspace swifty-bank add <package>
```

### 새로운 프로젝트 설치

새로운 프로젝트 설치는 다음과 같이 진행합니다.

```bash
npx turbo gen workspace --name @swifty/component
```

모든 패키지는 `typescript`로 작성되어 있습니다.

### Build

모든 패키지를 빌드하기 위해서는 다음의 커맨드를 실행합니다.

```bash
yarn build
```

### Develop

모든 앱을 개발모드로 실행하기 위해서는 다음의 커맨드를 실행합니다.

```bash
yarn dev
```

### Specific App Command

특정 앱의 경로에서 커맨드를 실행할 수 있습니다.

```bash
yarn bank {command}
```
