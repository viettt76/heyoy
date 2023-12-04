import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from '~/App';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './components/GlobalStyle';
import UserProvider from './Context/UserProvider';

ReactDOM.render(
    <React.StrictMode>
        <UserProvider>
            <GlobalStyle>
                <App />
            </GlobalStyle>
        </UserProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
