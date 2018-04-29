import React, { Component } from 'react';
import { Preloader } from 'react-materialize';

export const Loading = () => (
    <div style={{ textAlign: "center" }}><Preloader size='small' /></div>
);

export default Loading;
