import Note from "../models/Note.js";


export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find().sort({ createdAt: -1 }); // Sort notes by creation date in descending order
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in fetching getAllNotes controller:", error);
    res.status(500).json({ message: "Error fetching notes", error });
  }
}

export async function getNoteById(req, res) {
  try {
    const noteId = req.params.id;
    const note = await Note.findById(noteId);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json(note);
  } catch (error) {
    console.error("Error in fetching getNoteById controller:", error);
    res.status(500).json({ message: "Error fetching note", error });
  }
}

export async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    const newnote = new Note({ title, content });
    await newnote.save();
    res.status(201).json(newnote);
  } catch (error) {
    console.error("Error in creating createNote controller:", error);
    res.status(500).json({ message: "Error creating note", error });
  }
}

export async function updateNote(req, res) {
  try {
    const noteId = req.params.id;
    const { title, content } = req.body;
    const note = await Note.findByIdAndUpdate(noteId, { title, content }, { new: true });
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json(note);
  } catch (error) {
    console.error("Error in updating updateNote controller:", error);
    res.status(500).json({ message: "Error updating note", error });
  }
}

export async function deleteNote(req, res) {
  try {
    const noteId = req.params.id;
    const note = await Note.findByIdAndDelete(noteId);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    console.error("Error in deleting deleteNote controller:", error);
    res.status(500).json({ message: "Error deleting note", error });
  }
}   