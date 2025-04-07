import { FunctionComponent } from "react";
import { Category } from "../types";

export const NavItem: FunctionComponent<{
  value: Category | "all";
  handlerFilterCategory: Function;
  active: string;
}> = ({ value, handlerFilterCategory, active }) => {
  let className = "font-bold cursor-pointer hover:text-ming";
  if (active === value) className += " text-ming ";
  return (
    <li onClick={() => handlerFilterCategory(value)} className={className}>
      {value}
    </li>
  );
};

const ProjectsNavbar: FunctionComponent<{
  handlerFilterCategory: Function;
  active: string;
}> = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem value="all" {...props} />
      <NavItem value="next.js" {...props} />
      <NavItem value="javaScript" {...props} />
    </div>
  );
};

export default ProjectsNavbar;
