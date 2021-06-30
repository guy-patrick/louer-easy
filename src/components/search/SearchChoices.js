import { useEffect, useState } from "react";
import { useHide } from "../../hooks/useHide";
import { SearchItem } from "./SearchItem";
import { ToggleSearchDisplay } from "./ToggleSearchDisplay";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectSearchName,
  selectSearchRentalTypes,
} from "../../redux/search/search.selectors";
import { setSearchRentalTypes } from "../../redux/search/search.actions";

const SearchChoices = ({
  searchName,
  searchRentalTypes,
  setSearchRentalTypes,
}) => {
  const [state, setState] = useHide();

  const { studio, apartment, house, duplex, villa, ground } = searchRentalTypes;

  const rentals =
    searchName === "rent"
      ? { studio, apartment, house, duplex, villa, ground }
      : { house, duplex, villa, ground };

  const [toRent, setToRent] = useState({
    studio: rentals.studio,
    apartment: rentals.apartment,
    house: rentals.house,
    duplex: rentals.duplex,
    villa: rentals.villa,
    ground: rentals.ground,
  });

  const [toSell, setToSell] = useState({
    house: rentals.house,
    duplex: rentals.duplex,
    villa: rentals.villa,
    ground: rentals.ground,
  });

  useEffect(() => {
    searchName === "rent"
      ? setSearchRentalTypes(toRent)
      : setSearchRentalTypes(toSell);
  }, [searchName, toSell, toRent, setSearchRentalTypes]);

  const handleChoice = (choice) => {
    if (searchName === "rent") {
      toRent[choice]
        ? setToRent({ ...toRent, [choice]: false })
        : setToRent({ ...toRent, [choice]: true });
    }
    if (searchName === "buy") {
      toSell[choice]
        ? setToSell({ ...toSell, [choice]: false })
        : setToSell({ ...toSell, [choice]: true });
    }
  };

  const showChoices = () => {
    let items = [];
    let collection = {};
    if (searchName === "rent") {
      items = Object.keys(toRent);
      collection = toRent;
    } else {
      items = Object.keys(toSell);
      collection = toSell;
    }

    const filteredItems = !state ? items.slice(0, 2) : items;

    return filteredItems.map((item) => (
      <SearchItem
        key={item}
        item={item}
        handleChoice={handleChoice}
        collection={collection}
      />
    ));
  };

  return (
    <div className="search-items-list">
      {showChoices(searchName)}
      <ToggleSearchDisplay handleDisplayAll={setState} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  searchName: selectSearchName,
  searchRentalTypes: selectSearchRentalTypes,
});

const mapDispatchToProps = (dispatch) => ({
  setSearchRentalTypes: (rentalTypes) =>
    dispatch(setSearchRentalTypes(rentalTypes)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchChoices);
