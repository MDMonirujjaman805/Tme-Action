import PropTypes from "prop-types";

const Link = ({ route }) => {
  return (
    <div className="">
      <li className="hover:bg-gray-400 mr-5 px-4 py-1 rounded-2xl inline">
        <a href={route.path}>{route.name}</a>
      </li>
    </div>
  );
};

Link.PropTypes = {
  route: PropTypes.object,
};

export default Link;
