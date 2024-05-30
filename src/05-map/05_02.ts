import { GovernmentBuildingsType, HouseType } from "../02-objects/02-types";

export const getStreetsTitlesOfGovernmentBuildings = (
  buildings: Array<GovernmentBuildingsType>
) => buildings.map((b) => b.address.street.title);

export const getStreetsTitlesOfHouses = (houses: Array<HouseType>) =>
  houses.map((h) => h.address.street.title);

export const createMessages = (houses: HouseType[]) =>
  houses.map((h) => `Hello guys from ${h.address.street.title}`);
