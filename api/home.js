import request from "@/utils/request";

export const getHomeList = data => {
	return request({
		url: "/home/index",
		method: "GET",
		data: data
	})
};


export const myFeedList = data => {
	return request({
		url: "/user/myFeedList",
		method: "GET",
		data: data
	})
};

export const getMyLike = data => {
	return request({
		url: "/user/myLike",
		method: "GET",
		data: data
	})
};

export const likeList = data => {
	return request({
		url: "/user/visit/likeList",
		method: "GET",
		data: data
	})
};
export const getHeLike = data => {
	return request({
		url: "/user/visit/feedList",
		method: "GET",
		data: data
	})
};


