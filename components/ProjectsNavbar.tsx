import { FunctionComponent } from "react";
import { Category } from "../types";

export const NavItem:FunctionComponent<{
    value: Category|'all',
    handlerFilterCategory:Function
}> = ({
    value,
    handlerFilterCategory,
}) => {
    return (
        <li className="capitalize cursor-pointer hover:text-ming" 
            onClick={() => handlerFilterCategory(value)}
        >
            {value}
        </li>
    )
};

const ProjectsNavbar:FunctionComponent<{handlerFilterCategory:Function}> = (props) => {
    return (
        <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
            <NavItem value='all' {...props}/>
            <NavItem value='react' {...props}/>
            <NavItem value='angular' {...props}/>
            <NavItem value='vanilla js' {...props}/>
        </div>
    )
};

export default ProjectsNavbar;
