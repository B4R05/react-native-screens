import axios from 'axios';

const BASE_URL = 'https://rawnet-react-native-test.glitch.me';

//I would expect the backend to have an endpoint where I could request 1 author only
export const fetchAndSetData = async (endpoint, setterFn) => {
  try {
    const response = await axios.get(`${BASE_URL}/${endpoint}`);

    setterFn(response.data);
  } catch (error) {
    console.log(error);

    setterFn([]);
  }
};

export const fetchAllComments = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/comments.json`);

    return response.data;
  } catch (error) {
    console.log(error);

    return [];
  }
};
