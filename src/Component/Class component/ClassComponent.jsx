import { Component } from "react";

export class ClassComponent extends Component {
  constructor(props) {
    // so this is the first method which runs
    super(props); // the super method initiallize the Parent class props
    this.state = {
      // this way we can define the state in class component
      count: 0,
      hasError: false,
    };
  }
  componentDidMount() {
    // this will be called when the component is mounted
    console.log(`hellow I am mounted`);
  }
  componentDidUpdate() {
    console.log(`componsnt should updated `);
  }
  componentWillUnmount() {
    console.log(`helllo I am unmounted now`);
  }
  render() {
    return <div>Hello</div>;
  }
}
//so how it works
// 1. constructor
// 2. getderivedprops
// 3. render
// 4. componentDidMount
// 5. componentDidupdate
// 6. componentWillUnmount
