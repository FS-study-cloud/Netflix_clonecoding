import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "70fb074020db0eea74e8ba554a32c94e",
        language: "ko-KR",
    },
});

export default instance;