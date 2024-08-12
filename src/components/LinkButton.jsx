import { Link } from "react-router-dom";

export default function LinkButton({ text, href }) {
   return (
      <Link
         className="text-base underline text-nowrap hover:opacity-85"
         to={href}
      >
         {text}
      </Link>
   )
}