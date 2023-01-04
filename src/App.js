import React, {useEffect, useState} from "react";
import apiClient, { setClientToken } from './Credentials'
import Dropdown from "./components/Dropdown";
import Login from "./components/login";
import Listbox from "./components/Listbox";
import UserInfo from "./components/UserInfo";
import Logout from "./components/Logout"
import { BrowserRouter as Router } from "react-router-dom";
import { Accordion } from "react-bootstrap";
 

function App() {

  const [token, setToken] = useState('');
  const [genres, setGenres] = useState({selectedGenre: '', listOfGenres: []});
  const [playlist, setPlaylist] = useState({ selectedPlaylist: "", listOfPlaylists: [] });
  const [tracks, setTracks] = useState({selectedTrack: '', listOfTracks: []})
  const [artists, setArtists] = useState([])
  const [userTracks, setUserTracks] = useState([])

  useEffect(() => {
    let hash = window.location.hash;
    window.location.hash = "";
    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);

      apiClient.get("browse/categories").then((response) => {
        setGenres({
          selectedGenre: '',
          listOfGenres: response.data.categories.items,
        });
        apiClient.get("me/top/artists").then((response) => {
          setArtists(response.data.items);
        });
        apiClient.get("me/top/tracks").then((response) => {
          setUserTracks(response.data.items);
        });
      });
    }
  }, [genres.selectedGenre, token]);

  const genreChanged = val => {
    if (genres.selectedGenre) {
      apiClient
        .get(`browse/categories/${val}/playlists?limit=10`)
        .then((response) => {
          setPlaylist({
            selectedPlaylist: playlist.selectedPlaylist,
            listOfPlaylists: response.data.playlists.items,
          });
        });
    }
      setGenres({
        selectedGenre: val,
        listOfGenres: genres.listOfGenres,
      });



      
    }
    

  

  const playlistChanged = val => {
    setPlaylist({
      selectedPlaylist: val,
      listOfPlaylists: playlist.listOfPlaylists
    })
  }

  const buttonClicked = event => {
    event.preventDefault()
    

    apiClient.get(`playlists/${playlist.selectedPlaylist}/tracks?limit=10`).then(response=>{
      setTracks({
      selectedTrack: tracks.selectedTrack,
      listOfTracks: response.data.items
      })

    })
  }

  

    return !token ? (
      <div className="w-full h-full flex justify-center align-center">
        <Login />
      </div>
    ) : (
      <Router>
        <form onSubmit={buttonClicked}>
          <div className="container flex flex-col items-center">
            <div className="flex justify-end w-full mb-20 mt-4">
              <Logout
                setCToken={setClientToken}
                setToken={setToken}
                token={token}
              />
            </div>
            <div className="flex flex-col justify-betwee">
              <Accordion>
                <Accordion.Item>
                  <Accordion.Button className="text-3xl font-gotham">
                    Genre Search
                  </Accordion.Button>
                  <Accordion.Body>
                    <div className="flex flex-row mb-2 justify-center">
                      <Dropdown
                        options={genres.listOfGenres}
                        selectedValue={genres.selectedGenre}
                        changed={genreChanged}
                      />
                      <Dropdown
                        options={playlist.listOfPlaylists}
                        selectedValue={playlist.selectedPlaylist}
                        changed={playlistChanged}
                      />
                    </div>
                    <div className="flex justify-center">
                      <button
                        type="submit"
                        className="bg-green-500 p-2 mr-1 mb-8 rounded-full font-gotham text-center"
                      >
                        Search
                      </button>
                    </div>
                    <Listbox items={tracks.listOfTracks} />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <UserInfo artists={artists} tracks={userTracks} />
            </div>
          </div>
        </form>
      </Router>
    );
}

export default App;
