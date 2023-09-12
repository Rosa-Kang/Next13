import Nav from '@components/Nav';
import Provider from '@components/Provider';
import '@styles/global.css';

export const metadata = {
    title: 'Promptopia',
    description: 'Discover & Share prompt',
};

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <div className="main">
                    <div className="gradient" />
                </div>

                <main className="app">
                    <Nav />
                    {children}
                </main>
            </body>
        </html>
    );
};

export default RootLayout;
