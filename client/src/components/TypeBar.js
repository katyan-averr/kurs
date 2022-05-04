import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Context } from '..';

const TypeBar = observer( () => {
    const {product} = useContext(Context)
    return (
        
        <ListGroup>
            {product.types.map(type =>
            <ListGroup.Item 
                style={{cursor:'pointer'}}
                active={type.id === product.selectedType.id}
                onClick={() => product.setSelectedType(type)}
                key={type.id}
            >
                {type.name}
            </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default TypeBar;