const createUserController = async (req, res) => {
  res.send({ message: "Create Ok" });
};
const findAllUserController = async (req, res) => {
  res.send({ message: "Find All Ok" });
};

module.exports = { createUserController, findAllUserController };
