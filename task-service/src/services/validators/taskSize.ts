import Joi from "joi";

export const TaskSizeValidator = Joi.object({
  name: Joi.string().required(),
  value: Joi.string().required(),
  createdAt: Joi.number().default(Date.now()),
  updatedAt: Joi.number().default(Date.now()),
});
