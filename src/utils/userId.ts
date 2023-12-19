// Utility function to get the user id from the session storage
// The idea is to upgrade this to a JWT token in the future

export const getUserId = () => {
  const userId = localStorage.getItem("userId");
  if (userId) {
    return userId;
  }
  return;
};

export const setUserId = (userId: string) => {
  localStorage.setItem("userId", userId);
};
