import React, { useEffect, useState } from 'react';

import './Game.scss';

import {io} from 'socket.io-client';

import Lobby from "./Lobby/Lobby";
import GameInProgress from "./GameInProgress/GameInProgress";
import Result from "./Result/Result"; 

export default function Game({playlist}) {
  const [conn, setConn] = useState(undefined);
  const [gameStatus, setGameStatus] = useState({started: false, finished: false, winner: null}); // ASK IF THERE'S A WAY TO STORE STATUS LIKE THIS
  const [user, setUser] = useState({}); // Specific to person using website
  const [users, setUsers] = useState([]); // All users connected through socket
  const [guesses, setGuesses] = useState([]);
  const [round, setRound] = useState({number: 0, finished: false});  // Might need to change this to an object of rounds
  
  // USER & USERS OBJECT
  // {name, score, emoji?, color?}
  
  // Keep track of the number of rounds for a game based on the number of songs in the selected playlist
  const songs = playlist.songs;
  const song = songs[round.number];
  const numberOfRounds = songs.length;

  ////////////////////////////////////////////////////
  // CHECK FOR GAME STATUS AT THE END OF EVERY ROUND
  ////////////////////////////////////////////////////
  useEffect(() => {
    // Checking if it's the last round
    if (round.number === numberOfRounds) {
      // check highest score for winner and set winner
      // const winner = getWinner();
      setGameStatus((prev) => {
        return {...prev, finished: true, winner: "Nelly"}
      });
    }
  }, [numberOfRounds, round])

  ////////////////////////////////////////
  // ON INITIAL SOCKET CONNECTION
  ////////////////////////////////////////
  useEffect(() => {
    const connection = io('http://localhost:3001');
    setConn(connection);
  }, []);

  ////////////////////////////////////////
  // RECEIVING MESSAGES FROM THE SERVER
  ////////////////////////////////////////
  useEffect(() => {
    // BACK FROM SERVER (conn.on = waiting for msg)
    if (conn) {
      console.log("Socket io connection initialized");

      // On start game message from the server
      conn.on('START_GAME', (msg) => {
        console.log(msg);
        setGameStatus((prev) => {
          return {...prev, started: true}
        });
      })

      conn.on('CORRECT_GUESS', (msg) => {
        // Update / reveal song cover & title
        // Update winner's score
        // setMessages (with a different color or something)
        setRound(prev => {return {...prev, finished: true}})
        // updateScore(user);
      })

      conn.on('INCORRECT_GUESS', (msg) => {
        //setMessages
      })

      conn.on('END_GAME', () => {

      })

    }
  }, [conn]);

  ////////////////////////////////////////
  // SEND MESSAGE TO SERVER
  ////////////////////////////////////////
  const sendMessage = (type, msg) => {
    console.log('Msg sent to backend: ', msg);
    conn.emit(type, msg);
  };

  ////////////////////////////////////////
  // NEW ROUND FUNCTION 
  ////////////////////////////////////////
  const nextRound = () => {
    // Update round object by incrementing the round number and resetting the round status to false
    setRound(prev => {
      return {...prev, number: prev.number + 1, finished: false};
    });

    // Send the name of the current song to the server
    const currentSongName = songs[round.number].name;
    sendMessage('NEXT_ROUND', currentSongName);
  };

  ////////////////////////////////////////
  // UPDATE SCORE FUNCTION 
  ////////////////////////////////////////
  const updateScore = (user) => {
    // Update score function -> just a function affecting state
    // Checking winner, sending relevant messages to all users
    // Update score of user who scored
    // setUsers(...prev, user.score ++)
    // ADD SNACKBAR NOTIFICATION
  }

  ////////////////////////////////////////
  // GET WINNER FUNCTION 
  ////////////////////////////////////////
  const winner = () => {
    // Loop through users and return user with highest score
  }


  return (
    <div className="game">
      {/* PRE-GAME LOBBY */}
      {!gameStatus.started && <Lobby playlist={playlist} sendMessage={sendMessage} songs={songs} numberOfSongs={numberOfRounds} playlistName={playlist.playlistName}/>}

      {/* GAME IN PROGRESS */}
      {/* song={currentSong} <----- this was what Vasily was passing down to props but using another method for now*/}
      {gameStatus.started && !gameStatus.finished &&
        <GameInProgress 
          nextRound={nextRound}
          round={round}
          setRound={setRound}
          numberOfRounds={numberOfRounds}
          playlist={playlist}
          song={song}
        />
      }

      {/* GAME-END RESULT */}
      {gameStatus.finished && <Result winner={gameStatus.winner} playlistName={playlist.playlistName} />}

    </div>

  );
};