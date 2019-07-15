const rootValue = { user: () => "jeff", room: () => room };
const room = {
  roomId: () => "1B814046-86C1-43E7-BE77-443B8F3319C9",
  log: () => ["a", "b"],
  status: () => status
};
const status = { value: () => 123 };

export default rootValue;
