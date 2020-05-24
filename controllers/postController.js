const postManager = require('../utils/postManager');

exports.getPost = async (request, response, next) => {
	const {
		postId
	} = request.params.postId;

	if (!postId) {
		return next(error);
	}

	try {
		const post = await postManager.getPost(postId, next);
		response.status(200).json(post);
	} catch (err) {
		next(error);
	}
};

exports.getAllPosts = async (request, response, next) => {
	try {
		const posts = await postManager.getAllPosts(next);
		response.status(200).json(posts);
	} catch (error) {
		next(error);
	}
};

exports.createPost = async (request, response, next) => {
	if (!request.body) {
		return next(error);
	}
	try {
		const post = await postManager.createPost(request.body, next);
		response.status(200).json(post);
	} catch (err) {
		next(error);
	}
};

exports.editPost = async (request, response, next) => {
	try {
		const post = await postManager.editPost(request.params.postId, request.body, next);
		response.status(200).json(post);
	} catch (error) {
		next(error);
	}
};

exports.deletePost = async (request, response, next) => {
	try {
		const result = await postManager.deletePost(request.params.postId);

		return response.status(200).json(result);
	} catch (error) {
		next(error);
	}
};