# 基于react模仿CNode
------
## 修饰器配置
> npm install babel-cli babel-preset-es2015
## babelrc
  {
    "presets": [
        "react",
        "es2015",
        "stage-1"
    ],
    "plugins": [
        "transform-decorators-legacy",
        [
            "transform-runtime",
            {
                "polyfill": false,
                "regenerator": true
            }
        ]
    ]
  }
