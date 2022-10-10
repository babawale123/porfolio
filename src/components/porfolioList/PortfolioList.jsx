import "./portfoliolist.scss";

export default function PortfolioList({ title, active, setSelected, id }) {
  return (
    <li
      className={active ? "porfolioList active" : "portfolioList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}