import { Slide, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Toast({ message, type }) {
  return toast(message, {
    position: "top-right",
    autoClose: 3000,
    type: type,
    transition: Slide,
    closeOnClick: true,
    pauseOnHover: false,
    theme: "dark",
  });
}
