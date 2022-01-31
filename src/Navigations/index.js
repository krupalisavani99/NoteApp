import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import AddNotes from '../Screens/AddNotes'

import ViewNotes from '../Screens/ViewNotes'

const StackNavigator = createStackNavigator({
    ViewNotes: {
        screen: ViewNotes
    },
    AddNotes:{
        screen:AddNotes
    }
},
{
    initialRouteName:'ViewNotes',
    headerMode:'none',
    mode:'modal'
}
)

export default createAppContainer(StackNavigator)