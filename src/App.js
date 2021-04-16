import React from "react";
import {ModalSwitch} from './components/ModalSwitch'
import { BrowserRouter as Router} from "react-router-dom";
export default function ModalGalleryExample() {
  return (
    <Router>
      <ModalSwitch />
    </Router>
  );
}