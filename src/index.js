import React from 'react';
import ReactDOM from 'react-dom/client';
import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin";
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
Kommunicate.init("1e365abdfb118faa2becdaa8dc4188d00", {
  automaticChatOpenOnNavigation: true,
  popupWidget: true
});
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

