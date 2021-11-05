import request from "@/utils/request";

export const getFeedDetail = data => {
	return request({
		url: "/feed/detail",
		method: "GET",
		data: data
	})
};

export const like = data => {
	return request({
		url: "/topic/like",
		method: "GET",
		data: data,
		loading: false
	})
};

export const addFeed = data => {
	return request({
		url: "/feed/add",
		method: "POST",
		data: data
	})
};

export const delFeed = data => {
	return request({
		url: "/feed/del",
		method: "GET",
		data: data
	})
};

export const getScienceDetail = data => {
	return request({
		url: "/science/detail",
		method: "GET",
		data: data
	})
};










