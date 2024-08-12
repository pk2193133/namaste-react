import CardComponent from "./CardComponent";

const ModifiedCardComponent=(CardComponent)=>{
    return ({data})=>{

        return (
            <div>
            <div className="modifiedCardComponent">Top</div>
            <CardComponent data={data}/>
            </div>
        )
    }
    
}

export default ModifiedCardComponent;