import Link from 'next/link';
import FileBase from 'react-file-base64';

const Form = ({ type, post, setPost, submitting, label, handleSubmit }) => {
    return (
        <section className="w-full max-w-full flex-start flex-col">
            <h1 className="head_text text-left">
                <span className="blue_gradient">{type} Post</span>
            </h1>

            <p className="desc text-left max-w-md">{type} and share amazing prompts with the world, and let your imagination run wild with any AI-powerd platform.</p>

            <form onSubmit={handleSubmit} className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism">
                <label htmlFor="">
                    <span className="font-satoshi font-semibold text-base text-gray-700">Your Discovery today</span>

                    <textarea value={post.prompt} onChange={(e) => setPost({ ...post, prompt: e.target.value })} placeholder="Write your prompt" required className="form_textarea" />
                </label>
                <label htmlFor="">
                    <span className="font-satoshi">Image</span>
                    <FileBase type="file" multiple={false} onDone={({ base64 }) => setPost({ ...postData, selectedFile: base64 })} />
                </label>
                <label htmlFor="">
                    <span className="font-satoshi font-semibold text-base text-gray-700">
                        Tag {` `} <span className="font-normal">(enter tags with comma & space)</span>
                    </span>

                    <input value={post.tag} onChange={(e) => setPost({ ...post, tag: e.target.value.split(',') })} placeholder="tag" required className="form_input" />
                </label>

                <div className="flex-end mx-3 mb-5 gap-4">
                    <Link href="/" className="text-gray-500 text-sm">
                        Cancel
                    </Link>

                    <button type="Submit" disabled={submitting} className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white">
                        {submitting ? `${label}ing...` : label}
                    </button>
                </div>
            </form>
        </section>
    );
};

export default Form;
