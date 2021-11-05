import request from "../untils/request.js";

export const login = data => {
	return request({
		url: "/user/wxLogin",
		method: "POST",
		data: data
	})
};

export const focus = data => {
	return request({
		url: "/user/focus",
		method: "POST",
		data: data,
	})
};

export const userInfo = data => {
	return request({
		url: "/user/my",
		method: "GET",
		data: data
	})
};

export const followList = data => {
	return request({
		url: "/user/followList",
		method: "GET",
		data: data
	})
};

export const othersInfo = data => {
	return request({
		url: "/user/visit/userInfo",
		method: "GET",
		data: data
	})
};

export const recommend = data => {
	return request({
		url: "/user/recommend",
		method: "GET",
		data: data
	})
};

export const share = data => {
	return request({
		url: "/topic/share",
		method: "GET",
		data: data,
	})
};