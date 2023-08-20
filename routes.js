const express = require('express');
const router = express.Router();
const Models = require('./models');

router.get('/notes', async(req, res) => {

        try {
         const notes = await Models.NotesModel.find().lean();
         res.send(notes);
        }
        catch(err) {
          console.log("Error! ", err);
          client.close();
        }
});

router.get('/notes/:notesId', async(req, res) => {
    const { notesId } = req.params;

        try {
        const note = await Models.NotesModel.find({ _id: notesId });
         res.send(note);
        }
        catch(err) {
        res.status(500).send(err);
          console.log("Error! ", err);
        }

});

router.post('/notes/:notesId', async(req, res) => {
  const { notesId } = req.params;

      try {
      const note = await Models.NotesModel.find({ id: notesId });
       res.send(note);
      }
      catch(err) {
        res.status(500).send(err);
        console.log("Error! ", err);
      }

});


router.post('/notes', async (req, res) => {
    try {
      let result;
      const note = new Models.NotesModel(req.body);
      console.log('note', note, req);
      result = await note.save();
      res.send(result);
    } catch (error) {
      res.status(500).send(error);
    }
  });


router.delete('/notes/:notesId', async (req, res) => {
    console.log('1 enters');
    console.log('req.params', req.params)
    const { notesId } = req.params;
    console.log(' delete notesId', notesId);

    try {
    const note = await Models.NotesModel.deleteOne({ _id: notesId });
     res.send(note);
    }
    catch(err) {
    res.status(500).send(err);
      console.log("Error! ", err);
    }
});

router.delete('/notes', async (req, res) => {
    const { notesId } = req.params;

    try {
    const note = await Models.NotesModel.deleteMany({});
     res.send(note);
    }
    catch(err) {
    res.status(500).send(err);
      console.log("Error! ", err);
    }
});

module.exports = router;