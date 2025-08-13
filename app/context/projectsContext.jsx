"use client"
import { createContext, useContext, useState } from "react";
import { TagFilters } from "@/app/utils/data";

const ProjectsContext = createContext();

export function ProjectsProvider({ children }) {
    const [tag, setTag] = useState(TagFilters[0]);
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <ProjectsContext.Provider value={{
            tag, setTag,
            searchTerm, setSearchTerm
        }}>
            {children}
        </ProjectsContext.Provider>
    );
}

export function useProjects() {
    return useContext(ProjectsContext);
}