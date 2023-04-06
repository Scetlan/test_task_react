
import React from "react";
// import { useRef } from "react";
import MyButton from "./components/button/MyButton";
import MyInput from "./components/input/MyInput";
// import MyDiv from "./components/div/MyDiv";
// import MySpan from "./components/span/MySpan";

const Form = () => {
  // const content = [
  //   {
  //     type: 'panel',
  //     props: {
  //       width: 500,
  //       height: 200,
  //       visible: true
  //     },
  //   },
  //   {
  //     type: 'label',
  //     props: {
  //       caption: 'test',
  //       visible: false
  //     },
  //   },
  //   {
  //     type: 'button',
  //     props: {
  //       width: 100,
  //       height: 50,
  //       visible: true
  //     },
  //   }
  // ];

  // const ref = useRef();

  return (
    <form>
      {/* <MySpan ref={ref}>Путь</MySpan> */}
      <MyInput />
      {/* <MySpan>Новое значение</MySpan>*/}
      <MyInput /> 
      <MyButton>Применить</MyButton>
      {/* <MyDiv /> */}
    </form>
    );
}

export default Form;
