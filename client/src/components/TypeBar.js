import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Context } from '..';

const TypeBar = observer( () => {
    const {productt} = useContext(Context)
    return (
        
        <ListGroup className={"mt-4"}>
            {productt.types.map(type =>
            <ListGroup.Item 
                style={{cursor:'pointer'}}
                active={type.id === productt.selectedType.id}
                onClick={() => productt.setSelectedType(type)}
                key={type.id}
            >
                {type.name}
            </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default TypeBar;