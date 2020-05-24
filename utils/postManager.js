const mongoose = require('mongoose');
/** Utility class to manage 'Post' resource */
class PostManager {
  static Post = mongoose.model('Post');

  /**
   * Gets a post by id.
   * @param {string} postId - the ID of the requested post.
   */
  static async getPost(postId, next) {
    try {
      // Check if post id is specified and throw an error if not
      if (!postId || typeof postId !== 'string') throw new Error('Invalid post Id');
      const post = await this.Post.findById(postId);

      if (post) {
        return post;
      }
    } catch (error) {
      next(error);
    }
  }

  /**
   * Gets and returns all posts.
   */
  static async getPosts(next) {
    try {
      const posts = await this.Post.find();
      if (posts) return posts;

      return 'No Posts found';
    } catch (error) {
      next(error);
    }
  }

  /**
   * Creates a post resource
   * @param {object} options - represents the fields of the post to be created
   */
  static async createPost(options, next) {
    try {
      // Check if argument is an object
      if (!options || typeof options !== 'object') {
        next(new Error('Invalid options'));
      }

      const {
        title,
        body,
        author
      } = options;

      const post = new this.Post();
      post.title = title;
      post.body = body;
      post.author = author;
      const result = await post.save();

      return result;
    } catch (error) {
      next(error);
    }
  }

  /**
   * Edits a post by id
   * @param {string} postId - represents the id of the post to be edited
   */
  static async editPost(postId) {

  }
}

module.exports = PostManager;