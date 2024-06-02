import { useEffect, useState } from "react";


const useUpdateState = (req) => {
    const [reqData, setReqData] = useState();
    useEffect(() => {
        setReqData(req);
    },[reqData,req]);

    return [reqData,setReqData];
};

export default useUpdateState;