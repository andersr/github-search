import React, { Component } from 'react';
import { Preloader } from 'react-materialize';

export const NoMatchesFound = ({ input }) => (
    <div>Sorry, no matches found for "{input}".  Try again?</div>
);

export default NoMatchesFound;
