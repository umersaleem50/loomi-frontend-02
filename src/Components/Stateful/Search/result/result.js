import { Link } from "react-router-dom";
import "./result.scss";
const SearchResult = (props) => {
  return (
    <Link className="searchResult" to={{ pathname: `/products/${props.id}` }}>
      <img
        className="searchResult__img"
        src={`/images/products/small/${props.image}`}
        alt={props.name}
      />
      <p className="searchResult__text">{props.name}</p>
      <p className="searchResult__text searchResult__text--price">
        {props.stocks}
      </p>
    </Link>
  );
};

export default SearchResult;
