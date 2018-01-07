import Home from '../components/Home';
import CollectionContainer from '../components/CollectionContainer';
import SearchContainer from '../components/SearchContainer';
import NotFound from '../components/NotFound';

export const Routes = [{
  path: '/',
  exact: true,
  sidebar: 'Home',
  main: Home
},
{
  path: '/Search',
  sidebar: 'Search',
  main: SearchContainer
},
{
  path: '/Collection',
  sidebar: 'Collection',
  main: CollectionContainer
},
{
  main: NotFound
}];