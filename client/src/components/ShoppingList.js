import React, {Component} from 'react';
import { Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { getItems, deleteItem} from '../actions/itemActions';
import { PropTypes } from 'prop-types';

class ShoppingList extends React.Component {

    componentDidMount(){
        this.props.getItems();
    }

    onAddItem = () => {
        const name = prompt('Enter Item');
        if(name){
            this.setState({
                items : [...this.state.items, {id : uuid(), name: name}]
            })
        }
    }

    onDeleteItem = (id) => {
        this.props.deleteItem(id);
    }

    render(){
        const { items } = this.props.item;

        return(
            <Container>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map( ({_id, name}) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem key={_id}>
                                <Button className="remove-btn" color="danger" size="sm" onClick={() => this.onDeleteItem(_id)}>&times;</Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}

ShoppingList.propTypes = {
    getItems : PropTypes.func.isRequired,
    item : PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item : state.item
})

export default connect(mapStateToProps, {getItems, deleteItem})(ShoppingList);