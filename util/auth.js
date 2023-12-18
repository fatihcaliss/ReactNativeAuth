import axios from "axios";

const API_KEY = "AIzaSyCqpLFYUMkz-I0Nus9el_EY3GHvVCW_1B4";

async function createUser(email, password) {
  const response = await axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=" +
      API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
}
