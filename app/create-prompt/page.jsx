'use client';

import Form from '@components/Form';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const CreatePrompt = () => {
    const Router = useRouter();
    const { data: session } = useSession();
    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        prompt: '',
        tag: '',
        selectedFile: '',
    });

    const createPrompt = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            const response = await fetch(`/api/prompt/new`, {
                method: 'POST',
                body: JSON.stringify({
                    prompt: post.prompt,
                    userId: session?.user.id,
                    tag: post.tag,
                    selectedFile: post.selectedFile,
                }),
            });

            if (response.ok) {
                Router.push('/');
            }
        } catch (error) {
            console.log(error);
        } finally {
            setSubmitting(false);
        }
    };

    return <Form label="Create" type="Create" post={post} setPost={setPost} submitting={submitting} handleSubmit={createPrompt}></Form>;
};

export default CreatePrompt;
