import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { useSelector } from 'react-redux';
import CountersHeader from './layout/CountersHeader';
import CountersBody from './layout/CountersBody';
import CountersFooter from './layout/CountersFooter';

const Counters = () => {
  const counters = useSelector((state) => state.counterReducer.counters);
  const [openCreateDialog, setOpenCreateDialog] = useState(false);
  const selectedCounters = useSelector(
    (state) => state.selectedCounterReducer.selectedCounters,
  );
  const [filteredCounters, setFilteredCounters] = useState([]);
  const [search, setSearch] = useState(false);
  const [searchFocus, setSearchFocus] = useState(false);

  const handleSearch = (event) => {
    setFilteredCounters(event);
    setSearch(true);
  };

  return (
    <Box display="flex" flexDirection="column">
      <CountersHeader
        counters={counters}
        searchDisabled={!counters.length}
        onSearch={handleSearch}
        onFocus={(event) => setSearchFocus(event)}
      />
      <CountersBody
        counters={search ? filteredCounters : counters}
        openDialog={openCreateDialog}
        onClose={() => setOpenCreateDialog(false)}
        selectedCounters={selectedCounters}
        search={search}
        searchFocus={searchFocus}
      />
      <CountersFooter
        onDialogOpen={() => setOpenCreateDialog(true)}
        selectedCounters={selectedCounters}
      />
    </Box>
  );
};

export default Counters;
