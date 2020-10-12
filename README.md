# Basic installation

## Install npm dependencies

```bash
npm i --save-dev eslint @akqa/eslint-config-akqa eslint-config-prettier eslint-config-react-app eslint-plugin-import eslint-plugin-prettier eslint-plugin-react
```

## Add to your eslint config

Create .eslintrc to the root forlder

```json
{
  "extends": ["config-akqa"]
}
```

# React installation

## Install npm dependencies

```bash
npm i --save-dev eslint @akqa/eslint-config-akqa eslint-config-prettier eslint-config-react-app eslint-plugin-import eslint-plugin-prettier eslint-plugin-react
```

## Add to your eslint config

Create .eslintrc to the root forlder

```json
{
  "extends": ["config-akqa", "config-akqa/react"]
}
```
