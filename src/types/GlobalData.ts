import { IArticle } from '../interfaces/api/IArticle';
import { IFiltersValue } from '../interfaces/filters/IFiltersValue';

export type GlobalData = {
  allData: IArticle[];
  setAllData: (_value: IArticle[]) => void;
  filters: IFiltersValue;
  setFilters: (_value: IFiltersValue) => void;
};
