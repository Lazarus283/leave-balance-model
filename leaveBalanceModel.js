const mongoose = require('mongoose');

const leaveTypeSchema = new mongoose.Schema({
  total: { type: Number, required: true }
});

const leaveSchema = new mongoose.Schema({
  leaveId: { type: mongoose.Schema.Types.ObjectId, required: true },
  sick: { type: leaveTypeSchema, required: true },
  casual: { type: leaveTypeSchema, required: true }
});

module.exports = mongoose.model('Leave', leaveSchema);
