import { ReactElement } from 'react';
import { FilterInput } from '../filtersInput/FilterInput';
import './filters.scss';

export const Filters = (): ReactElement => {
  return (
    <div className='home-filters-wrapper'>
      <h3 className='home-filters-wrapper-title'>Filtry</h3>
      <div className='home-filters-wrapper-content'>
        <div className='filter-container'>
          <small>Kraj</small>
          <div className='country-toggler toggle'>
            <FilterInput name={'Polska'} type={'country'} value={'pl'} />
            <FilterInput name={'Czechy'} type={'country'} value={'cz'} />
            <FilterInput name={'Niemcy'} type={'country'} value={'de'} />
          </div>
        </div>
        <div className='filter-container'>
          <small>Wyników na stronie</small>
          <div className='page-size-toggler toggle'>
            <FilterInput name={'10'} type={'pageSize'} value={10} />
            <FilterInput name={'20'} type={'pageSize'} value={20} />
            <FilterInput name={'50'} type={'pageSize'} value={50} />
            <FilterInput name={'100'} type={'pageSize'} value={100} />
          </div>
        </div>
      </div>
    </div>
  );
};
