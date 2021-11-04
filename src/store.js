import { readable, writable } from 'svelte/store';
import { navigate } from 'svelte-navigator';

export const apiURL = readable("http://localhost:7000/api");

// export const isLoggedIn = () => {
//   const token = localStorage.getItem("token");
//   if (!token) navigate("/login", { replace: true });
// }

export const auth = {
  user: writable([]),
  isAuthenticated: writable(false)
};