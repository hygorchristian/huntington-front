import React, { useState } from 'react';
import { withSnackbar } from 'notistack';

import { useDispatch, useSelector } from 'react-redux';
import { NotistackActions } from '~/store/ducks/notistack';

function Notifier({ enqueueSnackbar }) {
  const [displayed, setDisplayed] = useState([]);

  const dispatch = useDispatch();
  const notifications = useSelector((state) => state.notistack.notifications);

  notifications.forEach((notification) => {
    setTimeout(() => {
      if (displayed.indexOf(notification.key) > -1) return;

      enqueueSnackbar(notification.message, notification.options);

      setDisplayed([...displayed, notification.key]);

      dispatch(NotistackActions.removeSnackbar(notification.key));
    }, 1);
  });

  return null;
}

export default withSnackbar(Notifier);
