import { Link, Outlet } from "react-router-dom";

function Tech() {
  return (
    <div className="container my-5">
      <h1 className="display-4 text-center mb-4">Technologies</h1>
      <p className="text-center lead mb-1">
        Discover the latest and most popular technologies in web development.
        Each technology offers unique features and benefits to help you build
        dynamic and interactive applications. Click on a technology to learn
        more about its capabilities and how it can enhance your projects.
      </p>
    <div className="py-2 text-center"></div>
      <Outlet />
    </div>
    
  );
}

export default Tech;
