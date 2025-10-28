// Simulated local user database
const mockUser = {
  id: 1,
  name: "Hauwa",
  email: "omotoso.hauwa@gmail.com",
  password: "Zahra2024@",
};

export const login = async (credentials) => {
  console.log("Mock login attempt:", credentials);

  // simulate delay
  await new Promise((res) => setTimeout(res, 500));

  if (
    credentials.email === mockUser.email &&
    credentials.password === mockUser.password
  ) {
    const token = btoa(Math.random().toString());
    localStorage.setItem("ticketapp_session", token);
    localStorage.setItem("user", JSON.stringify(mockUser));
    return { user: mockUser, token };
  }

  throw new Error("Invalid credentials. Try admin@example.com / password");
};

export const register = async (userData) => {
  console.log("Mock register:", userData);

  // Simulate delay
  await new Promise((res) => setTimeout(res, 500));

  // Pretend registration success, but keep same user
  const createdUser = { ...userData, id: Date.now() };
  localStorage.setItem("ticketapp_session", btoa(Math.random().toString()));
  localStorage.setItem("user", JSON.stringify(createdUser));
  return createdUser;
};

export const isAuthenticated = () =>
  Boolean(localStorage.getItem("ticketapp_session"));

export const getCurrentUser = () => {
  try {
    const raw = localStorage.getItem("user");
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

export const logout = () => {
  localStorage.removeItem("ticketapp_session");
  localStorage.removeItem("user");
};
