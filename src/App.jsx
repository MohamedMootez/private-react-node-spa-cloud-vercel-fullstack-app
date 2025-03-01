import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import { Suspense } from "react";

// Swiper styles
import "swiper/css";
// Bootstrap styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <Suspense
          fallback={
            <div className="fallback-loader">
              {/* <img src={Loader} width={200} height={200} alt="Loading" /> */}
            </div>
          }
        >
          <Router>
            <Routes>
              {routes.map((route) => {
                return (
                  <Route
                    key={route.id}
                    path={route.path}
                    element={route.page}
                  />
                );
              })}
            </Routes>
            {/* <Footer /> */}
          </Router>
        </Suspense>
      </div>
    </>
  );
}

export default App;
