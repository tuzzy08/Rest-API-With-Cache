const mongoose = require('mongoose');
/** Utility class to manage 'Post' resource */
class Post {
  /**
   * @constructor - sets the Post property to an instance of the model; Post.
   */
  constructor() {
    this.Post = mongoose.model('Post');
  }

  /**
   * Gets a post by id.
   * @param {string} postId - the ID of the requested post.
   */
  static async getPost(postId) {

  }

  /**
   * Gets and returns all posts.
   */
  static async getPosts() {

  }

  /**
   * Creates a post resource
   * @param {object} options - represents the fields of the post to be created
   */
  static async createPost(options = {}) {

  }

  /**
   * Edits a post by id
   * @param {string} postId - represents the id of the post to be edited
   */
  static async editPost(postId) {

  }
}

module.exports = Post;