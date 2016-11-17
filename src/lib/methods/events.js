import { find } from 'lodash';
import composedFetch from '../composedFetch';

export const droppedOffBySender = id => composedFetch(id)
  .then(data => console.log(find(data.events, { key: `received.domestic-corner` })))
  .catch(e => console.log(e));

export const availableForPickup = id => {
  composedFetch(id)
  .then(data => find(
    data.processOverview.processSteps,
    { knownProcessStep: `AVAILABLE_IN_POST_POINT_INTERNATIONAL` }
  ))
  .then(obj => (obj.status === `active` ? true : false))
  .catch(e => console.log(e));
};