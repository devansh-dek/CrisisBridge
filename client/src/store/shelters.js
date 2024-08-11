import axios from "axios";
import { selector } from "recoil";

export const sheltersAtom = selector({
    key: "sheltersAtom",
    get: async ({get}) => {
        const response = await axios.get('https://codefuryhackathonproject.onrender.com/api/v1/shelter');
        return response?.data?.data;
    },
});