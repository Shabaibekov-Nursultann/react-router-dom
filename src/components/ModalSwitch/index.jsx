import React from 'react'
import {Switch, Route, useLocation,} from "react-router-dom";
import {Modal} from '../Modal'
import {Home} from '../Home'
import {Gallery}from '../Gallery'
import {ImageView} from '../ImageView'
function ModalSwitch() {
  let location = useLocation();
  let background = location.state && location.state.background;
  return (
    <div>
      <Switch location={background || location}>
        <Route exact path="/" children={<Home />} />
        <Route path="/gallery" children={<Gallery />} />
        <Route path="/img/:id" children={<ImageView />} />
      </Switch>
      {/* Show the modal when a background page is set */}
      {background && <Route path="/img/:id" children={<Modal />} />}
    </div>
  );
}
export {ModalSwitch}