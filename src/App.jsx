import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import LandingPage from "./Pages/LandingPage";
import Onboarding from "./Pages/Onboarding";
import JobListing from "./Pages/JobListing";
import JobPage from "./Pages/JobPage";
import { PostJob } from "./Pages/PostJob";
import SavedJobs from "./Pages/SavedJobs";
import MyJobs from "./Pages/MyJobs";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/onboarding",
        element: <Onboarding />,
      },
      {
        path: "/jobs",
        element: <JobListing />,
      },
      {
        path: "/job/:id",
        element: <JobPage />,
      },
      {
        path: "/post-job",
        element: <PostJob />,
      },
      {
        path: "/saved-job",
        element: <SavedJobs />,
      },
      {
        path: "/my-jobs",
        element: <MyJobs />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
