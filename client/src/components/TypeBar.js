import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Context } from '..';

const TypeBar = observer( () => {
    const {producttt} = useContext(Context)
    return (
        
        <ListGroup className={"mt-4"}>
            {producttt.types.map(type =>
            <ListGroup.Item 
                style={{cursor:'pointer'}}
                active={type.id === producttt.selectedType.id}
                onClick={() => producttt.setSelectedType(type)}
                key={type.id}
            >
                {type.name}
            </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default TypeBar;