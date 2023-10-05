import Container from '../Container';
import Header from '../Header/Header';

function MainLayout({ children }) {
    return (
        <div>
            <Header />
            <Container />
            <div className="container">{children}</div>
        </div>
    );
}

export default MainLayout;
