import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger'
import Utility from '../../hoc/utility'

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            cheese: 0,
            salad: 0,
            meat: 0,
            bacon: 0
        }
    }
    render() {
        return (
            <Utility>
                <div>
                    <Burger ingredient={this.state.ingredients}></Burger>
                </div>
                <div>
                    Burger Control
                </div>
            </Utility>
        );
    }
}
export default BurgerBuilder;
