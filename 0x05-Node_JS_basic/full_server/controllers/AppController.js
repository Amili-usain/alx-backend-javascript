export default class AppController {
  /**
   * Returns the homepage message.
   * @param {import('express').Request} request - The Express request object.
   * @param {import('express').Response} response - The Express response object.
   */
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}
