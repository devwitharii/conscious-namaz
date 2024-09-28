import Style from "./AboutProgram.module.css";
const ProgramContainer = ({children}) => {
    return(
        <div className={`py-10 ${Style.root}`}>{children}</div>
    )
}
export default ProgramContainer