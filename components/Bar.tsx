import { FunctionComponent } from "react"
import { ISkill } from "../type"

const Bar:FunctionComponent<{
    data: ISkill
}> = ({data:{Icon, level, name}}) => {
    return (
        <div className="my-2 rounded-full bg-white2">
            <div className="flex items-center px-4 py-1 text-white rounded-full bg-ming"
                style={{width: level}}
            >
                <Icon className="mr-3" />
                {name}
            </div>
        </div>
    )
}

export default Bar
