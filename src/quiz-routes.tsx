import { Route, BrowserRouter } from "react-router-dom";
import Quiz from "./quiz-page";

function QuizRoutes(){
    return(
        <BrowserRouter>
            <Route element={<Quiz/>} path="/quiz" />
        </BrowserRouter>
    )
}

export default QuizRoutes;