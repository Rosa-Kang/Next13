import { connectToDB } from '@utils/database';
import Prompt from '@models/prompt';

export const POST = async (request, res) => {
    const { userId, prompt, tag, selectedFile, createdAt } = await request.json();
    try {
        await connectToDB();
        const newPrompt = new Prompt({
            creator: userId,
            prompt,
            tag,
            selectedFile,
            createdAt,
        });

        await newPrompt.save();

        return new Response(JSON.stringify(newPrompt), {
            status: 201,
        });
    } catch (error) {
        return new Response('Failed to create a new prompt.');
    }
};
