import { Grid } from '@material-ui/core';
import React, { FunctionComponent } from 'react';

/*
 * Display Not Found Picture
 */
export const NotFound: FunctionComponent = () => {
  return (
    <Grid container alignItems="center" justify="center">
      <Grid item xs={10}>
        NOT FOUND
      </Grid>
    </Grid>
  );
};
