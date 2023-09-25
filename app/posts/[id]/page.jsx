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
                    {post.selectedFile && <Image src={post.selectedFile} alt="post_thumbnail" width={450} height={450} className="object-cover mx-auto" />}

                    <div className="px-4 md:px-32">
                        <div className="flex justify-between">
                            <h1 className="text-[#E15487] mb-4 text-right">Written by {post.creator && post.creator.username}</h1>
                            <p className="mb-4 text-right">{post.createdAt && post.createdAt.substring(0, 10)}</p>
                        </div>

                        <div>
                            {post.prompt.split('\n').map((line, index) => (
                                <div key={index} className="mb-4">
                                    {line}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </article>
    );
};

export default PromptPage;
