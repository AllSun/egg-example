// app/service/home.js
'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
  async user() {
    const { app } = this;
    const QUERY_STR = 'sno, sname';
    const sql = `select ${QUERY_STR} from student`;
    try {
      const result = await app.mysql.query(sql);
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async addUser(sname) {
    const { app } = this;
    try {
      const result = await app.mysql.insert('student', { sname });
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async editUser(sno, sname) {
    const { app } = this;
    try {
      const result = await app.mysql.update('student', { sname }, {
        where: {
          sno,
        },
      });
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async deleteUser(sname) {
    const { app } = this;
    try {
      const result = await app.mysql.delete('student', {
        sname,
      });
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

module.exports = HomeService;
