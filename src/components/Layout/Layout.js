import React from 'react';

import Aux from '../../hoc/Aux';
import './Layout.css'

const layout = (props) => (
    <Aux>
        <div>
            <div>ToolBar, NavBar</div>
            <main>
                {props.children}
            </main>
        </div>
    </Aux>
)
export default layout;