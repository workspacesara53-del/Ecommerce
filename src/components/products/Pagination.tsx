import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

export const Pagination = () => {
    return (
        <div className="flex items-center justify-center gap-2 mt-8">
            <Button variant="outline" size="icon" className="h-8 w-8 rounded-full" disabled>
                <ChevronsLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8 rounded-full" disabled>
                <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button variant="default" size="sm" className="h-8 w-8 rounded-full bg-primary text-primary-foreground hover:bg-primary/90">1</Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 rounded-full">2</Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 rounded-full">3</Button>
            <span className="text-muted-foreground text-sm">...</span>
            <Button variant="ghost" size="sm" className="h-8 w-8 rounded-full">12</Button>

            <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                <ChevronRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                <ChevronsRight className="h-4 w-4" />
            </Button>
        </div>
    );
};
