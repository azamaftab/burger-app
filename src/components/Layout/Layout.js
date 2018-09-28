import React from 'react';

import Utility from '../../hoc/utility';
import './Layout.css'

const layout = (props) => (
    <Utility>
        <div>
            <div>ToolBar, NavBar</div>
            <main>
                {props.children}
            </main>
        </div>
    </Utility>
)
export default layout;