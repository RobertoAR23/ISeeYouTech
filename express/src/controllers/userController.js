let users = [];

const createUser = (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ message: "Todos los campos son obligatorios." });
  }

  const existingUser = users.find((u) => u.email === email);
  if (existingUser) {
    return res.status(409).json({ message: "El email ya está en uso." });
  }

  const newUser = { id: users.length + 1, name, email, password };
  users.push(newUser);
  res.status(201).json(newUser);
};

const getUsers = (req, res) => {
  res.json(users);
};

const updateUser = (req, res) => {
  const { id } = req.params;
  const user = users.find((u) => u.id === parseInt(id));
  if (user) {
    const { name, email, password } = req.body;
    user.name = name || user.name;
    user.email = email || user.email;
    user.password = password || user.password;
    res.json(user);
  } else {
    res.status(404).json({ message: "Usuario no encontrado" });
  }
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((u) => u.id !== parseInt(id));
  res.status(204).send();
};

module.exports = {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
};
