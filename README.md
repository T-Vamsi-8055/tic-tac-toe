Tic-Tac-Toe (Vanilla JS)
A simple Tic-Tac-Toe game built with HTML, CSS, and JavaScript (no frameworks). Players take turns clicking squares until someone wins or the game ends in a draw.

Features
3x3 grid layout
Turn-based gameplay (Player O then Player X)
Win detection using predefined winning combinations
Draw detection when all 9 moves are used
On-screen status updates + alerts
How to Play
Open index.html in your browser.
Click any available cell to place your mark.
Continue until:
a player wins, or
all cells are filled (draw).
Project Structure


index.html - Game UI (grid + status text)
style.css - Styling for the board and cells
script.js - Game logic (turn handling, win/draw checks)
Run Locally
Just open index.html in a browser. Example:

index.html → right click → Open with your browser

or use this link :https://t-vamsi-8055.github.io/tic-tac-toe/


or this link in vercel https://tic-tac-toe-nu-nine-61.vercel.app/

Notes (Code Logic)
The board state is stored in an array (pre) and winning lines are checked via arr.
The click handler alternates between placing O and X, updates the status (h2), and stops the game on win/draw.
![Profile Views](https://komarev.com/ghpvc/?username=T-Vamsi-8055&color=blue)