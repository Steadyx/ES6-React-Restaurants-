import Joi from "joi";

export default {
  // POST /api/users
  createUser: {
    body: {
      username: Joi.string(),
      mobileNumber: Joi.string().regex(/^[1-9][0-9]{9}$/)
    }
  },

  // UPDATE /api/users/:userId
  updateUser: {
    body: {
      username: Joi.string(),
      mobileNumber: Joi.string().regex(/^[1-9][0-9]{9}$/)
    },
    params: {
      userId: Joi.string().hex()
    }
  },

  // POST /api/auth/login
  login: {
    body: {
      username: Joi.string(),
      password: Joi.string()
    }
  }
};
