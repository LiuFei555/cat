import request from "@/utils/request";

export const getTips = data => {
	return request({
		url: "/message/remind",
		method: "GET",
		data: data
	})
};


export const tipsList = data => {
	return request({
		url: "/message/list",
		method: "GET",
		data: data
	})
};

