import { CityType, GovernmentBuildingsType } from "../02-objects/02-types";

export function demolishHousesOnTheStreet (city: CityType, street: string) {
  return (city.houses = city.houses.filter(
    (house) => house.address.street.title === street
  ));
};

export const getBuildingsWithStaffCountGreaterThen = (
  buildings: Array<GovernmentBuildingsType>,
  number: number
) => buildings.filter((building) => building.staffCount > number);
