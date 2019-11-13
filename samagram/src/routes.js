import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Home from './Screens/Home';
import SingUp from './Screens/SingUp';


const Routes = createAppContainer (
    createSwitchNavigator({
        Home,
        SingUp,
    },
    {
        initialRouteName:'Home',
        backBehavior:'order'
    }),
);

export default Routes;