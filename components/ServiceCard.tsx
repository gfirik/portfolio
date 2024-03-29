import { FunctionComponent } from "react"
import { IService } from "../types"

const ServiceCard:FunctionComponent<{service:IService}> = ({
    service:{Icon, about, title},
}) => {
    const createMarkup = () =>{
        return {
            __html: about,
        }
    }
    return (
        <div className="flex items-center p-2 space-x-4 dark:text-white ">
            <Icon className="w-24 h-24 text-ming" />
            <div>
                <h4 className="text-xl font-bold text-ming">{title}</h4>
                <p dangerouslySetInnerHTML={createMarkup()}/>
            </div>
        </div>
    )
}

export default ServiceCard;
