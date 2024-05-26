import { GovernmentBuildingsType, HouseType } from "../02-objects/02-types";

export const changeBudget = (
  building: GovernmentBuildingsType,
  budget: number
) => {
  building.budget += budget;
};

export const repairHouse = (house: HouseType) => {
  house.repaired = true;
};

export const toFireStaff = (
  building: GovernmentBuildingsType,
  staffCountToFire: number
) => {
  building.staffCount -= staffCountToFire;
};

export const toHireStaff = (
  building: GovernmentBuildingsType,
  staffCountToHire: number
) => {
  building.staffCount += staffCountToHire;
};
