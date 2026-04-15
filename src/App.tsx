import { Router as WouterRouter } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import AppRouter from "@/pages/AppRouter";

function App() {
    return (
        <TooltipProvider>
            <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
                <AppRouter />
            </WouterRouter>
            <Toaster />
        </TooltipProvider>
    );
}

export default App;
