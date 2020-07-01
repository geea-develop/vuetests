import React from "react";
import { useParams } from "react-router-dom";

function Homework() {
	const {hwid} = useParams();
	return (<div className="alert alert-info" >currently viewing homework id: {hwid}</div>);
}

export default Homework;