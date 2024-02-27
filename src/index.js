import ReactDOM from "react-dom/client";

import App from "./App";

const divroot = document.getElementById("root");

const reactroot = ReactDOM.createRoot(divroot);

reactroot.render(<App/>);