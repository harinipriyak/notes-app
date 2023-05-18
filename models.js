const mongoose = require('mongoose');

const NotesSchema = mongoose.Schema({
  notesDescription: String,
});

const NotesModel = mongoose.model('note', NotesSchema);

module.exports = {NotesModel};
