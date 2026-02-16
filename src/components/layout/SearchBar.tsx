"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface SearchBarProps {
    className?: string;
}

export const SearchBar = ({ className }: SearchBarProps) => {
    const [query, setQuery] = useState("");
    const router = useRouter();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            router.push(`/search?q=${encodeURIComponent(query.trim())}`);
        }
    };

    return (
        <form onSubmit={handleSearch} className={className}>
            <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for products..."
                className="w-full pl-4 pr-10 rounded-full border-2 border-primary/20 focus-visible:border-primary transition-colors"
            />
            <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 bottom-1 rounded-full h-auto w-8 shadow-none bg-primary/90 hover:bg-primary text-white"
            >
                <Search className="h-4 w-4" />
            </Button>
        </form>
    );
};
