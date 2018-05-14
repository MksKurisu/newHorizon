import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HeaderPart from './Home-HeaderPart';
import RecommendPart from './Home-RecommendPart';
import UpdatePart from './Home-UpdatePart';
import ExplainPart from './Home-ExplainPart';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HeaderPart />, document.getElementById('header'));
ReactDOM.render(<RecommendPart />, document.getElementById('recommendContent'));
ReactDOM.render(<UpdatePart />, document.getElementById('updateContent'));
ReactDOM.render(<ExplainPart />, document.getElementById('explainContent'));
registerServiceWorker();
