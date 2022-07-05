import classes from "./Brands.module.scss";
const Brands = (props) => {
  const brands = ["tiffany", "fendi", "gucci", "prada", "rolex", "d&g"];

  const generateBrandLogos = (brands) => {
    return brands.map((name, i) => (
      <img
        src={`assets/icons/${name}.png`}
        alt={name}
        className={classes.brand}
        key={i}
      />
    ));
  };
  return <div className={classes.brands}>{generateBrandLogos(brands)}</div>;
};

export default Brands;
