import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, useRouteMatch } from 'react-router-dom';
import { fetchUserProfile, fetchCategories } from '../store/thunks';
import { cleanCategories } from '../store/actions/content';
import { WelcomeBox } from '../components';
import { Dashboard, Topbar, PrivateRoute, Categories } from '../containers';

import PlaylistsRoute from './PlaylistsRoute';
import TracksRoute from './TracksRoute';

const DashboardRoute = () => {
  const { user, content } = useSelector((state) => state);
  const { categories } = content;
  const { path, url } = useRouteMatch();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserProfile());

  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCategories());

    return () => {
      dispatch(cleanCategories());
    };

  }, [dispatch]);

  const ExactDashboardChildren = () => (
    <>
      <WelcomeBox name={user.display_name} />

      <Categories
        isLoading={categories.length === 0}
        categories={categories}
        url={url}
      />
    </>
  );

  return (

    <Dashboard>
      <Topbar />
      <Switch>

        <PrivateRoute exact path={path} component={ExactDashboardChildren} />

        <PrivateRoute exact path={`${path}/:categoryId`}>
          <PlaylistsRoute path={path} />
        </PrivateRoute>

        <PrivateRoute exact path={`${path}/:categoryId/:playlistId`}>
          <TracksRoute path={path} />
        </PrivateRoute>

      </Switch>
    </Dashboard>
  );
};

export default DashboardRoute;