import { forwardRef } from "react";

export const Input = forwardRef((props, ref) => {
  return <input className=" form-control w-50 ms-5" ref={ref} {...props} />;
});
