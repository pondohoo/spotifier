import axios from "axios";

const authEndpoint = "https://accounts.spotify.com/authorize?"
const clientId = "e6b7fef72db04e2ba23e4e61412199ec"
const redirectUri = "http://localhost:3000";
const scopes = ["user-library-read", "playlist-read-private", "user-top-read"];

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

const apiClient = axios.create ({
    baseURL: "https://api.spotify.com/v1"
})

export const setClientToken = (token) => {
    apiClient.interceptors.request.use(async function(config) {
        config.headers.Authorization = "Bearer " + token
        return config
    })
}

export default apiClient;