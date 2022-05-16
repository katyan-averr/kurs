import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Card, Row } from 'react-bootstrap';
import { Context } from '..';

const GenerBar = observer( () => {
    const {producttt} = useContext(Context)
    return (
        
        <Row className={"d-flex"}>
            {producttt.genres.map(genre =>
            <Card
                key={genre.id}
                style={{cursor:'pointer', width: '10rem', marginRight:'10px' }}
                className="p-3 mb-2"
                onClick={() => producttt.setSelectedGener(genre)}
                border={genre.id === producttt.selectedGener.id ? 'danger' : 'light'}
            >
                {genre.name}
            </Card>
            )}
        </Row>
    );
});

export default GenerBar;