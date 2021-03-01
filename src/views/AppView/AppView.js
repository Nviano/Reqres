import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { HOME, USERS_LIST, USER, CREATE_USER } from '../../config/router/paths';
import useStyles from "./AppViewStyles";
import UserListView from '../UserListView/UserListView';
import UserFormView from '../UserFormView/UserFormView';
import UserDetailView from '../UserDetailView/UserDetailView';
import HomeView from '../HomeView/HomeView';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      refetchOnWindowFocus: false,
      notifyOnChangePropsExclusions: ['isStale']
    }
  }
});

function AppView() {

  const classes = useStyles();
  return (
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      <Container maxWidth="xl" className={classes.appContent}>
        <Router>
          <Switch>
            <Route path={USERS_LIST} component={UserListView} />
            <Route path={USER} component={UserDetailView} />
            <Route path={CREATE_USER} component={UserFormView} />
            <Route exact path={HOME} component={HomeView} />
          </Switch>
        </Router>
      </Container>
    </QueryClientProvider>
  );
}

export default AppView;
