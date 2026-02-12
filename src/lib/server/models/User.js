import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
	{
		university: {
      type: String,
      required: true,
      trim: true
    },
		pointDifferential: {
      type: Number,
      required: true,
      trim: true
    },
		championshipYear: {
      type: Number,
      required: true,
      min: 0
    }
	},
	{ timestamps: true }
);

export default mongoose.models.User || mongoose.model('User', userSchema);
