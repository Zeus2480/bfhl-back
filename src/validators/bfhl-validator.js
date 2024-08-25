// validators/bfhl-validator.js
const z = require('zod');

const postBfhlSchema = z.object({
  data: z.array(z.string())
});

const validatePostBfhl = async (data) => {
  return postBfhlSchema.parseAsync(data);
};

module.exports = {
  validatePostBfhl
};
