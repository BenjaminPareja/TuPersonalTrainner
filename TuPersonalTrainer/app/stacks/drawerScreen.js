import {DrawerNavigator} from 'react-navigation';

import perfil from '../components/perfil';
import nutricion from '../components/nutricion';
import entrenamiento from '../components/entrenamiento';
import share from '../components/share';


const DrawerScreen = DrawerNavigator({
    Perfil: {screen: perfil},
    'Plan Nutricional': {screen: nutricion},
    Screen3: onPress={this._shareText}>,
    share: {screen:share}
}, {
    headerMode: 'none',
})

_shareMessage() {
    Share.share({
      message: 'React Native | A framework for building native apps using React'
    })
    .then(this._showResult)
    .catch((error) => this.setState({result: 'error: ' + error.message}));
  }
export default DrawerScreen;