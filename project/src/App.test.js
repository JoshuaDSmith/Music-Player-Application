import { render } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const { getByText } = render(App);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// import { useCounter } from "./testingfolder.js";
// import { act, renderHook } from "@testing-library/react-hooks";

// describe("increment", () => {
//   it("increments count by 1", () => {
//     const { result } = renderHook(useCounter);
//     act(() => {
//       result.current.increment();
//     });

//     expect(result.current.count).toBe(1);
//   });
// });
