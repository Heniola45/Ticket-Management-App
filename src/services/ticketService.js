const STORAGE_KEY = "tickets";

export const getTickets = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const createTicket = (ticket) => {
  const tickets = getTickets();
  const newTicket = {
    ...ticket,
    id: Date.now(),
    createdAt: new Date().toISOString(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...tickets, newTicket]));
};

export const updateTicket = (id, updates) => {
  const tickets = getTickets().map(t => (t.id === id ? { ...t, ...updates } : t));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tickets));
};

export const deleteTicket = (id) => {
  const tickets = getTickets().filter(t => t.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tickets));
};
