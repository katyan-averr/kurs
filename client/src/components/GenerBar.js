import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Card, Row } from 'react-bootstrap';
import { Context } from '..';

const GenerBar = observer( () => {
    const {productt} = useContext(Context)
    return (
        
        <Row className={"d-flex"}>
            {productt.genres.map(genre =>
            <Card
                key={genre.id}
                style={{cursor:'pointer', width: '10rem', marginRight:'10px' }}
                className="p-3 mb-2"
                onClick={() => productt.setSelectedGener(genre)}
                border={genre.id === productt.selectedGener.id ? 'danger' : 'light'}
            >
                {genre.name}
            </Card>
            )}
        </Row>
    );
});

export default GenerBar;