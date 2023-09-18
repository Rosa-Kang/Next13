'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import Form from '@components/Form';

const UpdatePrompt = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    console.log(searchParams);
    const promptId = searchParams.get('id');

    const [post, setPost] = useState({ prompt: '', tag: '', selectedFile: '' });
    const [submitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const getPromptDetails = async () => {
            const response = await fetch(`/api/prompt/${promptId}`);
            const data = await response.json();

            setPost({
                prompt: data.prompt,
                tag: data.tag,
                selectedFile: data.selectedFile,
            });
        };

        if (promptId) getPromptDetails();
    }, [promptId]);

    const updatePrompt = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (!promptId) return alert('Missing PromptId!');

        try {
            const response = await fetch(`/api/prompt/${promptId}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    prompt: post.prompt,
                    tag: post.tag,
                }),
            });

            if (response.ok) {
                router.push('/');
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return <Form label="Save" type="Edit" post={post} setPost={setPost} submitting={submitting} handleSubmit={updatePrompt} />;
};

export default UpdatePrompt;
