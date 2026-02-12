import { json } from '@sveltejs/kit';
import { connectToDatabase } from '$lib/server/db';
import User from '$lib/server/models/User';

export async function PUT({ params, request }) {
	await connectToDatabase();
	const { university, pointDifferential, championshipYear } = await request.json();
	const user = await User.findByIdAndUpdate(
		params.id,
		{ university, pointDifferential, championshipYear },
		{ new: true, runValidators: true }
	).lean();

	if (!user) {
		return json({ message: 'User not found' }, { status: 404 });
	}

	return json(user);
}

export async function DELETE({ params }) {
	await connectToDatabase();
	const user = await User.findByIdAndDelete(params.id).lean();

	if (!user) {
		return json({ message: 'User not found' }, { status: 404 });
	}

	return json({ success: true });
}
