import "./App.css";
import { ErrorBoundary } from "./ErrorBoundary/ErrorBoundary";
import StarPattern from "./Machine Coding/Star Pattern";

function App() {
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
      <StarPattern />
    </ErrorBoundary>
  );
}

export default App;
