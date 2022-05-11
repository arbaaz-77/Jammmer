import { useState } from "react";
import "./App.css";
import SearchResults from "../SearchResults/SearchResults";
import SearchBar from "../SearchBar/SearchBar";
import Playlist from "../Playlist/Playlist";

import Spotify from "../../util/Spotify";
import Footer from "../Footer/Footer";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("My First Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  // Save Playlist
  const savePlaylist = () => {
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName("New Playlist");
      setPlaylistTracks([]);
    });
  };

  // Search Song
  const search = (term) => {
    Spotify.search(term).then((results) => {
      setSearchResults(results);
    });
  };

  // Add song to playlist
  const addTrack = (track) => {
    if (playlistTracks.find((item) => item.id === track.id)) {
      return;
    }
    setPlaylistTracks([...playlistTracks, track]);
  };

  // Remove song from playlist
  const removeTrack = (track) => {
    setPlaylistTracks(playlistTracks.filter((item) => item.id !== track.id));
  };

  // Change Playlist name
  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  };

  return (
    <>
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>er
        </h1>
        <main className="App">
          <SearchBar onSearch={search} />
          <div className="App-playlist">
            <SearchResults searchResults={searchResults} onAdd={addTrack} />
            <Playlist
              playlistName={playlistName}
              playlistTracks={playlistTracks}
              onRemove={removeTrack}
              onSave={savePlaylist}
              onNameChange={updatePlaylistName}
            />
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
