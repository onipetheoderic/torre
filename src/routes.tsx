import {
  Switch,
  Route,
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Home from "./pages/Home/Home";
import Engineers from "./pages/Engineers";

function Routing() {
  return (
    <Router>
      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/engineers" component={Engineers} />
        </Switch>
      </AnimatePresence>
    </Router>
  );
}
export default Routing;
