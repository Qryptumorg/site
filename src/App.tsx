import { Router as WouterRouter } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import AppRouter from "@/pages/AppRouter";

function App() {
    return (
        <TooltipProvider>
            <WouterRouter hook={useHashLocation}>
                <AppRouter />
            </WouterRouter>
            <Toaster />
        </TooltipProvider>
    );
}

export default App;
