import request from "@/utils/request";

export const getCommentList = data => {
	return request({
		url: "/comment/list",
		method: "GET",
		data
	})
};

export const addComment = data => {
	return request({
		url: "/comment/add",
		method: "POST",
		data
	})
};

export const commentLike = data => {
	return request({
		url: "/comment/like",
		method: "GET",
		data,
		loading: false
	})
};

export const replyList = data => {
	return request({
		url: "/comment/replyList",
		method: "GET",
		data
	})
};

export const replyAdd = data => {
	return request({
		url: "/comment/replyAdd",
		method: "POST",
		data
	})
};

export const replyLike = data => {
	return request({
		url: "/comment/replyLike",
		method: "GET",
		data,
		loading: false
	})
};

export const delComment = data => {
	return request({
		url: "/comment/del",
		method: "GET",
		data
	})
};
