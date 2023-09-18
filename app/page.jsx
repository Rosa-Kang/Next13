import Feed from '@components/Feed';

const Home = () => {
    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center">
                Discover & Share
                <br className="max-md:hidden" />
                <span className="orange_gradient text-center">Developers Insights</span>
            </h1>
            <p className="desc text-center">Dev Blog is an open-source prompting tool for modern development knowledge to discover, create and share what you learned today.</p>

            {/**Feed */}
            <Feed />
        </section>
    );
};

export default Home;
