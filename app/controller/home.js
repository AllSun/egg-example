'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const { id } = ctx.query;
    ctx.body = id;
  }

  async user() {
    const { ctx } = this;
    const result = await ctx.service.home.user();
    ctx.body = result;
  }

  // app/controller/home.js
  // post 请求方法
  async add() {
    const { ctx } = this;
    const { title } = ctx.request.body;
    // Egg 框架内置了 bodyParser 中间件来对 POST 请求 body 解析成 object 挂载到 ctx.request.body 上
    ctx.body = {
      title,
    };
  }

  // ctx.render 默认会去 view 文件夹寻找 index.html，这是 Egg 约定好的。
  // eslint-disable-next-line no-dupe-class-members
  async index() {
    const { ctx } = this;
    await ctx.render('index.html', {
      title: '我叫孙金榜',
    });
  }

  async addUser() {
    const { ctx } = this;
    const { sname } = ctx.request.body;
    try {
      const result = await ctx.service.home.addUser(sname);
      ctx.body = {
        code: 200,
        msg: '添加成功',
        data: null,
      };
    } catch (error) {
      ctx.body = {
        code: 500,
        msg: '添加失败',
        data: null,
      };
    }
  }

  async editUser() {
    const { ctx } = this;
    const { sno, sname } = ctx.request.body;
    try {
      const result = await ctx.service.home.editUser(sno, sname);
      ctx.body = {
        code: 200,
        msg: '修改成功',
        data: null,
      };
    } catch (error) {
      ctx.body = {
        code: 500,
        msg: '修改失败',
        data: null,
      };
    }
  }

  async deleteUser() {
    const { ctx } = this;
    const { sname } = ctx.request.body;
    try {
      const result = await ctx.service.home.deleteUser(sname);
      ctx.body = {
        code: 200,
        msg: '删除成功',
        data: null,
      };
    } catch (error) {
      ctx.body = {
        code: 500,
        msg: '删除失败',
        data: null,
      };
    }
  }

}

module.exports = HomeController;
