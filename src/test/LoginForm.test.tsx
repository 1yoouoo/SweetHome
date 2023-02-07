import React from "react";
import { fireEvent, render } from "@testing-library/react";
import LoginForm from "../Components/LoginForm/LoginForm";

describe("<LoginForm /> test", () => {
  it("matches snapshopt", () => {
    const utils = render(<LoginForm />);
    expect(utils.container).toMatchSnapshot(); // snapshot match
  });

  // it("has input and a button", () => {
  //   const { getByText, getByPlaceholderText } = render(<LoginForm />);
  //   getByPlaceholderText("할 일을 입력하세요"); // input 이 있는지 확인
  //   getByText("등록"); // button이 있는지 확인
  // });

  // it("button test", () => {
  //   const utils = render(<LoginForm />);

  //   const str = utils.getByText("number: 0"); // 텍스트가 number: 0인 DOM 가져오기
  //   const increaseButton = utils.getByText("증가"); // 텍스트가 증가인 DOM 가져오기
  //   const decreaseButton = utils.getByText("감소"); // 텍스트가 감소인 DOM 가져오기

  //   fireEvent.click(increaseButton); // 증가버튼 클릭이벤트 실행
  //   fireEvent.click(increaseButton); // 증가버튼 클릭이벤트 실행
  //   expect(str).toHaveTextContent("number: 6"); // str의 텍스트가 number: 6인지 확인

  //   fireEvent.click(decreaseButton); // 감소버튼 클릭이벤트 실행
  //   fireEvent.click(decreaseButton); // 감소버튼 클릭이벤트 실행
  //   expect(str).toHaveTextContent("number: 2"); // str의 텍스트가 number: 2인지 확인
  // });
});
