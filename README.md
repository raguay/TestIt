# TestIt

This is a minimal test platform that shows the problem with CORs and Tauri.

First:

- Run the server: `cd server; node server.js`
- Run the Tauri app in dev: `cargo tauri dev`

If there isn't a problem with CORs you will see `Hello` from the server. If you don't, then there was an issue with CORs.

