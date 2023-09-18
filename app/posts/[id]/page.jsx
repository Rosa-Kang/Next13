'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const PromptPage = ({ params }) => {
    const [post, setPost] = useState(null);

    const fetchPosts = async () => {
        const response = await fetch(`/api/prompt`);
        const data = await response.json();
        const filteredData = data.find((item) => item._id === params.id);
        setPost(filteredData);
    };

    useEffect(() => {
        fetchPosts();
    }, [params.id]);

    return (
        <article>
            {post && (
                <div className="post-container">
                    {post.selectedFile && <Image src={post.selectedFile} width={450} height={450} className="object-cover" />}
                    <h1>{post.creator && post.creator.username}</h1>

                    <div>
                        <p>{post.prompt}</p>
                    </div>
                </div>
            )}
        </article>
    );
};

export default PromptPage;
