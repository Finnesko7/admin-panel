import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/main.scss'
import '../assets/styles/app.scss'
import '../assets/styles/pages/login.scss'
import authMiddleware from "../lib/middleware/auth-middleware";

const MyApp = ({ Component, pageProps }) => {
    return <Component {...pageProps} />
}

MyApp.getInitialProps = async ({router, ctx}) => {
    let pageProps = {};
    const {req, res} = ctx;

    if (router.asPath !== '/') {
        authMiddleware(req, res, ctx);
    }

    return { pageProps }
}

export default MyApp;