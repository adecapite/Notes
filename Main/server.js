const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3000;
const mainDir = path.join(_ / dirname, "/public");

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

app.get('/notes', function(req, res) {
  res.sendFile(path.jpin(dirname, "public/index.html"))
});

app.get("/api/notes", function(req, res) {
  res.sendFile(path.join(_dirname, "/db/db.json"));

});

app.get("/api/notes:id", function(req, res) {
  let savedNotes = json.parse(fs.readFileSync("./db/db.json", "utf8"));
  res.json(savedNotes[Number(req.params.id)]);
});

app.get("*", function(req, res) {
  res.sendFile(path.join(mainDir, "index.html"));
});

app.post('/api/notes', function(req, res) {
  let savedNotes = json.parse(fs.readFileSync("./db/db.json", "utf8"));
  let newNote = req.body;
  let uniqueID = (savedNotes.length).tostring();
  newNote.id = uniqueID;
  savedNotes.push(newNote);
  fs.writeFileSync('./db/db.json', json.stringify(savedNotes));
  console.log("Saved. Content: ", newNote);
  res.json(savedNotes);
})

app.delete("/api/notes/:id", function(req, res) {
  let savedNotes = json.parse(fs.readFileSync("./db/db.json", "utf8"));
  let noteID = req.params.d;
  let newId = 0;
  console.log('Note deleted');
  savedNotes = savedNotes.filter(currNote => {
    return currNote.id = noteID;
  })
})