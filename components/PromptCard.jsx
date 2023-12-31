'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';

const PromptCard = ({ post, handleEdit, handleDelete, handleTagClick }) => {
    const { data: session } = useSession();
    const pathName = usePathname();
    const router = useRouter();
    console.log(post);
    const [copied, setCopied] = useState('');

    const handlePromptClick = () => {
        router.push(`/posts/${post._id}`);
    };

    const handleProfileClick = () => {
        if (post.creator._id === session?.user.id) return router.push('/profile');
        router.push(`/profile/${post.creator._id}?name=${post.creator.username}`);
    };

    const handleCopy = () => {
        setCopied(post.prompt);
        navigator.clipboard.writeText(post.prompt);
        setTimeout(() => setCopied(false), 3000);
    };

    return (
        <div className="prompt_card" key={post.creator._id}>
            {post.selectedFile && <Image onClick={handlePromptClick} src={post.selectedFile} alt="user_image" height={150} width={210} className="prompt-hover object-cover mb-4 mx-auto" />}

            <div className="flex justify-between items-start gap-5">
                <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer" onClick={handleProfileClick}>
                    <Image src={post.creator?.image} alt="user_image" width={40} height={40} className="rounded-full object-contain" />

                    <div className="flex flex-col">
                        <h3 className="font-satoshi font-semibold text-gray-900">{post.creator?.username}</h3>
                        <p className="font-inter text-sm text-gray-500">{post.creator?.email}</p>
                        <p className="font-inter text-sm text-gray-500">{post.createdAt?.substring(0, 10)}</p>
                    </div>
                </div>

                <div className="copy_btn" onClick={handleCopy}>
                    <Image src={copied === post.prompt ? '/assets/icons/tick.svg' : '/assets/icons/copy.svg'} alt={copied === post.prompt ? 'tick_icon' : 'copy_icon'} width={12} height={12} />
                </div>
            </div>

            <div className="prompt-hover" onClick={handlePromptClick}>
                <p className="my-4 font-satoshi text-sm text-gray-700">{post.prompt.substr(0, 150)}</p>
            </div>
            {post.tag.map((item) => (
                <span className="font-inter text-sm blue_gradient cursor-pointer" onClick={() => handleTagClick && handleTagClick(item)}>
                    #{item.trim(' ') + ' '}
                </span>
            ))}

            {session?.user.id === post.creator?._id && pathName === '/profile' && (
                <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
                    <p className="font-inter text-sm green_gradient cursor-pointer" onClick={handleEdit}>
                        Edit
                    </p>
                    <p className="font-inter text-sm orange_gradient cursor-pointer" onClick={handleDelete}>
                        Delete
                    </p>
                </div>
            )}
        </div>
    );
};

export default PromptCard;
