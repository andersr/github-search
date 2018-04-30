import React from 'react';
import { Input, Button, Icon } from 'react-materialize';

const SearchForm = ({ onSubmit, input, onChange, onClick, placeholder }) => (
    <form className={"flex-row"} onSubmit={onSubmit}>
        <div style={{ flex: 1, marginRight: 10 }}>
            <Input placeholder={placeholder} value={input} onChange={onChange} /></div>
        <Button disabled={input === ""} onClick={onClick}><Icon>search</Icon></Button>
    </form>
);

export default SearchForm;
