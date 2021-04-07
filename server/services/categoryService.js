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
        .input("categoryId", sql.Int, data.categoryId)
        .input("categoryName", sql.VarChar, data.categoryName)
        .input("activeStatus", sql.Char, data.activeStatus)
        .input("updateBy", sql.Char, "netsazzad@gmail.com")
        .output("message", sql.Char, "")
        .execute("pro_category_save");
    } catch (err) {
      console.log(err);
    }
  }

  static async deleteCategory(id) {
    try {
      const pool = await poolPromise;
      return await pool
        .request()
        .input("categoryId", sql.Int, id)
        .output("message", sql.VarChar, "")
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
        .input("categoryId", sql.Int, data.categoryId)
        .input("categoryName", sql.VarChar, data.categoryName)
        .input("activeStatus", sql.Char, data.activeStatus)
        .input("updateBy", sql.Char, "netsazzad@gmail.com")
        .output("message", sql.VarChar, "")
        .execute("pro_category_save");
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = categoryService;
