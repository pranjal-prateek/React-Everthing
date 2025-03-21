import { useState } from "react";
import "./App.css";
import { ErrorBoundary } from "./ErrorBoundary/ErrorBoundary";
import CustomModal from "./Machine Coding/Modal/Modal";
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleClick = () => {
    console.log('Button inside modal clicked');
  };
  // const ref = useRef(null);

  // const handleClick = () => {
  //   ref.current.focus();
  // };
  return (
    <ErrorBoundary>
      {/* <UseState /> */}
      {/* <UseEffectHook /> */}
      {/* <Provider>
        <Consumer />
      </Provider> */}
      {/* <UseReducer /> */}
      {/* <Suspense fallback={<div>Loading Component...</div>}>
        <LazyComponent />
      </Suspense> */}
      {/* <ForwardRef ref={ref} />
      <button onClick={handleClick}>button</button> */}
      {/* <ClassComponent /> */}
      {/* <StarPattern/> */}
      {isModalOpen && (
        <CustomModal
          title="Sample Modal Title"
          description="This is a sample modal description."
          handleClose={handleClose}
          handleClick={handleClick}
        >
          <button onClick={handleClick}>Click Me</button>
        </CustomModal>
      )}
      <button onClick={handleOpen}>Open Modal</button>

    </ErrorBoundary>
  );
}

export default App;
