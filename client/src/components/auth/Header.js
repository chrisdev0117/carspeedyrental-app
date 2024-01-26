import { Link } from "react-router-dom";
import { header_data } from "../../utils/constants/FormFields";

const auth_header = header_data;

export default function Header({ type }) {
  return (
    <div className="mt-24">
      <div className="flex justify-center">
        <img src="/img/background.png" alt="Car" className="h-36" />
      </div>
      <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
        {auth_header.at(type).title}
      </h2>
      <p className="mt-5 text-sm text-center text-gray-600">
        {auth_header.at(type).subtitle}
        <Link
          to={auth_header.at(type).linkurl}
          className="font-bold text-purple-600 hover:text-purple-500"
        >
          {auth_header.at(type).linkname}
        </Link>
      </p>
    </div>
  );
}
