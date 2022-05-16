import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { Button, Form, FormControl, ListGroup } from 'react-bootstrap';
import { Context } from '..';

const Search = observer( () => {
    const {producttt} = useContext(Context)
    return (

<Form className="d-flex mb-3 mt-4">
        <FormControl
          type="search"
          placeholder="Поиск"
          className="me-2 "
          aria-label="Search"
        />
        <Button variant="outline-success">Поиск</Button>
</Form>

);
});

export default Search;
