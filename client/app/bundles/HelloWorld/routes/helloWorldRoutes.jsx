import { Route } from 'react-router';
import App from '../containers/App';
import HelloWorld from '../containers/HelloWorld';
import OtherPage from '../containers/OtherPage';

export default () => (

  <Route component={App}>
    <Route path='/' component={HelloWorld}>
    </Route>
    <Route path='/other_page' component={OtherPage}>
    </Route>
  </Route>
);