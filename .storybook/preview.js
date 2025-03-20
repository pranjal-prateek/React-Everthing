import ReactDOM from "react-dom/client";

export const renderToCanvas = (args, { id, storyFn, showMain }) => {
  const rootElement = document.getElementById(id);

  if (rootElement._reactRootContainer) {
    rootElement._reactRootContainer.unmount();
  }

  const root = ReactDOM.createRoot(rootElement);
  root.render(storyFn());
  rootElement._reactRootContainer = root;
};
