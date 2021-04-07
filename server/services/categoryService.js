"use strict";

const { sql, poolPromise } = require("../config/db");

class categoryService {
  static async getAll() {
    try {
      const pool = await poolPromise;
      return await pool.request().query("SELECT * FROM L_CATEGORY");
    } catch (err) {
      console.log(err);
    }
  }

  static async getById(id) {
    try {
      console.log(id);
      const pool = await poolPromise;
      return await pool
        .request()
        .input("input_parameter", sql.Int, id)
        .query(
          "select * from l_category where category_id = @input_parameter "
        );
    } catch (err) {
      console.log(err);
    }
  }

  static async createCategory(data) {
    try {
      const pool = await poolPromise;
      return await pool
        .request()
        .input("categoryid", sql.Int, data.categoryId)
        .input("categoryname", sql.VarChar, data.categoryName)
        .input("activestatus", sql.Char, data.activeStatus)
        .input("updateby", sql.Char, "netsazzad@gmail.com")
        .output("message", sql.Char, "")
        .execute("pro_category_save");
    } catch (err) {
      console.log(err);
    }
  }

  static async deleteCategory(categoryid) {
    try {
      const pool = await poolPromise;
      return await pool
        .request()
        .input("categoryid", sql.Int, categoryid)
        .output("message", sql.Char, "")
        .execute("pro_category_delete");
    } catch (err) {
      console.log(err);
    }
  }

  static async updateCategory(data) {
    try {
      const pool = await poolPromise;
      return await pool
        .request()
        .input("categoryid", sql.Int, data.categoryId)
        .input("categoryname", sql.VarChar, data.categoryName)
        .input("activestatus", sql.Char, data.activeStatus)
        .input("updateby", sql.Char, "netsazzad@gmail.com")
        .output("message", sql.Char, "")
        .execute("pro_category_save");
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = categoryService;
