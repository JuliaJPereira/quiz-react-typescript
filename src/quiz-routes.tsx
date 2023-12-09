import { QuizFinished } from "./quiz-finished";
import { QuizHTML } from "./quiz-html";
import Quiz from "./quiz-page";
import SelectQuiz from "./quiz-select-page";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Quiz />,
  },
  {
    path: "/selecione-quiz",
    element: <SelectQuiz />,
  },
  {
    path: "/quiz-HTML",
    element: <QuizHTML />,
  },
  {
    path: "/fim-quiz",
    element: <QuizFinished />
  }
]);

function QuizRoutes() {
  return <RouterProvider router={router} />;
}

export default QuizRoutes;