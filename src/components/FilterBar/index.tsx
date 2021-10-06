import "./style.scss";

type FilterBarProps = {
  onClick: (key: string) => void;
};

const continents: Array<string> = [
  "World",
  "Africa",
  "Asia",
  "Europe",
  "Americas",
  "Oceania",
];

const FilterBar = (props: FilterBarProps) => {
  const { onClick } = props;

  return (
    <div className="tab">
      {continents.map((continent, index) => {
        return (
          <button
            key={index}
            className="tablinks"
            onClick={() => onClick(continent)}
          >
            {continent}
          </button>
        );
      })}
    </div>
  );
};

export default FilterBar;
