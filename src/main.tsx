import React from 'react';

import ReactDOM from 'react-dom/client';

import App from './App';

const element = document.getElementById('root');

if (element) {
	const root = ReactDOM.createRoot(element);

	root.render(<App name='HB' />);
}
