const postManager = require('../utils/postManager');

exports.getPost = async (request, response, next) => {
	if (!request.body.postId) {
		return next(error);
	}
	try {
		const post = await postManager.getPost(request.body.postId, next);
		res.status(200).json(post);
	} catch (err) {
		next(error);
	}
};