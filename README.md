<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

##首先 感谢中文社区翻译贡献者,以及世界开源贡献者,它仅仅刚刚开始 刚完成了 整体构造(我的初衷是做一套商城系统,发觉这块很多,现在打算,分发,基于数据库变来做微服务,做示例小模块,所以.......) 感谢简书 @RoyLin1996 完成了大部分内容 供我参考.

## 目前只有 两个模块

### user 模块缺失jwt验证 其余大部分 (包括controller service fitter 等等 都已经完善)

### 需要注意的是 在goods 模块目前还有 一切在user 做的改变,还没应用到

#### 缺失 多个数据库 连接方法 (数据库类型目前只涉及到mysql关系行数据库,Nosql orecle等暂无)

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

  Nest is [MIT licensed](LICENSE).
